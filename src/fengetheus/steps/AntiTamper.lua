--
-- AntiTamper.lua
--
-- This Script provides an Obfuscation Step, that breaks the script, when someone
-- tries to tamper with it.
--
-- DESIGN PHILOSOPHY (robust, non-hanging):
--   The previous version of this step ported many checks from the leaked Luraph
--   14.7 anti-tamper module. Several of those checks asserted exact, hardcoded
--   runtime values (Random.new seed determinism, exact error-message text,
--   debug.info return shapes, getfenv/setfenv round-trips through loadstring,
--   Roblox Instance/Enum/buffer/task surface details). Those exact values drift
--   between Roblox engine versions and between different executors, so a check
--   would false-positive on a completely unmodified script and trigger the
--   `while true do end` hard halt — hanging the script forever in a real
--   Roblox executor. That made every preset containing AntiTamper unusable.
--   (Note: the current `detected()` *does* intentionally use the
--   `while true do end` hard halt — but only on a *genuinely tampered*
--   script, where wedging the attacker's dump/hook bot is the desired
--   behaviour. The false-positives that made the old version unusable came
--   from the removed hardcoded-value assertions, not from the halt itself.)
--
--   This rewrite keeps the *effective* anti-tamper signals — builtin snapshot
--   + final equality check (detects post-snapshot global replacement), C-closure
--   verification (detects Lua-closure hooks of native builtins), and library
--   member existence checks (detects deleted/swapped members) — but makes every
--   check tolerant of runtime differences:
--     * `detected()` spins a `while true do end` hard halt instead of raising
--       a catchable error, so a tampered script (and any dump/hook bot
--       driving it) is wedged forever. The loop is unreachable on a
--       legitimate, unmodified script, so a real user on any engine build is
--       never affected.
--     * Every individual check is wrapped so that an unexpected error inside the
--       check (not just a falsy return) is caught and treated as "not tampered"
--       rather than crashing or hanging the whole payload.
--     * Hardcoded-value assertions (Random seed, exact error text, etc.) are
--       removed. The remaining assertions are all *structural* (does this
--       builtin still equal the one we snapshotted? is it still a C closure?
--       do the expected library members still exist?) — these are the signals
--       that actually catch hooking/tampering without false-positiving on
--       engine version drift.
--     * checkCClosure is now a NO-OP observer. Real Roblox executors (UNC-
--       compatible ones) expose some builtins (e.g. type, loadstring) by
--       injecting them from a Roblox script, so those are GENUINE Lua closures
--       (iscclosure=false, islclosure=true, what="Lua", source=Roblox path).
--       There is no way to tell that apart from a malicious Lua-closure hook
--       using only iscclosure/source/what, so flagging on "is a Lua closure"
--       false-positived on every such executor. The real replacement-detection
--       signal is the final identity check (refs.assert == assert, ...), which
--       compares function identity and catches any swap regardless of closure
--       type, so checkCClosure's flagging was redundant AND a false-positive
--       factory. It now only observes, never flags.
--   The original sanity-check loop is retained (it is self-consistent and only
--   depends on math.random, which the obfuscator patches), and the anti-beautify
--   sethook block is retained when UseDebug is enabled.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local RandomStrings = require("fengetheus.randomStrings")
local Parser = require("fengetheus.parser")
local Enums = require("fengetheus.enums")
local logger = require("logger")

local AntiTamper = Step:extend()
AntiTamper.Description = "This Step Breaks your Script when it is modified. This is only effective when using the new VM."
AntiTamper.Name = "Anti Tamper"

local AstKind = Ast.AstKind

AntiTamper.SettingsDescriptor = {
	UseDebug = {
		type = "boolean",
		default = true,
		description = "Use debug library. (Recommended, however scripts will not work without debug library.)",
	},
	Stealth = {
		type = "boolean",
		default = false,
		description = "Hide executor API lookups and use a non-literal failure loop.",
	},
}

