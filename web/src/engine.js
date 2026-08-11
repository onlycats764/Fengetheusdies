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
 * Lua-5.1-faithful comparison of two captured `print` buffers.
 *
 * Fengari (the host VM Fengetheus runs its self-test in) is a Lua 5.3 build
 * with a 32-bit lua_Integer, so it carries the integer/float subtype and
 * prints integer-valued floats with a trailing ".0" (tostring(15.0) == "15.0").
 * The real target Fengetheus compiles for -- Lua 5.1 and Roblox Luau -- has
 * *no* integer subtype: every number is a 64-bit double and tostring(15.0)
 * == "15", never "15.0". So a difference that is *only* the integer/float
 * subtype (15.0 vs 15) is NOT real corruption -- it would never appear on the
 * actual target, and the obfuscated code is correct there.
 *
 * A plain string compare (test.printed !== baseline) treats that harmless
 * subtype difference as "silent corruption", which is exactly the false
 * positive that caused the spurious "8 retries / issue #155 & #18" warning.
 *
 * This function compares the two buffers token-by-token: numeric tokens are
 * compared by numeric value (so 15.0 === 15, 2.5e2 === 250, 0x10 === 16), while
 * every non-numeric token is compared as a literal string. This keeps the
 * verifier faithful to the target's semantics AND still flags genuine value
 * corruption (e.g. 15 printed where 16 should be, or a string that changed).
 *
 * Returns true when the two buffers are semantically equal under Lua 5.1
 * number semantics; false (with a diagnostic) when they genuinely differ.
 */
function lua51OutputsEqual(a, b) {
  if (a === b) return true;
  // Split on whitespace (print joins args with \t, lines with \n; both are
  // whitespace). This keeps multi-word string tokens intact because a single
  // print("Hello, World") becomes one captured line "Hello,\tWorld" -- the
  // comma-space is part of the string content and the only whitespace split
  // points are the real arg/line separators.
  const ta = a.split(/\s+/);
  const tb = b.split(/\s+/);
  if (ta.length !== tb.length) return false;
  for (let i = 0; i < ta.length; i++) {
    const x = ta[i], y = tb[i];
    if (x === y) continue;
    const nx = Number(x), ny = Number(y);
    // Number("") is 0 and Number(" ") is 0, but we only reach here when
    // x !== y and neither is the empty-string collapse case (both arrays
    // come from the same split). Guard against treating bare "" as numeric.
    const xNum = x !== "" && !Number.isNaN(nx) && /^[-+]?\d/ .test(x);
    const yNum = y !== "" && !Number.isNaN(ny) && /^[-+]?\d/ .test(y);
    if (xNum && yNum) {
      if (nx === ny) continue;          // 15.0 === 15, 2.5e2 === 250
      return false;                     // genuinely different numbers -> corruption
    }
    // One side numeric, the other not, or both non-numeric but different.
    return false;
  }
  return true;
}

/**
 * Executes a piece of Lua source in a brand-new, isolated sandbox VM,
 * capturing anything written via `print` (redirected to an in-memory
 * buffer instead of real stdout) and reporting whether it ran without a
 * Lua-level runtime error.
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

  const status = lauxlib.luaL_dostring(L, to_luastring(luaCode));
  if (status !== lua.LUA_OK) {
    const err = to_jsstring(lua.lua_tostring(L, -1), undefined, undefined, "?");
    return { ok: false, error: err, printed: captured.join("\n") };
  }
  return { ok: true, error: null, printed: captured.join("\n") };
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
      onLog(`[${preset}] Attempt ${attempt} produced code that fails at runtime during sandbox verification: ${test.error}`);
      continue;
    }

    if (baseline !== null && !lua51OutputsEqual(test.printed, baseline)) {
      lastError = "obfuscated output behaves differently than the original (silent corruption, not a crash)";
      onLog(`[${preset}] Attempt ${attempt} ran without error but its output doesn't match the original's — possible silent corruption. Retrying.`);
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
      ? `This script could not be self-verified after ${maxAttempts} attempts — most recently: ${lastError}. The code below is best-effort and should be tested in your target runtime before you rely on it. Try the "Weak" or "Medium" preset for lighter-weight alternatives.`
      : `Obfuscation failed: ${fallback.error}`,
  };
}

export { PRESET_NAMES };
