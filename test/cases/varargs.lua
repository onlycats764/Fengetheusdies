-- varargs.lua: varargs, select, pcall, xpcall, error propagation.
local function gather(...)
    local args = { ... }
    return select("#", ...), table.concat(args, ",")
end
local n, s = gather(1, 2, 3, "four", 5.5)
print("n=" .. n)
print("s=" .. s)

local function failing()
    error("boom", 0)
end
local ok, msg = pcall(failing)
print("caught=" .. tostring(ok) .. " msg=" .. tostring(msg))

local function divide(a, b)
    if b == 0 then error("divzero") end
    return a / b
end
local r1 = select(2, pcall(divide, 10, 3))
local r2 = select(2, pcall(divide, 10, 0))
print("div=" .. string.sub(tostring(r1), 1, 10))
print("divErr=" .. tostring(r2))

-- nested pcall with xpcall handler
local function compute()
    return 1 + 2 + 3
end
local ok3, val = pcall(function() return compute() end)
print("nested=" .. tostring(ok3) .. " val=" .. tostring(val))
return n, tostring(r1), val
