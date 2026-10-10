/* Source and output stay in memory; compilation runs in the Wasmoon worker. */
(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const appUrl = new URL(document.currentScript?.src || "./app.js", window.location.href);
  const sourceInput = $("#source-file"), dropzone = $("#dropzone"), button = $("#obfuscate");
  const dirtyControls = new Set();
  let selectedFile = null, downloadUrl = null, generatedName = "protected.lua";
  let worker = null, pendingRequest = null, metadataPromise = null, presetMetadata = null, presetPipelines = null, busy = false;
  let activeRun = 0;

  const descriptions = {
    Minify: "Minifies and simplifies code without adding protection layers.",
    Balanced: "String encryption and integrity checks without a virtual machine.",
    Virtualized: "A virtual machine with encrypted strings and integrity checks.",
    Stealth: "Stealth integrity checks, split strings and control-flow transforms inside a virtual machine.",
    Encrypted: "String encryption, split constants and a virtual machine with runtime checks.",
    Hardened: "Layered control-flow and constant transforms without a virtual machine.",
    Strong: "A virtual machine with layered constant, control-flow and integrity transforms.",
    Advanced: "A nonlinear virtual machine with dispatch aliases and additional transformation passes.",
    LargeScripts: "String encryption and integrity checks for large scripts, without a virtual machine.",
    VM: "A focused virtual machine profile for testing."
  };
  const steps = [
    ["ConstantFolding", "Constant folding", true], ["DeadCodeElimination", "Dead-code removal", true],
    ["RedundantOperationElimination", "Redundant operation removal", true], ["LocalCaching", "Local caching", true],
    ["ExtractGlobals", "Global extraction"], ["OpaquePredicate", "Opaque predicates", true],
    ["ControlFlowMutation", "Control-flow mutation"], ["EncryptStrings", "String encryption", true],
    ["SplitStrings", "String splitting"], ["ConstantArray", "Constant array"],
    ["NumbersToExpressions", "Number mutation"], ["Vmify", "Virtual machine"],
    ["AntiSandbox", "Anti-sandbox checks"], ["AntiTamper", "Anti-tamper checks"],
    ["TamperObfuscator", "Anti-tamper loader"], ["RewriteNamecalls", "Method-call rewriting"],
    ["ConditionCamouflage", "Condition camouflage"], ["JunkCode", "Junk code"],
    ["ProxifyLocals", "Local proxying"], ["WrapInFunction", "Function wrapping"]
  ];
  const stepLabels = new Map(steps.map(([name, label]) => [name, label]));
  const referenceExcludedSteps = new Set(["DeadCodeElimination", "LocalCaching"]);
  const settingLabels = {
    "AntiTamper.Stealth": "Stealth mode", "ConstantArray.Threshold": "Extraction threshold",
    "ConstantArray.StringsOnly": "Strings only", "ControlFlowMutation.Threshold": "Mutation threshold",
    "ControlFlowMutation.Layers": "Control-flow layers", "JunkCode.Chance": "Junk insertion",
    "OpaquePredicate.Threshold": "Predicate threshold",
    "Vmify.DispatchAliasCount": "Dispatch aliases", "Vmify.DispatchMask": "Masked dispatch",
    "Vmify.DispatchAffine": "Affine dispatch", "Vmify.DispatchBounce": "Bounce dispatch",
    "Vmify.DispatchNonlinear": "Nonlinear dispatch"
  };
  // An edited control overrides only its own field. Repeated preset passes
  // retain their distinct compiler settings while that field is untouched.
  const controls = [
    ["control-threshold", "ControlFlowMutation", "Threshold", 0.4, 0, 1],
    ["control-layers", "ControlFlowMutation", "Layers", 1, 1, 4, true],
    ["opaque-threshold", "OpaquePredicate", "Threshold", 0.5, 0, 1],
    ["constant-threshold", "ConstantArray", "Threshold", 1, 0, 1],
    ["junk-chance", "JunkCode", "Chance", 0.15, 0, 1],
    ["vm-alias-count", "Vmify", "DispatchAliasCount", 1, 1, 4, true],
    ["vm-mask", "Vmify", "DispatchMask", false], ["vm-affine", "Vmify", "DispatchAffine", false],
    ["vm-bounce", "Vmify", "DispatchBounce", false], ["vm-nonlinear", "Vmify", "DispatchNonlinear", false],
    ["strings-only", "ConstantArray", "StringsOnly", false], ["tamper-stealth", "AntiTamper", "Stealth", false]
  ];
  const presetEditableSettings = new Map();
  for (const [, stepName, settingName] of controls) {
    if (!presetEditableSettings.has(stepName)) presetEditableSettings.set(stepName, new Set());
    presetEditableSettings.get(stepName).add(settingName);
  }
  const mode = () => $(".mode-tab.active").dataset.mode;
  const syntax = (label) => { if ($("#syntax-state")) $("#syntax-state").textContent = label; };
  function progress(percent, label) {
    $("#progress-bar").style.width = `${percent}%`;
    $("#progress-label").textContent = label;
    $(".progress-track")?.setAttribute("aria-valuenow", String(percent));
  }
  function updateActionHelp() {
    const help = $(".action-help");
    if (help) help.textContent = busy ? "Processing your file locally…" : downloadUrl ? "Download your file below, or run again." : selectedFile ? "Ready to run with your selected configuration." : "Upload a file to get started.";
  }
  function showError(message) { $("#error-box").textContent = message; $("#error-box").classList.remove("is-hidden"); }
  function clearError() { $("#error-box").textContent = ""; $("#error-box").classList.add("is-hidden"); }
  function discardDownload() {
    $("#result-card").classList.add("is-hidden");
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    downloadUrl = null;
    $("#progress-wrap").classList.add("is-hidden");
    progress(0, "Ready to run.");
    updateActionHelp();
  }
  function setFile(file) {
    if (busy || !file) return;
    clearError();
    if (!/\.(lua|luau)$/i.test(file.name) && file.type !== "text/plain") return showError("Choose a .lua or .luau source file.");
    if (file.size > 12 * 1024 * 1024) return showError("This browser build accepts Lua files up to 12 MB.");
    selectedFile = file;
    $("#file-name").textContent = file.name;
    $("#file-size").textContent = `${(file.size / 1024).toFixed(file.size < 1024 * 1024 ? 1 : 0)} KB`;
    $("#file-state").textContent = "File selected";
    $("#file-summary").classList.remove("is-hidden");
    syntax("Detected from source when you run");
    button.disabled = false;
    discardDownload();
  }
  function clearFile() {
    if (busy) return;
    selectedFile = null;
    sourceInput.value = "";
    $("#file-state").textContent = "Waiting for a file";
    $("#file-summary").classList.add("is-hidden");
    syntax("Automatic Lua / Luau detection");
    button.disabled = true;
    $("#progress-wrap").classList.add("is-hidden");
    clearError(); discardDownload();
  }
  function luaQuote(value) {
    return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t")}"`;
  }
  function luaValue(value) {
    if (value == null) return "nil";
    if (typeof value === "string") return luaQuote(value);
    if (typeof value === "boolean" || (typeof value === "number" && Number.isFinite(value))) return String(value);
    if (Array.isArray(value)) return `{${value.map(luaValue).join(",")}}`;
    if (typeof value === "object") return `{${Object.entries(value).map(([key, item]) => `[${luaQuote(key)}]=${luaValue(item)}`).join(",")}}`;
    return "nil";
  }
  function controlValue([id, , , fallback, min, max, integer]) {
    const input = $(`#${id}`);
    if (typeof fallback === "boolean") return input.checked;
    const number = input.value.trim() === "" ? fallback : Number(input.value);
    const value = Number.isFinite(number) ? Math.min(max, Math.max(min, number)) : fallback;
    return integer ? Math.round(value) : value;
  }
  function settingsForStep(name) {
    const settings = {};
    for (const control of controls) if (control[1] === name) settings[control[2]] = controlValue(control);
    if (name === "ConstantArray") Object.assign(settings, { Shuffle: true, Rotate: true, LocalWrapperThreshold: 0 });
    if (name === "JunkCode") Object.assign(settings, { MinJunk: 2, MaxJunk: 4, MaxDepth: 3 });
    if (name === "Vmify") Object.assign(settings, { DispatchMaskMagnitude: 4096, DispatchNoiseMagnitude: 7 });
    if (name === "AntiTamper") settings.UseDebug = false;
    if (name === "AntiSandbox") Object.assign(settings, { UseDebug: false, CheckExecutorAPIs: false, CheckTiming: true, FailureMode: "mixed", Intensity: 3 });
    return settings;
  }
  function configurationSnippet() {
    const common = `cfg.LuaVersion=__feng_dialect; cfg.Seed=0; cfg.PrettyPrint=${$("#pretty-print").checked}; cfg.VarNamePrefix=${luaQuote($("#name-prefix").value.trim())};`;
    if (mode() === "preset") {
      const overrides = {};
      for (const control of controls) if (dirtyControls.has(control[0])) (overrides[control[1]] ||= {})[control[2]] = controlValue(control);
      // A fresh copy prevents edited presets leaking into subsequent builds.
      return `local feng=require("fengetheus"); local function copy(t) local r={} for k,v in pairs(t) do r[k]=type(v)=="table" and copy(v) or v end return r end; local cfg=copy(assert(feng.Presets[${luaQuote($("#preset-select").value)}],"Unknown preset")); ${common} local overrides=${luaValue(overrides)}; for _,s in ipairs(cfg.Steps or {}) do for k,v in pairs(overrides[s.Name] or {}) do s.Settings=s.Settings or {}; s.Settings[k]=v end end; return feng.Pipeline:fromConfig(cfg):apply(__feng_source,__feng_filename)`;
    }
    const config = { NameGenerator: "MangledShuffled", Steps: [...document.querySelectorAll("#step-grid input:checked")].map((input) => ({ Name: input.value, Settings: settingsForStep(input.value) })) };
    return `local feng=require("fengetheus"); local cfg=${luaValue(config)}; ${common} return feng.Pipeline:fromConfig(cfg):apply(__feng_source,__feng_filename)`;
  }
  function updateDisabledControls() {
    const preset = mode() === "preset" ? presetMetadata?.[$("#preset-select").value] : null;
    for (const [id, step] of controls) $(`#${id}`).disabled = busy || (mode() === "preset" && (!presetMetadata || !preset?.[step]));
  }
  function hydrateControls() {
    dirtyControls.clear();
    const preset = mode() === "preset" ? presetMetadata?.[$("#preset-select").value] : null;
    for (const [id, step, setting, fallback] of controls) {
      const input = $(`#${id}`), value = preset?.[step]?.[setting] ?? fallback;
      if (typeof fallback === "boolean") input.checked = value;
      else input.value = value;
    }
    updateDisabledControls();
    $("#preset-description").textContent = descriptions[$("#preset-select").value] || "A configurable Fengetheus transformation profile.";
  }
  function humanize(value) {
    return value.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^Vm/, "VM").replace(/^Xor/, "XOR");
  }
  function displaySettingValue(value) {
    if (typeof value === "boolean") return value ? "On" : "Off";
    if (value == null) return "None";
    if (Array.isArray(value)) return `[${value.map(displaySettingValue).join(", ")}]`;
    if (typeof value === "object") return JSON.stringify(value);
    return typeof value === "string" ? JSON.stringify(value) : String(value);
  }
  function renderPresetReference() {
    const root = $("#preset-reference-list"), status = $("#preset-reference-status");
    if (!root || !presetPipelines) return;
    root.replaceChildren();
    let rendered = 0;
    for (const option of $("#preset-select").options) {
      const name = option.value, pipeline = presetPipelines[name];
      if (!Array.isArray(pipeline)) continue;
      const visiblePipeline = pipeline.filter((step) => !referenceExcludedSteps.has(step.Name));
      rendered++;
      const details = document.createElement("details");
      details.className = "preset-reference-card";
      details.open = name === "Balanced";
      const summary = document.createElement("summary");
      const summaryCopy = document.createElement("span");
      summaryCopy.className = "preset-reference-summary";
      const title = document.createElement("strong");
      title.textContent = name;
      const description = document.createElement("small");
      description.textContent = descriptions[name] || "Built-in transformation profile.";
      summaryCopy.append(title, description);
      const count = document.createElement("span");
      count.className = "preset-reference-count";
      count.textContent = `${visiblePipeline.length} ${visiblePipeline.length === 1 ? "step" : "steps"}`;
      const chevron = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      chevron.classList.add("icon", "preset-reference-chevron");
      chevron.setAttribute("aria-hidden", "true");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttribute("href", "icons.svg#chevron-down");
      chevron.append(use);
      summary.append(summaryCopy, count, chevron);
      details.append(summary);

      const occurrences = new Map();
      const list = document.createElement("ol");
      list.className = "preset-step-list";
      for (const [index, step] of visiblePipeline.entries()) {
        const item = document.createElement("li");
        item.className = "preset-step";
        const heading = document.createElement("div");
        heading.className = "preset-step-heading";
        const number = document.createElement("span");
        number.className = "preset-step-number";
        number.textContent = String(index + 1).padStart(2, "0");
        const label = document.createElement("span");
        const stepName = stepLabels.get(step.Name) || humanize(step.Name);
        const occurrence = (occurrences.get(step.Name) || 0) + 1;
        occurrences.set(step.Name, occurrence);
        const total = visiblePipeline.filter((entry) => entry.Name === step.Name).length;
        label.textContent = total > 1 ? `${stepName} · pass ${occurrence}` : stepName;
        heading.append(number, label);
        item.append(heading);

        const editableSettings = presetEditableSettings.get(step.Name);
        const entries = Object.entries(step.Settings || {})
          .filter(([key]) => editableSettings?.has(key))
          .sort(([a], [b]) => a.localeCompare(b));
        if (entries.length) {
          const settings = document.createElement("dl");
          settings.className = "preset-settings";
          for (const [key, value] of entries) {
            const row = document.createElement("div");
            const term = document.createElement("dt");
            term.textContent = settingLabels[`${step.Name}.${key}`] || humanize(key);
            const definition = document.createElement("dd");
            definition.textContent = displaySettingValue(value);
            row.append(term, definition);
            settings.append(row);
          }
          item.append(settings);
        }
        list.append(item);
      }
      details.append(list);
      root.append(details);
    }
    if (rendered) status.classList.add("is-hidden");
    else status.textContent = "Preset settings are unavailable.";
  }
  function stopWorker() { worker?.terminate(); worker = null; }
  function requestWorker(data) {
    return new Promise((resolve, reject) => {
      if (pendingRequest) return reject(new Error("The compiler is already busy."));
      if (!worker) {
        worker = new Worker(new URL("worker.js", appUrl), { type: "classic" });
        worker.onmessage = ({ data: message }) => {
          if (message.type === "progress") { if (busy) progress(message.percent, message.label); return; }
          if (!pendingRequest) return;
          const pending = pendingRequest; pendingRequest = null;
          if (message.type === "error") { stopWorker(); pending.reject(new Error(message.message)); }
          else pending.resolve(message);
        };
        worker.onerror = () => {
          const pending = pendingRequest; pendingRequest = null; stopWorker();
          pending?.reject(new Error("The browser worker stopped unexpectedly. Try again."));
        };
      }
      pendingRequest = { resolve, reject };
      worker.postMessage(data);
    });
  }
  function loadPresetMetadata() {
    if (!metadataPromise) {
      metadataPromise = requestWorker({ type: "presets", names: [...$("#preset-select").options].map((option) => option.value) })
        .then((message) => {
          presetMetadata = message.presets;
          presetPipelines = message.pipelines;
          renderPresetReference();
          if (mode() === "preset" && !dirtyControls.size) hydrateControls(); else updateDisabledControls();
        })
        .catch((error) => {
          metadataPromise = null;
          const status = $("#preset-reference-status");
          if (status) { status.textContent = "Preset settings could not be loaded."; status.classList.remove("is-hidden"); }
          throw error;
        });
    }
    return metadataPromise;
  }
  function setBusy(value) {
    busy = value; sourceInput.disabled = value; $("#remove-file").disabled = value; button.disabled = value || !selectedFile;
    dropzone.setAttribute("aria-disabled", String(value)); $(".workspace").setAttribute("aria-busy", String(value));
    document.querySelectorAll(".mode-tab, #preset-select, #name-prefix, #pretty-print, #step-grid input").forEach((input) => { input.disabled = value; });
    updateDisabledControls();
    updateActionHelp();
  }

  $("#step-grid").innerHTML = steps.map(([name, label, checked]) => `<label class="step-toggle"><input type="checkbox" value="${name}" ${checked ? "checked" : ""}><span>${label}</span></label>`).join("");
  for (const [id] of controls) $(`#${id}`).addEventListener("input", () => { dirtyControls.add(id); discardDownload(); });
  const tabs = [...document.querySelectorAll(".mode-tab")];
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (busy || tab.classList.contains("active")) return;
      tabs.forEach((item) => { item.classList.toggle("active", item === tab); item.setAttribute("aria-selected", String(item === tab)); item.tabIndex = item === tab ? 0 : -1; });
      $("#preset-panel").classList.toggle("is-hidden", tab.dataset.mode !== "preset");
      $("#custom-panel").classList.toggle("is-hidden", tab.dataset.mode !== "custom");
      hydrateControls(); discardDownload();
    });
    tab.addEventListener("keydown", (event) => {
      if (busy || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next].click(); tabs[next].focus();
    });
  });
  $("#preset-select").addEventListener("change", () => { hydrateControls(); discardDownload(); });
  document.querySelectorAll("#name-prefix, #pretty-print, #step-grid input").forEach((input) => input.addEventListener("input", discardDownload));
  sourceInput.addEventListener("change", () => setFile(sourceInput.files[0]));
  ["dragenter", "dragover"].forEach((name) => dropzone.addEventListener(name, (event) => { event.preventDefault(); if (!busy) dropzone.classList.add("dragging"); }));
  ["dragleave", "drop"].forEach((name) => dropzone.addEventListener(name, (event) => { event.preventDefault(); dropzone.classList.remove("dragging"); }));
  dropzone.addEventListener("drop", (event) => setFile(event.dataTransfer.files[0]));
  dropzone.addEventListener("keydown", (event) => { if (!busy && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); sourceInput.click(); } });
  $("#remove-file").addEventListener("click", clearFile);
  $("#download").addEventListener("click", () => { if (!downloadUrl) return; const link = document.createElement("a"); link.href = downloadUrl; link.download = generatedName; link.click(); });
  window.addEventListener("pagehide", () => {
    activeRun++;
    const pending = pendingRequest; pendingRequest = null;
    stopWorker(); metadataPromise = null;
    pending?.reject(new Error("Processing was canceled when you left the page. Run again to retry."));
    setBusy(false); discardDownload();
  });
  window.addEventListener("pageshow", (event) => { if (event.persisted) loadPresetMetadata().catch((error) => showError(error.message)); });
  button.addEventListener("click", async () => {
    if (!selectedFile || busy) return;
    const file = selectedFile, run = ++activeRun;
    clearError(); discardDownload(); $("#progress-wrap").classList.remove("is-hidden"); setBusy(true); progress(7, "Reading your source file…");
    try {
      await loadPresetMetadata();
      if (run !== activeRun) return;
      const source = await file.text();
      if (run !== activeRun) return;
      if (!source.trim()) throw new Error("The selected file is empty.");
      const result = await requestWorker({ type: "obfuscate", source, filename: file.name, configuration: configurationSnippet() });
      if (run !== activeRun) return;
      generatedName = file.name.replace(/\.(luau?|txt)$/i, "") + ".obfuscated.lua";
      downloadUrl = URL.createObjectURL(new Blob([result.output], { type: "text/plain;charset=utf-8" }));
      syntax(result.syntaxLabel); if ($("#result-syntax")) $("#result-syntax").textContent = result.syntaxLabel;
      progress(100, "Finished. Your protected download is ready."); $("#result-card").classList.remove("is-hidden");
    } catch (error) {
      if (run !== activeRun) return;
      showError(error instanceof Error ? error.message : "Obfuscation failed. Check the source file and try again.");
      syntax("Source could not be processed"); progress(0, "Ready to try again.");
    } finally { if (run === activeRun) setBusy(false); }
  });
  hydrateControls();
  loadPresetMetadata().catch((error) => showError(error.message));
})();
