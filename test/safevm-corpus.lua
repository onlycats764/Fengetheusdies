-- Compare representative small and large Lua 5.1 programs before and after
-- the SafeVM pipeline, including their printed output and exact return tuple.

local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Fengetheus = require("fengetheus")

local function readFile(path)
	local file = assert(io.open(path, "rb"))
	local source = file:read("*a")
	file:close()
	return source
end

local function copy(value)
	if type(value) ~= "table" then return value end
	local result = {}
	for key, child in pairs(value) do result[key] = copy(child) end
	return result
end

local function pack(...)
	return { n = select("#", ...), ... }
end

local function normalize(value)
	if type(value) ~= "string" then return value end
	return (value
		:gsub("%[string[^%]]*%]:%d+:", "[string]:<line>:")
		:gsub("[%w%._/-]+%.lua:%d+:", "<file>:<line>:"))
end

local function evaluate(source)
	local output = {}
	local env = setmetatable({
		print = function(...)
			local values = {}
			for index = 1, select("#", ...) do
				values[index] = tostring(select(index, ...))
			end
			output[#output + 1] = table.concat(values, "\t")
		end,
	}, { __index = _G })
	local chunk, compileError = loadstring(source)
	assert(chunk, compileError)
	setfenv(chunk, env)
	return pack(pcall(chunk)), table.concat(output, "\n")
end

local cases = {
	{ name = "tiny.lua", source = "local value = 40; return value + 2" },
	{ name = "arithmetic.lua", path = testDirectory .. "cases/arithmetic.lua" },
	{ name = "closures.lua", path = testDirectory .. "cases/closures.lua" },
	{ name = "control_flow_mutation.lua", path = testDirectory .. "cases/control_flow_mutation.lua" },
	{ name = "fibonacci.lua", path = testDirectory .. "cases/fibonacci.lua" },
	{ name = "inline_unroll.lua", path = testDirectory .. "cases/inline_unroll.lua" },
	{ name = "long_string.lua", path = testDirectory .. "cases/long_string.lua" },
	{ name = "deep_closures.lua", path = testDirectory .. "cases/deep_closures.lua" },
	{ name = "nilholes.lua", path = testDirectory .. "cases/nilholes.lua" },
	{ name = "numeric_edges.lua", path = testDirectory .. "cases/numeric_edges.lua" },
	{ name = "numeric_only.lua", path = testDirectory .. "cases/numeric_only.lua" },
	{ name = "optimizer_semantics.lua", path = testDirectory .. "cases/optimizer_semantics.lua" },
	{ name = "repeated_strings.lua", path = testDirectory .. "cases/repeated_strings.lua" },
	{ name = "sieve.lua", path = testDirectory .. "cases/sieve.lua" },
	{ name = "signed_zeros.lua", path = testDirectory .. "cases/signed_zeros.lua" },
	{ name = "static_chain.lua", path = testDirectory .. "cases/static_chain.lua" },
	{ name = "strings.lua", path = testDirectory .. "cases/strings.lua" },
	{ name = "tables.lua", path = testDirectory .. "cases/tables.lua" },
	{ name = "truthiness_metamethods.lua", path = testDirectory .. "cases/truthiness_metamethods.lua" },
	{ name = "tween.lua", path = testDirectory .. "cases/tween.lua" },
	{ name = "varargs.lua", path = testDirectory .. "cases/varargs.lua" },
	{ name = "vm_control_flow.lua", path = testDirectory .. "cases/vm_control_flow.lua" },
	{ name = "roblox_gui.lua", path = testDirectory .. "cases/roblox_gui.lua" },
}

for _, case in ipairs(cases) do
	local source = case.source or readFile(case.path)
	local config = copy(Fengetheus.Presets.SafeVM)
	config.Seed = 424242
	local generated = Fengetheus.Pipeline:fromConfig(config)
		:apply(source, case.name)
	local originalResult, originalOutput = evaluate(source)
	local generatedResult, generatedOutput = evaluate(generated)
	assert(originalResult[1], case.name .. ": original fixture errored: " .. tostring(originalResult[2]))
	assert(generatedResult[1], case.name .. ": SafeVM output errored: " .. tostring(generatedResult[2]))
	assert(normalize(originalOutput) == normalize(generatedOutput), case.name .. ": printed output changed")
	assert(originalResult.n == generatedResult.n, case.name .. ": return count changed")
	for index = 1, originalResult.n do
		assert(normalize(originalResult[index]) == normalize(generatedResult[index]),
			case.name .. ": return value " .. index .. " changed")
	end
	print(string.format("[SafeVM] PASS %s source=%d bytes output=%d bytes",
		case.name, #source, #generated))
	io.flush()
end

print("SafeVM small/large corpus equivalence passed.")
