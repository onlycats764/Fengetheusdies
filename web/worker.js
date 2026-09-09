/* Keep the synchronous Lua VM off the page's main thread.  Fengetheus itself
 * is still entirely local: this worker only fetches the checked-in compiler
 * modules and returns the generated download to the tab that started it. */
"use strict";

importScripts("./vendor/luanode-vm.js");

const dynamicModules = {
  "fengetheus.compiler.statements": ["return", "local_variable_declaration", "function_call", "pass_self_function_call", "local_function_declaration", "function_declaration", "assignment", "if_statement", "do_statement", "while_statement", "repeat_statement", "for_statement", "for_in_statement", "break_statement", "continue_statement", "compound"],
  "fengetheus.compiler.expressions": ["string", "number", "boolean", "nil", "variable", "function_call", "function_literal", "table_constructor", "binary", "and", "or", "not", "negate", "len", "index", "if_else", "vararg", "pass_self_function_call"]
};

function notify(percent, label) { self.postMessage({ type: "progress", percent, label }); }

async function fetchModuleSources() {
  const sources = new Map();
  const visiting = new Map();
  async function visit(name) {
    if (sources.has(name)) return;
    if (visiting.has(name)) return visiting.get(name);
    const promise = (async () => {
      const relative = `${name.replace(/\./g, "/")}.lua`;
      const response = await fetch(new URL(`./src/${relative}`, self.location.href));
      if (!response.ok) throw new Error(`The browser could not load compiler module ${name}.`);
      const source = await response.text();
      sources.set(name, source);
      const dependencies = [...source.matchAll(/require\s*\(\s*["']([^"']+)["']\s*\)/g)].map((match) => match[1]);
      const dynamicDependencies = (dynamicModules[name] || []).map((suffix) => `${name}.${suffix}`);
      await Promise.all([...dependencies, ...dynamicDependencies].map(visit));
    })();
    visiting.set(name, promise);
    return promise;
  }
  await visit("fengetheus");
  return sources;
}

function createLuaRuntime(sources, configuration) {
  const api = self.LuaNodeVM || self.fengari;
  if (!api || !api.lua || !api.lauxlib) throw new Error("The Lua browser runtime did not load. Reload the page and try again.");
  const { lua, lauxlib, lualib, to_luastring, to_jsstring } = api;
  const state = lauxlib.luaL_newstate();
  lualib.luaL_openlibs(state);
  const loadBuffer = (source, name) => {
    const bytes = to_luastring(source);
    const status = lauxlib.luaL_loadbuffer(state, bytes, bytes.length, to_luastring(`@${name}`));
    if (status !== lua.LUA_OK) {
      const error = to_jsstring(lua.lua_tostring(state, -1));
      lua.lua_settop(state, 0);
      throw new Error(error);
    }
  };
  for (const [name, source] of sources) {
    loadBuffer(source, name);
    lua.lua_getglobal(state, to_luastring("package"));
    lua.lua_getfield(state, -1, to_luastring("preload"));
    lua.lua_pushvalue(state, -3);
    lua.lua_setfield(state, -2, to_luastring(name));
    lua.lua_pop(state, 3);
  }
  return (source, filename) => {
    lua.lua_settop(state, 0);
    lua.lua_pushstring(state, to_luastring(source));
    lua.lua_setglobal(state, to_luastring("__feng_source"));
    lua.lua_pushstring(state, to_luastring(filename));
    lua.lua_setglobal(state, to_luastring("__feng_filename"));
    loadBuffer(configuration, "@fengetheus-web-config");
    const status = lua.lua_pcall(state, 0, lua.LUA_MULTRET, 0);
    if (status !== lua.LUA_OK) {
      const error = to_jsstring(lua.lua_tostring(state, -1));
      lua.lua_settop(state, 0);
      throw new Error(error);
    }
    const output = to_jsstring(lua.lua_tostring(state, -1));
    lua.lua_settop(state, 0);
    if (typeof output !== "string" || output.length === 0) throw new Error("Fengetheus returned an empty result.");
    return output;
  };
}

let runtimePromise = null;
self.onmessage = async (event) => {
  if (!event.data || event.data.type !== "obfuscate") return;
  try {
    notify(15, "Loading the local Lua compiler…");
    if (!runtimePromise) runtimePromise = fetchModuleSources().then((sources) => {
      notify(52, "Preparing Fengetheus modules…");
      return createLuaRuntime(sources, event.data.configuration);
    });
    const run = await runtimePromise;
    notify(68, "Running the selected obfuscation pipeline…");
    const output = run(event.data.source, event.data.filename);
    notify(96, "Finalizing the protected download…");
    self.postMessage({ type: "complete", output });
  } catch (error) {
    runtimePromise = null;
    self.postMessage({ type: "error", message: error instanceof Error ? error.message : "Obfuscation failed. Check the source file and try again." });
  }
};
