-- Exercise instruction dispatch tables at and beyond the inline-dispatch
-- threshold through the full SafeVM pipeline.

local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Fengetheus = require("fengetheus")

local function makeSource(operationCount)
	local lines = { "local total = 0" }
	for value = 1, operationCount do
		lines[#lines + 1] = "total = total + " .. value
	end
	lines[#lines + 1] = "return total"
	return table.concat(lines, "\n")
end

local function copy(value)
	if type(value) ~= "table" then return value end
	local result = {}
	for key, child in pairs(value) do result[key] = copy(child) end
	return result
end

for _, integrityEnabled in ipairs({ true, false }) do
	for _, operationCount in ipairs({ 65, 2000 }) do
		local config = copy(Fengetheus.Presets.SafeVM)
		config.Seed = 424242
		if not integrityEnabled then
			for _, step in ipairs(config.Steps) do
				if step.Name == "Vmify" then step.Settings.InstructionIntegrity = false end
			end
		end

		local source = makeSource(operationCount)
		local generated = Fengetheus.Pipeline:fromConfig(config):apply(source, "large-dispatch.lua")
		local chunk, compileError = loadstring(generated)
		assert(chunk, compileError)
		local ok, result = pcall(chunk)
		assert(ok, string.format("SafeVM failed at %d operations: %s", operationCount, tostring(result)))
		local expected = operationCount * (operationCount + 1) / 2
		assert(result == expected,
			string.format("SafeVM returned %s at %d operations; expected %d", tostring(result), operationCount, expected))
		print(string.format("[instruction-vm-large] PASS %d operations; integrity=%s; output=%d bytes",
			operationCount, tostring(integrityEnabled), #generated))
	end
end

print("Large instruction VM dispatch tests passed.")
