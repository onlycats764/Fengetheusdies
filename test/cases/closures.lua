-- closures.lua: closures, upvalues, generators, and counter factories.
-- The upstream bug (Vmify + ConstantArray) manifests when constants
-- captured through broken scope chains become nil at runtime, so a
-- script that exercises closures heavily is the highest-risk victim.
local function makeCounter(start, step)
    local n = start
    return function()
        n = n + step
        return n
    end
end
local c1 = makeCounter(0, 1)
local c10 = makeCounter(0, 10)
local hits = {}
for i = 1, 20 do
    hits[i] = c1() .. "/" .. c10()
end
print("c20=" .. hits[20])

local function makeAccumulator()
    local xs = {}
    local function add(v)
        table.insert(xs, v)
        return v
    end
    local function sum()
        local s = 0
        for _, v in ipairs(xs) do
            s = s + v
        end
        return s
    end
    return add, sum
end
local add, sum = makeAccumulator()
for i = 1, 15 do
    add(i * i)
end
print("sumSq=" .. sum())
print("addRet=" .. add(100))
print("sumSq2=" .. sum())

-- closure capturing two upvalues + varargs
local function joiner(sep, ...)
    local args = { ... }
    return function(extra)
        args[#args + 1] = extra
        return table.concat(args, sep)
    end
end
local j = joiner("-", "a", "b", "c")
print("joined=" .. j("d"))
return sum(), j("d")
