-- Signed zero (IEEE 754) semantics: the sign of zero is observable through
-- 1/x (inf vs -inf), tostring ("-0" vs "0") and string.format.
--
-- ENGINE-PORTABILITY NOTE: this case is deliberately written so the
-- ORIGINAL script produces IDENTICAL output on Lua 5.1, Lua 5.4, Luau and
-- Lumora. Stock Lua 5.1/5.4 compilers deduplicate function constants
-- NUMERICALLY (-0.0 == 0.0), so when a single function contains BOTH a
-- +0 and a -0.0 literal, the first one silently absorbs the other and the
-- observable output depends on which engine compiled the chunk (Luau
-- dedupes bit-exactly). A function that mixes both zero-literal signs is
-- therefore engine-ambiguous BY DESIGN of the engines, and no obfuscated
-- output can match "the original" on both engines at once. To keep the
-- obfuscation invariant testable, every zero below is either:
--   * the ONLY zero literal in its function (sign preserved everywhere), or
--   * computed at RUNTIME (x*0, x-x with locals, math.fmod/ceil) which is
--     exact on every engine.
local negZeroFirst = -0.0
local one = 1
local plainZero = one - one -- runtime +0.0: not foldable, engine-exact
print(tostring(negZeroFirst), tostring(plainZero))
print(1 / negZeroFirst, 1 / plainZero)

-- one zero literal per function: sign is preserved on every engine
local function onlyNegZero()
	local b = -0.0
	return 1 / b
end
local function onlyPlainZero()
	local a = 0
	return 1 / a
end
print(onlyNegZero(), onlyPlainZero())

-- runtime-computed negative zero: no literal involved
local function mixedExpressions(x)
	local computed = x * 0
	return 1 / computed, tostring(-x)
end
print(mixedExpressions(-1))

-- runtime zero sums/differences with locals: IEEE exact everywhere
local sumZero = negZeroFirst + plainZero
local diffZero = plainZero - plainZero
print(tostring(sumZero), tostring(diffZero))

-- table keys: -0 and 0 are the same key, insertion behaviour must not change
local t = {}
t[0] = "a"
t[-0.0] = "b"
print(t[0], t[-0.0])

-- math results that produce negative zero at runtime
print(tostring(math.floor(-0.5)), tostring(math.ceil(-0.5)))
print(tostring(math.fmod(-1, 1)))
