import * as fengari from "fengari";
import { LUA_MODULES } from "./lua-modules.generated.js";

const { lua, lauxlib, lualib, to_luastring, to_jsstring } = fengari;

/**
 * Creates a fresh Lua VM with the entire real Prometheus source tree
 * preloaded (via package.preload — no filesystem, no network, nothing
 * fetched at runtime: everything shipped inside the bundle).
 *
 * Fengetheus embeds the real Prometheus compiler unmodified except for the
 * host-compatibility patches documented in PATCHES.md.
 */
function newPrometheusState() {
  const L = lauxlib.luaL_newstate();
  lualib.luaL_openlibs(L);

  // fengari's default global `print` is browser-safe on its own (it
  // guards on `typeof process === "undefined"` and falls back to
  // console.log), but it's still a bare console.log with no connection to
  // this UI's log panel. Redirect it to the same capture path
  // sandboxExecute() uses so any message Prometheus itself prints (e.g.
  // Logger:error, see src/logger.lua) is visible through onLog() instead
  // of only ever landing in the browser devtools console.
  lua.lua_pushjsfunction(L, (LL) => {
    const n = lua.lua_gettop(LL);
    const parts = [];
    for (let i = 1; i <= n; i++) {
      lua.lua_getglobal(LL, to_luastring("tostring"));
      lua.lua_pushvalue(LL, i);
      lua.lua_call(LL, 1, 1);
      parts.push(to_jsstring(lua.lua_tostring(LL, -1), undefined, undefined, "?"));
      lua.lua_pop(LL, 1);
    }
    // eslint-disable-next-line no-console
    console.log(parts.join("\t"));
    return 0;
  });
  lua.lua_setglobal(L, to_luastring("print"));

  for (const [modname, code] of Object.entries(LUA_MODULES)) {
    lua.lua_getglobal(L, to_luastring("package"));
    lua.lua_getfield(L, -1, to_luastring("preload"));
    const status = lauxlib.luaL_loadbuffer(L, to_luastring(code), to_luastring("=" + modname));
    if (status !== lua.LUA_OK) {
      const err = to_jsstring(lua.lua_tostring(L, -1));
      throw new Error(`Failed to compile embedded module "${modname}": ${err}`);
    }
    lua.lua_setfield(L, -2, to_luastring(modname));
    lua.lua_pop(L, 2); // pop package, preload
  }

  return L;
}

/** Escapes a JS string into a Lua long-bracket-safe double-quoted literal via JSON (Lua string escaping is a superset-compatible subset of JSON's here). */
function luaStringLiteral(js) {
  return JSON.stringify(js);
}

/**
 * Normalizes a sandbox-captured output string for semantic comparison.
 * Lua error messages embed the line number relative to the chunk
 * (`[string "..."]:N: msg` and `<filename>:N: msg`), which shifts when the
 * chunk is obfuscated or re-wrapped even though the error itself is the
 * same. Strip those line-number prefixes so such diffs don't masquerade
 * as silent corruption.
 *
 * The obfuscator's number-transformation step (NumbersToExpressions) may
 * turn integer literals into arithmetic expressions that evaluate as
 * floats, so `tostring` renders `15` as `15.0`. These are numerically
 * identical in Lua, so canonicalize integer-looking floats (`\d+.0` ->
 * `\d+`) before comparing — without this, otherwise-valid output gets
 * flagged as silent corruption (false positive).
 */
function normalizeOutput(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/\[string "[^"]*"\]:\d+:/g, (m) => m.replace(/:\d+:$/, ":N:"))
    .replace(/:\d+: /g, ":N: ")
    .replace(/\b(\d+)\.0(?![0-9a-zA-Z_.])/g, "$1");
}

const PRESET_NAMES = ["Minify", "Weak", "Medium", "Strong"];

/**
 * Runs one obfuscation attempt for the given source + preset.
 * `seedOverride`, when given, forces Prometheus's Seed setting so retries
 * are guaranteed to re-roll the RNG instead of relying on the (1-second
 * resolution, os.time()-based) clock seed, which can otherwise produce the
 * exact same "random" sequence on back-to-back attempts within the same
 * second and defeat the whole point of retrying.
 * Returns { ok: true, code } or { ok: false, error }.
 */
