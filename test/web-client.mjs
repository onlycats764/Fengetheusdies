// Run with Node: exercises the shipped client and worker against bundled Lua WASM.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const require = createRequire(import.meta.url);
const wasmoon = require(resolve(root, "web/vendor/wasmoon/index.js"));
const workerSource = await readFile(resolve(root, "web/worker.js"), "utf8");
const html = await readFile(resolve(root, "web/index.html"), "utf8");
const engines = [], workers = [], requests = [], downloads = new Map(), revoked = [];

class Element {
  constructor(attributes = "") {
    this.textContent = "";
    this.value = attributes.match(/value="([^"]*)"/)?.[1] || "";
    this.checked = /\bchecked\b/.test(attributes);
    this.disabled = /\bdisabled\b/.test(attributes);
    this.dataset = { mode: attributes.match(/data-mode="([^"]*)"/)?.[1] };
    this.style = {}; this.listeners = {}; this.files = []; this.children = [];
    const classes = new Set((attributes.match(/class="([^"]*)"/)?.[1] || "").split(" "));
    this.classList = { add: (name) => classes.add(name), remove: (name) => classes.delete(name), contains: (name) => classes.has(name), toggle: (name, value) => value ? classes.add(name) : classes.delete(name) };
  }
  addEventListener(name, callback) { (this.listeners[name] ||= []).push(callback); }
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  setAttribute(name, value) { this[name] = value; }
  async emit(name, event = {}) { for (const callback of this.listeners[name] || []) await callback({ target: this, preventDefault() {}, ...event }); }
  click() { this.clicked = true; this.emit("click"); }
  focus() { this.focused = true; }
  set value(value) { this._value = String(value); }
  get value() { return this._value; }
  set innerHTML(content) { this.inputs = [...content.matchAll(/<input\b([^>]*)>/g)].map((match) => new Element(match[1])); }
}
const elements = new Map([...html.matchAll(/<[^>]*\bid="([^"]+)"[^>]*>/g)].map(([tag, id]) => [id, new Element(tag)]));
const tabs = [...html.matchAll(/<button\b[^>]*data-mode="[^"]+"[^>]*>/g)].map(([tag]) => new Element(tag));
elements.set("workspace", new Element());
elements.set("action-help", new Element());
elements.set("progress-track", new Element());
elements.get("preset-select").options = [...html.matchAll(/<option value="([^"]+)"/g)].map(([, value]) => ({ value }));
elements.get("preset-select").value = "Balanced";
function selectAll(selector) {
  if (selector.includes(",")) return selector.split(",").flatMap((item) => selectAll(item.trim()));
  if (selector === ".mode-tab") return tabs;
  if (selector.startsWith("#step-grid input")) return (elements.get("step-grid").inputs || []).filter((input) => !selector.endsWith(":checked") || input.checked);
  return selector.startsWith("#") && elements.has(selector.slice(1)) ? [elements.get(selector.slice(1))] : [];
}
const document = {
  currentScript: { src: "http://localhost/app.js" },
  querySelector: (selector) => selector === ".mode-tab.active" ? tabs.find((tab) => tab.classList.contains("active")) : [".workspace", ".action-help", ".progress-track"].includes(selector) ? elements.get(selector.slice(1)) : selectAll(selector)[0] || null,
  querySelectorAll: selectAll,
  createElement: () => new Element(),
  createElementNS: () => new Element()
};
class LocalWorker {
  constructor() {
    workers.push(this);
    const self = { location: { href: "http://localhost/worker.js" }, postMessage: (data) => { this.lastResponse = data; this.onmessage?.({ data }); } };
    self.wasmoon = { LuaFactory: class extends wasmoon.LuaFactory {
      constructor() { super(resolve(root, "web/vendor/wasmoon/glue.wasm")); }
      async createEngine(options) { const engine = await super.createEngine(options); engines.push(engine); return engine; }
    } };
    this.context = vm.createContext({ self, importScripts() {}, URL, Map, Error,
      fetch: async (url) => {
        const relative = new URL(url).pathname.replace(/^\/src\//, "");
        try { const source = await readFile(resolve(root, "src", relative), "utf8"); return { ok: true, text: async () => source }; }
        catch { return { ok: false }; }
      }
    });
    vm.runInContext(workerSource, this.context);
  }
  postMessage(data) {
    requests.push(data);
    Promise.resolve(this.context.self.onmessage({ data })).catch((error) => this.onerror?.(error));
  }
  terminate() { this.terminated = true; }
}
class DownloadURL extends URL {
  static createObjectURL(blob) { const id = `blob:${downloads.size}`; downloads.set(id, blob); return id; }
  static revokeObjectURL(id) { revoked.push(id); }
}
const windowListeners = {};
const context = vm.createContext({ document, window: { location: { href: "http://localhost/" }, addEventListener: (name, cb) => { windowListeners[name] = cb; } }, Worker: LocalWorker, URL: DownloadURL, Blob, Error });
vm.runInContext(await readFile(resolve(root, "web/app.js"), "utf8"), context);
async function waitFor(predicate) {
  for (let i = 0; i < 1000; i++) { if (predicate()) return; await new Promise((resolve) => setTimeout(resolve, 10)); }
  throw new Error("Client did not reach the expected state.");
}
await waitFor(() => workers.at(-1)?.lastResponse?.type === "presets" || !elements.get("error-box").classList.contains("is-hidden"));
assert.equal(elements.get("error-box").textContent, "", "preset metadata initialization failed");
assert.equal(elements.get("strings-only").checked, true, "Balanced defaults did not hydrate");
assert.equal(elements.get("vm-mask").disabled, true, "absent preset step should be disabled");
const engine = engines.at(-1);
await engine.doString(`local feng=require("fengetheus"); local original=feng.Pipeline.fromConfig; feng.Pipeline.fromConfig=function(self,cfg) __test_cfg=cfg; return original(self,cfg) end`);
async function choosePreset(name) { elements.get("preset-select").value = name; await elements.get("preset-select").emit("change"); }
async function upload(source, name = "input.lua") {
  elements.get("source-file").files = [{ name, type: "text/plain", size: source.length, text: async () => source }];
  await elements.get("source-file").emit("change");
}
async function run() { await elements.get("obfuscate").emit("click"); return requests.at(-1); }
await choosePreset("Advanced");
assert.equal(elements.get("vm-nonlinear").checked, true, "Advanced nonlinear dispatch was lost");
assert.equal(Number(elements.get("vm-alias-count").value), 2);
await upload("return 42", "shared.luau");
await run();
assert.equal(elements.get("error-box").textContent, "");
let cfg = engine.global.get("__test_cfg");
assert.equal(cfg.Seed, 0); assert.equal(cfg.LuaVersion, "Lua51");
assert.equal(elements.get("syntax-state").textContent, "Lua / Luau compatible");
assert.equal(elements.get("progress-track")["aria-valuenow"], "100");
assert.match(elements.get("action-help").textContent, /Download your file below/);
const originalAdvanced = await engine.doString('return require("fengetheus").Presets.Advanced');
assert.deepEqual(cfg.Steps, originalAdvanced.Steps, "untouched controls changed preset passes");
assert.equal(cfg.Steps.find((step) => step.Name === "Vmify").Settings.DispatchNonlinear, true);
elements.get("junk-chance").value = "0.25"; await elements.get("junk-chance").emit("input");
assert.ok(elements.get("result-card").classList.contains("is-hidden"), "edited settings retained a stale download");
assert.ok(revoked.length);
await run(); cfg = engine.global.get("__test_cfg");
assert.equal(cfg.Steps.find((step) => step.Name === "JunkCode").Settings.Chance, 0.25);
assert.equal((await engine.doString('return require("fengetheus").Presets.Advanced')).Steps.find((step) => step.Name === "JunkCode").Settings.Chance, 0.15, "override mutated shared preset");
await choosePreset("Minify");
await upload("local value = 1; value += 2; return value", "luau-in-lua.lua");
await run();
assert.equal(engine.global.get("__test_cfg").LuaVersion, "LuaU");
assert.equal(elements.get("syntax-state").textContent, "Luau detected");
await choosePreset("Balanced");
await upload("local continue = 9; return continue", "lua-in-luau.luau");
await run();
assert.equal(engine.global.get("__test_cfg").LuaVersion, "Lua51");
assert.equal(elements.get("syntax-state").textContent, "Lua 5.1 detected");
engine.global.set("__balanced_output", await [...downloads.values()].at(-1).text());
await engine.doString("local chunk, compileError = load(__balanced_output); assert(chunk, compileError)");
await tabs[0].emit("keydown", { key: "ArrowRight" });
assert.equal(tabs[1].tabIndex, 0); assert.equal(tabs[0].tabIndex, -1); assert.ok(tabs[1].focused);
elements.get("step-grid").inputs.forEach((input) => { input.checked = ["ConstantFolding", "ConstantArray"].includes(input.value); });
elements.get("constant-threshold").value = "0.35";
await upload("return 7"); await run();
cfg = engine.global.get("__test_cfg");
assert.equal(cfg.Seed, 0); assert.equal(cfg.Steps.find((step) => step.Name === "ConstantArray").Settings.Threshold, 0.35);
const screenshotSteps = ["ConstantFolding", "DeadCodeElimination", "RedundantOperationElimination", "LocalCaching", "Vmify", "AntiTamper"];
elements.get("step-grid").inputs.forEach((input) => { input.checked = screenshotSteps.includes(input.value); });
for (const id of ["vm-mask", "vm-affine", "vm-bounce", "vm-nonlinear", "strings-only", "tamper-stealth"]) elements.get(id).checked = true;
await upload('local iter = string.gmatch("hello", "l"); return iter()'); await run();
assert.equal(elements.get("error-box").textContent, "", "custom VM + stealth anti-tamper pipeline failed");
cfg = engine.global.get("__test_cfg");
assert.deepEqual(cfg.Steps.map((step) => step.Name), screenshotSteps, "custom regression did not use the screenshot pipeline");
const vmSettings = cfg.Steps.find((step) => step.Name === "Vmify").Settings;
assert.equal(vmSettings.DispatchMask, true); assert.equal(vmSettings.DispatchAffine, true);
assert.equal(vmSettings.DispatchBounce, true); assert.equal(vmSettings.DispatchNonlinear, true);
assert.equal(cfg.Steps.find((step) => step.Name === "AntiTamper").Settings.Stealth, true);
engine.global.set("__stealth_output", await [...downloads.values()].at(-1).text());
await engine.doString("local chunk, compileError = load(__stealth_output); assert(chunk, compileError)");
await tabs[0].emit("click"); await choosePreset("Minify");
await upload("if then"); await run();
assert.match(elements.get("error-box").textContent, /invalid in both Lua 5\.1 and Luau/);
assert.match(elements.get("error-box").textContent, /Lua:.*Parsing Error/s);
assert.match(elements.get("error-box").textContent, /Luau:.*Parsing Error/s);
assert.ok(workers.at(-1).terminated, "failed worker was not cleaned up");
await upload("return 8"); await run();
assert.equal(elements.get("error-box").textContent, "", "worker did not recover after a parser error");
assert.ok(!elements.get("result-card").classList.contains("is-hidden"));
const finalBlob = [...downloads.values()].at(-1);
const recoveredEngine = engines.at(-1);
assert.equal(await recoveredEngine.doString(await finalBlob.text()), 8, "downloaded Minify/custom output changed the program result");
await elements.get("remove-file").emit("click");
assert.equal(elements.get("obfuscate").disabled, true);
assert.ok(elements.get("result-card").classList.contains("is-hidden"));
let finishRead;
elements.get("source-file").files = [{ name: "paused.lua", type: "text/plain", size: 9, text: () => new Promise((resolve) => { finishRead = resolve; }) }];
await elements.get("source-file").emit("change");
const canceledRead = elements.get("obfuscate").emit("click");
await waitFor(() => finishRead);
assert.equal(elements.get("source-file").disabled, true, "upload remained enabled during processing");
assert.equal(tabs[0].disabled, true, "settings remained enabled during processing");
windowListeners.pagehide();
assert.ok(workers.at(-1).terminated, "page exit retained its compiler worker");
assert.equal(elements.get("source-file").disabled, false, "page exit retained busy controls");
const requestCount = requests.length;
finishRead("return 99"); await canceledRead;
assert.equal(requests.length, requestCount, "canceled file read submitted a stale job");
windowListeners.pageshow({ persisted: true });
await waitFor(() => workers.at(-1)?.lastResponse?.type === "presets");
await upload("return 10"); await run();
assert.equal(elements.get("error-box").textContent, "", "restored page could not restart its compiler");
windowListeners.pagehide();
engines.at(-1).global.close();
recoveredEngine.global.close();
console.log("Web client/Wasmoon checks passed: presets, untouched defaults, edited controls, fixed seed, dialect detection, diagnostics, download, cleanup and recovery.");
