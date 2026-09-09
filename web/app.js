/* Fengetheus web client. The Lua compiler is executed in LuaNode-VM in this
 * browser tab; the generated source is kept in memory and is never rendered. */
(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const appUrl = new URL(document.currentScript && document.currentScript.src ? document.currentScript.src : "./app.js", window.location.href);
  const sourceInput = $("#source-file");
  const dropzone = $("#dropzone");
  const obfuscateButton = $("#obfuscate");
  const progressWrap = $("#progress-wrap");
  const progressBar = $("#progress-bar");
  const progressLabel = $("#progress-label");
  const resultCard = $("#result-card");
  const errorBox = $("#error-box");
  const presetDescription = $("#preset-description");
  let selectedFile = null;
  let generatedSource = null;
  let generatedName = "protected.lua";
  let downloadUrl = null;
  let runtimePromise = null;
  let obfuscationWorker = null;

  const presetDescriptions = {
    Minify: "Smallest change: cleans and simplifies code without a heavy runtime layer.",
    Balanced: "A practical everyday profile with encrypted strings and integrity checks.",
    Phantom: "A virtualized runtime profile for scripts that need a stronger execution barrier.",
    Wraith: "Stealth-focused transformations with a lighter runtime footprint.",
    Cipher: "Encrypted constants and layered transformations for a less recognizable output.",
    Aegis: "Adds anti-sandbox checks while preserving a manageable script size.",
    Titan: "Maximum standard protection with VM, integrity, and structural transforms.",
    TitanVM2: "A nonlinear, multi-entry virtual machine profile for high resistance.",
    StrongScalable: "A strong profile tuned for large scripts and lower nesting pressure.",
    Vmify: "A focused custom virtual machine baseline for testing VM-based protection."
  };

  const stepDefinitions = [
    ["ConstantFolding", "Constant folding", true],
    ["DeadCodeElimination", "Dead-code removal", true],
    ["RedundantOperationElimination", "Redundant operation removal", true],
    ["LocalCaching", "Local caching", true],
    ["ExtractGlobals", "Global extraction", false],
    ["OpaquePredicate", "Opaque predicates", true],
    ["ControlFlowMutation", "Control-flow mutation", false],
    ["EncryptStrings", "String encryption", true],
    ["SplitStrings", "String splitting", false],
    ["ConstantArray", "Constant array", false],
    ["NumbersToExpressions", "Number mutation", false],
    ["Vmify", "Virtual machine", false],
    ["AntiSandbox", "Anti-sandbox checks", false],
    ["AntiTamper", "Integrity checks", false],
    ["TamperObfuscator", "Integrity loader", false],
    ["RewriteNamecalls", "Method-call rewriting", false],
    ["ConditionCamouflage", "Condition camouflage", false],
    ["JunkCode", "Junk code", false],
    ["ProxifyLocals", "Local proxying", false],
    ["WrapInFunction", "Function wrapping", false]
  ];

  function setProgress(percent, label) {
    progressBar.style.width = `${percent}%`;
    progressLabel.textContent = label;
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.remove("is-hidden");
  }

  function clearError() {
    errorBox.textContent = "";
    errorBox.classList.add("is-hidden");
  }

  function setFile(file) {
    clearError();
    if (!file) return;
    const lower = file.name.toLowerCase();
    if (!lower.endsWith(".lua") && !lower.endsWith(".luau") && file.type !== "text/plain") {
      showError("Choose a .lua or .luau source file.");
      return;
    }
    if (file.size > 12 * 1024 * 1024) {
      showError("This browser build accepts Lua files up to 12 MB.");
      return;
    }
    selectedFile = file;
    $("#file-name").textContent = file.name;
    $("#file-size").textContent = `${(file.size / 1024).toFixed(file.size < 1024 * 1024 ? 1 : 0)} KB`;
    $("#file-state").textContent = "File selected";
    $("#file-summary").classList.remove("is-hidden");
    obfuscateButton.disabled = false;
    resultCard.classList.add("is-hidden");
    generatedSource = null;
  }

  function clearFile() {
    selectedFile = null;
    sourceInput.value = "";
    $("#file-state").textContent = "Waiting for a file";
    $("#file-summary").classList.add("is-hidden");
    obfuscateButton.disabled = true;
    resultCard.classList.add("is-hidden");
    generatedSource = null;
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    downloadUrl = null;
  }

  function luaQuote(value) {
    return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t")}"`;
  }

  function luaValue(value) {
    if (value === null || value === undefined) return "nil";
    if (typeof value === "string") return luaQuote(value);
    if (typeof value === "boolean") return value ? "true" : "false";
    if (typeof value === "number" && Number.isFinite(value)) return String(value);
    if (Array.isArray(value)) return `{${value.map(luaValue).join(",")}}`;
    if (typeof value === "object") {
      return `{${Object.entries(value).map(([key, item]) => `[${luaQuote(key)}]=${luaValue(item)}`).join(",")}}`;
    }
    return "nil";
  }

  function numberValue(id, fallback, min, max) {
    const n = Number($(id).value);
    if (!Number.isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, n));
  }

  function settingsForStep(name) {
    const controlThreshold = numberValue("#control-threshold", 0.4, 0, 1);
    const controlLayers = Math.round(numberValue("#control-layers", 1, 1, 4));
    const opaqueThreshold = numberValue("#opaque-threshold", 0.5, 0, 1);
    const constantThreshold = Math.round(numberValue("#constant-threshold", 1, 1, 100));
    const junkChance = numberValue("#junk-chance", 0.15, 0, 1);
    const vmAliasCount = Math.round(numberValue("#vm-alias-count", 1, 1, 4));
    const common = {};
    if (name === "ControlFlowMutation") return { Threshold: controlThreshold, Layers: controlLayers };
    if (name === "OpaquePredicate") return { Threshold: opaqueThreshold };
    if (name === "ConstantArray") return { Threshold: constantThreshold, StringsOnly: $("#strings-only").checked, Shuffle: true, Rotate: true, LocalWrapperThreshold: 0 };
    if (name === "JunkCode") return { Chance: junkChance, MinJunk: 2, MaxJunk: 4, MaxDepth: 3 };
    if (name === "Vmify") return { DispatchMask: $("#vm-mask").checked, DispatchAffine: $("#vm-affine").checked, DispatchBounce: $("#vm-bounce").checked, DispatchNonlinear: $("#vm-nonlinear").checked, DispatchAliasCount: vmAliasCount, DispatchMaskMagnitude: 4096, DispatchNoiseMagnitude: 7 };
    if (name === "AntiTamper") return { UseDebug: false, Stealth: $("#tamper-stealth").checked };
    if (name === "AntiSandbox") return { UseDebug: false, CheckExecutorAPIs: false, CheckTiming: true, FailureMode: "mixed", Intensity: 3 };
    if (name === "TamperObfuscator") return { XORLayers: 1 };
    return common;
  }

  function customSteps() {
    return [...document.querySelectorAll("#step-grid input:checked")].map((input) => ({ Name: input.value, Settings: settingsForStep(input.value) }));
  }

  function configurationSnippet() {
    const mode = document.querySelector(".mode-tab.active").dataset.mode;
    const luaVersion = $("#lua-version").value;
    const pretty = $("#pretty-print").checked;
    const seed = Math.round(numberValue("#seed", 424242, 0, 9007199254740991));
    const prefix = $("#name-prefix").value.trim();
    if (mode === "preset") {
      const preset = luaQuote($("#preset-select").value);
      return `local feng=require("fengetheus"); local cfg=feng.Presets[${preset}]; cfg.LuaVersion=${luaQuote(luaVersion)}; cfg.PrettyPrint=${pretty}; cfg.Seed=${seed}; cfg.VarNamePrefix=${luaQuote(prefix)}; for _,s in ipairs(cfg.Steps or {}) do s.Settings=s.Settings or {}; if s.Name=="ControlFlowMutation" then s.Settings.Threshold=${numberValue("#control-threshold", 0.4, 0, 1)}; s.Settings.Layers=${Math.round(numberValue("#control-layers", 1, 1, 4))}; elseif s.Name=="OpaquePredicate" then s.Settings.Threshold=${numberValue("#opaque-threshold", 0.5, 0, 1)}; elseif s.Name=="ConstantArray" then s.Settings.Threshold=${Math.round(numberValue("#constant-threshold", 1, 1, 100))}; s.Settings.StringsOnly=${$("#strings-only").checked}; elseif s.Name=="Vmify" then s.Settings.DispatchMask=${$("#vm-mask").checked}; s.Settings.DispatchAffine=${$("#vm-affine").checked}; s.Settings.DispatchBounce=${$("#vm-bounce").checked}; s.Settings.DispatchNonlinear=${$("#vm-nonlinear").checked}; s.Settings.DispatchAliasCount=${Math.round(numberValue("#vm-alias-count", 1, 1, 4))}; elseif s.Name=="AntiTamper" then s.Settings.UseDebug=false; s.Settings.Stealth=${$("#tamper-stealth").checked}; end end; local p=feng.Pipeline:fromConfig(cfg); return p:apply(__feng_source,__feng_filename)`;
    }
    const config = { LuaVersion: luaVersion, PrettyPrint: pretty, Seed: seed, VarNamePrefix: prefix, NameGenerator: "MangledShuffled", Steps: customSteps() };
    return `local feng=require("fengetheus"); local p=feng.Pipeline:fromConfig(${luaValue(config)}); return p:apply(__feng_source,__feng_filename)`;
  }

  async function fetchModuleSources() {
    const roots = [new URL("../src/", appUrl), new URL("./src/", appUrl), new URL("https://raw.githubusercontent.com/Xyraniz/Fengetheus/main/src/")];
    const sources = new Map();
    const visiting = new Map();
    const dynamicModules = {
      "fengetheus.compiler.statements": ["return", "local_variable_declaration", "function_call", "pass_self_function_call", "local_function_declaration", "function_declaration", "assignment", "if_statement", "do_statement", "while_statement", "repeat_statement", "for_statement", "for_in_statement", "break_statement", "continue_statement", "compound"],
      "fengetheus.compiler.expressions": ["string", "number", "boolean", "nil", "variable", "function_call", "function_literal", "table_constructor", "binary", "and", "or", "not", "negate", "len", "index", "if_else", "vararg", "pass_self_function_call"]
    };
    async function visit(name) {
      if (sources.has(name)) return;
      if (visiting.has(name)) return visiting.get(name);
      const promise = (async () => {
        const relative = `${name.replace(/\./g, "/")}.lua`;
        let response = null;
        for (const root of roots) {
          try { const candidate = await fetch(new URL(relative, root)); if (candidate.ok) { response = candidate; break; } } catch (_) { /* try the next source root */ }
        }
        if (!response) throw new Error(`The browser could not load compiler module ${name}.`);
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

  function createLuaRuntime(sources) {
    const api = window.LuaNodeVM || window.fengari;
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
    return {
      run(source, filename) {
        lua.lua_settop(state, 0);
        lua.lua_pushstring(state, to_luastring(source));
        lua.lua_setglobal(state, to_luastring("__feng_source"));
        lua.lua_pushstring(state, to_luastring(filename));
        lua.lua_setglobal(state, to_luastring("__feng_filename"));
        loadBuffer(configurationSnippet(), "@fengetheus-web-config");
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
      }
    };
  }

  async function getRuntime() {
    if (!runtimePromise) {
      runtimePromise = (async () => {
        setProgress(18, "Loading the local Lua compiler…");
        const sources = await fetchModuleSources();
        setProgress(53, "Preparing Fengetheus modules…");
        return createLuaRuntime(sources);
      })();
    }
    return runtimePromise;
  }

  function renderSteps() {
    $("#step-grid").innerHTML = stepDefinitions.map(([name, label, checked]) => `<label class="step-toggle"><input type="checkbox" value="${name}" ${checked ? "checked" : ""}><span>${label}</span></label>`).join("");
  }

  document.querySelectorAll(".mode-tab").forEach((tab) => tab.addEventListener("click", () => {
    document.querySelectorAll(".mode-tab").forEach((item) => { item.classList.toggle("active", item === tab); item.setAttribute("aria-selected", item === tab ? "true" : "false"); });
    $("#preset-panel").classList.toggle("is-hidden", tab.dataset.mode !== "preset");
    $("#custom-panel").classList.toggle("is-hidden", tab.dataset.mode !== "custom");
  }));
  $("#preset-select").addEventListener("change", (event) => { presetDescription.textContent = presetDescriptions[event.target.value] || "A configurable Fengetheus transformation profile."; });
  sourceInput.addEventListener("change", () => setFile(sourceInput.files[0]));
  ["dragenter", "dragover"].forEach((eventName) => dropzone.addEventListener(eventName, (event) => { event.preventDefault(); dropzone.classList.add("dragging"); }));
  ["dragleave", "drop"].forEach((eventName) => dropzone.addEventListener(eventName, (event) => { event.preventDefault(); dropzone.classList.remove("dragging"); }));
  dropzone.addEventListener("drop", (event) => setFile(event.dataTransfer.files[0]));
  dropzone.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); sourceInput.click(); } });
  $("#remove-file").addEventListener("click", clearFile);
  $("#download").addEventListener("click", () => { if (!downloadUrl) return; const link = document.createElement("a"); link.href = downloadUrl; link.download = generatedName; link.click(); });
  function runInWorker(source, filename, configuration) {
    return new Promise((resolve, reject) => {
      if (obfuscationWorker) obfuscationWorker.terminate();
      obfuscationWorker = new Worker(new URL("worker.js", appUrl), { type: "classic" });
      obfuscationWorker.onmessage = (event) => {
        const message = event.data || {};
        if (message.type === "progress") setProgress(message.percent, message.label);
        if (message.type === "complete") resolve(message.output);
        if (message.type === "error") reject(new Error(message.message));
      };
      obfuscationWorker.onerror = () => reject(new Error("The browser worker stopped unexpectedly. Reload the page and try again."));
      obfuscationWorker.postMessage({ type: "obfuscate", source, filename, configuration });
    });
  }
  obfuscateButton.addEventListener("click", async () => {
    if (!selectedFile) return;
    clearError(); resultCard.classList.add("is-hidden"); progressWrap.classList.remove("is-hidden"); obfuscateButton.disabled = true; setProgress(7, "Reading your source file…");
    try {
      const source = await selectedFile.text();
      if (!source.trim()) throw new Error("The selected file is empty.");
      generatedSource = await runInWorker(source, selectedFile.name, configurationSnippet());
      generatedName = selectedFile.name.replace(/\.(luau?|txt)$/i, "") + ".obfuscated.lua";
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
      downloadUrl = URL.createObjectURL(new Blob([generatedSource], { type: "text/plain;charset=utf-8" }));
      setProgress(100, "Finished. Your protected download is ready.");
      resultCard.classList.remove("is-hidden");
    } catch (error) {
      showError(error instanceof Error ? error.message : "Obfuscation failed. Check the source file and try again.");
      setProgress(0, "Ready to try again.");
    } finally {
      obfuscateButton.disabled = !selectedFile;
    }
  });

  renderSteps();
})();
