local calls = 0
local function invoke(value)
    calls = calls + 1
    return value .. ":" .. value .. ":" .. value
end

local first = invoke("repeated-secret-name")
local second = invoke("repeated-secret-name")
local third = string.gsub(first, "repeated", "repeat")
print(first == second, third, calls)