function obfuscateOnce(source, preset, seedOverride) {
  const L = newPrometheusState();
  const presetOverride =
    seedOverride != null
      ? `(function() local p = {} for k, v in pairs(Prometheus.Presets["${preset}"]) do p[k] = v end p.Seed = ${seedOverride} return p end)()`
      : `Prometheus.Presets["${preset}"]`;
  const driver = `
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Error
local pipeline = Prometheus.Pipeline:fromConfig(${presetOverride})
local ok, out = pcall(function() return pipeline:apply(${luaStringLiteral(source)}, "input.lua") end)
if not ok then
  error(out, 0)
end
return out
`;
  const status = lauxlib.luaL_dostring(L, to_luastring(driver));
  if (status !== lua.LUA_OK) {
    const err = to_jsstring(lua.lua_tostring(L, -1), undefined, undefined, "?");
    return { ok: false, error: err };
  }
  const code = to_jsstring(lua.lua_tostring(L, -1), undefined, undefined, "?");
  return { ok: true, code };
}

/**
 * Executes a piece of Lua source in a brand-new, isolated sandbox VM,
 * capturing anything written via `print` (redirected to an in-memory
 * buffer instead of real stdout), whether it ran without a Lua-level
 * runtime error, AND the chunk's return value(s) serialized via
 * `tostring` (chunk is executed as the body of a wrapper function so
 * `return` statements and tail expressions both produce captureable
 * values). Detecting return-value drift catches silent corruption where
 * a script crashes neither in the original nor the obfuscated form but
 * computes different values.
 */
function sandboxExecute(luaCode) {
  const L = lauxlib.luaL_newstate();
  lualib.luaL_openlibs(L);
  // Neuter anything that could block/hang or touch the outside world during
  // the self-test; we only care whether the obfuscated logic itself throws
  // and what it prints.
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
      parts.push(to_jsstring(lua.lua_tostring(LL, -1), undefined, undefined, "?"));
      lua.lua_pop(LL, 1);
    }
    captured.push(parts.join("\t"));
    return 0;
  });
  lua.lua_setglobal(L, to_luastring("print"));

  // Serialize helper: Lua-side function that turns any return values into
  // a stable, comparable string via tostring (functions/tables become
  // their identity tags, which still differ when the underlying values
  // differ; scalars become their plain representation).
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
    lua.lua_call(L, 0, 1); // the chunk returns the serialize function
    lua.lua_setglobal(L, to_luastring("__fengetheus_serialize"));
  }

  // Wrap the user chunk in a vararg function so its return values / tail
  // expressions become call results we can capture, and top-level `...`
  // usage (legal in chunks) keeps working.
  const wrapped = `return (function(...)\n${luaCode}\nend)(...)`;
  const status = lauxlib.luaL_dostring(L, to_luastring(wrapped));
  if (status !== lua.LUA_OK) {
    const err = to_jsstring(lua.lua_tostring(L, -1), undefined, undefined, "?");
    return { ok: false, error: err, printed: captured.join("\n"), returned: null };
  }

  if (lua.lua_getglobal(L, to_luastring("__fengetheus_serialize")) === lua.LUA_TFUNCTION) {
    // Duplicate the N return values above the serialize function on the stack
    const n = lua.lua_gettop(L) - 1;
    for (let i = 0; i < n; i++) {
      lua.lua_pushvalue(L, 1 + i); // copy each return value
    }
    // Stack now: [serialize, ret1..retN, serialize?, ret1..retN]
    // lua_insert to bring serialize below the copies:
    lua.lua_insert(L, 1);
    if (lua.lua_pcall(L, n, 1, 0) === lua.LUA_OK) {
      serializedReturn = to_jsstring(lua.lua_tostring(L, -1), undefined, undefined, "?") ?? "";
      lua.lua_pop(L, 1);
    }
  }
  lua.lua_settop(L, 0);
  return { ok: true, error: null, printed: captured.join("\n"), returned: serializedReturn };
}

/**
 * Obfuscates `source` with `preset`, self-testing the result by executing it
 * in a sandbox VM and retrying (with a freshly forced seed each time) if it
 * hits the known Vmify/ConstantArray bug, up to `maxAttempts` times.
 *
 * onLog(message) is called with human-readable progress messages.
 */
