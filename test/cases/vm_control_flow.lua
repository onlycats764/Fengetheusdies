local total = 0

local function makeAdder(seed)
    local function add(value)
        total = total + seed + value
        return total
    end
    return add
end

local add2 = makeAdder(2)
local add5 = makeAdder(5)
local i = 1
while i <= 6 do
    if i == 2 then
        total = add2(i)
    elseif i == 5 then
        break
    else
        total = add5(i)
    end
    i = i + 1
end

local ok, value = pcall(function(a, b, c)
    return a + b + c
end, 3, 4, 5)
print(ok, value, total, add2(1), add5(1))
