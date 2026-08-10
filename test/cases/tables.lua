-- tables.lua: nested tables, metatables, __index metamethods.
-- Vmify's VM re-implements table semantics; metamethod paths are a
-- natural place for a hoisted constant to turn nil.
local Vec = {}
Vec.__index = Vec
function Vec.new(x, y)
    local v = { x = x, y = y }
    setmetatable(v, Vec)
    return v
end
function Vec:add(other)
    return Vec.new(self.x + other.x, self.y + other.y)
end
function Vec:len()
    return math.sqrt(self.x * self.x + self.y * self.y)
end
function Vec:__tostring()
    return "(" .. self.x .. "," .. self.y .. ")"
end

local v1 = Vec.new(3, 4)
local v2 = Vec.new(1, 2)
local v3 = v1:add(v2)
print("v3=" .. tostring(v3))
print("len=" .. string.sub(tostring(v3:len()), 1, 8))

local points = {}
for i = 1, 50 do
    points[i] = Vec.new(i, i * 2)
end
local total = Vec.new(0, 0)
for _, p in ipairs(points) do
    total = total:add(p)
end
print("total=" .. tostring(total))

-- __len metamethod (directly related to the fixed upvalue bug path)
local Bag = {}
function Bag.new()
    local t = setmetatable({n = 0}, {__len = function(self) return self.n end, __index = {
        push = function(self, v) self.n = self.n + 1; self[self.n] = v end
    }})
    return t
end
local bag = Bag.new()
for i = 1, 7 do bag:push(i * 3) end
print("baglen=" .. #bag)
return tostring(total), #bag
