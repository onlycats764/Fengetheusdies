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

// Large generated programs can make a textarea/layout pass expensive and
// appear to freeze the tab. Keep the complete result available for download,
// but only render a preview when it is reasonably small.
const OUTPUT_PREVIEW_LIMIT = 64 * 1024;
let latestOutput = "";
let outputIsDownloadOnly = false;
let activeWorker = null;

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

function obfuscateInWorker(source, preset, onLog) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./dist/worker.js");
    activeWorker = worker;
    worker.onmessage = (event) => {
      const message = event.data || {};
      if (message.type === "log") {
        onLog(message.message);
      } else if (message.type === "result") {
        worker.terminate();
        activeWorker = null;
        resolve(message.result);
      } else if (message.type === "error") {
        worker.terminate();
        activeWorker = null;
        reject(new Error(message.error));
      }
    };
    worker.onerror = (event) => {
      worker.terminate();
      activeWorker = null;
      reject(new Error(event.message || "Obfuscation worker failed."));
    };
    worker.postMessage({ source, preset, maxAttempts: 8 });
  });
}

async function run() {
  const source = inputEl.value;
  const preset = presetEl.value;

  if (!source.trim()) {
    log("Nothing to obfuscate â paste some Lua code or attach a file first.");
    return;
  }

  clearLog();
  warningEl.hidden = true;
  statsEl.textContent = "";
  latestOutput = "";
  outputIsDownloadOnly = false;
  outputEl.value = "";
  outputEl.placeholder = "Obfuscated code will appear here.";
  if (downloadOnlyNoticeEl) downloadOnlyNoticeEl.hidden = true;
  copyBtn.disabled = true;
  downloadBtn.disabled = true;
  setBusy(true);
  animatePipeline();

  // Yield to the browser so the "Obfuscating..." state actually paints
  // before we block the main thread running the Lua VM.
  await new Promise((r) => setTimeout(r, 20));

  const startedAt = performance.now();
  try {
    const result = await obfuscateInWorker(source, preset, log);
    const elapsed = ((performance.now() - startedAt) / 1000).toFixed(2);

    if (!result.ok) {
      log(`FAILED: ${result.warning}`);
      warningEl.hidden = false;
      warningEl.textContent = result.warning;
      setPipelineState("failed");
      return;
    }

    latestOutput = result.code;
    outputIsDownloadOnly = result.code.length > OUTPUT_PREVIEW_LIMIT;
    if (outputIsDownloadOnly) {
      // Do not assign the large string to the textarea: the result remains
      // downloadable, while the editor stays responsive and never renders
      // the generated source as plain text.
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
    const delivery = outputIsDownloadOnly ? "download-only" : "inline preview";
    statsEl.textContent = `${source.length} bytes -> ${result.code.length} bytes (${((result.code.length / source.length) * 100).toFixed(0)}%) in ${elapsed}s, ${result.attempts} attempt${result.attempts === 1 ? "" : "s"} Â· ${delivery}`;
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
    if (activeWorker) {
      activeWorker.terminate();
      activeWorker = null;
    }
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

const MAX_FILE_BYTES = 2 * 1024 * 1024; // 2 MB, plenty for a Lua script
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
    log(`"${file.name}" doesn't look like a Lua script (expected .lua/.luau/.txt) â loading it anyway.`);
  }

  const reader = new FileReader();
  reader.onload = () => {
    inputEl.value = String(reader.result ?? "");
    if (fileNameEl) {
      fileNameEl.textContent = file.name;
      fileNameEl.hidden = false;
    }
    log(`Loaded "${file.name}" (${file.size} bytes) into the editor.`);
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
    fileInputEl.value = ""; // allow re-selecting the same file later
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

log("Ready. Real Prometheus, running as real Lua bytecode inside a Lua VM compiled to JavaScript (Fengari) â entirely in your browser, nothing sent to any server. Paste code or attach a .lua file to get started.");
