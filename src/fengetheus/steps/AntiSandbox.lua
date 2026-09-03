--
-- AntiSandbox.lua
--
-- This Step injects runtime checks that detect sandbox / dump / analysis
-- environments and break execution, while remaining transparent in a real
-- Roblox executor (or Lumora).  The checks are generated polymorphically:
-- random variable names, shuffled order, junk checks, and opaque predicates
-- so that a pattern-matching deobfuscator cannot strip them statically.
--
-- Techniques:
--   1. Return-value fingerprinting — call builtins whose return values a
--      sandbox hook alters (e.g. pcall(error) returns differently, tostring
--      on a sentinel table, select('#', ...) under a vararg hook).  Compare
--      against the expected value; mismatch => break.
--   2. Timing checks — measure wall-clock + os.clock deltas across a busy
--      loop.  Sandboxes / debug-hooked VMs are orders of magnitude slower.
--   3. debug.sethook / debug.gethook detection — dumpers install call/line
--      hooks to trace the VM.  If debug.gethook() returns non-nil and we
--      didn't set it => being traced.
--   4. Environment integrity — snapshot _G keys, check that getfenv(1) is
--      the real global env and that no extra hook globals (e.g. 'hookfunc',
--      'dump', 'getfenv' overrides) are present.
--   5. Executor-API presence — real Roblox executors expose getgenv,
--      hookmetamethod, getnamecallmethod, etc.  Sandboxes usually don't.
--      (Optional — configurable, because Lumora also exposes stubs.)
--   6. coroutine / thread fingerprint — create a coroutine and check its
--      status and debug.info; sandboxes that wrap coroutines break this.
--   7. xpcall error-message-handler probe — a real Lua runtime passes the
--      error object to the handler; some sandboxes pass a stringified copy.
--   8. collectgarbage("count") baseline — sandboxes with instrumented GC
--      report abnormal memory figures.
-- All checks funnel into a single 'valid' flag with opaque junk assignments
-- (borrowed from AntiTamper's sanity-loop style) so the failure path is not
-- obvious.  On failure the code either infinite-loops, errors, or silently
-- corrupts state (randomised per build).

local Step         = require("fengetheus.step")
local Parser       = require("fengetheus.parser")
local Enums        = require("fengetheus.enums")
local RandomStrings= require("fengetheus.randomStrings")
local logger       = require("logger")

local AntiSandbox = Step:extend()
AntiSandbox.Description = "Injects anti-sandbox / anti-dump runtime checks that break execution in analysis environments while remaining transparent in real Roblox executors."
AntiSandbox.Name = "Anti Sandbox"

AntiSandbox.SettingsDescriptor = {
	UseDebug = {
		type    = "boolean",
		default = true,
		description = "Use the debug library for hook/coroutine checks. Disable for environments without debug.",
	},
	CheckExecutorAPIs = {
		type    = "boolean",
		default = false,
		description = "Require Roblox executor APIs (getgenv, hookmetamethod, ...) to be present. Disable for plain Lua / Lumora testing.",
	},
	CheckTiming = {
		type    = "boolean",
		default = true,
		description = "Inject wall-clock timing checks against sandbox slowdowns.",
	},
	FailureMode = {
		type    = "enum",
		values  = { "loop", "error", "corrupt", "mixed" },
		default = "mixed",
		description = "How to react when a check fails: loop=infinite loop, error=hard error, corrupt=silently corrupt state, mixed=random per check.",
	},
	Intensity = {
		type    = "number",
		default = 3,
		min     = 1,
		max     = 8,
		description = "Number of distinct check groups to inject (1-8). Higher = more checks = more overhead.",
	},
}

-- ── helpers ──────────────────────────────────────────────────────────────

local function rint(lo, hi)
	return math.random(lo, hi)
end

local function rbool()
	return math.random(0, 1) == 1
end

local function rstr()
	-- Guarantee the first char is a letter so the result is a valid Lua identifier
	local first = string.char(math.random(97, 122)) -- a-z
	local rest = RandomStrings.randomString(math.random(2, 12))
	-- strip any leading digits from rest just in case
	rest = rest:gsub("^[0-9]+", "")
	if rest == "" then rest = "x" end
	return first .. rest
end

-- pick n distinct items from a list, randomly ordered
local function pick(list, n)
	local pool = {}
	for i = 1, #list do pool[i] = list[i] end
	local out = {}
	for i = 1, math.min(n, #pool) do
		local j = math.random(i, #pool)
		pool[i], pool[j] = pool[j], pool[i]
		out[i] = pool[i]
	end
	return out
end

-- Generate a failure snippet according to FailureMode
local function genFailure(mode, depth)
	depth = depth or 0
	local modes
	if mode == "mixed" then
		modes = { "loop", "error", "corrupt" }
		mode = modes[math.random(1, 3)]
	end
	if mode == "loop" then
		-- infinite loop — use while true with an opaque body so it is not
		-- trivially recognisable as a plain `while true do end`
		local v = rstr()
		local n = rint(2, 999)
		return string.format(
			"while true do local %s=%d if %s<0 then break end end", v, n, v)
	elseif mode == "error" then
		-- error with a number that looks like the "return 18272919" trick
		local errVal = rint(100000, 999999999)
		return string.format("error(%d)", errVal)
	else -- corrupt: silently overwrite a local so downstream logic breaks
		local v = rstr()
		return string.format("local %s=1/0", v)
	end
end

-- ── check generators ─────────────────────────────────────────────────────
-- Each returns a string of Lua 5.1 code that sets `valid` to false if the
-- check detects a sandbox.  Variable names are randomised.

-- 1. Return-value fingerprinting
local function checkReturnFingerprint()
	local tmpA, tmpB = rstr(), rstr()
	local sentinel = rstr()
	return string.format([[
do
-- pcall(error) must return (false, string) with the EXACT error message.
-- A sandbox that hooks pcall to catch errors may alter the return values
-- or modify the error message (e.g. prefixing it).
local %s, %s
%s, %s = pcall(error, "%s")
if %s or type(%s) ~= "string" or %s ~= "%s" then valid = false end
-- select('#', ...) must return exact count (hooks on select break this)
if type(select) == "function" and select('#', 1, nil, 3, nil) ~= 4 then valid = false end
-- tostring with __tostring metamethod must return the custom string
if type(setmetatable) == "function" and type(tostring) == "function" then
    local _mt = {__tostring = function() return "%s" end}
    if tostring(setmetatable({}, _mt)) ~= "%s" then valid = false end
end
end
]], tmpA, tmpB, tmpA, tmpB, sentinel, tmpA, tmpB, tmpB, sentinel, sentinel, sentinel)
end

-- 2. Timing check
local function checkTiming()
	local v1, v2, v3 = rstr(), rstr(), rstr()
	-- Keep iterations low because this code may run inside a Vmify VM
	-- where every instruction has significant overhead.  We are looking
	-- for debug-hook / single-step sandboxes that are 1000x+ slower,
	-- not normal VM overhead.
	local iterations = rint(50, 300)
	local threshold = rint(30, 60) -- very generous; only catches single-stepping sandboxes
	return string.format([[
do
-- Use os.clock if available (monotonic, higher resolution) else os.time
local _clock = os.clock or os.time
if type(_clock) == "function" then
    local %s = _clock()
    local %s = 0
    for _i = 1, %d do %s = %s + 1 end
    local %s = _clock() - %s
    -- if the trivial loop took more than %d seconds, we are being single-stepped
    if %s > %d then valid = false end
end
end
]], v1, v2, iterations, v2, v2, v3, v1, threshold, v3, threshold)
end

-- 3. debug.sethook detection
local function checkDebugHook()
	local v1, v2 = rstr(), rstr()
	return string.format([[
do
-- if a debug hook is already installed (by a dumper), gethook returns non-nil.
-- Only check if debug.gethook exists; some executors strip the debug lib.
if type(debug) == "table" and type(debug.gethook) == "function" then
    local %s = debug.gethook()
    if %s ~= nil then valid = false end
end
-- verify debug.sethook is a function if debug lib is present
if type(debug) == "table" then
    local %s = debug.sethook
    if %s and type(%s) ~= "function" then valid = false end
end
end
]], v1, v1, v2, v2)
end

-- 4. Environment integrity
local function checkEnvIntegrity()
	local v1, v2 = rstr(), rstr()
	-- list of globals that dumpers/sandboxes inject (randomised subset per build)
	local suspicious = { "dump", "deobfuscate", "decompile", "getsenv",
	                     "getrunningscripts", "getscripts", "getloadedmodules",
	                     "spy", "hookfunc", "replacefunction" }
	local picked = pick(suspicious, math.min(#suspicious, rint(3, 7)))
	local checks = {}
	for _, g in ipairs(picked) do
		table.insert(checks, string.format("if %s ~= nil then valid = false end", g))
	end
	local checkStr = table.concat(checks, "\n")
	return string.format([[
do
local %s = _G
if %s and %s._G ~= %s then valid = false end
-- getfenv(0) should be the global env (skip if getfenv absent)
if type(getfenv) == "function" then
    local %s = getfenv(0)
    if %s and %s._G and %s._G ~= %s then valid = false end
end
-- suspicious dumper globals
%s
end
]], v1, v1, v1, v2, v2, v2, v1, checkStr)
end

-- 5. Executor API presence (Roblox-specific)
local function checkExecutorAPI()
	local v1 = rstr()
	-- getgenv should return a table, and it should differ from _G in real executors
	return string.format([[
do
if type(getgenv) ~= "function" then valid = false end
if type(getrenv) ~= "function" then valid = false end
if type(hookmetamethod) ~= "function" then valid = false end
if type(getnamecallmethod) ~= "function" then valid = false end
if type(checkcaller) ~= "function" then valid = false end
-- getgenv() must return a table
local %s = getgenv and getgenv()
if type(%s) ~= "table" then valid = false end
end
]], v1, v1)
end

-- 6. coroutine fingerprint
local function checkCoroutine()
	local v1, v2 = rstr(), rstr()
	local retVal = rint(1, 999)
	return string.format([[
do
if type(coroutine) == "table" and type(coroutine.create) == "function" then
    local %s = coroutine.create(function() return %d end)
    if coroutine.status(%s) ~= "suspended" then valid = false end
    local ok, %s = coroutine.resume(%s)
    if not ok or %s ~= %d then valid = false end
end
end
]], v1, retVal, v1, v2, v1, v2, retVal)
end

-- 7. xpcall error-handler probe
local function checkXpcall()
	local v1, v2 = rstr(), rstr()
	local sentinel = rstr()
	-- Use a string error with level 0; xpcall must pass the exact error
	-- string to the handler.  Some sandboxes wrap/modify the error object.
	-- A table error is avoided because inside a Vmify VM the table identity
	-- may not survive the error/handler boundary.
	return string.format([[
do
local %s, %s
%s, %s = xpcall(function() error("%s", 0) end,
    function(e) return e end)
if %s or %s ~= "%s" then valid = false end
end
]], v1, v2, v1, v2, sentinel, v1, v2, sentinel)
end

-- 8. collectgarbage baseline
local function checkGC()
	local v1 = rstr()
	return string.format([[
do
-- collectgarbage("count") returns KB of memory in use; sandboxes with
-- instrumented GC or tiny sandboxes report implausible figures.  If
-- collectgarbage is absent (some executors strip it) we skip this check.
if type(collectgarbage) == "function" then
    local %s = collectgarbage("count")
    if %s and (%s < 1 or %s > 9999999) then valid = false end
end
end
]], v1, v1, v1, v1)
end

-- ── junk / opaque predicates (evade static stripping) ────────────────────
local function genJunkCheck()
	local v1 = rstr()
	local n1, n2 = rint(1, 999), rint(1, 999)
	-- opaque predicate that's always true but looks meaningful
	return string.format(
		"do local %s = %d if %s ~= %d then valid = false end end",
		v1, n1, v1, n1)
end

-- ── main step entry point ────────────────────────────────────────────────

local ALL_CHECKS = {
	checkReturnFingerprint,
	checkTiming,
	checkDebugHook,
	checkEnvIntegrity,
	checkExecutorAPI,
	checkCoroutine,
	checkXpcall,
	checkGC,
}

function AntiSandbox:init() end

function AntiSandbox:apply(ast)
	-- Build the list of checks to inject based on settings + intensity
	local checks = {}

	-- Always include return-value fingerprinting (core technique)
	table.insert(checks, checkReturnFingerprint)

	-- Add timing check
	if self.CheckTiming then
		table.insert(checks, checkTiming)
	end

	-- Add debug-based checks
	if self.UseDebug then
		table.insert(checks, checkDebugHook)
		table.insert(checks, checkCoroutine)
	end

	-- Environment integrity always
	table.insert(checks, checkEnvIntegrity)

	-- Executor API check (optional — off by default for Lumora compat)
	if self.CheckExecutorAPIs then
		table.insert(checks, checkExecutorAPI)
	end

	-- xpcall + GC
	table.insert(checks, checkXpcall)
	table.insert(checks, checkGC)

	-- Trim to intensity
	if #checks > self.Intensity then
		checks = pick(checks, self.Intensity)
	end

	-- Shuffle check order
	for i = #checks, 2, -1 do
		local j = math.random(1, i)
		checks[i], checks[j] = checks[j], checks[i]
	end

	-- Generate code body
	local parts = {}
	table.insert(parts, "do local valid = true")

	-- Interleave real checks with junk checks
	for i, checkFn in ipairs(checks) do
		local ok, code = pcall(checkFn)
		if ok and code then
			table.insert(parts, code)
		end
		-- add 1-2 junk checks between real ones
		if rbool() then
			table.insert(parts, genJunkCheck())
		end
	end

	-- Failure path: if valid is false, break
	local failMode = self.FailureMode
	if failMode == "mixed" then
		-- generate 2-3 different failures
		local nFail = rint(2, 3)
		local fails = {}
		for i = 1, nFail do
			table.insert(fails, genFailure("mixed"))
		end
		table.insert(parts, "if not valid then " .. table.concat(fails, " ") .. " end")
	else
		table.insert(parts, "if not valid then " .. genFailure(failMode) .. " end")
	end

	-- Add a final opaque sanity check (always passes, evades stripping)
	local sv = rstr()
	local sn = rint(100, 999)
	table.insert(parts, string.format(
		"if valid and %s == nil then local %s = %d end", sv, sv, sn))

	table.insert(parts, "end")

	local code = table.concat(parts, "\n")

	-- Parse and inject into the AST (same pattern as AntiTamper)
	local parsed = Parser:new({ LuaVersion = Enums.LuaVersion.Lua51 }):parse(code)
	local doStat = parsed.body.statements[1]
	doStat.body.scope:setParent(ast.body.scope)
	table.insert(ast.body.statements, 1, doStat)

	return ast
end

return AntiSandbox