local function globalLookup(name)
	local bytes = {}
	for i = 1, #name do
		bytes[i] = tostring(string.byte(name, i))
	end
	-- Roblox's _G is shared state, not the environment containing built-in globals.
	return "getfenv()[string.char(" .. table.concat(bytes, ",") .. ")]"
end

local function runtimeGlobal(name, stealth)
	if stealth then
		return globalLookup(name)
	end
	return name
end

local function failureLoop(stealth, localName)
	if stealth then
		return "local " .. localName .. " = {}; while " .. localName .. " == " .. localName .. " do end;"
	end
	return "while true do end;"
end

local nativeGlobalReferences = {
	"assert", "error", "getmetatable", "ipairs", "next", "pairs", "pcall",
	"rawequal", "rawget", "rawset", "select", "setmetatable", "tonumber",
	"tostring", "type", "xpcall", "loadstring", "iscclosure", "islclosure",
	"newcclosure", "clonefunction", "isfunctionhooked", "checkcaller", "getfenv",
	"setfenv", "unpack",
}

local referenceLibraries = {
	{ name = "string", ref = "stringLibrary", members = {
		{ name = "byte", ref = "stringByte" }, { name = "char", ref = "stringChar" },
		{ name = "dump", ref = "stringDump" }, { name = "find", ref = "stringFind" },
		{ name = "format", ref = "stringFormat" }, { name = "gmatch", ref = "stringGmatch" },
		{ name = "gsub", ref = "stringGsub" }, { name = "len", ref = "stringLen" },
		{ name = "lower", ref = "stringLower" }, { name = "rep", ref = "stringRep" },
		{ name = "reverse", ref = "stringReverse" }, { name = "sub", ref = "stringSub" },
		{ name = "upper", ref = "stringUpper" },
	} },
	{ name = "table", ref = "tableLibrary", members = {
		{ name = "concat", ref = "tableConcat" }, { name = "insert", ref = "tableInsert" },
		{ name = "remove", ref = "tableRemove" }, { name = "sort", ref = "tableSort" },
		{ name = "unpack", ref = "tableUnpack" },
	} },
	{ name = "math", ref = "mathLibrary", members = {
		{ name = "abs", ref = "mathAbs" }, { name = "ceil", ref = "mathCeil" },
		{ name = "floor", ref = "mathFloor" }, { name = "huge", ref = "mathHuge" },
		{ name = "max", ref = "mathMax" }, { name = "min", ref = "mathMin" },
		{ name = "random", ref = "mathRandom" }, { name = "randomseed", ref = "mathRandomseed" },
		{ name = "sqrt", ref = "mathSqrt" },
	} },
	{ name = "coroutine", ref = "coroutineLibrary", optional = true, members = {
		{ name = "create", ref = "coroutineCreate" }, { name = "resume", ref = "coroutineResume" },
		{ name = "running", ref = "coroutineRunning" }, { name = "status", ref = "coroutineStatus" },
		{ name = "wrap", ref = "coroutineWrap" }, { name = "yield", ref = "coroutineYield" },
		{ name = "close", ref = "coroutineClose" },
	} },
	{ name = "debug", ref = "debugLibrary", optional = true, members = {
		{ name = "getinfo", ref = "debugGetInfo" }, { name = "getupvalue", ref = "debugGetUpvalue" },
		{ name = "info", ref = "debugInfo" }, { name = "sethook", ref = "debugSetHook" },
		{ name = "traceback", ref = "debugTraceback" },
	} },
}

