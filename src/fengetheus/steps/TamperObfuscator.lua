--
-- TamperObfuscator.lua
--
-- This Step wraps leading AntiTamper / AntiSandbox blocks in a runtime loader.
-- It encodes source bytes with a position-dependent affine transform and
-- permutes their order per build instead of using the old repeating-key XOR.
-- This is source obfuscation, not cryptographic encryption.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local Parser = require("fengetheus.parser")
local Unparser = require("fengetheus.unparser")
local Enums = require("fengetheus.enums")
local RandomStrings = require("fengetheus.randomStrings")
local logger = require("logger")

local TamperObfuscator = Step:extend()
TamperObfuscator.Description = "Wraps integrity checks in a loader with position-dependent byte encoding and a per-build byte permutation."
TamperObfuscator.Name = "Tamper Obfuscator"

function TamperObfuscator:init() end

local function stringToBytes(str)
	local bytes = {}
	for i = 1, #str do
		bytes[i] = string.byte(str, i)
	end
	return bytes
end

local function gcd(a, b)
	while b ~= 0 do
		a, b = b, a % b
	end
	return a
end

local function chooseStride(length)
	if length <= 1 then
		return 1
	end
	for _ = 1, 64 do
		local stride = math.random(1, length - 1)
		if gcd(stride, length) == 1 then
			return stride
		end
	end
	for stride = 1, length - 1 do
		if gcd(stride, length) == 1 then
			return stride
		end
	end
	return 1
end

local function encodeBytes(bytes, multiplier, offset, step, stride)
	local encoded = {}
	local length = #bytes
	for index = 1, length do
		local shuffledIndex = ((index - 1) * stride) % length + 1
		local positionOffset = (offset + ((index - 1) * step) % 256) % 256
		encoded[shuffledIndex] = (bytes[index] * multiplier + positionOffset) % 256
	end
	return encoded
end

local function inverseModulo256(multiplier)
	for inverse = 1, 255 do
		if (multiplier * inverse) % 256 == 1 then
			return inverse
		end
	end
	error("TamperObfuscator: affine multiplier has no inverse", 0)
end

local function bytesToEscapedString(bytes)
	local parts = {}
	for i = 1, #bytes do
		parts[i] = string.format("\\%03d", bytes[i])
	end
	return '"' .. table.concat(parts) .. '"'
end

-- Generate a random Lua identifier (starts with a letter, guaranteed valid).
local function randIdent()
	local first = string.char(math.random(97, 122))
	local rest = RandomStrings.randomString(math.random(3, 9))
	rest = rest:gsub("^[0-9]+", "")
	if rest == "" then rest = "x" end
	return first .. rest
end

-- Build a polymorphic decoder as Lua 5.1 source. Encoded bytes are read in a
-- modular permutation, shifted by their position, then passed through the
-- inverse of a per-build odd multiplier modulo 256.
local function buildDecoder(escapedPayload, inverse, offset, step, stride)
	local v = {
		byte = randIdent(), char = randIdent(), payload = randIdent(),
		decoded = randIdent(), result = randIdent(), idx = randIdent(),
		encodedIdx = randIdent(), shift = randIdent(), loadstr = randIdent(), fn = randIdent(),
	}
	local lines = {}
	table.insert(lines, "local " .. v.byte .. "=string.byte")
	table.insert(lines, "local " .. v.char .. "=string.char")
	table.insert(lines, "local " .. v.payload .. "=" .. escapedPayload)
	table.insert(lines, "local " .. v.decoded .. "={}")
	table.insert(lines, "for " .. v.idx .. "=1,#" .. v.payload .. " do")
	table.insert(lines, "  local " .. v.encodedIdx .. "=((" .. v.idx .. "-1)*" .. stride .. ")%#" .. v.payload .. "+1")
	table.insert(lines, "  local " .. v.shift .. "=(" .. offset .. "+((" .. v.idx .. "-1)*" .. step .. ")%256)%256")
	table.insert(lines, "  " .. v.decoded .. "[" .. v.idx .. "]=" .. v.char .. "(((" .. v.byte .. "(" .. v.payload .. "," .. v.encodedIdx .. ")-" .. v.shift .. ")%256*" .. inverse .. ")%256)")
	table.insert(lines, "end")
	table.insert(lines, "local " .. v.result .. "=table.concat(" .. v.decoded .. ")")
	table.insert(lines, "local " .. v.loadstr .. "=loadstring or load")
	table.insert(lines, "if " .. v.loadstr .. " then")
	table.insert(lines, "  local " .. v.fn .. "=" .. v.loadstr .. "(" .. v.result .. ")")
	table.insert(lines, "  if " .. v.fn .. " then")
	table.insert(lines, "    if setfenv and getfenv then pcall(setfenv," .. v.fn .. ",getfenv(1)) end")
	table.insert(lines, "    " .. v.fn .. "()")
	table.insert(lines, "  end")
	table.insert(lines, "end")
	return table.concat(lines, "\n")
