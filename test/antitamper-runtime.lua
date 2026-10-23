-- Run AntiTamper against stock Lua and synthetic executor API profiles. The
-- generated hard-halt is replaced only in this test so failures stay bounded.

local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Fengetheus = require("fengetheus")
local Parser = Fengetheus.Parser
local AntiTamper = Fengetheus.Pipeline.Steps.AntiTamper
local Unparser = require("fengetheus.unparser")

local function generate()
	local ast = Parser:new({ LuaVersion = "Lua51" }):parse("return 'anti tamper fixture'")
	AntiTamper:new({ Stealth = false, UseDebug = false }):apply(ast, { PrettyPrint = false })
	local generated = Unparser:new({ LuaVersion = "Lua51", PrettyPrint = false }):unparse(ast)
	local replaced, count = generated:gsub("while%s+true%s+do%s+end", "error('ANTITAMPER_TEST_DETECTED', 0);")
	assert(count == 1, "test harness replaced " .. count .. " hard-halts; sample: "
		.. generated:sub(generated:find("while") or 1, (generated:find("while") or 1) + 80))
	return replaced
end

local generated = generate()
local executorApis = {
	"getgenv", "getgc", "hookfunction", "hookmetamethod", "newcclosure",
	"clonefunction", "isfunctionhooked", "checkcaller", "iscclosure", "islclosure",
}

local function environmentFor(profile)
	local env = {}
	setmetatable(env, { __index = _G })
	for index, name in ipairs(executorApis) do
		if (profile + index) % 3 ~= 0 then
			env[name] = function(value) return value end
		end
	end
	if profile % 4 == 0 then env.getgenv = function() return env end end
	if profile % 7 == 0 then env.coroutine = false end
	if profile % 11 == 0 then env.debug = false end
	return env
end

local function run(source, env)
	local chunk, compileError = loadstring(source)
	assert(chunk, compileError)
	setfenv(chunk, env)
	return pcall(chunk)
end

for profile = 1, 30 do
	local ok, result = run(generated, environmentFor(profile))
	assert(ok and result == "anti tamper fixture",
		"benign executor profile " .. profile .. " was rejected: " .. tostring(result))
	if profile % 5 == 0 then print("[antitamper-runtime] PASS benign profile " .. profile) end
end

local function copy(value)
	if type(value) ~= "table" then return value end
	local result = {}
	for key, child in pairs(value) do result[key] = copy(child) end
	return result
end

local safeConfig = copy(Fengetheus.Presets.SafeVM)
safeConfig.Seed = 424242
local safeOutput = Fengetheus.Pipeline:fromConfig(safeConfig)
	:apply("return 'SafeVM AntiTamper fixture'", "antitamper-safevm.lua")
for profile = 1, 30 do
	local ok, result = run(safeOutput, environmentFor(profile))
	assert(ok and result == "SafeVM AntiTamper fixture",
		"SafeVM rejected benign executor profile " .. profile .. ": " .. tostring(result))
	if profile % 10 == 0 then print("[antitamper-runtime] PASS SafeVM profile " .. profile) end
end

local snapshotLoop = assert(generated:find("for%s+i%s*="), "sanity loop insertion point not found")
local afterSnapshotMutation = generated:sub(1, snapshotLoop - 1)
	.. "assert = function(...) return true end;\n"
	.. generated:sub(snapshotLoop)
assert(afterSnapshotMutation:find("ANTITAMPER_TEST_DETECTED", 1, true),
	"tamper fixture is missing its bounded marker")
local tamperOk, tamperError = run(afterSnapshotMutation, environmentFor(31))
assert(not tamperOk and tostring(tamperError):find("ANTITAMPER_TEST_DETECTED", 1, true),
	"post-snapshot global replacement was not detected")
print("[antitamper-runtime] PASS post-snapshot global replacement")

local behaviorEnv = environmentFor(32)
local alteredString = {}
for key, value in pairs(string) do alteredString[key] = value end
alteredString.sub = function(value, first, last)
	if value == "abcdef" and first == 2 and last == -2 then return "incorrect" end
	return string.sub(value, first, last)
end
behaviorEnv.string = alteredString
local behaviorOk, behaviorError = run(generated, behaviorEnv)
assert(not behaviorOk and tostring(behaviorError):find("ANTITAMPER_TEST_DETECTED", 1, true),
	"string behavior mismatch was not detected")
print("[antitamper-runtime] PASS string behavior mismatch")

print("AntiTamper runtime checks passed: 30 direct and 30 SafeVM executor profiles, plus 2 tamper cases.")
