import { PRESET_NAMES } from "./engine.js";

const $ = (sel) => document.querySelector(sel);

const inputEl = $("#input");
const outputEl = $("#output");
const presetEl = $("#preset");
const runBtn = $("#run");
const copyBtn = $("#copy");
const downloadBtn = $("#download");
const copyLogBtn = $("#copy-log");
const downloadOnlyNoticeEl = $("#download-only-notice");
const logEl = $("#log");
const warningEl = $("#warning");
const statsEl = $("#stats");
const fileInputEl = $("#file-input");
const attachBtn = $("#attach");
const inputPane = $("#input-pane");
const fileNameEl = $("#file-name");
const cancelBtn = $("#cancel");
const presetGuidanceEl = $("#preset-guidance");

// Large generated programs can make a textarea/layout pass expensive and
// appear to freeze the tab. Keep the complete result available for download,
// but only render a preview when it is reasonably small.
const OUTPUT_PREVIEW_LIMIT = 64 * 1024;
const LARGE_INPUT_BYTES = 32 * 1024;
let latestOutput = "";
let outputIsDownloadOnly = false;
let activeWorker = null;
let cancelActiveJob = null;

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

function setBusy(busy, label = "Obfuscating...") {
  runBtn.disabled = busy;
  runBtn.textContent = busy ? label : "Obfuscate";
  if (cancelBtn) cancelBtn.hidden = !busy;
  if (!busy) cancelBtn?.setAttribute("aria-hidden", "true");
  else cancelBtn?.removeAttribute("aria-hidden");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds)) return "an unknown amount of time";
  if (seconds < 60) return `${Math.max(1, Math.round(seconds))} seconds`;
  return `${Math.floor(seconds / 60)}m ${Math.round(seconds % 60)}s`;
}

function updatePresetGuidance() {
  if (!presetGuidanceEl) return;
  const bytes = new TextEncoder().encode(inputEl.value).length;
  const strongSelected = presetEl.value === "Strong";
  if (bytes >= LARGE_INPUT_BYTES && strongSelected) {
    presetGuidanceEl.textContent = `Strong on ${(bytes / 1024).toFixed(0)} KB can take many minutes. Medium is recommended when you need a faster result.`;
    presetGuidanceEl.classList.add("caution");
  } else if (bytes >= LARGE_INPUT_BYTES) {
    presetGuidanceEl.textContent = `Medium is recommended for ${(bytes / 1024).toFixed(0)} KB inputs. The work stays local and the page remains responsive.`;
    presetGuidanceEl.classList.remove("caution");
  } else {
    presetGuidanceEl.textContent = "Your source stays in this browser; the worker keeps the page responsive while it runs.";
    presetGuidanceEl.classList.remove("caution");
  }
}

function obfuscateInWorker(source, preset, onLog) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./dist/worker.js");
    let settled = false;
    const finish = (callback, value) => {
      if (settled) return;
      settled = true;
      worker.terminate();
      if (activeWorker === worker) activeWorker = null;
      if (cancelActiveJob === cancel) cancelActiveJob = null;
      callback(value);
    };
    const cancel = () => {
      const error = new Error("Obfuscation cancelled.");
      error.code = "cancelled";
      finish(reject, error);
    };

    activeWorker = worker;
    cancelActiveJob = cancel;
    worker.onmessage = (event) => {
      const message = event.data || {};
      if (message.type === "log") {
        onLog(message.message);
      } else if (message.type === "result") {
        finish(resolve, message.result);
      } else if (message.type === "error") {
        finish(reject, new Error(message.error));
      }
    };
    worker.onerror = (event) => {
      finish(reject, new Error(event.message || "Obfuscation worker failed."));
    };
    worker.postMessage({ source, preset });
  });
}

function resetOutput() {
  warningEl.hidden = true;
  statsEl.textContent = "";
  latestOutput = "";
  outputIsDownloadOnly = false;
  outputEl.value = "";
  outputEl.placeholder = "Obfuscated code will appear here.";
  if (downloadOnlyNoticeEl) downloadOnlyNoticeEl.hidden = true;
  copyBtn.disabled = true;
  downloadBtn.disabled = true;
}

function showResult(source, result, elapsedSeconds, delivery = "inline preview") {
  if (!result.ok) {
    log(`FAILED: ${result.warning || result.error || "Obfuscation failed."}`);
    warningEl.hidden = false;
    warningEl.textContent = result.warning || result.error || "Obfuscation failed.";
    setPipelineState("failed");
    return;
  }

  latestOutput = result.code;
  outputIsDownloadOnly = result.code.length > OUTPUT_PREVIEW_LIMIT;
  if (outputIsDownloadOnly) {
    outputEl.value = "";
    outputEl.placeholder = `Generated output is ${(result.code.length / 1024).toFixed(0)} KB. Use Download to save obfuscated.lua.`;
    copyBtn.disabled = true;
    if (downloadOnlyNoticeEl) downloadOnlyNoticeEl.hidden = false;
  } else {
    outputEl.value = result.code;
    outputEl.placeholder = "Obfuscated code will appear here.";
    copyBtn.disabled = false;
    if (downloadOnlyNoticeEl) downloadOnlyNoticeEl.hidden = true;
  }
  downloadBtn.disabled = false;
  const shownDelivery = outputIsDownloadOnly ? `${delivery}, download-only` : delivery;
  statsEl.textContent = `${source.length} bytes -> ${result.code.length} bytes (${((result.code.length / source.length) * 100).toFixed(0)}%) in ${elapsedSeconds}s · ${shownDelivery}`;
  setPipelineState("done");
  if (result.warning) {
    warningEl.hidden = false;
    warningEl.textContent = result.warning;
  }
}

