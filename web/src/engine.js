import * as luanodeVM from "luanode-vm";
import { LUA_MODULES } from "./lua-modules.generated.js";

const { lua, lauxlib, lualib, to_luastring, to_jsstring } = luanodeVM;

/**
 * Creates a fresh Lua VM (LuaNode-VM — a Lua 5.3 VM compiled to JavaScript
 * with true 64-bit integer support via BigInt, loaded from the
 * Xyraniz/LuaNode-VM GitHub package) with the entire real Prometheus source tree preloaded via
 * package.preload. No filesystem, no network, nothing fetched at runtime:
 * everything ships inside the bundle.
 *
 * Fengetheus embeds the real Prometheus compiler unmodified except for the
 * host-compatibility patches documented in PATCHES.md.
 */
function newPrometheusState(onLog) {
  const L = lauxlib.luaL_newstate();
  lualib.luaL_openlibs(L);

  // Redirect the VM's global `print` so any message Prometheus itself prints
  // (e.g. Logger:error, see src/logger.lua) reaches the UI log panel through
  // onLog() instead of being trapped inside the worker or devtools.
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
    onLog(parts.join("\t"));
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

/**
 * Escapes a JS string into a Lua double-quoted string literal via JSON
 * (Lua string escaping is a compatible subset of JSON here).
 */
function luaStringLiteral(js) {
  return JSON.stringify(js);
}

const PRESET_NAMES = ["Minify", "Weak", "Medium", "Strong"];

/**
 * Obfuscates `source` with `preset` and returns the obfuscated Lua code.
 *
 * The previous self-verification / retry loop (sandbox execution of the
 * obfuscated output, baseline comparison, up to 8 retries with forced fresh
 * seeds) has been removed. It existed solely to work around a non-deterministic
 * crash in the Vmify + ConstantArray combination caused by a wrong scope
 * parenting in createUpvaluesProxyFunc's __len metamethod (upvalue.lua). That
 * root cause is now fixed, so the workaround is no longer needed — and it was
 * actively harmful for real-world Roblox/GUI scripts, which reference globals
 * (`game`, services, etc.) that don't exist in a bare sandbox, making the
 * self-test either refuse to run or retry pointlessly. Obfuscation now runs
 * exactly once and returns immediately.
 *
 * Returns { ok: true, code } on success or { ok: false, error } on failure.
 * `onLog(message)` is called with human-readable progress messages.
 */
export function obfuscate(source, preset, { onLog = () => {} } = {}) {
  if (!PRESET_NAMES.includes(preset)) {
    throw new Error(`Unknown preset "${preset}". Must be one of ${PRESET_NAMES.join(", ")}.`);
  }

  onLog(`[${preset}] Obfuscating...`);

  const L = newPrometheusState(onLog);
  const driver = `
local Prometheus = require("prometheus")
	-- Surface parser, transform, rename and emit progress through the host print
	-- callback. This keeps a long-running input diagnosable in the browser
	-- rather than leaving the user with only a generic busy state.
	Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Info
	Prometheus.colors.enabled = false
	local pipeline = Prometheus.Pipeline:fromConfig(Prometheus.Presets["${preset}"])

local ok, out = pcall(function() return pipeline:apply(${luaStringLiteral(source)}, "input.lua") end)
if not ok then
  error(out, 0)
end
return out
`;
  const status = lauxlib.luaL_dostring(L, to_luastring(driver));
  if (status !== lua.LUA_OK) {
    const err = to_jsstring(lua.lua_tostring(L, -1), undefined, undefined, "?");
    onLog(`[${preset}] Obfuscation failed: ${err}`);
    return { ok: false, error: err, code: null, warning: `Obfuscation failed: ${err}` };
  }

  const code = to_jsstring(lua.lua_tostring(L, -1), undefined, undefined, "?");
  onLog(`[${preset}] Done. (${source.length} bytes -> ${code.length} bytes)`);
  return { ok: true, code, warning: null };
}

export { PRESET_NAMES };
