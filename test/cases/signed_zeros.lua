-- Signed zero (IEEE 754) semantics: the sign of zero is observable through
-- 1/x (inf vs -inf), tostring ("-0" vs "0") and string.format.
-- Stock Lua 5.1/5.4 compilers deduplicate function constants numerically
-- (-0.0 == 0.0), so the FIRST zero literal in a function decides the value
-- of every later zero literal in that same function.  Obfuscation must not
-- inject, remove or reorder zero literals inside user functions, or these
-- observable values silently change.
local negZeroFirst = -0.0
local plainZero = 0
print(tostring(negZeroFirst), tostring(plainZero))
print(1 / negZeroFirst, 1 / plainZero)

local function zeroBeforeNegZero()
	local a = 0
	local b = -0.0
	return 1 / a, 1 / b
end
print(zeroBeforeNegZero())

local function negZeroBeforeZero()
	local b = -0.0
	local a = 0
	return 1 / a, 1 / b
end
print(negZeroBeforeZero())

local function mixedExpressions(x)
	-- runtime-computed negative zero: no literal involved
	local computed = x * 0
	return 1 / computed, tostring(-x)
end
print(mixedExpressions(-1))

-- folded-looking expressions must keep the literal order the engine sees
local sumZero = -0.0 + 0
local diffZero = 0 - 0.0
print(tostring(sumZero), tostring(diffZero))

-- table keys: -0 and 0 are the same key, insertion behaviour must not change
local t = {}
t[0] = "a"
t[-0.0] = "b"
print(t[0], t[-0.0])

-- math results that produce negative zero at runtime
print(tostring(math.floor(-0.5)), tostring(math.ceil(-0.5)))
