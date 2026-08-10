-- fibonacci.lua: recursion + memoization + multiple returns
local memo = {}
local function fib(n)
    if n <= 1 then return n end
    if memo[n] then return memo[n] end
    local a, b = fib(n - 1), fib(n - 2)
    memo[n] = a + b
    return a + b
end
local results = {}
for i = 1, 30 do
    table.insert(results, fib(i))
end
print("fib(30)=" .. results[30])
print("seq=" .. table.concat({results[1], results[2], results[3], results[10], results[20], results[30]}, ","))
-- multiple return values
local function quotrem(a, b)
    return math.floor(a / b), a % b
end
local q, r = quotrem(12345, 7)
print("quot=" .. q .. " rem=" .. r)
return results[30], q, r
