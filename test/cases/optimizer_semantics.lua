-- Regression coverage for optimizer transformations that must preserve Lua
-- evaluation semantics, including metamethods and runtime type errors.

local reads = 0
local source = setmetatable({}, {
    __index = function(_, key)
        reads = reads + 1
        return { value = reads }
    end,
})

-- Caching source.child here would be invalid: every __index invocation
-- deliberately returns a fresh table.
local uncached = source.child.value + source.child.value

local typed = { value = "not-a-number" }
local ok, message = pcall(function()
    return typed.value + 0
end)
local powOk, powMessage = pcall(function()
    return typed.value ^ 1
end)

print("metamethod", uncached, reads)
print("type-error", ok, type(message) == "string")
print("pow-error", powOk, type(powMessage) == "string")
return uncached, reads, ok, powOk
