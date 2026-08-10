-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- NumbersToExpressions.lua
--
-- This Script provides an Obfuscation Step, that converts Number Literals to expressions.
-- This step can now also convert numbers to different representations!
-- Supported representations: hex, binary, scientific, normal. Please note that binary is only supported in Lua 5.2 and above.

local unpack = unpack or table.unpack

local Step = require("prometheus.step")
local Ast = require("prometheus.ast")
local visitast = require("prometheus.visitast")
local util = require("prometheus.util")
local logger = require("logger")
local AstKind = Ast.AstKind

local NumbersToExpressions = Step:extend()
NumbersToExpressions.Description = "This Step Converts number Literals to Expressions"
NumbersToExpressions.Name = "Numbers To Expressions"

NumbersToExpressions.SettingsDescriptor = {
	Threshold = {
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},

	InternalThreshold = {
		type = "number",
		default = 0.2,
		min = 0,
		max = 0.8,
	},

	NumberRepresentationMutation = {
		type = "boolean",
		default = false,
		aliases = { "NumberRepresentationMutaton" },
	},

	AllowedNumberRepresentations = {
		type = "table",
		default = {"hex", "scientific", "normal"},
		values = {"hex", "binary", "scientific", "normal"},
	},
}

local function generateModuloExpression(n)
	local rhs = n + math.random(1, 2^24)
	local multiplier = math.random(1, 2^8)
	local lhs = n + (multiplier * rhs)
	return lhs, rhs
end

local function contains(table, value)
	for _, v in ipairs(table) do
		if v == value then
			return true
		end
	end
	return false
end

-- Detects negative zero (-0.0). Lua/IEEE754 treats -0.0 == 0.0 as true, so a
-- naive equality check cannot tell them apart; dividing by the value can,
-- since 1 / -0.0 is -inf while 1 / 0.0 is +inf.
local function isNegativeZero(val)
	return type(val) == "number" and val == 0 and 1 / val == -math.huge
end

function NumbersToExpressions:init(_)
	self.ExpressionGenerators = {
		function(val, depth) -- Addition
			local val2 = math.random(-2 ^ 20, 2 ^ 20)
			local diff = val - val2
			if tonumber(tostring(diff)) + tonumber(tostring(val2)) ~= val then
				return false
			end
			return Ast.AddExpression(
				self:CreateNumberExpression(val2, depth),
				self:CreateNumberExpression(diff, depth),
				false
			)
		end,

		function(val, depth) -- Subtraction
			local val2 = math.random(-2 ^ 20, 2 ^ 20)
			local diff = val + val2
			if tonumber(tostring(diff)) - tonumber(tostring(val2)) ~= val then
				return false
			end
			return Ast.SubExpression(
				self:CreateNumberExpression(diff, depth),
				self:CreateNumberExpression(val2, depth),
				false
			)
		end,

		function(val, depth) -- Modulo
			local lhs, rhs = generateModuloExpression(val)
			if tonumber(tostring(lhs)) % tonumber(tostring(rhs)) ~= val then
				return false
			end
			return Ast.ModExpression(
				self:CreateNumberExpression(lhs, depth),
				self:CreateNumberExpression(rhs, depth),
				false
			)
		end,
	}
end

