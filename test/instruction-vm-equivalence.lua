-- Exercise the instruction VM through the public SafeVM pipeline and compare
-- exact Lua 5.1 return tuples, including nil holes.

local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Fengetheus = require("fengetheus")

local function pack(...)
	return { n = select("#", ...), ... }
end

local function run(source)
	local chunk, compileError = loadstring(source)
	assert(chunk, compileError)
	return pack(pcall(chunk))
end

local function assertSameTuple(name, original, generated)
	assert(original.n == generated.n, name .. ": return count changed")
	for index = 1, original.n do
		assert(original[index] == generated[index],
			name .. ": return value " .. index .. " changed")
	end
end

local cases = {
	{
		name = "independent mutable closures",
		source = [[
			local function counter(start)
				local value = start
				return function(delta)
					value = value + delta
					return value, start
				end
			end
			local first, second = counter(3), counter(20)
			local a, b = first(2)
			local c, d = first(4)
			local e, f = second(1)
			return a, b, c, d, e, f
		]],
	},
	{
		name = "nested upvalues and vararg forwarding",
		source = [[
			local outer = 5
			local function factory(seed)
				local inner = seed * 2
				return function(step, ...)
					outer = outer + step
					inner = inner + 1
					return outer, inner, ...
				end
			end
			local fn = factory(7)
			return fn(3, "a", nil, "c")
		]],
	},
	{
		name = "multiple returns with embedded nils",
		source = [[
			local function values() return 1, nil, 3, nil, 5 end
			local function relay(...) return ... end
			local function count(...) return select("#", ...), relay(...) end
			return count(values())
		]],
	},
	{
		name = "recursive local closure",
		source = [[
			local function factorial(limit)
				local function visit(value)
					if value <= 1 then return 1 end
					return value * visit(value - 1)
				end
				return visit(limit)
			end
			return factorial(8), factorial(5)
		]],
	},
	{
		name = "captured loop values",
		source = [[
			local functions = {}
			for index = 1, 4 do
				local value = index * 10
				functions[index] = function(delta) return value + delta end
			end
			return functions[1](1), functions[2](2), functions[3](3), functions[4](4)
		]],
	},
	{
		name = "nested numeric loop dispatch",
		source = [[
			local total = 0
			for outer = 1, 2 do
				for inner = outer, 2 do
					total = total + outer + inner
				end
			end
			return total
		]],
	},
}

for _, case in ipairs(cases) do
	local config = Fengetheus.Presets.SafeVM
	local generated = Fengetheus.Pipeline:fromConfig(config):apply(case.source, case.name)
	local originalResult = run(case.source)
	local generatedResult = run(generated)
	assert(originalResult[1], case.name .. ": original fixture errored: " .. tostring(originalResult[2]))
	assert(generatedResult[1], case.name .. ": generated fixture errored: " .. tostring(generatedResult[2]))
	assertSameTuple(case.name, originalResult, generatedResult)
	print("[instruction-vm] PASS " .. case.name)
end

print("Instruction VM closure, upvalue, vararg and multi-return checks passed.")
