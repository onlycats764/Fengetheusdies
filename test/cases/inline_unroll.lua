local function addOne(value)
	return value + 1
end

local answer = addOne(41)
local total = 0

for i = 1, 3 do
	total = total + 2
end

for i = 3, 1, -1 do
	total = total + 3
end

for i = 3, 1 do
	total = total + 100
end

for i = 1, 3 do
	total = total + i
end

for i = 1, 3 do
	if i == 2 then
		break
	end
	total = total + 5
end

print(answer, total)