async function run() {
  const source = inputEl.value;
  const preset = presetEl.value;

  if (!source.trim()) {
    log("Nothing to obfuscate — paste some Lua code or attach a file first.");
    return;
  }

  clearLog();
  resetOutput();
  setBusy(true, "Obfuscating...");
  animatePipeline();

  const startedAt = performance.now();
  try {
    // Yield to the browser so the busy state paints before the worker starts.
    await delay(20);
    const result = await obfuscateInWorker(source, preset, (message) => {
      log(message);
      const elapsed = (performance.now() - startedAt) / 1000;
      statsEl.textContent = `${preset} is still running · ${formatDuration(elapsed)} elapsed · you can cancel at any time`;
    });
    showResult(source, result, ((performance.now() - startedAt) / 1000).toFixed(2), "local worker");
  } catch (e) {
    if (e.code === "cancelled") {
      log("Obfuscation cancelled. Nothing was uploaded.");
      warningEl.hidden = false;
      warningEl.textContent = "The job was cancelled. You can choose Medium for a quicker result or try again when you have more time.";
    } else {
      log(`Unexpected error: ${e.message}`);
      console.error(e);
      warningEl.hidden = false;
      warningEl.textContent = e.message;
    }
    setPipelineState("failed");
  } finally {
    cancelActiveJob = null;
    if (activeWorker) {
      activeWorker.terminate();
      activeWorker = null;
    }
    setBusy(false);
  }
}

runBtn.addEventListener("click", run);
cancelBtn?.addEventListener("click", () => cancelActiveJob?.("cancelled"));
inputEl.addEventListener("input", updatePresetGuidance);
presetEl.addEventListener("change", updatePresetGuidance);

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
  if (!latestOutput || outputIsDownloadOnly) return;
  await navigator.clipboard.writeText(latestOutput);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
});

if (copyLogBtn) {
  copyLogBtn.addEventListener("click", async () => {
    const lines = Array.from(logEl.children).map((el) => el.textContent);
    if (lines.length === 0) return;
    await navigator.clipboard.writeText(lines.join("\n"));
    copyLogBtn.textContent = "Copied!";
    setTimeout(() => (copyLogBtn.textContent = "Copy Log"), 1200);
  });
}

downloadBtn.addEventListener("click", () => {
  if (!latestOutput) return;
  const blob = new Blob([latestOutput], { type: "text/x-lua;charset=utf-8" });
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

/* ---------- file attach / drag & drop ---------- */

const MAX_FILE_BYTES = 2 * 1024 * 1024;
const ACCEPTED_EXT = [".lua", ".luau", ".txt"];

function looksLikeAcceptable(name) {
  const lower = name.toLowerCase();
  return ACCEPTED_EXT.some((ext) => lower.endsWith(ext)) || !lower.includes(".");
}

function loadFileIntoInput(file) {
  if (!file) return;
  if (file.size > MAX_FILE_BYTES) {
    log(`"${file.name}" is too large (${(file.size / 1024).toFixed(0)} KB). Max is ${MAX_FILE_BYTES / 1024 / 1024} MB.`);
    return;
  }
  if (!looksLikeAcceptable(file.name)) {
    log(`"${file.name}" doesn't look like a Lua script (expected .lua/.luau/.txt) — loading it anyway.`);
  }

  const reader = new FileReader();
  reader.onload = () => {
    inputEl.value = String(reader.result ?? "");
    if (fileNameEl) {
      fileNameEl.textContent = file.name;
      fileNameEl.hidden = false;
    }
    log(`Loaded "${file.name}" (${file.size} bytes) into the editor.`);
    updatePresetGuidance();
  };
  reader.onerror = () => {
    log(`Could not read "${file.name}": ${reader.error?.message ?? "unknown error"}.`);
  };
  reader.readAsText(file);
}

if (attachBtn && fileInputEl) {
  attachBtn.addEventListener("click", () => fileInputEl.click());
  fileInputEl.addEventListener("change", () => {
    const file = fileInputEl.files && fileInputEl.files[0];
    loadFileIntoInput(file);
    fileInputEl.value = "";
  });
}

if (inputPane) {
  let dragDepth = 0;

  inputPane.addEventListener("dragenter", (e) => {
    e.preventDefault();
    dragDepth++;
    inputPane.classList.add("drag-over");
  });
  inputPane.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  });
  inputPane.addEventListener("dragleave", () => {
    dragDepth = Math.max(0, dragDepth - 1);
    if (dragDepth === 0) inputPane.classList.remove("drag-over");
  });
  inputPane.addEventListener("drop", (e) => {
    e.preventDefault();
    dragDepth = 0;
    inputPane.classList.remove("drag-over");
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    loadFileIntoInput(file);
  });
}

log("Ready. Real Prometheus runs locally in a Web Worker, so your source never leaves this browser. Keep this tab open until the result is ready; you can cancel a long job at any time.");
updatePresetGuidance();
