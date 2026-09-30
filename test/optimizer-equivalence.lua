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
local Attributes = require("fengetheus.attributes")

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
	Attributes.prepare(ast)
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

assertEquivalent("multiple returns inline at a tail return", [[
local function pair(value) return value, value + 1 end
return pair(8)
]], "InlineFunctions", "local function pair", false)

assertEquivalent("unsupported vararg transform stays intact", [[
local function collect(...) return select("#", ...), ... end
return collect(3, nil, 5)
]], "InlineFunctions", "local function collect", true)

assertEquivalent("vararg identity inlines at a tail return", [[
local function collect(...) return ... end
return collect(3, nil, 5)
]], "InlineFunctions", "local function collect", false)

assertEquivalent("tail inlining evaluates effectful arguments once and in order", [[
local trace = {}
local function effect(label, value)
    trace[#trace + 1] = label
    return value
end
local function pair(first, second) return first + second, first - second end
local function run() return pair(effect("a", 9), effect("b", 4)) end
local first, second = run()
return table.concat(trace, ","), first, second
]], "InlineFunctions", "local function pair", false)

assertEquivalent("tail inlining preserves missing fixed arguments", [[
local function pair(first, second) return first, second end
return pair(7)
]], "InlineFunctions", "local function pair", false)

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

assertEquivalent("computed negative-step bounds", [[
local count = 0
for _ = 3, 1, -1 do count = count + 1 end
return count
]], "UnrollLoops", "for _", false)

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
for _ = 1, 5 do
    count = count + 1
    if count == 3 then break end
end
return count
]], "UnrollLoops", "for _", false)

-- Continue is Luau-only. Parse and emit as Luau, then evaluate the lowered
-- output as Lua 5.1 so this test does not need a Luau runtime.
local continueSource = [[
local count = 0
local total = 0
for _ = 1, 4 do
    count = count + 1
    if count == 2 then continue end
    total = total + count
end
return total
]]
local continueAst = Parser:new({ LuaVersion = "LuaU" }):parse(continueSource)
Attributes.prepare(continueAst)
Steps.UnrollLoops:new({}):apply(continueAst)
local continueOutput = Unparser:new({ LuaVersion = "LuaU" }):unparse(continueAst)
assert(not continueOutput:find("for _", 1, true), "continue loop should be unrolled")
assert(not continueOutput:find("continue", 1, true), "continue should lower to the iteration wrapper")
local continueOk, continueResult = evaluate(continueOutput)
assert(continueOk and continueResult.n == 1 and continueResult[1] == 8,
	"unrolled continue loop changed its result")

local function pipelineFor(stepName)
	return Fengetheus.Pipeline:fromConfig({
		LuaVersion = "Lua51",
		Seed = 41,
		Steps = { { Name = stepName, Settings = {} } },
	})
end

local attributedInline = pipelineFor("InlineFunctions"):apply([[
local function plus(value)
    FENG_ATTRIBUTES(INLINE(checked))
    return value + 2
end
return plus(40)
]])
assert(not attributedInline:find("local function plus", 1, true),
	"INLINE(checked) did not remove a successfully inlined function")
local inlineOk, inlineResult = evaluate(attributedInline)
assert(inlineOk and inlineResult[1] == 42, "INLINE(checked) changed the result")

local attributedOptOut = pipelineFor("InlineFunctions"):apply([[
local function keep(value)
    FENG_ATTRIBUTES(OPTIMIZE(false))
    return value + 1
end
return keep(41)
]])
assert(attributedOptOut:find("function", 1, true),
	"OPTIMIZE(false) did not preserve the attributed function")
local optOutOk, optOutResult = evaluate(attributedOptOut)
assert(optOutOk and optOutResult[1] == 42, "OPTIMIZE(false) changed the result")

local foldingPolicy = Fengetheus.Pipeline:fromConfig({
	LuaVersion = "Lua51",
	Seed = 42,
	Steps = { { Name = "ConstantFolding", Settings = {} } },
}):apply([[
local function keepBoolean(value)
    FENG_ATTRIBUTES(OPTIMIZE(false))
    return true and value
end
return keepBoolean(17)
]])
assert(foldingPolicy:find("and", 1, true), "OPTIMIZE(false) did not skip constant folding")
local foldingOk, foldingResult = evaluate(foldingPolicy)
assert(foldingOk and foldingResult[1] == 17, "OPTIMIZE(false) changed the expression result")

