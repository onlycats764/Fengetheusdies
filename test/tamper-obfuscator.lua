-- Verify that the tamper loader uses the non-XOR byte codec and reconstructs
-- a harmless self-contained block correctly. This does not run AntiTamper's
-- failure path.

local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Parser = require("fengetheus.parser")
local Unparser = require("fengetheus.unparser")
local TamperObfuscator = require("fengetheus.steps.TamperObfuscator")

local source = 'do __tamper_fixture = "position-coded-marker" end return 37'

for seed = 1, 5 do
	math.randomseed(seed)
	local ast = Parser:new({ LuaVersion = "Lua51" }):parse(source)
	TamperObfuscator:new({}):apply(ast)
	local generated = Unparser:new({ LuaVersion = "Lua51", PrettyPrint = false }):unparse(ast)

	assert(not generated:find("position%-coded%-marker"), "plain tamper source remained visible")
	assert(not generated:find("math.floor", 1, true), "legacy XOR decoder loop remains")
	assert(not generated:find("while", 1, true), "legacy XOR helper loop remains")
	assert(generated:find("table.concat", 1, true), "decoded source is not reassembled")

	local chunk, compileError = loadstring(generated)
	assert(chunk, compileError)
	local environment = setmetatable({}, { __index = _G })
	setfenv(chunk, environment)
	assert(chunk() == 37, "loader changed the following script result")
	assert(environment.__tamper_fixture == "position-coded-marker",
		"affine loader did not restore and execute the original block")
end

print("TamperObfuscator affine codec checks passed.")
