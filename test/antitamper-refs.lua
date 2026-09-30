-- Verify that AntiTamper snapshots its portable runtime references before
-- checks begin and emits a final identity comparison for each captured item.
-- Generated output is compiled for syntax only; this test never executes the
-- anti-tamper failure path.

local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Fengetheus = require("fengetheus")
local Parser = Fengetheus.Parser
local AntiTamper = Fengetheus.Pipeline.Steps.AntiTamper
local Unparser = require("fengetheus.unparser")

local function generate(stealth, useDebug)
	local ast = Parser:new({ LuaVersion = "Lua51" }):parse("return 'safe fixture'")
	AntiTamper:new({ Stealth = stealth, UseDebug = useDebug }):apply(ast, { PrettyPrint = false })
	return Unparser:new({ LuaVersion = "Lua51" }):unparse(ast)
end

local expected = {
	{ "assert", "assert" }, { "error", "error" },
	{ "getmetatable", "getmetatable" }, { "ipairs", "ipairs" },
	{ "next", "next" }, { "pairs", "pairs" }, { "pcall", "pcall" },
	{ "rawequal", "rawequal" }, { "rawget", "rawget" }, { "rawset", "rawset" },
	{ "select", "select" }, { "setmetatable", "setmetatable" },
	{ "tonumber", "tonumber" }, { "tostring", "tostring" },
	{ "type", "type" }, { "xpcall", "xpcall" },
	{ "string.byte", "stringByte" }, { "string.char", "stringChar" },
	{ "string.find", "stringFind" }, { "string.format", "stringFormat" },
	{ "string.gmatch", "stringGmatch" }, { "string.gsub", "stringGsub" },
	{ "string.len", "stringLen" }, { "string.lower", "stringLower" },
	{ "string.rep", "stringRep" }, { "string.reverse", "stringReverse" },
	{ "string.sub", "stringSub" }, { "string.upper", "stringUpper" },
	{ "string.dump", "stringDump" },
	{ "table.concat", "tableConcat" }, { "table.insert", "tableInsert" },
	{ "table.remove", "tableRemove" }, { "table.sort", "tableSort" },
	{ "table.unpack", "tableUnpack" },
	{ "math.abs", "mathAbs" }, { "math.ceil", "mathCeil" },
	{ "math.floor", "mathFloor" }, { "math.huge", "mathHuge" },
	{ "math.max", "mathMax" }, { "math.min", "mathMin" },
	{ "math.random", "mathRandom" }, { "math.randomseed", "mathRandomseed" },
	{ "math.sqrt", "mathSqrt" },
	{ "coroutine.create", "coroutineCreate" },
	{ "coroutine.resume", "coroutineResume" },
	{ "coroutine.running", "coroutineRunning" },
	{ "coroutine.status", "coroutineStatus" },
	{ "coroutine.wrap", "coroutineWrap" },
	{ "coroutine.yield", "coroutineYield" },
	{ "coroutine.close", "coroutineClose" },
	{ "debug.getinfo", "debugGetInfo" },
	{ "debug.getupvalue", "debugGetUpvalue" },
	{ "debug.info", "debugInfo" }, { "debug.sethook", "debugSetHook" },
	{ "debug.traceback", "debugTraceback" },
}
local globals = {
	"assert", "error", "getmetatable", "ipairs", "next", "pairs", "pcall",
	"rawequal", "rawget", "rawset", "select", "setmetatable", "tonumber",
	"tostring", "type", "xpcall", "loadstring", "iscclosure", "islclosure",
	"newcclosure", "clonefunction", "isfunctionhooked", "checkcaller", "getfenv",
	"setfenv", "unpack",
}
local function escaped(value)
	return (value:gsub("([^%w])", "%%%1"))
end
local function hasEquality(generated, left, right)
	local pattern = escaped(left) .. "%s*==%s*" .. escaped(right)
	return generated:find(pattern) ~= nil
end

for _, stealth in ipairs({ false, true }) do
	for _, useDebug in ipairs({ false, true }) do
		local generated = generate(stealth, useDebug)
		local chunk, compileError = loadstring(generated)
		assert(chunk, compileError)
		Parser:new({ LuaVersion = "LuaU" }):parse(generated)

		local snapshotStart = assert(generated:find("local refs", 1, true), "refs snapshot missing")
		local sanityStart = assert(generated:find("for%s+i%s*=", 1), "sanity loop missing")
		assert(snapshotStart < sanityStart, "refs must be captured before checks begin")
		for _, name in ipairs(globals) do
			assert(generated:find(name .. "%s*="), "missing snapshot for " .. name)
			local check = stealth and ("refs." .. name) or nil
			assert((check and generated:find(check, 1, true)) or hasEquality(generated, name, "refs." .. name),
				"missing final identity check for " .. name)
		end
		if not stealth then
			for _, item in ipairs(expected) do
				assert(hasEquality(generated, item[1], "refs." .. item[2]),
					"missing final identity check for " .. item[1])
			end
			for _, library in ipairs({
				{ "string", "stringLibrary" }, { "table", "tableLibrary" },
				{ "math", "mathLibrary" }, { "coroutine", "coroutineLibrary" },
				{ "debug", "debugLibrary" },
			}) do
				assert(hasEquality(generated, library[1], "refs." .. library[2]),
					"missing library identity check for " .. library[1])
			end
		end
	end
end

print("AntiTamper reference checks passed.")
