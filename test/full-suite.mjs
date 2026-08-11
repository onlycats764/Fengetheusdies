#!/usr/bin/env node
// full-suite.mjs — end-to-end correctness suite.
// For every case script and preset (Medium/Strong), obfuscates with a
// forced seed, then executes BOTH the original and the obfuscated code
// in an isolated sandbox and compares printed output AND serialized
// return values. Silent corruption (wrong values without a crash) is
// treated exactly like a crash: the seed is retried up to maxAttempts
// times, mirroring the same policy as web/src/engine.js's self-test.
//
// Usage: node test/full-suite.mjs [--attempts N] [--seeds-from N] [--quiet]
import fengari from "luanode-vm";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { LUA_MODULES } from "../web/src/lua-modules.generated.js";

const { lua, lauxlib, lualib, to_luastring, to_jsstring } = fengari;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = Object.fromEntries(
  process.argv.slice(2).map((a, i, arr) => [a, arr[i + 1]]).filter(([k]) => k.startsWith("--"))
);
const MAX_ATTEMPTS = parseInt(args["--attempts"] || "8", 10);
const SEEDS_FROM = parseInt(args["--seeds-from"] || "0", 10);
const QUIET = args["--quiet"] !== undefined;

export function newState() {
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

export function sandboxExecute(luaCode) {
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

  // Wrap in a vararg function: user chunks may legitimately use `...` and
  // multiple return values at the top level.
  const wrapped = `return (function(...)\n${luaCode}\nend)(...)`;
  const status = lauxlib.luaL_dostring(L, to_luastring(wrapped));
  if (status !== lua.LUA_OK) {
    return {
      ok: false,
      error: to_jsstring(lua.lua_tostring(L, -1)),
      printed: captured.join("\n"),
      returned: null,
    };
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

/**
 * Normalizes a sandbox-captured output string for semantic comparison:
 * Lua error messages embed the chunk-relative line number
 * (`[string "..."]:N: msg` or `<file>:N: msg`), which shifts when the chunk
 * is re-wrapped or obfuscated even when the error itself is identical.
 */
export function normalizeOutput(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/\[string "[^"]*"\]:\d+:/g, (m) => m.replace(/:\d+:$/, ":N:"))
    .replace(/^([^:\n]+):\d+: /gm, (m, pre) => `${pre}:N: `)
    .replace(/\b(\d+)\.0(?![0-9a-zA-Z_.])/g, "$1");
}

export function obfuscateOnce(source, preset, seed) {
  const L = newState();
  const driver = `
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Error
local pipeline = Prometheus.Pipeline:fromConfig(Prometheus.Presets["${preset}"])
local ok, out = pcall(function() return pipeline:apply(${JSON.stringify(source)}, "input.lua") end)
if not ok then error(out, 0) end
return out
`;
  const status = lauxlib.luaL_dostring(L, to_luastring(driver));
  if (status !== lua.LUA_OK) {
    return { ok: false, error: to_jsstring(lua.lua_tostring(L, -1)) };
  }
  return { ok: true, code: to_jsstring(lua.lua_tostring(L, -1)) };
}

function baselineOf(source) {
  const base = sandboxExecute(source);
  return { ok: base.ok, printed: base.printed, returned: base.returned, error: base.error };
}

function verifyObfuscated(source, preset) {
  const baseline = baselineOf(source);
  if (!baseline.ok) {
    return { verdict: "baseline-fail", reason: `original fails: ${baseline.error}` };
  }
  let lastError = null;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const seed = SEEDS_FROM + attempt * 104729;
    const res = obfuscateOnce(source, preset, seed);
    if (!res.ok) {
      lastError = `compile: ${res.error}`;
      continue;
    }
    const test = sandboxExecute(res.code);
    if (!test.ok) {
      lastError = `runtime crash: ${test.error}`;
      continue;
    }
    if (normalizeOutput(test.printed) !== normalizeOutput(baseline.printed) || normalizeOutput(test.returned) !== normalizeOutput(baseline.returned)) {
      lastError = "silent corruption (printed/returned mismatch)";
      continue;
    }
    return { verdict: "pass", attempts: attempt, seed };
  }
  return { verdict: "fail", reason: lastError, attempts: MAX_ATTEMPTS };
}

const CASES_DIR = path.join(__dirname, "cases");
const cases = fs
  .readdirSync(CASES_DIR)
  .filter((f) => f.endsWith(".lua"))
  .sort();
const presets = ["Medium", "Strong"];

const results = { cases: [], byCase: {} };
let pass = 0;
let fail = 0;
let basefail = 0;
for (const preset of presets) {
  for (const f of cases) {
    const source = fs.readFileSync(path.join(CASES_DIR, f), "utf-8");
    const r = verifyObfuscated(source, preset);
    const key = `${f} @${preset}`;
    results.cases.push({ case: f, preset, ...r });
    results.byCase[key] = r;
    if (r.verdict === "pass") {
      pass++;
      if (!QUIET) console.log(`PASS  ${key} (attempt ${r.attempts}, seed ${r.seed})`);
    } else if (r.verdict === "baseline-fail") {
      basefail++;
      console.log(`BASEFAIL ${key}: ${r.reason}`);
    } else {
      fail++;
      console.log(`FAIL  ${key}: ${r.reason}`);
    }
  }
}
results.summary = { pass, fail, baselineFail: basefail, total: cases.length * presets.length };
console.log(`\nSUMMARY: ${pass} pass / ${fail} fail / ${basefail} baseline-fail (total ${results.summary.total})`);
fs.writeFileSync(path.join(__dirname, "suite-results.json"), JSON.stringify(results, null, 2));
process.exit(fail === 0 ? 0 : 1);
