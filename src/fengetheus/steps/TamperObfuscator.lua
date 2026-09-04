--
-- TamperObfuscator.lua
--
-- This Step makes the AntiTamper / AntiSandbox generated code illegible to
-- dump bots and deobfuscators.  It works by locating all leading `do ... end`
-- blocks that AntiTamper and/or AntiSandbox inserted at the top of the script
-- body, serializing them back to source, XOR-encrypting the source bytes
-- with a per-build key, and replacing ALL of them with a single compact
-- self-decoding loader that unpacks and executes the original code at runtime
-- via loadstring.
--
-- The result is that a static dumper sees only an opaque byte string and a
-- tiny decoder loop — it cannot pattern-match the anti-tamper checks,
-- recognize the sanity-loop structure, or extract the builtin snapshot list.
-- The decoder itself is polymorphic (random variable names) so it cannot
-- be fingerprinted either.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local Parser = require("fengetheus.parser")
local Unparser = require("fengetheus.unparser")
local Enums = require("fengetheus.enums")
local RandomStrings = require("fengetheus.randomStrings")
local logger = require("logger")

local TamperObfuscator = Step:extend()
TamperObfuscator.Description = "Wraps AntiTamper/AntiSandbox generated code in a self-decoding XOR loader so the integrity checks are illegible to static dumpers."
TamperObfuscator.Name = "Tamper Obfuscator"

TamperObfuscator.SettingsDescriptor = {
	XORLayers = {
		type = "number",
		default = 1,
		min = 1,
		max = 4,
		description = "Number of XOR key layers applied to the payload.",
	},
}

function TamperObfuscator:init()
	self.XORLayers = self.XORLayers or 1
end

-- Manual byte XOR (0-255) — no dependency on the `bit` library.
local function byteXor(a, b)
	local result = 0
	local pow = 1
	for _ = 1, 8 do
		if (a % 2) ~= (b % 2) then
			result = result + pow
		end
		a = math.floor(a / 2)
		b = math.floor(b / 2)
		pow = pow * 2
	end
	return result
end

local function stringToBytes(str)
	local bytes = {}
	for i = 1, #str do
		bytes[i] = string.byte(str, i)
	end
	return bytes
end

local function xorBytesSafe(bytes, key)
	local out = {}
	local klen = #key
	for i = 1, #bytes do
		out[i] = byteXor(bytes[i], key[((i - 1) % klen) + 1])
	end
	return out
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

