-- Exercise integrity-enabled instruction streams with valid inputs and
-- deterministic mutations. Every malformed stream must fail promptly.

local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Parser = require("fengetheus.parser")
local Compiler = require("fengetheus.compiler.compiler")
local Ast = require("fengetheus.ast")
local Unparser = require("fengetheus.unparser")
local visitast = require("fengetheus.visitast")

local function pack(...)
	return { n = select("#", ...), ... }
end

local function build(source, seed)
	math.randomseed(seed or 424242)
	local compiler = Compiler:new({ InstructionVM = true, InstructionIntegrity = true })
	local ast = Parser:new({ LuaVersion = "Lua51" }):parse(source)
	local compiled = compiler:compile(ast)
	local output = Unparser:new({ LuaVersion = "Lua51", PrettyPrint = false }):unparse(compiled)
	return compiler, compiled, output
end

local function evaluate(source)
	local chunk, compileError = loadstring(source)
	assert(chunk, compileError)
	return pack(pcall(chunk))
end

local function sameTuple(name, expected, actual)
	assert(expected.n == actual.n, name .. ": result count changed")
	for index = 1, expected.n do
		assert(expected[index] == actual[index], name .. ": result " .. index .. " changed")
	end
end

local validCount = 0
for seed = 1, 30 do
	local source = string.format([[
		local value = %d
		local other = %d
		for index = 1, %d do
			value = (value * 17 + index + other) %% 997
		end
		if value %% 2 == 0 then
			other = other + value
		else
			other = other - value
		end
		return value, other, value > other, %d
		]], seed, seed * 3, seed % 5 + 1, seed)
	local _, _, generated = build(source, seed * 97)
	local expected, actual = evaluate(source), evaluate(generated)
	assert(expected[1], "valid fixture " .. seed .. " failed before obfuscation")
	assert(actual[1], "valid fixture " .. seed .. " failed after obfuscation: " .. tostring(actual[2]))
	sameTuple("valid fixture " .. seed, expected, actual)
	validCount = validCount + 1
end

local function findProgram(compiler, minCount)
	local fallback
	for _, entry in ipairs(compiler.instructionProgramsAst.entries) do
		local program = entry.value
		if program.kind == Ast.AstKind.TableConstructorExpression and #program.entries >= minCount then
			fallback = fallback or { entry, program }
			if entry.key.value == compiler.startBlockId then
				return entry, program
			end
		end
	end
	if fallback then return fallback[1], fallback[2] end
	error("fixture did not produce a program with " .. minCount .. " rows")
end

local mutationSource = [[
	local alpha = 12
	local beta = 30
	local gamma = alpha + beta
	local delta = gamma * 2
	return delta
]]

local mutations = {}
mutations[#mutations + 1] = {
	name = "wrong opcode",
	apply = function(compiler)
		local _, program = findProgram(compiler, 1)
		local row = program.entries[1].value
		row.entries[1].value.value = row.entries[1].value.value + 1
	end,
}
mutations[#mutations + 1] = {
	name = "wrong instruction ordinal",
	apply = function(compiler)
		local entry, program = findProgram(compiler, 1)
		local row = program.entries[1].value
		row.entries[2].value.value = row.entries[2].value.value + 1
	end,
}
mutations[#mutations + 1] = {
	name = "wrong register operand",
	apply = function(compiler)
		local _, program = findProgram(compiler, 1)
		local row = program.entries[1].value
		assert(#row.entries >= 3, "fixture instruction has no register operand")
		row.entries[3].value.value = row.entries[3].value.value + 100
	end,
}
mutations[#mutations + 1] = {
	name = "reordered rows",
	apply = function(compiler)
		local _, program = findProgram(compiler, 2)
		program.entries[1], program.entries[2] = program.entries[2], program.entries[1]
	end,
}
mutations[#mutations + 1] = {
	name = "truncated program",
	apply = function(compiler)
		local _, program = findProgram(compiler, 2)
		program.entries[#program.entries] = nil
	end,
}
mutations[#mutations + 1] = {
	name = "extra program row",
	apply = function(compiler)
		local _, program = findProgram(compiler, 1)
		program.entries[#program.entries + 1] = Ast.TableEntry(program.entries[1].value)
	end,
}
mutations[#mutations + 1] = {
	name = "non-table instruction row",
	apply = function(compiler)
		local _, program = findProgram(compiler, 1)
		program.entries[1] = Ast.TableEntry(Ast.NumberExpression(7))
	end,
}
mutations[#mutations + 1] = {
	name = "non-table block program",
	apply = function(compiler)
		local entry = findProgram(compiler, 1)
		entry.value = Ast.StringExpression("not a program")
	end,
}
mutations[#mutations + 1] = {
	name = "non-table block metadata",
	apply = function(compiler)
		local metadata = compiler.instructionIntegrityMetadataAst
		assert(metadata and metadata.entries[1], "integrity metadata fixture missing")
		metadata.entries[1].value = Ast.NumberExpression(5)
	end,
}
mutations[#mutations + 1] = {
	name = "non-table metadata root",
	apply = function(compiler, compiled)
		local changed = false
		visitast(compiled, function(node)
			if node.kind == Ast.AstKind.AssignmentStatement then
				for index, lhs in ipairs(node.lhs) do
					if lhs.kind == Ast.AstKind.AssignmentVariable
						and lhs.scope == compiler.scope
						and lhs.id == compiler.instructionIntegrityMetadataVar then
						node.rhs[index] = Ast.NumberExpression(5)
						changed = true
						return node
					end
				end
			end
		end)
		assert(changed, "could not locate the integrity metadata assignment")
	end,
}
mutations[#mutations + 1] = {
	name = "non-table program root",
	apply = function(compiler, compiled)
		local changed = false
		visitast(compiled, function(node)
			if node.kind == Ast.AstKind.AssignmentStatement then
				for index, lhs in ipairs(node.lhs) do
					if lhs.kind == Ast.AstKind.AssignmentVariable
						and lhs.scope == compiler.scope
						and lhs.id == compiler.instructionProgramsVar then
						node.rhs[index] = Ast.NumberExpression(5)
						changed = true
						return node
					end
				end
			end
		end)
		assert(changed, "could not locate the instruction program assignment")
	end,
}

local tamperCount = 0
for index, mutation in ipairs(mutations) do
	local compiler, compiled = build(mutationSource, 9000 + index)
	mutation.apply(compiler, compiled)
	local mutated = Unparser:new({ LuaVersion = "Lua51", PrettyPrint = false }):unparse(compiled)
	local actual = evaluate(mutated)
	assert(not actual[1], mutation.name .. ": modified stream unexpectedly ran successfully")
	if not tostring(actual[2]):find("Fengetheus: invalid instruction stream", 1, true) then
		assert(false, mutation.name .. ": failed without the integrity error: " .. tostring(actual[2]))
	end
	print("[instruction-vm-integrity] PASS " .. mutation.name)
	tamperCount = tamperCount + 1
end

print(string.format("Instruction VM integrity checks passed: %d valid fixtures and %d mutation cases.",
	validCount, tamperCount))
