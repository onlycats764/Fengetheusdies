-- Positive case for LocalCaching: the root and nested table are literal data,
-- and no call occurs between repeated reads of the same chain.
local data = { nested = { value = 17 } }
local first = data.nested.value
local second = data.nested.value
local third = data.nested.value
print("static-chain", first + second + third)
return first, second, third
