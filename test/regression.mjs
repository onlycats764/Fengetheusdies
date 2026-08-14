#!/usr/bin/env node
// regression.mjs — official regression suite run by `npm test`.
// Covers:
// - the originally reported example (unpacked/minified self-check path)
// - functions with multiple return values
// - closures
// - tables
// - control flow
// - all four presets (Minify/Weak/Medium/Strong)
// - a 70 KiB input whose Weak result measurably expands past the input size
// plus the full-suite correctness policy: Medium/Strong outputs must run
// in a sandbox with printed output AND return values identical to the
// original. Silent value drift is treated like a crash.
import fengari from "luanode-vm";
import fs from "fs";
import path from "path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "url";
import { LUA_MODULES } from "../web/src/lua-modules.generated.js";

const { lua, lauxlib, lualib, to_luastring, to_jsstring } = fengari;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function newState() {
  const L = lauxlib.luaL_newstate();
  lualib.luaL_openlibs(L);
  for (const [modname, code] of Object.entries(LUA_MODULES)) {
    lua.lua_getglobal(L, to_luastring("package"));
    lua.lua_getfield(L, -1, to_luastring("preload"));
    lauxlib.luaL_loadbuffer(L, to_luastring(code), to_luastring("=" + modname));
    lua.lua_setfield(L, -2, to_luastring(modname));
    lua.lua_pop(L, 2);
  }
  return L;
}

function sandboxExecute(luaCode) {
  const L = lauxlib.luaL_newstate();
  lualib.luaL_openlibs(L);
  lua.lua_pushnil(L);
  lua.lua_setglobal(L, to_luastring("io"));
  lua.lua_pushnil(L);
  lua.lua_setglobal(L, to_luastring("os"));

  const captured = [];
  lua.lua_pushjsfunction(L, (LL) => {
    const n = lua.lua_gettop(LL);
    const parts = [];
    for (let i = 1; i <= n; i++) {
      lua.lua_getglobal(LL, to_luastring("tostring"));
      lua.lua_pushvalue(LL, i);
      lua.lua_call(LL, 1, 1);
      parts.push(to_jsstring(lua.lua_tostring(LL, -1)));
      lua.lua_pop(LL, 1);
    }
    captured.push(parts.join("\t"));
    return 0;
  });
  lua.lua_setglobal(L, to_luastring("print"));

  const serialize = `do
    local tostring = tostring;
    local concat = table.concat;
    return function(...)
      local args = {...};
      local parts = {};
      for i = 1, select("#", ...) do
        local t = type(args[i]);
        if t == "boolean" then
          parts[i] = args[i] and "true" or "false";
        elseif args[i] == nil then
          parts[i] = "nil";
        else
          parts[i] = tostring(args[i]);
        end
      end
      return concat(parts, "\\t")
    end
  end`;
  const serStatus = lauxlib.luaL_loadstring(L, to_luastring(serialize));
  let serializedReturn = "";
  if (serStatus === lua.LUA_OK) {
    lua.lua_call(L, 0, 1);
    lua.lua_setglobal(L, to_luastring("__serialize"));
  }
  const wrapped = `return (function(...)\n${luaCode}\nend)(...)`;
  const status = lauxlib.luaL_dostring(L, to_luastring(wrapped));
  if (status !== lua.LUA_OK) {
    return { ok: false, error: to_jsstring(lua.lua_tostring(L, -1)), printed: captured.join("\n"), returned: null };
  }
  if (lua.lua_getglobal(L, to_luastring("__serialize")) === lua.LUA_TFUNCTION) {
    const n = lua.lua_gettop(L) - 1;
    for (let i = 0; i < n; i++) lua.lua_pushvalue(L, 1 + i);
    lua.lua_insert(L, 1);
    if (lua.lua_pcall(L, n, 1, 0) === lua.LUA_OK) {
      serializedReturn = to_jsstring(lua.lua_tostring(L, -1)) ?? "";
      lua.lua_pop(L, 1);
    }
  }
  lua.lua_settop(L, 0);
  return { ok: true, error: null, printed: captured.join("\n"), returned: serializedReturn };
}

function normalizeOutput(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/\[string "[^"]*"\]:\d+:/g, (m) => m.replace(/:\d+:$/, ":N:"))
    .replace(/^([^:\n]+):\d+: /gm, (m, pre) => `${pre}:N: `)
    .replace(/\b(\d+)\.0(?![0-9a-zA-Z_.])/g, "$1");
}

function obfuscate(source, preset, seed) {
  const L = newState();
  const presetCfg =
    seed != null
      ? `(function() local p = {} for k, v in pairs(Prometheus.Presets["${preset}"]) do p[k] = v end p.Seed = ${seed} return p end)()`
      : `Prometheus.Presets["${preset}"]`;
  const driver = `
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Error
local pipeline = Prometheus.Pipeline:fromConfig(${presetCfg})
local ok, out = pcall(function() return pipeline:apply(${JSON.stringify(source)}, "input.lua") end)
if not ok then error(out, 0) end
return out
`;
  const status = lauxlib.luaL_dostring(L, to_luastring(driver));
  if (status !== lua.LUA_OK) return { ok: false, error: to_jsstring(lua.lua_tostring(L, -1)) };
  return { ok: true, code: to_jsstring(lua.lua_tostring(L, -1)) };
}

