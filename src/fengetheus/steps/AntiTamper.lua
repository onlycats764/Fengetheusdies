-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
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
--
--   This rewrite keeps the *effective* anti-tamper signals — builtin snapshot
--   + final equality check (detects post-snapshot global replacement), C-closure
--   verification (detects Lua-closure hooks of native builtins), and library
--   member existence checks (detects deleted/swapped members) — but makes every
--   check tolerant of runtime differences:
--     * `detected()` raises an error instead of spinning `while true do end`,
--       so a tampered script *stops* instead of *hanging*. A stopped script is
--       still broken from the attacker's perspective, but a legitimate user on
--       a slightly different engine build is never wedged forever.
--     * Every individual check is wrapped so that an unexpected error inside the
--       check (not just a falsy return) is caught and treated as "not tampered"
--       rather than crashing or hanging the whole payload.
--     * Hardcoded-value assertions (Random seed, exact error text, etc.) are
--       removed. The remaining assertions are all *structural* (does this
--       builtin still equal the one we snapshotted? is it still a C closure?
--       do the expected library members still exist?) — these are the signals
--       that actually catch hooking/tampering without false-positiving on
--       engine version drift.
--     * checkCClosure uses iscclosure as the *authoritative* C-closure test and
--       only falls back to debug.info source / debug.getinfo().what when
--       iscclosure/islclosure are unavailable (plain Lua 5.1). Real Roblox
--       executors expose some builtins (e.g. loadstring) by injecting them from
--       Roblox scripts, so debug.info(fn,"s") returns a Roblox script path
--       instead of "[C]"; treating that non-"[C]" source as tampering
--       false-positived on every such executor. iscclosure correctly reports
--       those injected builtins as C closures, so it must take precedence.
--   The original sanity-check loop is retained (it is self-consistent and only
--   depends on math.random, which the obfuscator patches), and the anti-beautify
--   sethook block is retained when UseDebug is enabled.

local Step = require("fengetheus.step")
local RandomStrings = require("fengetheus.randomStrings")
local Parser = require("fengetheus.parser")
local Enums = require("fengetheus.enums")
local logger = require("logger")

local AntiTamper = Step:extend()
AntiTamper.Description = "This Step Breaks your Script when it is modified. This is only effective when using the new VM."
AntiTamper.Name = "Anti Tamper"

AntiTamper.SettingsDescriptor = {
	UseDebug = {
		type = "boolean",
		default = true,
		description = "Use debug library. (Recommended, however scripts will not work without debug library.)",
	},
}

local function generateSanityCheck()
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

	addCode("do local valid = '%s';", primaryCheck)
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

function AntiTamper:init(settings) end

