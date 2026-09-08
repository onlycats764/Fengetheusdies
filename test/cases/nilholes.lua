-- nilholes.lua: multi-values carrying embedded nils — the exact pattern that
-- broke the pre-FIX#3 VM (raw {...} carriers + #t truncation on LuaJIT).
-- Every printed value is deterministic and portable across Lua 5.1, 5.2,
-- 5.3, 5.4, LuaJIT and Luau. No operation relies on #t of a holed table.

local unpack = unpack or table.unpack

local function count(...)
    return select("#", ...)
end

local function passthrough(...)
    return ...
end

local function holed()
    return 1, nil, 3, nil, 5
end

local function tail(...)
    return "a", nil, ...
end

-- 1) varargs forwarding with embedded nils (vararg closure creator channel)
print("count1=" .. count(passthrough(1, nil, 3)))
print("count2=" .. count(passthrough(nil, nil, nil)))
print("count3=" .. count(holed()))

-- 2) expansion position rules: only the last expression expands fully
print("count4=" .. count(holed(), 9))
print("count5=" .. count(9, holed()))

-- 3) table constructors store values after nils (table ctor spread channel)
local t = { holed() }
print("ctor=" .. tostring(t[1]) .. "," .. tostring(t[2]) .. "," .. tostring(t[3]) .. "," .. tostring(t[4]) .. "," .. tostring(t[5]))

local m = { 0, holed() }
print("m4=" .. tostring(m[4]) .. ",m6=" .. tostring(m[6]) .. ",cnt=" .. count(unpack(m, 1, 6)))

-- 4) unpack with explicit bounds over holes (never consults #t)
print("unpack=" .. count(unpack(t, 1, 5)))
print("unpack_mid=" .. tostring((unpack(t, 2, 4))))

-- 5) nested vararg functions forwarding through the VM (vararg slice channel)
local function outer(...)
    local n = select("#", ...)
    local function inner(...)
        return n, select("#", ...), ...
    end
    return inner(...)
end
print("nested=" .. count(outer(nil, 2, nil)))

-- 6) user function receiving holed multi-returns through the VM boundary
-- (string.format("%s", nil) itself is not portable across engines, so the
-- spread is exercised with an explicit select-based join instead)
local function join(sep, ...)
    local n = select("#", ...)
    local out = {}
    for i = 1, n do
        out[i] = tostring((select(i, ...)))
    end
    return table.concat(out, sep)
end
print("fmt=" .. join("|", tail(nil, "z")))
print("join=" .. join(",", passthrough(nil, nil)))

-- 7) parenthesised middle call truncates to one value
print("mid=" .. tostring((holed())))

-- 8) full spread into print (statement function-call spread channel)
print("raw", holed())

-- 9) method call with holed spread (pass-self spread channel)
local obj = {}
function obj:m(...)
    return select("#", ...)
end
print("method=" .. obj:m(nil, holed()))

-- 10) pcall carries holed results through the VM boundary
local ok, a, b, c = pcall(passthrough, nil, nil, 7)
print("pcall=" .. tostring(ok) .. "," .. tostring(a) .. "," .. tostring(b) .. "," .. tostring(c))

-- 11) deep chain through three vararg layers
local function depth3(...) return ... end
local function depth2(...) return depth3(...) end
local function depth1(...) return depth2(...) end
print("deep=" .. count(depth1(nil, nil, 2, nil)))

-- 12) closure created inside a vararg function (creator sub-scope channel)
local function make(...)
    local n = select("#", ...)
    return function() return n end
end
print("upval=" .. make(nil, nil, nil)())

-- 13) top-level return with holes (entry return pack/expand channels)
return count(holed()), nil, "end"
