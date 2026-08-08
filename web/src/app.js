import { obfuscate, PRESET_NAMES } from "./engine.js";

const $ = (sel) => document.querySelector(sel);

const inputEl = $("#input");
const outputEl = $("#output");
const presetEl = $("#preset");
const runBtn = $("#run");
const copyBtn = $("#copy");
const downloadBtn = $("#download");
const logEl = $("#log");
const warningEl = $("#warning");
const statsEl = $("#stats");

const EXAMPLE = `local function greet(name)
\treturn "Hello, " .. name .. "!"
end

local total = 0
for i = 1, 5 do
\ttotal = total + i
end

print(greet("World"))
print("total=" .. total)
`;

inputEl.value = EXAMPLE;

function log(msg) {
  const line = document.createElement("div");
  line.textContent = msg;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
}

function clearLog() {
  logEl.innerHTML = "";
}

function setBusy(busy) {
  runBtn.disabled = busy;
  runBtn.textContent = busy ? "Obfuscating..." : "Obfuscate";
}

async function run() {
  const source = inputEl.value;
  const preset = presetEl.value;

  if (!source.trim()) {
    log("Nothing to obfuscate â paste some Lua code first.");
    return;
  }

  clearLog();
  warningEl.hidden = true;
  statsEl.textContent = "";
  outputEl.value = "";
  setBusy(true);
  animatePipeline();

  // Yield to the browser so the "Obfuscating..." state actually paints
  // before we block the main thread running the Lua VM.
  await new Promise((r) => setTimeout(r, 20));

  const startedAt = performance.now();
  try {
    const result = obfuscate(source, preset, { onLog: log });
    const elapsed = ((performance.now() - startedAt) / 1000).toFixed(2);

    if (!result.ok) {
      log(`FAILED: ${result.warning}`);
      warningEl.hidden = false;
      warningEl.textContent = result.warning;
      setPipelineState("failed");
      return;
    }

    outputEl.value = result.code;
    statsEl.textContent = `${source.length} bytes -> ${result.code.length} bytes (${((result.code.length / source.length) * 100).toFixed(0)}%) in ${elapsed}s, ${result.attempts} attempt${result.attempts === 1 ? "" : "s"}`;
    setPipelineState("done");

    if (result.warning) {
      warningEl.hidden = false;
      warningEl.textContent = result.warning;
    }
  } catch (e) {
    log(`Unexpected error: ${e.message}`);
    console.error(e);
    setPipelineState("failed");
  } finally {
    setBusy(false);
  }
}

runBtn.addEventListener("click", run);

const pipeSteps = Array.from(document.querySelectorAll(".pipe-step"));
let pipeTimers = [];

function resetPipeline() {
  pipeTimers.forEach(clearTimeout);
  pipeTimers = [];
  pipeSteps.forEach((el) => el.classList.remove("active", "done", "failed"));
}

function animatePipeline() {
  resetPipeline();
  pipeSteps.forEach((el, i) => {
    pipeTimers.push(setTimeout(() => el.classList.add("active"), i * 220));
  });
}

function setPipelineState(state) {
  pipeTimers.forEach(clearTimeout);
  pipeTimers = [];
  pipeSteps.forEach((el) => {
    el.classList.remove("active");
    el.classList.add(state);
  });
}

copyBtn.addEventListener("click", async () => {
  if (!outputEl.value) return;
  await navigator.clipboard.writeText(outputEl.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
});

downloadBtn.addEventListener("click", () => {
  if (!outputEl.value) return;
  const blob = new Blob([outputEl.value], { type: "text/x-lua" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "obfuscated.lua";
  a.click();
  URL.revokeObjectURL(url);
});

for (const name of PRESET_NAMES) {
  const opt = document.createElement("option");
  opt.value = name;
  opt.textContent = name;
  presetEl.appendChild(opt);
}
presetEl.value = "Medium";

log("Ready. Real Prometheus, running as real Lua bytecode inside a Lua VM compiled to JavaScript (Fengari) â entirely in your browser, nothing sent to any server.");