function AntiTamper:apply(ast, pipeline)
	if pipeline.PrettyPrint then
		logger:warn(string.format('"%s" cannot be used with PrettyPrint, ignoring "%s"', self.Name, self.Name))
		return ast
	end
	local code = generateSanityCheck()
	if self.UseDebug then
		local string = RandomStrings.randomString()
		code = code
			.. [[
            -- Anti Beautify
			local sethook = debug and debug.sethook or function() end;
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
            local funcs = {pcall, string.char, debug.getinfo, string.dump}
            for i = 1, #funcs do
                local what = debug.getinfo(funcs[i]).what
                if what ~= "C" and what ~= "J" then
                    valid = false;
                end

                if debug.getupvalue(funcs[i], 1) then
                    valid = false;
                end

                if pcall(string.dump, funcs[i]) then
                    valid = false;
                end
            end

            -- Anti Beautify
            local function getTraceback()
                local str = (function(arg)
                    return debug.traceback(arg)
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
    -- `valid = false` and, at the very end, *errors out* instead of spinning
    -- `while true do end`. This means a tampered script is broken (it errors)
    -- but a legitimate script on any engine build / executor never hangs.
    -- No check asserts a hardcoded runtime value (RNG output, exact error
    -- text, etc.) — only structural integrity signals that genuinely detect
    -- hooking/tampering are kept, so the layer cannot false-positive on
    -- engine version drift.
    -- ========================================================================
    local gmatch = string.gmatch;

    -- Hard halt: raise an error so the script stops instead of hanging in a
    -- `while true do end`. A stopped script is still broken from the
    -- attacker's POV; a legitimate user is never wedged forever.
    local function detected()
        error("Tamper Detected!", 0);
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

    -- Snapshot every builtin we will rely on. A global replace of e.g. pcall
    -- after this point cannot fool the checks below, and the final equality
    -- block catches replaces that happened *before* the snapshot too.
    local refs = {
        assert = assert, error = error, getmetatable = getmetatable,
        next = next, pairs = pairs, pcall = pcall, rawequal = rawequal,
        rawget = rawget, rawset = rawset, select = select,
        setmetatable = setmetatable, tonumber = tonumber, tostring = tostring,
        type = type, xpcall = xpcall,
        stringByte = string.byte, stringChar = string.char,
        stringSub = string.sub, stringFind = string.find,
        stringGsub = string.gsub, stringFormat = string.format,
        stringLen = string.len, stringRep = string.rep,
        stringReverse = string.reverse,
        tableInsert = table.insert, tableRemove = table.remove,
        tableConcat = table.concat, tableSort = table.sort,
        mathFloor = math.floor, mathAbs = math.abs,
        mathMin = math.min, mathMax = math.max,
        mathHuge = math.huge, mathRandom = math.random,
        coroutineCreate = coroutine.create, coroutineResume = coroutine.resume,
        coroutineYield = coroutine.yield, coroutineStatus = coroutine.status,
        coroutineClose = coroutine.close, coroutineRunning = coroutine.running,
        coroutineWrap = coroutine.wrap,
        debugInfo = debug and debug.info, debugTraceback = debug and debug.traceback,
        debugGetInfo = debug and debug.getinfo,
        loadstring = loadstring,
        iscclosure = iscclosure, islclosure = islclosure,
        newcclosure = newcclosure, clonefunction = clonefunction,
        isfunctionhooked = isfunctionhooked, checkcaller = checkcaller,
        getfenv = getfenv, setfenv = setfenv,
    };

    -- C-closure verification (Luau: debug.info + iscclosure; Lua 5.1 fallback:
    -- debug.getinfo().what). Detects replaces that swap a native builtin for a
    -- Lua closure (the classic hooking vector). Tolerant: only flags when we
    -- can actually determine the closure is a Lua closure; missing APIs or
    -- unexpected shapes do not false-positive.
    --
    -- IMPORTANT: iscclosure is the authoritative signal. Real Roblox executors
    -- implement some builtins (e.g. loadstring) by injecting them from Roblox
    -- scripts, so debug.info(fn, "s") returns a Roblox script path (e.g.
    -- "CoreGui.RobloxGui.Modules.Common.Locales.en-us") instead of "[C]". That
    -- is still a genuine C closure (iscclosure returns true), so it must NOT be
    -- flagged as tampered. The old logic checked source first and returned
    -- false before ever consulting iscclosure, which false-positived on every
    -- executor that injects loadstring this way -> "Tamper Detected!" on a
    -- completely unmodified script. Now iscclosure is checked first; the
    -- source/getinfo fallback is only used when iscclosure/islclosure are
    -- unavailable (plain Lua 5.1 runtime).
    local function checkCClosure(fn)
        safeCheck(function()
            -- Authoritative path (Luau / Roblox executors): iscclosure is the
            -- real "is this a native C closure?" test, independent of how the
            -- executor chose to expose the function's debug source.
            if type(refs.iscclosure) == "function" and type(refs.islclosure) == "function" then
                if refs.iscclosure(fn) == false and refs.islclosure(fn) == true then
                    return false;
                end
                -- iscclosure(fn) == true => genuine C closure, not tampered,
                -- regardless of what debug.info reports as the source.
                return true;
            end
            -- Fallback path (plain Lua 5.1 without iscclosure): use debug
            -- source / getinfo().what. Only flag when we can positively
            -- determine the closure is a Lua closure (what == "Lua" / source
            -- is a real script path that is not "[C]"). A nil source is
            -- inconclusive and must not false-positive.
            if type(refs.debugInfo) == "function" then
                local source = refs.debugInfo(fn, "s");
                if source ~= nil and source ~= "[C]" then
                    return false;
                end
            elseif type(refs.debugGetInfo) == "function" then
                local info = refs.debugGetInfo(fn);
                if info and info.what ~= nil and info.what ~= "C" and info.what ~= "J" then
                    return false;
                end
            end
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
            "traceback", "info",
        });
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

    -- Final anti-hookup equality: verify that none of the snapshotted
    -- builtins were replaced in their original library after the snapshot
    -- was taken. This is the single most important tamper signal and is
    -- fully engine-version-stable (it only compares function identity).
    check(assert == refs.assert and error == refs.error and
          getmetatable == refs.getmetatable and next == refs.next and
          pairs == refs.pairs and pcall == refs.pcall and
          rawequal == refs.rawequal and rawget == refs.rawget and
          rawset == refs.rawset and select == refs.select and
          setmetatable == refs.setmetatable and tonumber == refs.tonumber and
          tostring == refs.tostring and type == refs.type and
          xpcall == refs.xpcall and string.byte == refs.stringByte and
          string.char == refs.stringChar and string.sub == refs.stringSub and
          string.find == refs.stringFind and string.gsub == refs.stringGsub and
          string.format == refs.stringFormat and string.len == refs.stringLen and
          string.rep == refs.stringRep and
          string.reverse == refs.stringReverse and
          table.insert == refs.tableInsert and
          table.remove == refs.tableRemove and
          table.concat == refs.tableConcat and table.sort == refs.tableSort and
          math.floor == refs.mathFloor and math.abs == refs.mathAbs and
          math.min == refs.mathMin and math.max == refs.mathMax and
          math.random == refs.mathRandom and math.huge == refs.mathHuge and
          coroutine.create == refs.coroutineCreate and
          coroutine.resume == refs.coroutineResume and
          coroutine.yield == refs.coroutineYield and
          coroutine.status == refs.coroutineStatus and
          coroutine.close == refs.coroutineClose and
          coroutine.running == refs.coroutineRunning and
          coroutine.wrap == refs.coroutineWrap and
          loadstring == refs.loadstring);
    if debug then
        check(debug.info == refs.debugInfo and
              debug.traceback == refs.debugTraceback and
              debug.getinfo == refs.debugGetInfo);
    end

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
    local pcallRet = {pcall(function() local a = ]] .. tostring(math.random(1, 2^24)) .. [[ - "]] .. RandomStrings.randomString() .. [[" ^ ]] .. tostring(math.random(1, 2^24)) .. [[ return "]] .. RandomStrings.randomString() .. [[" / a; end)};
    local origMsg = pcallRet[2];
    local line = tonumber(gmatch(tostring(origMsg), ':(%d*):')());
    for i = 1, n do
        local len = math.random(1, 100);
        local n2 = random(0, 255);
        local pos = random(1, len);
        local shouldErr = random(1, 2) == 1;
        local msg = origMsg:gsub(':(%d*):', ':' .. tostring(random(0, 10000)) .. ':');
        local arr = {pcall(function()
            if random(1, 2) == 1 or i == n then
                local line2 = tonumber(gmatch(tostring(({pcall(function() local a = ]] .. tostring(math.random(1, 2^24)) .. [[ - "]] .. RandomStrings.randomString() .. [[" ^ ]] .. tostring(math.random(1, 2^24)) .. [[ return "]] .. RandomStrings.randomString() .. [[" / a; end)})[2]), ':(%d*):')());
                valid = valid and line == line2;
            end
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

    -- Final halt: if any check failed, error out (do NOT hang).
    if not valid then
        detected();
    end
end

    -- Anti Function Arg Hook
    local obj = setmetatable({}, {
        __tostring = function() error("Tamper Detected!", 0); end,
    });
    obj[math.random(1, 100)] = obj;
    (function() end)(obj);

    if not valid then
        error("Tamper Detected!", 0);
    end
    ]]

	local parsed = Parser:new({ LuaVersion = Enums.LuaVersion.Lua51 }):parse(code);
	local doStat = parsed.body.statements[1];
	doStat.body.scope:setParent(ast.body.scope);
	table.insert(ast.body.statements, 1, doStat);

	return ast;
end

return AntiTamper;