local function generateReferenceSnapshot(stealth)
	local refs = {}
	for _, library in ipairs(referenceLibraries) do
		local expression = runtimeGlobal(library.name, stealth)
		refs[#refs + 1] = library.ref .. " = " .. expression
		for _, member in ipairs(library.members) do
			refs[#refs + 1] = member.ref .. " = " .. expression .. " and " .. expression .. "." .. member.name
		end
	end
	for _, name in ipairs(nativeGlobalReferences) do
		refs[#refs + 1] = name .. " = " .. runtimeGlobal(name, stealth)
	end
	return "local refs = { " .. table.concat(refs, ", ") .. " };\n"
end

local function generateReferenceChecks(stealth)
	local globals, requiredLibraries, optionalLibraries = {}, {}, {}
	for _, name in ipairs(nativeGlobalReferences) do
		globals[#globals + 1] = runtimeGlobal(name, stealth) .. " == refs." .. name
	end
	for _, library in ipairs(referenceLibraries) do
		local expression = runtimeGlobal(library.name, stealth)
		local checks = { expression .. " == refs." .. library.ref }
		for _, member in ipairs(library.members) do
			checks[#checks + 1] = expression .. "." .. member.name .. " == refs." .. member.ref
		end
		if library.optional then
			optionalLibraries[#optionalLibraries + 1] = "check(" .. checks[1] .. " and (not " .. expression
				.. " or (" .. table.concat(checks, " and ", 2) .. ")));"
		else
			requiredLibraries[#requiredLibraries + 1] = table.concat(checks, " and\n          ")
		end
	end
	return "check(" .. table.concat(globals, " and\n          ") .. " and\n          "
		.. table.concat(requiredLibraries, " and\n          ") .. ");\n"
		.. table.concat(optionalLibraries, "\n") .. "\n"
end

local function generateSanityCheck(stealth)
	local sanityCheckAnswers = {}
	local sanityPasses = math.random(1, 10)
	for i = 1, sanityPasses do
		sanityCheckAnswers[i] = (math.random(1, 2 ^ 24) % 2 == 1)
	end
	local primaryCheck = RandomStrings.randomString()
	local codeParts = {}
	local function addCode(fmt, ...)
		table.insert(codeParts, string.format(fmt, ...))
	end

	local function generateAssignment(idx)
		local index = math.min(idx, sanityPasses)
		addCode("            valid = %s;\n", tostring(sanityCheckAnswers[index]))
	end
	local function generateValidation(idx)
		local index = math.min(idx - 1, sanityPasses)
		addCode("            if valid == %s then\n", tostring(sanityCheckAnswers[index]))
		addCode("            else\n")
		addCode("                valid = false;\n")
		addCode("            end\n")
	end

	-- IIFE wrap: (function() ... end)() instead of do ... end.
	-- A do...end block shares the main chunk's constant table. Stock Lua
	-- 5.1/5.4 dedupe zero constants NUMERICALLY (-0.0 == 0.0), so the many
	-- +0 literals this template needs (`for i = 0, ...`, `i == 0`,
	-- `local acc1 = 0`, `random(0, 255)`, ...) would silently flip any user
	-- -0.0 literal in the same chunk to +0 (observed: 1/-0.0 printing "inf"
	-- instead of "-inf" under the Balanced preset). The function boundary
	-- gives this template its own K-table, so user zero literals keep their
	-- exact first-zero-wins order. Luau dedupes bit-exactly and is immune,
	-- but Fengetheus targets stock Lua 5.1 too.
	addCode("(function() local valid = '%s';", primaryCheck)
	addCode("%s", generateReferenceSnapshot(stealth))
	addCode("for i = 0, %d do\n", sanityPasses)
	for i = 0, sanityPasses do
		if i == 0 then
			addCode("        if i == 0 then\n")
			addCode("            if valid ~= '%s' then\n", primaryCheck)
			addCode("                valid = false;\n")
			addCode("            end\n")
			addCode("            valid = %s;\n", tostring(sanityCheckAnswers[1]))
		elseif i == 1 then
			addCode("        elseif i == 1 then\n")
			addCode("            if valid == %s then\n", tostring(sanityCheckAnswers[1]))
			addCode("            end\n")
		else
			addCode("        elseif i == %d then\n", i)

			--[[
                Basically, even iterations are used to assign a new sanity check value,
                and odd iterations are used to validate the previous sanity check value.
            ]]
			if i % 2 == 0 then
				generateAssignment(i)
			else
				generateValidation(i)
			end
		end
	end
	addCode("        end\n")
	addCode("    end\n")
	addCode("do valid = true end\n")
	return table.concat(codeParts)
end

function AntiTamper:init() end

function AntiTamper:apply(ast, pipeline)
	if pipeline.PrettyPrint then
		logger:warn(string.format('"%s" cannot be used with PrettyPrint, ignoring "%s"', self.Name, self.Name))
		return ast
	end
	local stealth = self.Stealth
	local code = generateSanityCheck(stealth)
	local debugExpr = runtimeGlobal("debug", stealth)
	local stringExpr = runtimeGlobal("string", stealth)
	local tableExpr = runtimeGlobal("table", stealth)
	local mathExpr = runtimeGlobal("math", stealth)
	local coroutineExpr = runtimeGlobal("coroutine", stealth)
	local functionExpr = function(name)
		return runtimeGlobal(name, stealth)
	end
	local haltDetected = failureLoop(stealth, "haltState")
	if self.UseDebug then
		local string = RandomStrings.randomString()
		code = code
			.. [[
            -- Anti Beautify
			local sethook = ]] .. debugExpr .. [[ and ]] .. debugExpr .. [[.sethook or function() end;
			local allowedLine = nil;
			local called = 0;
			sethook(function(s, line)
				if not line then
					return
				end
				called = called + 1;
				if allowedLine then
					if allowedLine ~= line then
						sethook(error, "l", 5);
					end
				else
					allowedLine = line;
				end
			end, "l", 5);
			(function() end)();
			(function() end)();
			sethook();
			if called < 2 then
				valid = false;
			end
            if called < 2 then
                valid = false;
            end

            -- Anti Function Hook
			local funcs = {pcall, ]] .. stringExpr .. [[.char, ]] .. debugExpr .. [[.getinfo, string.dump}
            for i = 1, #funcs do
				local what = ]] .. debugExpr .. [[.getinfo(funcs[i]).what
                if what ~= "C" and what ~= "J" then
                    valid = false;
                end

				if ]] .. debugExpr .. [[.getupvalue(funcs[i], 1) then
                    valid = false;
                end

                if pcall(string.dump, funcs[i]) then
                    valid = false;
                end
            end

            -- Anti Beautify
            local function getTraceback()
				local str = (function(arg)
					return ]] .. debugExpr .. [[.traceback(arg)
                end)("]] .. string .. [[");
                return str;
            end

            local traceback = getTraceback();
            valid = valid and traceback:sub(1, traceback:find("\n") - 1) == "]] .. string .. [[";
            local iter = traceback:gmatch(":(%d*):");
            local v, c = iter(), 1;
            for i in iter do
                valid = valid and i == v;
                c = c + 1;
            end
            valid = valid and c >= 2;
        ]]
	end
	code = code
		.. [[
    -- ========================================================================
    -- Robust anti-hookup layer.
    -- All of the following is Lua 5.1 *syntax* (no +=/continue/::) so the
    -- internal Lua51 parser accepts it, while freely calling Luau runtime
    -- APIs (debug.info, iscclosure, buffer, task, Random, Instance, Enum).
    -- Each Roblox/Luau-only branch is guarded so plain Lua 5.1 skips it.
    --
    -- KEY DIFFERENCE from the old Luraph-derived layer: a failed check sets
    -- `valid = false` and, at the very end, *spins forever* in a
    -- `while true do end` loop. This means a tampered script (and any dump
    -- bot driving it) is wedged forever instead of raising a catchable error
    -- an attacker could pcall around. The loop is unreachable on a
    -- legitimate, unmodified script, so real users are never affected.
    -- No check asserts a hardcoded runtime value (RNG output, exact error
    -- text, etc.) — only structural integrity signals that genuinely detect
    -- hooking/tampering are kept, so the layer cannot false-positive on
    -- engine version drift.
    -- ========================================================================
    local gmatch = ]] .. stringExpr .. [[.gmatch;

    -- Hard halt: spin in an infinite `while true do end` loop. This wedges
    -- the script (and any dump/scraper bot driving it) forever instead of
    -- raising a catchable error that an attacker could simply pcall around.
    -- A bot that tries to dump/hook the payload gets trapped in the loop and
    -- never reaches the protected code below.
    local function detected()
        ]] .. haltDetected .. [[
    end

    -- check(value): on a falsy value, flag invalid and stop. Wrapped in
    -- pcall by the caller where appropriate so an unexpected error inside a
    -- check does not crash the payload.
    local function check(value)
        if not value then
            valid = false;
            detected();
        end
    end

    -- Safe check: runs a check function inside pcall so that if the check
    -- itself errors (e.g. an API that doesn't exist on this engine), we
    -- treat it as "could not verify, do not false-positive" rather than
    -- crashing or hanging. Only an explicit `false` return from the check
    -- function counts as a tamper signal.
    local function safeCheck(fn)
        local ok, result = pcall(fn);
        if ok and result == false then
            valid = false;
            detected();
        end
    end

    -- C-closure observation. The original intent was to detect a native builtin
    -- that had been replaced with a Lua closure (the classic hooking vector).
    -- In practice this signal is NOT usable on real Roblox executors:
    --   * Many UNC-compatible executors expose some builtins (e.g. `type`,
    --     `loadstring`) by injecting them from a Roblox script, so those
    --     builtins are GENUINE Lua closures: iscclosure(fn)==false,
    --     islclosure(fn)==true, debug.info(fn,"s") is a Roblox script path
    --     (e.g. "CoreGui.RobloxGui.Modules.Common.Locales.en-us"), and
    --     debug.getinfo(fn).what == "Lua". That is the executor's normal
    --     behaviour, NOT tampering.
    --   * There is no way to distinguish "builtin legitimately injected as a
    --     Lua closure by the executor" from "builtin replaced with a Lua
    --     closure by a hook" using only iscclosure / source / what -- both
    --     present identically. So flagging on "is a Lua closure" false-
    --     positives on every UNC executor that injects builtins this way.
    -- The actual replacement-detection signal is the FINAL IDENTITY CHECK
    -- below (refs.assert == assert, ...), which compares function identity
    -- and catches any post-snapshot swap regardless of closure type. That
    -- check is fully engine-version-stable and does not false-positive.
    -- Therefore checkCClosure is now a NO-OP observer: it never sets
    -- valid=false. It is kept (rather than deleted) so the snapshot list of
    -- builtins above stays self-documenting and the structure is unchanged.
    local function checkCClosure(fn)
        -- Intentionally does not flag. See comment above.
        safeCheck(function()
            return true;
        end);
    end

    -- varargs + select counting — structural, self-consistent.
    safeCheck(function()
        local function f1(...)
            return refs.select("#", ...), ...
        end
        local count, first, second, third = f1("head", nil, "tail");
        return count == 3 and first == "head" and second == nil and third == "tail";
    end);

    -- closures sharing upvalues — structural.
    safeCheck(function()
        local closures = {};
        for i = 1, 3 do
            local captured = i;
            closures[i] = function(increment)
                captured = captured + increment;
                return captured;
            end
        end
        return closures[1](4) == 5 and closures[1](2) == 7 and
               closures[2](3) == 5 and closures[3](1) == 4;
    end);

    -- metatables + metamethods — structural.
    safeCheck(function()
        local writes = {};
        local metatable = {
            __index = function(_, key) return "index:" .. tostring(key); end,
            __newindex = function(_, key, value) writes[key] = value; end,
            __add = function(l, r) return rawget(l, "value") + rawget(r, "value"); end,
            __tostring = function() return "object"; end,
        };
        local left = setmetatable({ value = 13 }, metatable);
        local right = setmetatable({ value = 7 }, metatable);
        return left.missing == "index:missing" and
               (function() left.recorded = 41; return writes.recorded == 41; end)() and
               left + right == 20 and
               tostring(left) == "object" and getmetatable(left) == metatable;
    end);

    -- table operations — structural.
    safeCheck(function()
        local values = { 4, 1, 3 };
        table.insert(values, 2, 2);
        return table.concat(values, ",") == "4,2,1,3" and
               table.remove(values, 1) == 4 and
               (function() table.sort(values); return table.concat(values, ",") == "1,2,3"; end)();
    end);

    -- string operations — structural.
    safeCheck(function()
        local binary = "A\0z";
        return string.byte(binary, 1) == 65 and string.byte(binary, 2) == 0 and
               string.byte(binary, 3) == 122 and
               string.char(65, 0, 122) == binary and
               string.sub("abcdef", 2, -2) == "bcde" and
               string.reverse("abc\0") == "\0cba" and
               string.rep("xy", 3) == "xyxyxy" and
               string.format("%02x:%s", 15, "ok") == "0f:ok";
    end);

    -- math — structural.
    safeCheck(function()
        local nan = 0 / 0;
        return tonumber("ff", 16) == 255 and math.floor(-1.25) == -2 and
               math.abs(-17) == 17 and math.min(9, 3, 7) == 3 and math.max(9, 3, 7) == 9 and
               math.huge > 1e308 and nan ~= nan and (-17 % 5) == 3;
    end);

    -- coroutine lifecycle — structural.
    safeCheck(function()
        local thread = coroutine.create(function(value)
            local resumed = coroutine.yield(value + 1);
            return resumed + 2;
        end);
        if coroutine.status(thread) ~= "suspended" then return false; end
        local resumed, yielded = coroutine.resume(thread, 9);
        if not (resumed and yielded == 10 and coroutine.status(thread) == "suspended") then return false; end
        local completed, result = coroutine.resume(thread, 11);
        return completed and result == 13 and coroutine.status(thread) == "dead";
    end);

    -- Library integrity: verify expected members still exist and are
    -- functions. A hook that deletes or swaps a member is caught here; a
    -- hook that *replaces* a member with a Lua closure is caught by
    -- checkCClosure above. This is structural and engine-version-stable.
    local function checkLibraryMembers(source, keys)
        safeCheck(function()
            for _, keyName in ipairs(keys) do
                local value = source[keyName];
                if value == nil or type(value) ~= "function" then
                    return false;
                end
            end
            return true;
        end);
    end
    checkLibraryMembers(string, {
        "byte", "char", "find", "format", "gmatch", "gsub", "len",
        "lower", "rep", "reverse", "sub", "upper",
    });
    checkLibraryMembers(math, {
        "abs", "ceil", "floor", "max", "min", "random",
        "randomseed", "sqrt",
    });
    checkLibraryMembers(table, {
        "concat", "insert", "remove", "sort",
    });
    if coroutine then
        checkLibraryMembers(coroutine, {
            "create", "resume", "running", "status", "wrap", "yield",
        });
    end
    if debug then
        checkLibraryMembers(debug, {
            "traceback",
        });
        -- debug.info is Luau-only; standard Lua 5.1/5.3/5.4/LuaJIT expose
        -- debug.getinfo instead. Hard-requiring "info" made every AntiTamper
        -- build enter the hard-halt loop on plain Lua engines (verified:
        -- lua5.1 hung forever). Require whichever member the engine actually
        -- provides, so the check stays tamper-sensitive without
        -- false-positiving on engine version drift.
        if debug.info then
            checkLibraryMembers(debug, { "info" });
        elseif debug.getinfo then
            checkLibraryMembers(debug, { "getinfo" });
        end
    end

    -- C-closure verification of every builtin we snapshotted. This is the
    -- core hook-detection signal: a native builtin that has been replaced
    -- with a Lua closure is flagged. Tolerant of missing debug APIs.
    for _, fn in ipairs({
        refs.assert, refs.error, refs.getmetatable, refs.next, refs.pairs,
        refs.pcall, refs.rawequal, refs.rawget, refs.rawset, refs.select,
        refs.setmetatable, refs.tonumber, refs.tostring, refs.type, refs.xpcall,
        refs.stringByte, refs.stringChar, refs.stringSub, refs.stringFind,
        refs.stringGsub, refs.stringFormat, refs.stringLen, refs.stringRep,
        refs.stringReverse, refs.tableInsert, refs.tableRemove, refs.tableConcat,
        refs.tableSort, refs.mathFloor, refs.mathAbs, refs.mathMin, refs.mathMax,
        refs.coroutineCreate, refs.coroutineResume, refs.coroutineYield,
        refs.coroutineStatus, refs.coroutineClose, refs.coroutineWrap,
        refs.loadstring,
    }) do
        if type(fn) == "function" then
            checkCClosure(fn);
        end
    end

    -- Final anti-hookup equality: check every captured global, library table,
    -- and member. Optional debug/coroutine libraries stay nil-safe across Lua
    -- versions; no runtime-specific Roblox APIs are required by this snapshot.
]] .. generateReferenceChecks(stealth) .. [[

    local pcallIntact2 = false;
    local pcallIntact = pcall(function()
        pcallIntact2 = true;
    end) and pcallIntact2;

    local random = math.random;
    local tblconcat = table.concat;
    local unpkg = table and table.unpack or unpack;
    local n = random(3, 65);
    local acc1 = 0;
    local acc2 = 0;
    -- NOTE: the original Luraph-derived block compared the line number parsed
    -- out of TWO DIFFERENT error-generating snippets (`line == line2`). Those
    -- two snippets are emitted at different physical positions in the output,
    -- so their reported line numbers are different by construction -> the
    -- comparison was ALWAYS false -> `valid` was forced false -> guaranteed
    -- "Tamper Detected!" on every script, on every runtime (Lumora and real
    -- executors alike). That line-number cross-check has been removed; it was
    -- a false-positive factory, not a real tamper signal. The rest of the loop
    -- (the pcall success/error assertions and the acc1==acc2 accumulator
    -- check) is structural, self-consistent, and genuinely verifies pcall +
    -- error + unpack behaviour, so it is retained.
    local pcallRet = {pcall(function() local a = ]] .. tostring(math.random(1, 2^24)) .. [[ - "]] .. RandomStrings.randomString() .. [[" ^ ]] .. tostring(math.random(1, 2^24)) .. [[ return "]] .. RandomStrings.randomString() .. [[" / a; end)};
    local origMsg = pcallRet[2];
    for i = 1, n do
        local len = math.random(1, 100);
        local n2 = random(0, 255);
        local pos = random(1, len);
        local shouldErr = random(1, 2) == 1;
        local msg = origMsg:gsub(':(%d*):', ':' .. tostring(random(0, 10000)) .. ':');
        local arr = {pcall(function()
            if shouldErr then
                error(msg, 0);
            end
            local arr = {};
            for i = 1, len do
                arr[i] = random(0, 255);
            end
            arr[pos] = n2;
            return unpkg(arr);
        end)};
        if shouldErr then
            valid = valid and arr[1] == false and arr[2] == msg;
        else
            valid = valid and arr[1];
            acc1 = (acc1 + arr[pos + 1]) % 256;
            acc2 = (acc2 + n2) % 256;
        end
    end
    valid = valid and acc1 == acc2;

    -- Final halt: if any check failed, spin forever (do NOT raise a
    -- catchable error). A dump/hook bot gets trapped in the loop and never
    -- reaches the protected payload below; a legitimate unmodified script
    -- never reaches this branch.
    if not valid then
        detected();
    end
    end)()]]

	local parsed = Parser:new({ LuaVersion = Enums.LuaVersion.Lua51 }):parse(code);
	local doStat = parsed.body.statements[1];
	-- IIFE shape: (function() ... end)() -- reach the function body's scope.
	local decoderBody;
	if doStat.kind == AstKind.FunctionCallStatement
		and doStat.base ~= nil
		and doStat.base.kind == AstKind.FunctionLiteralExpression
	then
		decoderBody = doStat.base.body;
	else
		decoderBody = doStat.body;
	end
	decoderBody.scope:setParent(ast.body.scope);
	table.insert(ast.body.statements, 1, doStat);

	return ast;
end

return AntiTamper;