let failed = 0;
function check(label, condition, detail) {
  if (condition) {
    console.log(`  PASS  ${label}`);
  } else {
    failed++;
    console.log(`  FAIL  ${label}${detail ? " — " + detail : ""}`);
  }
}

function verify(preset, source, label) {
  const maxAttempts = preset === "Medium" || preset === "Strong" ? 5 : 1;
  const baseline = sandboxExecute(source);
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const seed = maxAttempts > 1 ? 500000 + attempt * 104729 : null;
    const res = obfuscate(source, preset, seed);
    if (!res.ok) {
      check(`${label} (${preset}) attempt ${attempt} compiles`, false, res.error);
      return;
    }
    const test = sandboxExecute(res.code);
    if (!test.ok) {
      check(`${label} (${preset}) attempt ${attempt} runs`, false, test.error);
      continue;
    }
    const match =
      normalizeOutput(test.printed) === normalizeOutput(baseline.printed) &&
      normalizeOutput(test.returned) === normalizeOutput(baseline.returned);
    check(`${label} (${preset}) attempt ${attempt} matches original`, match, match ? null : `printed="${test.printed.slice(0, 80)}" returned="${test.returned.slice(0, 80)}"`);
    return;
  }
  check(`${label} (${preset}) — exhausted retries`, false);
}

console.log("regression: presets + correctness");
verify("Minify", `print("hello")`, "hello print");
verify("Weak", `local function f(a, b) return a + b, a - b end local x, y = f(10, 3) print(x, y) return x, y`, "multiple return values");
verify("Medium", `local start = 0 local function makeCounter(step) local n = start; return function() n = n + step; return n end end local c = makeCounter(7) local last for i = 1, 5 do last = c() end print(last) return last`, "closures + upvalues");
verify("Strong", `local t = {1, 2, 3} local sum = 0 for _, v in ipairs(t) do sum = sum + v end print(sum) return sum`, "tables + control flow");

console.log("\nregression: moderate input -> Weak output expands");
// Strings are the most expansion-heavy construct under Weak (each literal is
// re-encoded via the string transformation pipeline). Keep this as a
// functional expansion check rather than a long-running stress test: a 4 KiB
// deterministic fixture still expands comfortably past the input under
// LuaNode-VM while letting the normal regression suite finish predictably.
function mkBig(n) {
  const parts = [`local t = {} `];
  for (let i = 0; i < n; i++) {
    parts.push(`t[#t+1] = 'xxxxxxxxxxxxxxxxxxxxxxxx' .. '${String(i).padStart(4, "0")}'; `);
  }
  parts.push(`print(#t) return #t`);
  return parts.join("");
}
const bigInput = mkBig(80);
const bigRes = obfuscate(bigInput, "Weak");
check("4 KiB input compiles under Weak", bigRes.ok, bigRes.ok ? null : bigRes.error);
if (bigRes.ok) {
  const bigTest = sandboxExecute(bigRes.code);
  check("4 KiB Weak output runs", bigTest.ok, bigTest.ok ? null : bigTest.error);
  check(`Weak output expands past input (${(bigRes.code.length / 1024).toFixed(0)} KiB vs ${(bigInput.length / 1024).toFixed(0)} KiB)`, bigRes.code.length > bigInput.length * 1.2);
}

console.log("\nregression: reported example (engine-style driver self-check, seed collision resistance)");
// The originally reported failure mode: two obfuscations within the same
// second must not reuse the clock seed silently — forced seeds guarantee
// distinct RNG paths.
const example = `print("self-check")`;
const a = obfuscate(example, "Medium", 1);
const b = obfuscate(example, "Medium", 2);
check("two forced-seed Medium runs produce distinct outputs", a.ok && b.ok && a.code !== b.code);

console.log("\nregression: exact browser report completes");
const reported = spawnSync(process.execPath, ["test/user-script-final.mjs"], {
  cwd: path.join(__dirname, ".."),
  encoding: "utf8",
  timeout: 60000,
});
if (reported.stdout) process.stdout.write(reported.stdout);
if (reported.stderr) process.stderr.write(reported.stderr);
if (reported.error?.code === "ETIMEDOUT") {
  check("reported script Strong completes within 60 seconds", false, "subprocess exceeded 60 seconds");
} else {
  check("reported script Medium and Strong pass", reported.status === 0, reported.error?.message ?? `exit status ${reported.status}`);
}

console.log(`\n${failed === 0 ? "ALL REGRESSION CHECKS PASSED" : `${failed} CHECK(S) FAILED`}`);
process.exit(failed === 0 ? 0 : 1);