local functionCountPipeline = pipelineFor("InlineFunctions")
functionCountPipeline.namegenerator = function(index, _, originalName)
	return originalName or ("generated" .. index)
end
local inheritedAndOverridden = functionCountPipeline:apply([[
local function outer()
    FENG_ATTRIBUTES(OPTIMIZE(false))
    local function inherited(value) return value + 1 end
    local function inner()
        FENG_ATTRIBUTES(OPTIMIZE(true))
        local function selected(value) return value + 1 end
        return selected(41)
    end
    return inherited(40), inner()
end
return outer()
]])
assert(inheritedAndOverridden:find("function inherited", 1, true),
	"OPTIMIZE(false) was not inherited by a nested function")
assert(not inheritedAndOverridden:find("function selected", 1, true),
	"OPTIMIZE(true) did not override its inherited function policy")
local inheritedOk, inheritedResult = evaluate(inheritedAndOverridden)
assert(inheritedOk and inheritedResult.n == 2 and inheritedResult[1] == 41 and inheritedResult[2] == 42,
	"inherited/overridden attributes changed the result")

local sharedCandidateWithDisabledCall = functionCountPipeline:apply([[
local function plus(value) return value + 1 end
local function protected()
    FENG_ATTRIBUTES(OPTIMIZE(false))
    return plus(41)
end
return plus(40), protected()
]])
assert(sharedCandidateWithDisabledCall:find("function plus", 1, true),
	"inlining removed a function still referenced by an OPTIMIZE(false) body")
local sharedOk, sharedResult = evaluate(sharedCandidateWithDisabledCall)
assert(sharedOk and sharedResult.n == 2 and sharedResult[1] == 41 and sharedResult[2] == 42,
	"a call in an OPTIMIZE(false) body changed after inlining another use")

local explicitInlineOptOut = functionCountPipeline:apply([[
local function keep(value)
    FENG_ATTRIBUTES(INLINE(false))
    return value + 1
end
return keep(41)
]])
assert(explicitInlineOptOut:find("function keep", 1, true),
	"INLINE(false) did not opt the function out")

local checkedInlineOk = pcall(function()
	pipelineFor("InlineFunctions"):apply([[
local function unsupported(value)
    FENG_ATTRIBUTES(INLINE(checked))
    local result = value + 1
    return result
end
return unsupported(41)
]])
end)
assert(not checkedInlineOk, "INLINE(checked) should fail for an unsupported body")

local attributedUnroll = pipelineFor("UnrollLoops"):apply([[
local total = 0
for _ = 1, 3 do
    FENG_ATTRIBUTES(UNROLL(checked))
    total = total + 2
end
return total
]])
assert(not attributedUnroll:find("for _", 1, true), "UNROLL(checked) did not unroll the marked loop")
local unrollOk, unrollResult = evaluate(attributedUnroll)
assert(unrollOk and unrollResult[1] == 6, "UNROLL(checked) changed the result")

local optionalUnroll = pipelineFor("UnrollLoops"):apply([[
local total = 0
for _ = 1, 3 do
    FENG_ATTRIBUTES(UNROLL(false))
    total = total + 2
end
return total
]])
assert(optionalUnroll:find("for ", 1, true), "UNROLL(false) did not opt the loop out")
local optionalOk, optionalResult = evaluate(optionalUnroll)
assert(optionalOk and optionalResult[1] == 6, "UNROLL(false) changed the result")

local checkedUnrollOk = pcall(function()
	pipelineFor("UnrollLoops"):apply([[
local limit = 3
for _ = 1, limit do
    FENG_ATTRIBUTES(UNROLL(checked))
end
]])
end)
assert(not checkedUnrollOk, "UNROLL(checked) should fail when the bounds are dynamic")

print("Optimizer equivalence checks passed.")
