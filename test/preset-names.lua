local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local presets = dofile(testDirectory .. "../src/presets.lua")

local aliases = {
	Phantom = "Virtualized",
	Wraith = "Stealth",
	Cipher = "Encrypted",
	Aegis = "Hardened",
	Titan = "Strong",
	TitanVM2 = "Advanced",
	StrongScalable = "LargeScripts",
	Vmify = "VM",
}

for legacy, name in pairs(aliases) do
	assert(type(presets[name]) == "table", "missing preset " .. name)
	assert(presets[legacy] == presets[name], "alias changed pipeline: " .. legacy)
	assert(presets[name].Seed == 0, "default seed must be 0: " .. name)
end

assert(presets.Advanced.Steps ~= presets.Strong.Steps, "Advanced must have independent settings")
local hasVmify = false
for _, step in ipairs(presets.VM.Steps) do
	hasVmify = hasVmify or step.Name == "Vmify"
end
assert(hasVmify, "renaming the VM preset must preserve the Vmify transformation")

print("Preset names and compatibility aliases passed.")
