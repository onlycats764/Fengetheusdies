local accumulator = 0
for i = 1, 25 do
    accumulator = accumulator + (i * 3) - 1
end

local function calculate(value)
    return (value * value) % 97
end

print(accumulator, calculate(accumulator), type(accumulator) == type(calculate))
