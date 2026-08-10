-- arithmetic.lua: control flow + arithmetic (baseline simple, sin closures)
local sum = 0
local product = 1
for i = 1, 100 do
    if i % 2 == 0 then
        sum = sum + i
        product = product * i
    else
        sum = sum - i
    end
end
local x = 3.14159265358979
local y = math.sin(x) + math.cos(x)
local z = math.sqrt(x * x + y * y)
print("sum=" .. sum)
print("product=" .. tostring(product))
print("y=" .. string.sub(tostring(y), 1, 10))
print("z=" .. string.sub(tostring(z), 1, 10))
print("ternary=" .. (sum > 0 and "positive" or "nonpositive"))
return sum, product, y, z
