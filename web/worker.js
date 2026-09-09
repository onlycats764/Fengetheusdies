/* Execute Fengetheus in a native Lua WebAssembly VM instead of interpreting
 * every Lua instruction in JavaScript.  The worker keeps source and output
 * off the page and off the network. */
"use strict";

importScripts("./vendor/wasmoon/index.js");

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

async function createLuaRuntime(sources, configuration) {
  if (!self.wasmoon || !self.wasmoon.LuaFactory) throw new Error("The Lua WebAssembly runtime did not load. Reload the page and try again.");
  const wasmUrl = new URL("./vendor/wasmoon/glue.wasm", self.location.href).toString();
  const factory = new self.wasmoon.LuaFactory(wasmUrl);
  const lua = await factory.createEngine({ openStandardLibs: true });
  for (const [name, source] of sources) {
    const relative = `${name.replace(/\./g, "/")}.lua`;
    await factory.mountFile(`/src/${relative}`, source);
  }
  await lua.doString('package.path = "/src/?.lua;/src/?/init.lua"');
  return async (source, filename) => {
    lua.global.set("__feng_source", source);
    lua.global.set("__feng_filename", filename);
    return String(await lua.doString(configuration));
  };
}

let runtimePromise = null;
self.onmessage = async (event) => {
  if (!event.data || event.data.type !== "obfuscate") return;
  try {
    notify(15, "Loading the local Lua compiler…");
    if (!runtimePromise) runtimePromise = (async () => {
      const sources = await fetchModuleSources();
      notify(52, "Starting the native Lua WebAssembly runtime…");
      return createLuaRuntime(sources, event.data.configuration);
    })();
    const run = await runtimePromise;
    notify(68, "Running the selected obfuscation pipeline…");
    const output = await run(event.data.source, event.data.filename);
    notify(96, "Finalizing the protected download…");
    self.postMessage({ type: "complete", output });
  } catch (error) {
    runtimePromise = null;
    self.postMessage({ type: "error", message: error instanceof Error ? error.message : "Obfuscation failed. Check the source file and try again." });
  }
};