end

function TamperObfuscator:apply(ast)
	local body = ast.body
	if not body or not body.statements or #body.statements == 0 then
		return ast
	end

	-- Collect only leading self-contained tamper blocks. AntiTamper and
	-- AntiSandbox used to inject `do ... end`; their signed-zero fix changed
	-- them to IIFEs (`(function() ... end)()`), which need their own function
	-- constant table on stock Lua. A block may be moved into loadstring only
	-- when it has no references to locals in the main chunk: those references
	-- would otherwise become globals in the separately parsed payload.
	local function iifeFunctionBody(stat)
		if stat.kind == Ast.AstKind.FunctionCallStatement
			and stat.base ~= nil
			and stat.base.kind == Ast.AstKind.FunctionLiteralExpression
		then
			return stat.base.body
		end
		return nil
	end

	local function blockInnerScope(stat)
		local functionBody = iifeFunctionBody(stat)
		if functionBody ~= nil then
			return functionBody.scope
		end
		if stat.kind == Ast.AstKind.DoStatement and stat.body ~= nil then
			return stat.body.scope
		end
		return nil
	end

	local function isSelfContained(innerScope)
		for targetScope, ids in pairs(innerScope.variablesFromHigherScopes) do
			if not targetScope.isGlobal then
				for _, count in pairs(ids) do
					if count and count > 0 then
						return false
					end
				end
			end
		end
		return true
	end

	local tamperBlocks = {}
	while #body.statements > 0 do
		local stat = body.statements[1]
		local innerScope = blockInnerScope(stat)
		if innerScope == nil or not isSelfContained(innerScope) then
			break
		end
		tamperBlocks[#tamperBlocks + 1] = stat
		table.remove(body.statements, 1)
	end

	if #tamperBlocks == 0 then
		logger:warn("TamperObfuscator: no self-contained tamper block found at top of body — skipping")
		return ast
	end

	-- Serialize all tamper blocks back to source, concatenated together.
	-- Each block is its own `do ... end` so they execute in sequence.
	local blockSources = {}
	for _, block in ipairs(tamperBlocks) do
		local innerScope = blockInnerScope(block)
		local tempTop = Ast.TopNode(Ast.Block({block}, innerScope), ast.globalScope)
		local unparser = Unparser:new({
			LuaVersion = Enums.LuaVersion.Lua51,
			PrettyPrint = false,
		})
		local code = unparser:unparse(tempTop)
		-- Adjacent serialized IIFEs need a statement separator; otherwise the
		-- second opening parenthesis can be parsed as call syntax.
		if code:sub(1, 1) == "(" then
			code = ";" .. code
		end
		blockSources[#blockSources + 1] = code
	end

	local combinedSource = table.concat(blockSources, "\n")

	-- Encode bytes with a position-dependent affine map and a per-build
	-- permutation. Odd multipliers are invertible modulo 256.
	local sourceBytes = stringToBytes(combinedSource)
	local multiplier = math.random(1, 127) * 2 + 1
	local inverse = inverseModulo256(multiplier)
	local offset = math.random(0, 255)
	local step = math.random(1, 255)
	local stride = chooseStride(#sourceBytes)
	local encodedBytes = encodeBytes(sourceBytes, multiplier, offset, step, stride)
	local escapedPayload = bytesToEscapedString(encodedBytes)

	-- Build the polymorphic inverse decoder source.
	local decoderSource = buildDecoder(escapedPayload, inverse, offset, step, stride)

	-- Use an IIFE rather than `do ... end`: the decoder has +0 literals and
	-- must not share the main chunk's constant table with a user -0.0 literal.
	local wrappedSource = "(function()\n" .. decoderSource .. "\nend)()"

	-- Parse the wrapped decoder source into an AST.
	local parser = Parser:new({ LuaVersion = Enums.LuaVersion.Lua51 })
	local parsed = parser:parse(wrappedSource)
	local decoderStat = parsed.body.statements[1]
	local decoderBody = iifeFunctionBody(decoderStat)
	if decoderBody == nil then
		error("TamperObfuscator: decoder template parsed to an unexpected statement shape", 0)
	end

	-- Parent the decoder function's scope to the main body scope so global
	-- references resolve correctly.
	decoderBody.scope:setParent(body.scope)

	-- Insert the decoder IIFE at position 1, replacing all the
	-- original AntiTamper/AntiSandbox blocks that were removed above.
	table.insert(body.statements, 1, decoderStat)

	return ast
end

return TamperObfuscator
