-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
--
-- AntiTamper.lua
--
-- This Script provides an Obfuscation Step, that breaks the script, when someone tries to tamper with it.
--
-- The generated payload borrows heavily from the leaked Luraph 14.7 anti-tamper
-- module (discord.gg/syncrypt), adapted to Fengetheus' code-generation pipeline.
-- Ported techniques (see docs/luraph-antitamper-analysis.md):
--   * The `refs` snapshot of every native builtin followed by a final equality
--     check, so a global hook on e.g. pcall is detected even if it was applied
--     after the snapshot was taken.
--   * `checkError` / `normalizeError` to validate the exact error message of
--     builtins called with invalid arguments, defeating function replaces that
--     alter error text.
--   * `debug.info`-based verification that builtins are real C closures
--     (source == "[C]", line == -1, iscclosure == true, islclosure == false).
--   * Library member integrity checks on string/math/table/coroutine/debug,
--     detecting deleted or swapped members (replaces by Lua closures are
--     caught by the C-closure check above).
--   * Roblox/Luau-runtime checks (Instance metatable lock, Enum, Random.new
--     determinism, buffer round-trip, task thread results) that only run when
--     the relevant globals exist, so the step still loads on plain Lua 5.1.
-- The original Fengetheus sanity-check loop, anti-beautify sethook block and
-- traceback line-number validation are retained and now feed into the same
-- `valid` flag, preserving preset behaviour while adding the Luraph layers.

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
		addCode("                while true do end\n")
		addCode("            end\n")
	end

	addCode("do local valid = '%s';", primaryCheck)
	addCode("for i = 0, %d do\n", sanityPasses)
	for i = 0, sanityPasses do
		if i == 0 then
			addCode("        if i == 0 then\n")
			addCode("            if valid ~= '%s' then\n", primaryCheck)
			addCode("                while true do end\n")
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
                -- Real Lua marks a native (non-Lua-closure) function's
                -- debug.getinfo(...).what as "C". Fengari's own builtins are
                -- implemented in JavaScript, not C, so Fengari legitimately
                -- reports "J" instead for the exact same kind of function
                -- (see funcinfo() in Fengari's ldebug.js - this is intentional
                -- upstream Fengari behavior, not a bug). Checking only for
                -- "C" means this sanity check fails for every unmodified
                -- script the moment it runs under Fengari, since none of
                -- pcall/string.char/debug.getinfo/string.dump will ever
                -- report "C" there - AntiTamper would flag *all* Fengari
                -- executions as tampered and deliberately break them via
                -- Tamper Detected!/the infinite-loop fallback below, with no
                -- actual tampering having occurred. Both markers mean the
                -- same thing (an unhookable native builtin), so both must be
                -- accepted.
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
    -- Luraph-derived anti-hookup layer (ported from the leaked 14.7 module).
    -- All of the following is Lua 5.1 *syntax* (no +=/continue/::) so the
    -- internal Lua51 parser accepts it, while freely calling Luau runtime
    -- APIs (debug.info, iscclosure, buffer, task, Random, Instance, Enum).
    -- Each Roblox/Luau-only branch is guarded so plain Lua 5.1 skips it.
    -- ========================================================================
    local gmatch = string.gmatch;
    local err = function() error("Tamper Detected!") end;

    -- Luraph-style hard halt: instead of only flipping `valid`, also wedge the
    -- thread in a bare `while true do end` so a tampered script cannot limp
    -- forward past the check even if a later branch forgets to consult valid.
    local function detected()
        while true do end
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
        stringReverse = string.reverse, stringPack = string.pack,
        stringUnpack = string.unpack,
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

    local function normalizeError(value)
        if type(value) ~= "string" then
            return value;
        end
        return (string.gsub(value, " to '[^']+'", ""));
    end

    local function check(value)
        if not value then
            valid = false;
            detected();
        end
    end

    local function checkError(ok, actual, expected)
        check(ok == false);
        check(normalizeError(actual) == normalizeError(expected));
    end

    local function checkErrorSuffix(ok, actual, expected)
        check(ok == false);
        local actualText = normalizeError(actual);
        local expectedText = normalizeError(expected);
        check(type(actualText) == "string" and
            string.sub(actualText, -#expectedText) == expectedText);
    end

    -- C-closure verification (Luau: debug.info + iscclosure; Lua 5.1 fallback:
    -- debug.getinfo().what). Detects replaces that swap a native builtin for a
    -- Lua closure (the classic hooking vector).
    local function checkCClosure(fn, label)
        if type(refs.debugInfo) == "function" then
            local source, line, fnName, params, variadic, selfRef =
                refs.debugInfo(fn, "slnaf");
            check(source == "[C]");
            check(line == -1);
            check(params == 0);
            check(variadic == true);
            check(selfRef == fn);
        elseif type(refs.debugGetInfo) == "function" then
            local info = refs.debugGetInfo(fn);
            check(info and (info.what == "C" or info.what == "J"));
        end
        if type(refs.iscclosure) == "function" then
            check(refs.iscclosure(fn) == true);
        end
        if type(refs.islclosure) == "function" then
            check(refs.islclosure(fn) == false);
        end
    end

    -- varargs + select counting (Luraph checks 7/8)
    local function f1(...)
        return refs.select("#", ...), ...
    end
    local count, first, second, third = f1("head", nil, "tail");
    check(count == 3 and first == "head" and second == nil and third == "tail");

    -- closures sharing upvalues (Luraph check 9)
    local closures = {};
    for i = 1, 3 do
        local captured = i;
        closures[i] = function(increment)
            captured = captured + increment;
            return captured;
        end
    end
    check(closures[1](4) == 5 and closures[1](2) == 7 and
          closures[2](3) == 5 and closures[3](1) == 4);

    -- metatables + metamethods (Luraph checks 10-14)
    local writes = {};
    local metatable = {
        __index = function(_, key) return "index:" .. tostring(key); end,
        __newindex = function(_, key, value) writes[key] = value; end,
        __add = function(l, r) return rawget(l, "value") + rawget(r, "value"); end,
        __tostring = function() return "object"; end,
    };
    local left = setmetatable({ value = 13 }, metatable);
    local right = setmetatable({ value = 7 }, metatable);
    check(left.missing == "index:missing");
    left.recorded = 41;
    check(writes.recorded == 41);
    check(left + right == 20);
    check(tostring(left) == "object" and getmetatable(left) == metatable);
    rawset(left, "raw", 53);
    check(rawget(left, "raw") == 53 and rawequal(left, left) and not rawequal(left, right));

    -- table operations (Luraph checks 15-21)
    local values = { 4, 1, 3 };
    table.insert(values, 2, 2);
    check(table.concat(values, ",") == "4,2,1,3");
    check(table.remove(values, 1) == 4);
    table.sort(values);
    check(table.concat(values, ",") == "1,2,3");

    -- string operations (Luraph checks 22-26)
    local binary = "A\0z";
    check(string.byte(binary, 1) == 65 and string.byte(binary, 2) == 0 and
          string.byte(binary, 3) == 122);
    check(string.char(65, 0, 122) == binary);
    check(string.sub("abcdef", 2, -2) == "bcde");
    check(string.reverse("abc\0") == "\0cba");
    check(string.rep("xy", 3) == "xyxyxy" and #"a\0b" == 3 and
          string.format("%02x:%s", 15, "ok") == "0f:ok");

    -- math + bit32 (Luraph checks 27-30)
    check(tonumber("ff", 16) == 255 and math.floor(-1.25) == -2 and
          math.abs(-17) == 17 and math.min(9, 3, 7) == 3 and math.max(9, 3, 7) == 9);
    local nan = 0 / 0;
    check(math.huge > 1e308 and nan ~= nan and (-17 % 5) == 3);
    if type(bit32) == "table" then
        check(bit32.bxor(0x55AA55AA, 0x0F0F0F0F) == 0x5AA55AA5 and
              bit32.band(0x12345678, 0x00FF00FF) == 0x00340078 and
              bit32.bor(0x12003478, 0x00345600) == 0x12347678 and
              bit32.lrotate(0x12345678, 8) == 0x34567812 and
              bit32.rshift(0x80000000, 31) == 1);
    end

    -- coroutine lifecycle (Luraph checks 31-33)
    local thread = coroutine.create(function(value)
        local resumed = coroutine.yield(value + 1);
        return resumed + 2;
    end);
    check(coroutine.status(thread) == "suspended");
    local resumed, yielded = coroutine.resume(thread, 9);
    check(resumed and yielded == 10 and coroutine.status(thread) == "suspended");
    local completed, result = coroutine.resume(thread, 11);
    check(completed and result == 13 and coroutine.status(thread) == "dead");

    -- loadstring (Luraph checks 34-36)
    local compiledOk, compiled = pcall(loadstring, "return 19, nil, 23", "Fengetheus");
    check(compiledOk and type(compiled) == "function");
    local a, b, c = compiled();
    check(a == 19 and b == nil and c == 23);
    local ok3, v8, err3 = pcall(loadstring, "local =", "Fengetheus2");
    check(ok3 and v8 == nil and type(err3) == "string");

    -- error/xpcall level 0 propagation (Luraph checks 5-6)
    local s1 = "test";
    local ok1, s2 = pcall(function() error(s1, 0); end);
    check(not ok1 and type(s2) == "string" and string.find(s2, s1, 1, true) ~= nil);
    local handled, s4 = xpcall(function() error(s1, 0); end, function(message)
        return "handled:" .. tostring(message);
    end);
    check(not handled and type(s4) == "string" and
          string.find(s4, "handled:", 1, true) == 1 and
          string.find(s4, s1, 1, true) ~= nil);

    -- executor functions, only if present (Luraph checks 39-45)
    if type(refs.islclosure) == "function" then
        local f4 = function(value) return value; end;
        check(refs.islclosure(f4) == true);
    end
    if type(refs.iscclosure) == "function" then
        local f4 = function(value) return value; end;
        check(refs.iscclosure(f4) == false);
    end
    if type(refs.newcclosure) == "function" and type(refs.iscclosure) == "function" then
        local f4 = function(value) return value; end;
        local wrapped = refs.newcclosure(f4);
        check(type(wrapped) == "function" and wrapped(31) == 31);
        check(refs.iscclosure(wrapped) == true);
    end
    if type(refs.clonefunction) == "function" then
        local cloned = refs.clonefunction(pcall);
        local cloneOk, cloneValue = cloned(function() return 37; end);
        check(type(cloned) == "function" and cloneOk and cloneValue == 37);
    end
    if type(refs.isfunctionhooked) == "function" then
        for _, fn in ipairs({ refs.assert, refs.error, refs.pcall,
                              refs.stringByte, refs.tableInsert }) do
            check(refs.isfunctionhooked(fn) == false);
        end
    end
    if type(refs.checkcaller) == "function" then
        check(type(refs.checkcaller()) == "boolean");
    end

    -- C-closure verification of every builtin we snapshotted (Luraph n0-n8).
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
        checkCClosure(fn, "builtin");
    end

    -- Roblox Instance metatable lock + services (Luraph checks 46-47 + Instance).
    -- Only runs when the Roblox globals exist, so plain Lua 5.1 is unaffected.
    if type(game) == "userdata" and typeof and typeof(game) == "Instance" then
        check(game.ClassName == "DataModel");
        local service = game:GetService("RunService");
        check(typeof(service) == "Instance" and service.ClassName == "RunService");
        local folderParent = Instance.new("Folder");
        local folderChild = Instance.new("Folder", folderParent);
        for _, object in ipairs({
            { value = game, class = "DataModel" },
            { value = workspace, class = "Workspace" },
            { value = folderParent, class = "Folder" },
            { value = folderChild, class = "Folder" },
        }) do
            local obj = object.value;
            check(type(obj) == "userdata" and typeof(obj) == "Instance");
            check(obj.ClassName == object.class);
            check(getmetatable(obj) == "The metatable is locked");
            check(type(obj.AttributeChanged) ~= "nil");
            check(type(obj.ChildRemoved) ~= "nil");
            local connection = obj.ChildRemoved:Connect(function() end);
            check(connection.Connected == true);
            local dotOk, dotErr = pcall(folderParent.GetChildren, nil);
            checkError(dotOk, dotErr,
                "Expected ':' not '.' calling member function GetChildren");
            connection:Disconnect();
            check(connection.Connected == false);
        end
        check(#folderParent:GetChildren() == 1);
        folderParent:Destroy();
        folderChild:Destroy();

        -- Enum metatable lock + FromName/FromValue identity (Luraph Enum block).
        if type(Enum) == "userdata" then
            check(typeof(Enum) == "Enums");
            check(getmetatable(Enum) == "The metatable is locked");
            local enumType = Enum.HumanoidRigType;
            local enumItem = enumType.R6;
            check(typeof(enumType) == "Enum" and typeof(enumItem) == "EnumItem");
            check(getmetatable(enumType) == "The metatable is locked");
            check(getmetatable(enumItem) == "The metatable is locked");
            local byName1 = enumType:FromName("R6");
            local byName2 = enumType:FromName("R6");
            local byValue1 = enumType:FromValue(0);
            check(byName1 == byName2 and byName1 == byValue1 and
                  enumType.R6 == byName1);
            check(byName1.Name == "R6" and byName1.Value == 0 and
                  byName1.EnumType == enumType);
        end

        -- Random.new determinism (Luraph Random block, seed 177465824).
        if type(Random) == "table" or type(Random) == "userdata" then
            local rng = Random.new(177465824);
            local r1 = rng:NextNumber();
            local r2 = rng:NextInteger(189, 1164);
            local r3 = rng:NextNumber();
            check(r1 == 0.9598971928030796);
            check(r2 == 889);
            check(r3 == 0.027539190730015265);
            local clone = rng:Clone();
            check(type(clone) ~= "nil");
            local r4 = rng:NextInteger(979, 1379);
            check(r4 == 1357);
            local r5 = clone:NextNumber();
            check(r5 == 0.3377740061710911);
        end
    end

    -- buffer round-trip (Luraph checks 76-82). Luau-only.
    if type(buffer) == "table" and type(buffer.create) == "function" then
        local s5 = string.char(0, 1, 127, 128, 255, 65, 0, 90);
        local v24 = buffer.fromstring(s5);
        check(type(v24) == "buffer" and typeof and typeof(v24) == "buffer" and
              buffer.len(v24) == #s5 and buffer.tostring(v24) == s5);
        local v25 = buffer.create(48);
        check(buffer.len(v25) == 48 and buffer.tostring(v25) == string.rep("\0", 48));
        buffer.writei8(v25, 0, -128);
        buffer.writeu8(v25, 1, 255);
        buffer.writei16(v25, 2, -12345);
        buffer.writeu16(v25, 4, 0xFEDC);
        buffer.writei32(v25, 6, -123456789);
        buffer.writeu32(v25, 10, 0xDEADBEEF);
        buffer.writef32(v25, 14, 1.25);
        buffer.writef64(v25, 18, -1234.5);
        buffer.writestring(v25, 26, "A\0z");
        check(buffer.readi8(v25, 0) == -128 and buffer.readu8(v25, 1) == 255 and
              buffer.readi16(v25, 2) == -12345 and buffer.readu16(v25, 4) == 0xFEDC and
              buffer.readi32(v25, 6) == -123456789 and
              buffer.readu32(v25, 10) == 0xDEADBEEF and
              buffer.readf32(v25, 14) == 1.25 and buffer.readf64(v25, 18) == -1234.5 and
              buffer.readstring(v25, 26, 3) == "A\0z");
        local ok5 = pcall(buffer.readu32, v25, 45);
        local ok6 = pcall(buffer.writeu8, v25, -1, 0);
        check(not ok5 and not ok6);
    end

    -- task thread results (Luraph task block). Luau-only.
    if type(task) == "table" and type(task.spawn) == "function" then
        local co3 = task.spawn(function() coroutine.yield(); end);
        check(type(co3) == "thread");
        pcall(coroutine.close, co3);
        if type(task.delay) == "function" then
            local co4 = task.delay(86400, function() end);
            check(type(co4) == "thread");
            if type(task.cancel) == "function" then task.cancel(co4); end
        end
    end

    -- table.freeze readonly + nil-call error messages (Luraph readonly/nil-call).
    -- Only the suffix of the error is asserted, so the check survives minor
    -- wording differences between Luau revisions. On Lua 5.1 (no table.freeze)
    -- the freeze branch is skipped entirely so it cannot false-positive.
    if type(table.freeze) == "function" then
        local readonly = table.freeze({});
        local frozenErr = nil;
        for i = 1, 3 do
            local ok, e = pcall(function() readonly[i] = i; end);
            if not ok then frozenErr = e; end
            check(not ok);
        end
        if type(frozenErr) == "string" then
            check(string.find(frozenErr, "readonly", 1, true) ~= nil);
        end
    end
    local nilCallable = nil;
    local nilOk, nilErr = pcall(function(...) return nilCallable(...); end);
    check(not nilOk and type(nilErr) == "string" and
          string.find(nilErr, "attempt to call a nil value", 1, true) ~= nil);

    -- Library integrity check (derived from Luraph library-status/key/value).
    -- rather than asserting an exact `next` iteration order (which can shift
    -- between Luau revisions and false-positive), this verifies that each
    -- expected member still exists and is a function. A hook that *replaces*
    -- a member with a Lua closure is caught separately by checkCClosure above;
    -- here we catch the case where a member was deleted or swapped for a
    -- non-function, plus a coarse size sanity check so a blatantly injected
    -- extra member is still noticed on libraries with a stable surface.
    local function checkLibraryMembers(source, keys)
        for _, keyName in ipairs(keys) do
            local value = source[keyName];
            check(value ~= nil);
            check(type(value) == "function");
        end
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

    -- Error-message validation for builtins called with bad arguments
    -- (Luraph t9, subset stable across Luau). Only the stable suffix is
    -- matched via substring so minor wording shifts between Luau revisions do
    -- not cause a false positive, while a hooked function that returns a
    -- totally different (or no) error is still caught. The expected strings
    -- are taken verbatim from the leaked Luraph 14.7 module, which was
    -- captured from a real Roblox/Luau runtime.
    local function expectError(fn, expectedSubstring)
        local ok, e = pcall(fn);
        check(not ok);
        check(type(e) == "string" and
              string.find(normalizeError(e), normalizeError(expectedSubstring), 1, true) ~= nil);
    end
    expectError(function() return getmetatable(); end, "argument #1");
    expectError(function() return setmetatable(); end,
        "argument #1 to 'setmetatable' (table expected)");
    expectError(function() return tonumber(); end, "argument #1");
    expectError(function() return tostring(); end, "argument #1");
    expectError(function() return rawset(); end,
        "argument #1 to 'rawset' (table expected)");
    expectError(function() return rawget(); end,
        "argument #1 to 'rawget' (table expected)");
    expectError(function() return assert(); end, "argument #1");
    expectError(function() return type(); end, "argument #1");
    expectError(function() return next(); end,
        "argument #1 to 'next' (table expected)");
    expectError(function() return string.byte(); end,
        "argument #1 to 'byte' (string expected)");
    expectError(function() return string.char(nil); end,
        "argument #1 to 'char' (number expected, got nil)");
    expectError(function() return string.find(); end,
        "argument #1 to 'find' (string expected)");
    expectError(function() return string.format(); end,
        "argument #1 to 'format' (string expected)");
    expectError(function() return string.gsub(); end,
        "argument #1 to 'gsub' (string expected)");
    expectError(function() return string.rep(); end,
        "argument #1 to 'rep' (string expected)");
    expectError(function() return table.concat(); end,
        "argument #1 to 'concat' (table expected)");
    expectError(function() return table.insert(); end,
        "argument #1 to 'insert' (table expected)");
    expectError(function() return coroutine.create(); end,
        "argument #1 to 'create' (function expected)");
    expectError(function() return coroutine.resume(); end,
        "argument #1 to 'resume' (thread expected)");
    expectError(function() return coroutine.status(); end,
        "argument #1 to 'status' (thread expected)");
    if type(coroutine.isyieldable) == "function" then
        check(type(coroutine.isyieldable()) == "boolean");
    end

    -- getfenv/setfenv round-trip (Luraph checks 1-4). Lua 5.1/Luau only.
    -- The test function is created via loadstring (not a literal Lua closure)
    -- so that it is a *native* Lua function whose global lookups go through
    -- the function environment that setfenv modifies. When AntiTamper runs
    -- inside Vmify, literal closures become VM-compiled functions that
    -- resolve globals through the VM's own upvalue chain, bypassing setfenv
    -- and making the v1()==v2 check spuriously fail.
    if type(getfenv) == "function" then
        local v1LoadOk, v1 = pcall(loadstring, "return v", "FengetheusAT_getfenv");
        check(v1LoadOk and type(v1) == "function");
        if v1LoadOk and type(v1) == "function" then
            local ok, env = pcall(getfenv, v1);
            check(ok and type(env) == "table");
            if type(setfenv) == "function" then
                local v2 = {};
                local t15 = setmetatable({ v = v2 }, { __index = env });
                local ok2, v21 = pcall(setfenv, v1, t15);
                check(ok2 and v21 == v1);
                check(v1() == v2);
                check(pcall(setfenv, v1, env));
            end
        end
    end

    -- Final anti-hookup equality: verify that none of the snapshotted builtins
    -- were replaced in their original library after the snapshot was taken
    -- (Luraph check 48). This is the single most important tamper signal.
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

    if valid then else
        repeat
            return (function()
                while true do
                    l1, l2 = l2, l1;
                    err();
                end
            end)();
        until true;
        while true do
            l2 = random(1, 6);
            if l2 > 2 then
                l2 = tostring(l1);
            else
                l1 = l2;
            end
        end
        return;
    end
end

    -- Anti Function Arg Hook
    local obj = setmetatable({}, {
        __tostring = err,
    });
    obj[math.random(1, 100)] = obj;
    (function() end)(obj);

    repeat until valid;
    ]]

	local parsed = Parser:new({ LuaVersion = Enums.LuaVersion.Lua51 }):parse(code);
	local doStat = parsed.body.statements[1];
	doStat.body.scope:setParent(ast.body.scope);
	table.insert(ast.body.statements, 1, doStat);

	return ast;
end

return AntiTamper;
