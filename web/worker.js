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

async function createLuaRuntime(sources) {
  if (!self.wasmoon || !self.wasmoon.LuaFactory) throw new Error("The Lua WebAssembly runtime did not load. Reload the page and try again.");
  const wasmUrl = new URL("./vendor/wasmoon/glue.wasm", self.location.href).toString();
  const factory = new self.wasmoon.LuaFactory(wasmUrl);
  const lua = await factory.createEngine({ openStandardLibs: true });
  for (const [name, source] of sources) {
    const relative = `${name.replace(/\./g, "/")}.lua`;
    await factory.mountFile(`/src/${relative}`, source);
  }
  await lua.doString('package.path = "/src/?.lua;/src/?/init.lua"');
  await lua.doString('local feng=require("fengetheus"); feng.Logger.logLevel=feng.Logger.LogLevel.Error; feng.Logger.errorCallback=function(...) local parts={} for i=1,select("#",...) do parts[i]=tostring(select(i,...)) end error(table.concat(parts," "),0) end');
  return lua;
}

let runtimePromise = null;
self.onmessage = async (event) => {
  if (!event.data || !["obfuscate", "presets"].includes(event.data.type)) return;
  let lua;
  try {
    notify(15, "Loading the local Lua compiler…");
    if (!runtimePromise) runtimePromise = (async () => {
      const sources = await fetchModuleSources();
      notify(52, "Starting the native Lua WebAssembly runtime…");
      return createLuaRuntime(sources);
    })();
    lua = await runtimePromise;
    if (event.data.type === "presets") {
      const presetData = await lua.doString(`
        local feng=require("fengetheus")
        local metadata, pipelines={},{}
        for name,preset in pairs(feng.Presets) do
          local profile, pipeline={},{}
          for _,step in ipairs(preset.Steps or {}) do
            local settings={}
            for key,descriptor in pairs(feng.Pipeline.Steps[step.Name].SettingsDescriptor or {}) do settings[key]=descriptor.default end
            for key,value in pairs(step.Settings or {}) do settings[key]=value end
            if not profile[step.Name] then profile[step.Name]=settings end
            pipeline[#pipeline+1]={Name=step.Name,Settings=settings}
          end
          metadata[name]=profile
          pipelines[name]=pipeline
        end
        return {presets=metadata,pipelines=pipelines}
      `);
      const presets = Object.fromEntries(event.data.names.map((name) => [name, presetData.presets[name]]));
      const pipelines = Object.fromEntries(event.data.names.map((name) => [name, presetData.pipelines[name]]));
      self.postMessage({ type: "presets", presets, pipelines });
      return;
    }
    lua.global.set("__feng_source", event.data.source);
    lua.global.set("__feng_filename", event.data.filename);
    notify(60, "Detecting Lua / Luau syntax…");
    const detected = await lua.doString(`
      local feng=require("fengetheus")
      local dialect,details=feng.Parser.detectLuaVersion(__feng_source)
      if not dialect and not details.Lua51 then
        error("The source is invalid in both Lua 5.1 and Luau.\\nLua: " .. tostring(details.Lua51Error) .. "\\nLuau: " .. tostring(details.LuaUError),0)
      end
      __feng_dialect=dialect or "Lua51"
      return { dialect=__feng_dialect, compatible=details.Lua51 and details.LuaU }
    `);
    notify(68, "Running the selected obfuscation pipeline…");
    const output = await lua.doString(event.data.configuration);
    if (typeof output !== "string" || !output.length) throw new Error("Fengetheus returned an empty result.");
    notify(96, "Finalizing the protected download…");
    const syntaxLabel = detected.compatible ? "Lua / Luau compatible" : detected.dialect === "LuaU" ? "Luau detected" : "Lua 5.1 detected";
    self.postMessage({ type: "complete", output, dialect: detected.dialect, compatible: detected.compatible, syntaxLabel });
  } catch (error) {
    lua?.global.close();
    runtimePromise = null;
    self.postMessage({ type: "error", message: error instanceof Error ? error.message : "Obfuscation failed. Check the source file and try again." });
  }
};