function NumbersToExpressions:CreateNumberExpression(val, depth)
	-- Patch 13 (v1.3.2): non-finite values (inf / -inf / NaN) cannot survive any
	-- of the arithmetic decompositions below either, and folding them through
	-- the generators crashes with "attempt to perform arithmetic on a nil
	-- value" (finite AST constants can fold to non-finite values in the parser
	-- under Lua 5.3/Fengari, e.g. `"67" ^ 16777216`). Leaving the literal
	-- untouched is the only safe behavior â it round-trips identically.
	if val ~= val or val == math.huge or val == -math.huge then
		return Ast.NumberExpression(val)
	end
	-- Negative zero cannot survive any of the arithmetic decompositions below:
	-- addition/subtraction generators rely on a + (-a) or (a - a), which IEEE754
	-- always rounds to +0.0 regardless of the target sign, and the modulo
	-- generator has the same problem. Leaving the literal untouched is the only
	-- way to guarantee the sign bit survives obfuscation.
	if isNegativeZero(val) then
		return Ast.NumberExpression(val)
	end

	if depth > 0 and math.random() >= self.InternalThreshold or depth > 15 then
		local format = self.AllowedNumberRepresentations[math.random(1, #self.AllowedNumberRepresentations)]
		if not self.NumberRepresentationMutation then
			return Ast.NumberExpression(val)
		end

		if format == "hex" then
			if val ~= math.floor(val) or val < 0 then
				return Ast.NumberExpression(val)
			end
			-- Lua 5.3+ (incl. Fengari) requires an exact integer representation for %X.
			-- Very large integer-valued floats (beyond 2^63) can't be represented as
			-- a Lua integer, so fall back to a plain decimal literal in that case.
			--
			-- There is a second, more subtle hazard that is specific to Fengari
			-- (and was previously undetected): Fengari's own Lua integer type is
			-- only 32 bits wide, not the 64 bits real Lua 5.3/5.4 use (this is a
			-- deliberate, documented upstream Fengari limitation, not something
			-- this obfuscator can change). When a *decimal* integer literal
			-- overflows that 32-bit range, Fengari correctly falls back to
			-- parsing it as a float (matching real Lua's overflow rule), so the
			-- value survives intact. But Fengari's *hexadecimal* literal parser
			-- does not have that fallback: it silently wraps the value modulo
			-- 2^32 using JavaScript's 32-bit "|0" operator instead of erroring
			-- or promoting to float. A hex literal like 0x100049DA2 (which is
			-- well within a 64-bit/double-precision integer and prints fine
			-- under real Lua 5.1) silently becomes a completely different,
			-- wrong number under Fengari with no error raised at all - and
			-- Vmify's generated VM interpreter routinely produces constants in
			-- this range for its bytecode encoding, so this reliably corrupts
			-- double-Vmify ("Strong" preset) output the moment
			-- NumberRepresentationMutation picks "hex" for one of them.
			-- Restrict "hex" to values that fit in a signed 32-bit integer so
			-- the literal round-trips identically on both real Lua and
			-- Fengari; anything larger falls back to a plain (float-safe)
			-- decimal literal instead.
			if val > 0x7FFFFFFF then
				return Ast.NumberExpression(val)
			end
			local intVal = math.tointeger and math.tointeger(val) or val
			if not intVal then
				return Ast.NumberExpression(val)
			end
			local ok, hexStr = pcall(string.format, "0x%X", intVal)
			if not ok then
				return Ast.NumberExpression(val)
			end
			local result = ""
			for i = 1, #hexStr do
				local c = hexStr:sub(i, i)
				if math.random() > 0.5 then
					result = result .. c:upper()
				else
					result = result .. c:lower()
				end
			end
			return Ast.NumberExpression(result)
		end

		if format == "binary" then
			if val ~= math.floor(val) or val < 0 then
				return Ast.NumberExpression(val)
			end
			local binary = ""
			local n = val
			if n == 0 then
				binary = "0"
			else
				while n > 0 do
					binary = (n % 2) .. binary
					n = math.floor(n / 2)
				end
			end
			return Ast.NumberExpression("0b" .. binary)
		end

		if format == "scientific" then
			if val == 0 then
				return Ast.NumberExpression(val)
			end

			-- Scientific notation (e.g. "1e3") is *always* a float literal in
			-- Lua grammar - Lua 5.1 and 5.3/Fengari agree on that syntax rule.
			-- Under Lua 5.1 that distinction is invisible, since every number
			-- is the same uniform type. But Fengari (like real Lua 5.3+) has
			-- separate integer/float subtypes, and turning an originally
			-- integer-valued constant into a float literal here silently
			-- "infects" every place that value flows through afterwards:
			-- tostring()/print() start appending ".0", and - more importantly
			-- - string concatenation changes its actual output text (e.g.
			-- `1 .. "x"` is "1x" but `1.0 .. "x"` is "1.0x"). That is an
			-- observable behavior change, not just cosmetic, so exact-integer
			-- values must not be rewritten as scientific notation. This
			-- mirrors the guard the "hex" and "binary" branches above already
			-- have for the same reason.
			if val == math.floor(val) then
				return Ast.NumberExpression(val)
			end

			local exp = math.floor(math.log10(math.abs(val)))
			local mantissa = val / (10 ^ exp)
			return Ast.NumberExpression(string.format("%.15ge%d", mantissa, exp))
		end

		if format == "normal" then
			return Ast.NumberExpression(val)
		end
	end

	local generators = util.shuffle({ unpack(self.ExpressionGenerators) })
	for _, generator in ipairs(generators) do
		local node = generator(val, depth + 1)
		if node then
			return node
		end
	end
	return Ast.NumberExpression(val)
end

function NumbersToExpressions:apply(ast)
	if contains(self.AllowedNumberRepresentations, "binary") then
		logger:warn("Warning: Binary representation is only supported in Lua 5.2 and above!")
	end

	visitast(ast, nil, function(node, _)
		if node.kind == AstKind.NumberExpression then
			if math.random() <= self.Threshold then
				return self:CreateNumberExpression(node.value, 0)
			end
		end
	end)
end

return NumbersToExpressions
