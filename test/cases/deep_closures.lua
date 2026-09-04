-- Stresses nested lexical scopes, varargs, multiple returns and control-flow
-- targets created while compiling closures.
local total = 0

local function factory(seed)
    local bias = seed * 2
    local function inner(...)
        local args = {...}
        local sum = bias
        for index = 1, #args do
            sum = sum + (args[index] or 0)
        end
        total = total + sum
        return sum, total, #args
    end
    return inner
end

local first = factory(3)
local second = factory(7)
local a, b, c = first(1, 2, 3)
local d, e, f = second(4, nil, 6, 8)
print(a, b, c, d, e, f, total)
return a, b, c, d, e, f, total
