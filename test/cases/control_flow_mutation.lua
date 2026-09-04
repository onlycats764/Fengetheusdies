-- Exercises every condition slot touched by ControlFlowMutation while
-- keeping observable calls and evaluation order explicit.
local events = {}

local function mark(value)
    events[#events + 1] = tostring(value)
    return value
end

if mark("truthy") then
    events[#events + 1] = "if-true"
elseif mark("wrong-elseif") then
    events[#events + 1] = "bad"
else
    events[#events + 1] = "bad"
end

if mark(false) then
    events[#events + 1] = "bad"
else
    events[#events + 1] = "if-false"
end

local i = 0
while mark(i < 3) do
    events[#events + 1] = "w" .. i
    i = i + 1
end

local repeatCount = 0
repeat
    repeatCount = repeatCount + 1
    events[#events + 1] = "r" .. repeatCount
until mark(repeatCount >= 2)

for n = 1, 5 do
    if mark(n % 2 == 0) then
        events[#events + 1] = "even"
    else
        events[#events + 1] = "odd"
    end
end

print(table.concat(events, ","))
return #events, i, repeatCount
