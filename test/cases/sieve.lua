-- sieve.lua: table manipulation + nested loops
local N = 1000
local marked = {}
local primes = {}
for i = 2, N do
    if not marked[i] then
        table.insert(primes, i)
        for j = i * i, N, i do
            if j > 0 then marked[j] = true end
        end
    end
end
print("count=" .. #primes)
print("first10=" .. table.concat({primes[1], primes[2], primes[3], primes[4], primes[5], primes[6], primes[7], primes[8], primes[9], primes[10]}, ","))
print("last=" .. primes[#primes])
-- table iteration with pairs
local tally = {}
for _, p in ipairs(primes) do
    local r = p % 10
    tally[r] = (tally[r] or 0) + 1
end
print("tally1=" .. (tally[1] or 0))
print("tally3=" .. (tally[3] or 0))
return #primes, primes[#primes]