export function obfuscate(source, preset, { maxAttempts = 8, onLog = () => {} } = {}) {
  if (!PRESET_NAMES.includes(preset)) {
    throw new Error(`Unknown preset "${preset}". Must be one of ${PRESET_NAMES.join(", ")}.`);
  }

  // Minify/Weak never touch Vmify+ConstantArray+EncryptStrings together, so
  // they're not subject to the known bug — skip the self-test loop for speed.
  const needsSelfTest = preset === "Medium" || preset === "Strong";

  // Establish a baseline: what does the ORIGINAL script print in the same
  // sandbox? If it runs cleanly, we diff every candidate's output against
  // this — catching silent value-corruption bugs, not just crashes (a plain
  // "did it throw" check misses cases where Fengari and the target's real
  // Lua VM execute Vmify's generated bytecode-interpreter differently and
  // produce a WRONG result without ever throwing). If the original itself
  // errors in a bare sandbox (e.g. it's a Roblox script referencing `game`,
  // or requires unavailable modules), we can't meaningfully diff output, so
  // we fall back to crash-only detection.
  let baseline = null;
  if (needsSelfTest) {
    const base = sandboxExecute(source);
    if (base.ok) {
      baseline = base.printed;
      onLog(`[${preset}] Baseline captured from original script for output comparison.`);
    } else {
      onLog(`[${preset}] Original script doesn't run standalone in a bare sandbox (likely relies on an external environment) — self-test will only catch crashes, not silent corruption.`);
    }
  }

  let lastError = null;
  const totalAttempts = needsSelfTest ? maxAttempts : 1;
  for (let attempt = 1; attempt <= totalAttempts; attempt++) {
    onLog(`[${preset}] Obfuscation attempt ${attempt}${needsSelfTest ? `/${maxAttempts}` : ""}...`);
    // Force a distinct, non-clock-based seed on every attempt so retries
    // actually explore different random paths through Vmify/ConstantArray,
    // instead of risking the same clock-seeded RNG sequence twice in a row.
    const seedOverride = needsSelfTest ? Date.now() % 2147483647 + attempt * 104729 : null;
    const result = obfuscateOnce(source, preset, seedOverride);
    if (!result.ok) {
      lastError = result.error;
      onLog(`[${preset}] Obfuscation itself failed: ${result.error}`);
      continue;
    }

    if (!needsSelfTest) {
      onLog(`[${preset}] Done.`);
      return { ok: true, code: result.code, attempts: attempt, warning: null };
    }

    onLog(`[${preset}] Verifying output executes correctly in a sandbox...`);
    const test = sandboxExecute(result.code);

    if (!test.ok) {
      lastError = test.error;
      onLog(`[${preset}] Attempt ${attempt} produced code that fails at runtime (known upstream Vmify/ConstantArray issue): ${test.error}`);
      continue;
    }

    if (baseline !== null && (normalizeOutput(test.printed) !== normalizeOutput(baseline.printed) || normalizeOutput(test.returned) !== normalizeOutput(baseline.returned))) {
      lastError = "obfuscated output behaves differently than the original (silent corruption, not a crash)";
      onLog(`[${preset}] Attempt ${attempt} ran without error but its output doesn't match the original's — silent corruption from the same known Vmify/ConstantArray issue. Retrying.`);
      continue;
    }

    onLog(`[${preset}] Verified OK on attempt ${attempt}${baseline !== null ? " (output matches original)" : ""}.`);
    return { ok: true, code: result.code, attempts: attempt, warning: null };
  }

  // Exhausted retries. Do the best-effort obfuscation one more time and hand
  // it back anyway, clearly flagged, rather than refusing outright — some
  // users may still want to inspect/patch it, or it may work fine for their
  // specific runtime even though our generic sandbox check tripped.
  onLog(`[${preset}] Could not get a self-verified result after ${maxAttempts} attempts. Returning best-effort output with a warning.`);
  const fallback = obfuscateOnce(source, preset, Date.now());
  return {
    ok: fallback.ok,
    code: fallback.ok ? fallback.code : null,
    attempts: maxAttempts,
    warning: fallback.ok
      ? `This script triggered a known upstream Prometheus bug (Vmify + ConstantArray, see prometheus-lua/Prometheus issues #155 and #18) ${maxAttempts} times in a row — most recently: ${lastError}. The code below is best-effort and should be tested before you rely on it. Try the "Weak" preset for a version that is not affected by this bug.`
      : `Obfuscation failed: ${fallback.error}`,
  };
}

export { sandboxExecute, obfuscateOnce, normalizeOutput, PRESET_NAMES };
