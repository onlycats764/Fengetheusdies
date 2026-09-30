-- Run optimizer passes on benign snippets and compare their runtime results
-- with the unmodified source. Cases outside a pass's safe subset must remain
-- unchanged and still produce the same results.

local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Fengetheus = require("fengetheus")
local Parser = Fengetheus.Parser
local Steps = Fengetheus.Pipeline.Steps
local Unparser = require("fengetheus.unparser")

local function pack(...)
	return { n = select("#", ...), ... }
end

local function evaluate(source)
	local chunk, compileError = loadstring(source)
	assert(chunk, compileError)
	local result = pack(pcall(chunk))
	if not result[1] then
		return false, type(result[2])
	end
	local values = { n = result.n - 1 }
	for index = 1, values.n do
		values[index] = result[index + 1]
	end
	return true, values
end

local function assertEquivalent(name, source, stepName, expectedMarker, shouldRemain, renameAfter)
	local ast = Parser:new({ LuaVersion = "Lua51" }):parse(source)
	Steps[stepName]:new({}):apply(ast)
	local transformed = Unparser:new({ LuaVersion = "Lua51" }):unparse(ast)
	local present = transformed:find(expectedMarker, 1, true) ~= nil
	assert(present == shouldRemain,
		name .. ": expected marker " .. (shouldRemain and "to remain" or "to be removed"))
	if renameAfter then
		local pipeline = Fengetheus.Pipeline:new({ LuaVersion = "Lua51" })
		pipeline.namegenerator = function(index, _, originalName)
			if originalName == "offset" then return "capture0" end
			if originalName == "shadow" and index == 1 then return "capture0" end
			return "v" .. index
		end
		pipeline:renameVariables(ast)
		transformed = Unparser:new({ LuaVersion = "Lua51" }):unparse(ast)
	end

	local originalOk, original = evaluate(source)
	local transformedOk, optimized = evaluate(transformed)
	assert(originalOk == transformedOk, name .. ": success status changed")
	if not originalOk then
		assert(original == optimized, name .. ": error type changed")
		return
	end
	assert(original.n == optimized.n, name .. ": return count changed")
	for index = 1, original.n do
		assert(original[index] == optimized[index],
			name .. ": return value " .. index .. " changed")
	end
end

assertEquivalent("inlined upvalue capture", [[
local offset = 5
local function plus(value) return value + offset end
offset = 20
return plus(2)
]], "InlineFunctions", "local function plus", false)

assertEquivalent("captured names remain safe through variable renaming", [[
local offset = 20
local function plus(value) return value + offset end
local function invoke(value)
    local shadow = 100
    return plus(2) + shadow
end
return invoke(3)
]], "InlineFunctions", "local function plus", false, true)

assertEquivalent("shadowed captured upvalue prevents inlining", [[
local offset = 5
local function plus(value) return value + offset end
offset = 20
do
    local offset = 100
    return plus(2), offset
end
]], "InlineFunctions", "local function plus", true)

assertEquivalent("single metamethod side effect", [[
local calls = 0
local value = setmetatable({}, {
    __add = function(_, amount)
        calls = calls + 1
        return amount + 40
    end,
})
local function plus(input) return input + 2 end
local result = plus(value)
return calls, result
]], "InlineFunctions", "local function plus", false)

assertEquivalent("side-effectful call arguments stay in the function", [[
local trace = {}
local function effect(label, value)
    trace[#trace + 1] = label
    return value
end
local function choose(_, value) return value end
local result = choose(effect("first", 4), effect("second", 8))
return table.concat(trace, ","), result
]], "InlineFunctions", "local function choose", true)

assertEquivalent("multiple returns stay in the function", [[
local function pair(value) return value, value + 1 end
local first, second = pair(8)
return first, second
]], "InlineFunctions", "local function pair", true)

assertEquivalent("varargs stay in the function", [[
local function collect(...) return select("#", ...), ... end
return collect(3, nil, 5)
]], "InlineFunctions", "local function collect", true)

assertEquivalent("function-body side effects stay in the function", [[
local calls = 0
local function tick(value)
    calls = calls + 1
    return value
end
local result = tick(9)
return calls, result
]], "InlineFunctions", "local function tick", true)

assertEquivalent("unrolled body side effects", [[
local sequence = {}
for index = 1, 4 do
    sequence[#sequence + 1] = #sequence + 1
end
return table.concat(sequence, ",")
]], "UnrollLoops", "for index", false)

assertEquivalent("unrolled fresh upvalue per iteration", [[
local value = 0
local closures = {}
for index = 1, 3 do
    local captured = value + 1
    value = captured
    table.insert(closures, function() return captured end)
end
return closures[1](), closures[2](), closures[3]()
]], "UnrollLoops", "for index", false)

assertEquivalent("break keeps its loop", [[
local count = 0
for index = 1, 5 do
    count = count + 1
    if count == 3 then break end
end
return count
]], "UnrollLoops", "for index", true)

-- Continue is Luau-only. Verify the optimizer leaves this benign loop intact;
-- a Luau runtime is not required to test the conservative skip decision.
local continueSource = [[
local count = 0
local total = 0
for index = 1, 4 do
    count = count + 1
    if count == 2 then continue end
    total = total + count
end
return total
]]
local continueAst = Parser:new({ LuaVersion = "LuaU" }):parse(continueSource)
Steps.UnrollLoops:new({}):apply(continueAst)
local continueOutput = Unparser:new({ LuaVersion = "LuaU" }):unparse(continueAst)
assert(continueOutput:find("for index", 1, true), "continue loop should not be unrolled")
assert(continueOutput:find("continue", 1, true), "continue statement should be preserved")

print("Optimizer equivalence checks passed.")