-- Build a polymorphic decoder as Lua 5.1 source using direct string
-- concatenation (no fragile string.format with dozens of placeholders).
-- The decoder:
--   1. Defines a local XOR helper function.
--   2. Builds a key table from a numeric literal.
--   3. Decodes the escaped payload string byte-by-byte into a table.
--   4. Applies per-layer XOR passes.
--   5. Reassembles the plaintext string.
--   6. Calls loadstring/load and executes the result.
local function buildDecoder(escapedPayload, keyBytes, layers)
	local concat = table.concat

	-- Randomized variable names.
	local v = {
		byte = randIdent(),
		char = randIdent(),
		xorFn = randIdent(),
		xorA = randIdent(),
		xorB = randIdent(),
		xorR = randIdent(),
		xorP = randIdent(),
		key = randIdent(),
		payload = randIdent(),
		result = randIdent(),
		idx = randIdent(),
		loadstr = randIdent(),
		fn = randIdent(),
	}

	-- Key table literal: {72,15,201,...}
	local keyParts = {}
	for i = 1, #keyBytes do
		keyParts[i] = tostring(keyBytes[i])
	end
	local keyLiteral = "{" .. concat(keyParts, ",") .. "}"

	-- Build the decoder source line by line.
	local lines = {}

	-- Locals for string.byte / string.char
	table.insert(lines, "local " .. v.byte .. "=string.byte")
	table.insert(lines, "local " .. v.char .. "=string.char")

	-- XOR helper function
	table.insert(lines, "local function " .. v.xorFn .. "(" .. v.xorA .. "," .. v.xorB .. ")")
	table.insert(lines, "  local " .. v.xorR .. "=0")
	table.insert(lines, "  local " .. v.xorP .. "=1")
	table.insert(lines, "  while " .. v.xorA .. ">0 or " .. v.xorB .. ">0 do")
	table.insert(lines, "    if (" .. v.xorA .. "%2)~=(" .. v.xorB .. "%2) then " .. v.xorR .. "=" .. v.xorR .. "+" .. v.xorP .. " end")
	table.insert(lines, "    " .. v.xorA .. "=math.floor(" .. v.xorA .. "/2)")
	table.insert(lines, "    " .. v.xorB .. "=math.floor(" .. v.xorB .. "/2)")
	table.insert(lines, "    " .. v.xorP .. "=" .. v.xorP .. "*2")
	table.insert(lines, "  end")
	table.insert(lines, "  return " .. v.xorR)
	table.insert(lines, "end")

	-- Key table
	table.insert(lines, "local " .. v.key .. "=" .. keyLiteral)

	-- Payload byte table: decode the escaped string into a table of bytes
	table.insert(lines, "local " .. v.payload .. "={}")
	table.insert(lines, "for " .. v.idx .. "=1,#" .. escapedPayload .. " do")
	table.insert(lines, "  " .. v.payload .. "[" .. v.idx .. "]=" .. v.byte .. "(" .. escapedPayload .. "," .. v.idx .. ")")
	table.insert(lines, "end")

	-- Per-layer XOR passes. Each layer applies the key with a different
	-- starting offset, producing a multi-pass decoder.
	for layer = 1, layers do
		local offset = (layer - 1) % #keyBytes
		local layerIdx = randIdent()
		table.insert(lines, "for " .. layerIdx .. "=1,#" .. v.payload .. " do")
		table.insert(lines, "  " .. v.payload .. "[" .. layerIdx .. "]=" .. v.xorFn .. "(" .. v.payload .. "[" .. layerIdx .. "]," .. v.key .. "[((" .. layerIdx .. "-1+" .. offset .. ")%" .. #keyBytes .. ")+1])")
		table.insert(lines, "end")
	end

	-- Reassemble plaintext
	table.insert(lines, "local " .. v.result .. '=""')
	table.insert(lines, "for " .. v.idx .. "=1,#" .. v.payload .. " do")
	table.insert(lines, "  " .. v.result .. "=" .. v.result .. ".." .. v.char .. "(" .. v.payload .. "[" .. v.idx .. "])")
	table.insert(lines, "end")

	-- loadstring / load and execute
	table.insert(lines, "local " .. v.loadstr .. "=loadstring or load")
	table.insert(lines, "if " .. v.loadstr .. " then")
	table.insert(lines, "  local " .. v.fn .. "=" .. v.loadstr .. "(" .. v.result .. ")")
	table.insert(lines, "  if " .. v.fn .. " then")
	table.insert(lines, "    if setfenv and getfenv then pcall(setfenv," .. v.fn .. ",getfenv(1)) end")
	table.insert(lines, "    " .. v.fn .. "()")
	table.insert(lines, "  end")
	table.insert(lines, "end")

	return concat(lines, "\n")
end

function TamperObfuscator:apply(ast)
	local body = ast.body
	if not body or not body.statements or #body.statements == 0 then
		return ast
	end

	-- Collect ALL leading do...end blocks (AntiTamper and/or AntiSandbox
	-- both insert at position 1, so the last one to run is at position 1
	-- and earlier ones get pushed down).
	local tamperBlocks = {}
	while #body.statements > 0 and body.statements[1].kind == Ast.AstKind.DoStatement do
		tamperBlocks[#tamperBlocks + 1] = body.statements[1]
		table.remove(body.statements, 1)
	end

	if #tamperBlocks == 0 then
		logger:warn("TamperObfuscator: no do...end block found at top of body — skipping")
		return ast
	end

	-- Serialize all tamper blocks back to source, concatenated together.
	-- Each block is its own `do ... end` so they execute in sequence.
	local blockSources = {}
	for _, block in ipairs(tamperBlocks) do
		local tempTop = Ast.TopNode(Ast.Block({block}, block.body.scope), ast.globalScope)
		local unparser = Unparser:new({
			LuaVersion = Enums.LuaVersion.Lua51,
			PrettyPrint = false,
		})
		blockSources[#blockSources + 1] = unparser:unparse(tempTop)
	end

	local combinedSource = table.concat(blockSources, "\n")

	-- Generate a random XOR key.
	local keyLen = math.random(16, 48)
	local keyBytes = {}
	for i = 1, keyLen do
		keyBytes[i] = math.random(0, 255)
	end

	-- XOR-encrypt the source bytes.
	local sourceBytes = stringToBytes(combinedSource)
	local encryptedBytes = xorBytesSafe(sourceBytes, keyBytes)
	local escapedPayload = bytesToEscapedString(encryptedBytes)

	-- Build the polymorphic decoder source.
	local decoderSource = buildDecoder(escapedPayload, keyBytes, self.XORLayers)

	-- Wrap the decoder source in a `do ... end` block, exactly like
	-- AntiTamper does, so there is a single DoStatement with a single
	-- scope to parent. This avoids the "Could not resolve Scope" error
	-- that occurs when inserting many free-standing statements directly
	-- into the body.
	local wrappedSource = "do\n" .. decoderSource .. "\nend"

	-- Parse the wrapped decoder source into an AST.
	local parser = Parser:new({ LuaVersion = Enums.LuaVersion.Lua51 })
	local parsed = parser:parse(wrappedSource)
	local doStat = parsed.body.statements[1]

	-- Parent the decoder block's scope to the main body scope so all
	-- references resolve correctly.
	doStat.body.scope:setParent(body.scope)

	-- Insert the decoder do...end block at position 1, replacing all the
	-- original AntiTamper/AntiSandbox blocks that were removed above.
	table.insert(body.statements, 1, doStat)

	return ast
end

return TamperObfuscator
