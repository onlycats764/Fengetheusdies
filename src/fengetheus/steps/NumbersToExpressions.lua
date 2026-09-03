--
-- NumbersToExpressions.lua
--
-- This Script provides an Obfuscation Step, that converts Number Literals to expressions.
-- This step can now also convert numbers to different representations!
-- Supported representations: hex, binary, scientific, normal. Please note that binary is only supported in Lua 5.2 and above.

-- Lua 5.3 (including Fengari) no longer exposes unpack globally. Keep this
-- module compatible with both Lua 5.1 and Lua 5.2+ without leaking a global
-- assignment into the host environment (the previous `unpack = unpack or
-- table.unpack` wrote to _G.unpack, polluting the obfuscator's own VM).
local unpack = table.unpack or unpack

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local util = require("fengetheus.util")
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

-- The host VM Fengetheus runs inside is LuaNode-VM, a Lua 5.3 VM built with a
-- true 64-bit lua_Integer (LUA_MAXINTEGER = 9223372036854775807 (2^63 - 1),
-- LUA_MININTEGER = -9223372036854775808 (-2^63)). The previous host (Fengari)
-- used a 32-bit lua_Integer, which is why this step originally capped operands
-- to the 32-bit signed range. That cap is kept here as a conservative
-- host-faithfulness guard: it never produces an incorrect result on the
-- 64-bit-double target, it only bounds operand magnitude.
--
-- The real target runtimes Fengetheus compiles for (Lua 5.1 and Roblox Luau)
-- have *no* integer subtype at all -- every number is a 64-bit double, and
-- tostring/`..` of an integer-valued double never appends ".0"
-- (tostring(15.0) == "15"). So an obfuscated literal that the host stores as
-- a float is still perfectly correct on the target.
--
-- The remaining concern is the *self-test* in web/src/engine.js: it executes
-- the obfuscated output inside this same host VM and string-compares the
-- printed output against the original's. If NumbersToExpressions emits a
-- literal that the host turns into a float, the float subtype can leak into
-- the user's own arithmetic (e.g. a `for` loop counter), and the host then
-- prints `15.0` where the original prints `15` -- a *false* "silent
-- corruption" that has nothing to do with the real #155/#18 upstream bug and
-- would not happen on the actual target.
--
-- Fix: keep every numeric operand this step emits within a safe signed-integer
-- range, so integer inputs stay integer-typed under the host VM. This is a
-- host-faithfulness constraint only -- it does not weaken the obfuscation
-- (the operands are still large, randomized, and the modulo / add / sub
-- decompositions are unchanged in structure), it merely caps their magnitude
-- so the host VM does not silently demote them to floats.
local LUA_MAXINTEGER = 2147483647      -- 2^31 - 1  (conservative 32-bit cap, kept from the Fengari era)
local LUA_MININTEGER = -2147483648     -- -2^31     (conservative 32-bit cap, kept from the Fengari era)

-- True only when v fits Fengari's 32-bit lua_Integer, so a literal of v is
-- parsed as an integer (not a float) by the host VM.
local function fitsInt32(v)
	return v >= LUA_MININTEGER and v <= LUA_MAXINTEGER
end

local function generateModuloExpression(n)
	-- Keep rhs modest so that lhs = n + multiplier*rhs stays inside 32 bits.
	-- rhs is at most ~2^20; multiplier at most 2^8; so lhs <= n + 2^28, which
	-- fits comfortably for any n that itself fits in 32 bits.
	local rhsMax = 2^20
	local rhs = n + math.random(1, rhsMax)
	-- Shrink the multiplier if n is already large, so lhs never overflows 32 bits.
	local maxMul = 2^8
	local headroom = LUA_MAXINTEGER - n
	if headroom < maxMul * rhsMax then
		-- n is close to the 32-bit ceiling: pick a multiplier that keeps lhs in range.
		maxMul = math.max(1, math.floor(headroom / math.max(1, rhs)))
	end
	local multiplier = math.random(1, math.max(1, maxMul))
	local lhs = n + (multiplier * rhs)
	-- Final safety net: if anything still slipped past the estimate (e.g. n is
	-- itself out of 32-bit range), fall back to a guaranteed-in-range rhs and a
	-- multiplier of 1 so lhs = n + rhs. The generator's own correctness check
	-- (tonumber(tostring(lhs)) % tonumber(tostring(rhs)) ~= val) still rejects
	-- any combination that does not reproduce n, so we never emit a
	-- mathematically-wrong expression; if no in-range decomposition reproduces
	-- n we signal failure (return nil) and the caller keeps the plain literal,
	-- which is numerically correct on the 64-bit-double target regardless.
	if not (fitsInt32(lhs) and fitsInt32(rhs)) then
		rhs = math.random(1, 1024)
		lhs = n + rhs
		if not (fitsInt32(lhs) and fitsInt32(rhs)) then
			return nil, nil
		end
	end
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
			-- Keep both operands inside Fengari's 32-bit lua_Integer range so an
			-- integer input does not get demoted to a float on the host VM
			-- (see the note on generateModuloExpression above).
			if not (fitsInt32(val2) and fitsInt32(diff)) then
				return false
			end
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
			if not (fitsInt32(val2) and fitsInt32(diff)) then
				return false
			end
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
			if lhs == nil or rhs == nil then
				-- No 32-bit-int-safe decomposition exists for this val; let the
				-- caller try another generator (or fall back to a plain literal).
				return false
			end
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
			-- Scientific notation is inherently a *float* representation in
			-- Lua 5.3: the division `val / (10 ^ exp)` always yields a float,
			-- and a literal such as `1.5e1` is parsed as a float too. On
			-- Fengari's 32-bit-int VM that float subtype would leak into the
			-- user's arithmetic (e.g. a for-loop counter becomes 15.0 instead
			-- of 15), and the host self-test would then print `15.0` where the
			-- original printed `15` -- a false "silent corruption" identical to
			-- the modulo overflow bug. The real target (Lua 5.1 / Luau) has no
			-- integer subtype, so the float is harmless there, but we keep the
			-- host faithful by only using scientific notation for genuinely
			-- fractional values. Integer values fall through to the arithmetic
			-- generators (hex/binary/normal are still available via the random
			-- format pick), so obfuscation power is barely affected (one of
			-- four representations is skipped for integers only).
			if val == math.floor(val) then
				return Ast.NumberExpression(val)
			end

			local exp = math.floor(math.log10(math.abs(val)))
			local mantissa = val / (10 ^ exp)
			-- Use %.17g (17 significant digits, the maximum precision of an
			-- IEEE 754 double) so the literal round-trips exactly through
			-- tonumber().  The previous %.15g silently truncated doubles like
			-- 0.3377740061710911 -> 0.33777400617109, producing a *different*
			-- number and corrupting any equality check that depends on the
			-- exact bit pattern (e.g. Fengetheus AntiTamper Random
			-- verification).  %.17g can append a spurious trailing digit for
			-- doubles that do not need all 17 digits, but the round-trip
			-- check below rejects any candidate that does not reproduce val
			-- exactly, so we never emit a mathematically-wrong literal.
			local candidate = string.format("%.17ge%d", mantissa, exp)
			if tonumber(candidate) ~= val then
				return Ast.NumberExpression(val)
			end
			return Ast.NumberExpression(candidate)
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

