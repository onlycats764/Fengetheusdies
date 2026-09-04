-- Truthiness itself has no metamethod. This catches condition transforms that
-- accidentally compare, concatenate, or otherwise touch the source value.
local reads = 0
local object = setmetatable({}, {
    __index = function(_, key)
        reads = reads + 1
        return key .. "-value"
    end,
})

local result = {}
if object then result[#result + 1] = object.missing end
if "non-empty" then result[#result + 1] = "string" end
if function() end then result[#result + 1] = "function" end
if 0 then result[#result + 1] = "zero" end

print(table.concat(result, ":"), reads)
return result[1], result[4], reads
