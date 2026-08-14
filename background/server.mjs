import { createReadStream } from "node:fs";
import { mkdir, readFile, readdir, stat, unlink, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { obfuscate, PRESET_NAMES } from "../web/src/engine.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const webRoot = join(projectRoot, "web");
const dataRoot = resolve(process.env.FENGETHEUS_DATA_DIR || join(__dirname, "data"));
const jobRoot = join(dataRoot, "jobs");
const inputRoot = join(dataRoot, "inputs");
const outputRoot = join(dataRoot, "outputs");
const host = process.env.FENGETHEUS_HOST || "127.0.0.1";
const port = Number(process.env.PORT || process.env.FENGETHEUS_PORT || 8787);
const maxInputBytes = Number(process.env.FENGETHEUS_MAX_INPUT_BYTES || 2 * 1024 * 1024);
const webhookTimeoutMs = Number(process.env.FENGETHEUS_WEBHOOK_TIMEOUT_MS || 30_000);
const jobRetentionMs = Number(process.env.FENGETHEUS_JOB_RETENTION_MS || 7 * 24 * 60 * 60 * 1000);

const jobs = new Map();
const queue = [];
let draining = false;

await Promise.all([
  mkdir(jobRoot, { recursive: true }),
  mkdir(inputRoot, { recursive: true }),
  mkdir(outputRoot, { recursive: true }),
]);

function now() {
  return new Date().toISOString();
}

function safeFilename(value) {
  const name = basename(String(value || "input.lua")).replace(/[^a-zA-Z0-9._-]/g, "_");
  return name || "input.lua";
}

function jobPaths(id) {
  return {
    record: join(jobRoot, `${id}.json`),
    input: join(inputRoot, `${id}.lua`),
    output: join(outputRoot, `${id}.lua`),
  };
}

function publicJob(job) {
  return {
    id: job.id,
    status: job.status,
    preset: job.preset,
    filename: job.filename,
    createdAt: job.createdAt,
    updatedAt: job.updatedAt,
    startedAt: job.startedAt || null,
    completedAt: job.completedAt || null,
    inputBytes: job.inputBytes,
    outputBytes: job.outputBytes || 0,
    elapsedMs: job.elapsedMs || null,
    logs: job.logs || [],
    delivery: job.delivery || null,
    error: job.error || null,
  };
}

function persistedJob(job) {
  return {
    ...publicJob(job),
    webhook: job.webhook,
    inputPath: job.inputPath,
    outputPath: job.outputPath,
  };
}

async function persist(job) {
  job.updatedAt = now();
  const path = jobPaths(job.id).record;
  const temporary = `${path}.tmp`;
  await writeFile(temporary, JSON.stringify(persistedJob(job), null, 2), "utf8");
  await writeFile(path, await readFile(temporary));
  await unlink(temporary).catch(() => {});
}

function queuePersist(job) {
  job.persistChain = (job.persistChain || Promise.resolve())
    .then(() => persist(job))
    .catch((error) => console.error(`[job ${job.id}] could not persist state: ${error.message}`));
  return job.persistChain;
}

function addLog(job, message) {
  const entry = { at: now(), message: String(message) };
  job.logs = [...(job.logs || []), entry].slice(-200);
  console.log(`[${job.id}] ${entry.message}`);
  queuePersist(job);
}

function json(res, status, value) {
  const body = JSON.stringify(value);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "access-control-allow-origin": process.env.FENGETHEUS_CORS_ORIGIN || "*",
    "access-control-allow-headers": "content-type",
  });
  res.end(body);
}

function text(res, status, value, contentType = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "content-type": contentType,
    "cache-control": "no-store",
    "access-control-allow-origin": process.env.FENGETHEUS_CORS_ORIGIN || "*",
  });
  res.end(value);
}

async function readRequestBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxInputBytes + 64 * 1024) {
      throw new Error(`Request is too large. Maximum input is ${maxInputBytes} bytes.`);
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

function validateWebhook(value) {
  if (!value) return null;
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error("Webhook must be a valid http(s) URL.");
  }
  if (!/^https?:$/.test(url.protocol)) {
    throw new Error("Webhook must use http or https.");
  }
  return url.toString();
}

function getJob(id) {
  const job = jobs.get(id);
  if (!job) {
    const error = new Error("Job not found.");
    error.statusCode = 404;
    throw error;
  }
  return job;
}

async function createJob(payload) {
  const source = typeof payload.source === "string" ? payload.source : "";
  if (!source.trim()) throw new Error("Source code is empty.");
  if (Buffer.byteLength(source, "utf8") > maxInputBytes) {
    throw new Error(`Source is too large. Maximum input is ${maxInputBytes} bytes.`);
  }
  const preset = String(payload.preset || "Strong");
  if (!PRESET_NAMES.includes(preset)) {
    throw new Error(`Unknown preset. Use one of: ${PRESET_NAMES.join(", ")}.`);
  }
  const webhook = validateWebhook(payload.webhook);
  if (!webhook) throw new Error("A webhook URL is required for background delivery.");

  const id = randomUUID();
  const paths = jobPaths(id);
  const createdAt = now();
  const job = {
    id,
    status: "queued",
    preset,
    filename: safeFilename(payload.filename || "input.lua"),
    webhook,
    inputBytes: Buffer.byteLength(source, "utf8"),
    outputBytes: 0,
    createdAt,
    updatedAt: createdAt,
    startedAt: null,
    completedAt: null,
    elapsedMs: null,
    logs: [],
    delivery: "pending",
    error: null,
    inputPath: paths.input,
    outputPath: paths.output,
    source,
  };
  await writeFile(paths.input, source, "utf8");
  await persist(job);
  jobs.set(id, job);
  queue.push(id);
  void drain();
  return job;
}

async function deliverWebhook(job, code) {
  const metadata = {
    event: "fengetheus.obfuscation.completed",
    jobId: job.id,
    filename: "obfuscated.lua",
    originalFilename: job.filename,
    preset: job.preset,
    inputBytes: job.inputBytes,
    outputBytes: job.outputBytes,
    elapsedMs: job.elapsedMs,
  };
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const form = new FormData();
      form.append("payload_json", JSON.stringify({
        content: `Fengetheus terminó ${job.filename} con el preset ${job.preset}.`,
        ...metadata,
      }));
      form.append("metadata", JSON.stringify(metadata));
      form.append("files[0]", new Blob([code], { type: "text/x-lua; charset=utf-8" }), "obfuscated.lua");
      const response = await fetch(job.webhook, {
        method: "POST",
        body: form,
        signal: AbortSignal.timeout(webhookTimeoutMs),
      });
      if (!response.ok) {
        throw new Error(`Webhook returned HTTP ${response.status}.`);
      }
      return `sent (attempt ${attempt})`;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    }
  }
  throw lastError || new Error("Webhook delivery failed.");
}

async function processJob(job) {
  job.status = "running";
  job.startedAt = now();
  job.error = null;
  addLog(job, `[${job.preset}] Background job started.`);
  await job.persistChain;
  const startedAt = performance.now();
  try {
    const source = await readFile(job.inputPath, "utf8");
    const result = obfuscate(source, job.preset, {
      onLog: (message) => addLog(job, message),
    });
    await job.persistChain;
    if (!result.ok) throw new Error(result.error || result.warning || "Obfuscation failed.");

    await writeFile(job.outputPath, result.code, "utf8");
    job.outputBytes = Buffer.byteLength(result.code, "utf8");
    job.elapsedMs = Math.round(performance.now() - startedAt);
    job.delivery = "sending";
    await persist(job);
    job.delivery = await deliverWebhook(job, result.code);
    job.status = "completed";
    job.completedAt = now();
    addLog(job, `Delivered obfuscated.lua to the webhook.`);
    await job.persistChain;
  } catch (error) {
    job.status = "failed";
    job.completedAt = now();
    job.elapsedMs = Math.round(performance.now() - startedAt);
    job.delivery = job.delivery === "sending" ? "failed" : job.delivery;
    job.error = error instanceof Error ? error.message : String(error);
    addLog(job, `FAILED: ${job.error}`);
    await job.persistChain;
  }
}

async function drain() {
  if (draining) return;
  draining = true;
  try {
    while (queue.length > 0) {
      const id = queue.shift();
      const job = jobs.get(id);
      if (job && job.status === "queued") await processJob(job);
    }
  } finally {
    draining = false;
  }
}

async function loadJobs() {
  const names = await readdir(jobRoot).catch(() => []);
  for (const name of names) {
    if (!name.endsWith(".json")) continue;
    try {
      const record = JSON.parse(await readFile(join(jobRoot, name), "utf8"));
      const inputPath = record.inputPath || jobPaths(record.id).input;
      const source = await readFile(inputPath, "utf8");
      const job = { ...record, inputPath, source, persistChain: Promise.resolve() };
      if (job.status === "running") job.status = "queued";
      jobs.set(job.id, job);
      if (job.status === "queued") queue.push(job.id);
    } catch (error) {
      console.error(`Could not restore ${name}: ${error.message}`);
    }
  }
}

async function pruneOldJobs() {
  const cutoff = Date.now() - jobRetentionMs;
  for (const [id, job] of jobs) {
    if (job.completedAt && Date.parse(job.completedAt) < cutoff) {
      const paths = jobPaths(id);
      await Promise.all([unlink(paths.record).catch(() => {}), unlink(paths.input).catch(() => {}), unlink(paths.output).catch(() => {})]);
      jobs.delete(id);
    }
  }
}

function contentType(path) {
  const ext = extname(path);
  return {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".md": "text/markdown; charset=utf-8",
    ".json": "application/json; charset=utf-8",
  }[ext] || "application/octet-stream";
}

async function serveStatic(req, res, pathname) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const target = resolve(webRoot, `.${requested}`);
  const relativeTarget = relative(webRoot, target);
  if (relativeTarget.startsWith("..") || relativeTarget.includes("\0")) {
    text(res, 403, "Forbidden");
    return;
  }
  try {
    const info = await stat(target);
    if (!info.isFile()) throw new Error("not a file");
    res.writeHead(200, {
      "content-type": contentType(target),
      "cache-control": "no-store",
      "access-control-allow-origin": process.env.FENGETHEUS_CORS_ORIGIN || "*",
    });
    createReadStream(target).pipe(res);
  } catch {
    text(res, 404, "Not found");
  }
}

async function handle(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(url.pathname);
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "access-control-allow-origin": process.env.FENGETHEUS_CORS_ORIGIN || "*",
      "access-control-allow-headers": "content-type",
      "access-control-allow-methods": "GET,POST,OPTIONS",
    });
    res.end();
    return;
  }

  if (pathname === "/api/health" && req.method === "GET") {
    json(res, 200, { ok: true, service: "fengetheus-background", queued: queue.length, active: draining });
    return;
  }

  const jobMatch = pathname.match(/^\/api\/jobs\/([^/]+)(\/output)?$/);
  if (jobMatch && req.method === "GET") {
    try {
      const job = getJob(jobMatch[1]);
      if (jobMatch[2]) {
        if (job.status !== "completed") return json(res, 409, { error: "Output is not ready yet.", job: publicJob(job) });
        const output = await readFile(job.outputPath, "utf8");
        return text(res, 200, output, "text/x-lua; charset=utf-8");
      }
      return json(res, 200, publicJob(job));
    } catch (error) {
      return json(res, error.statusCode || 500, { error: error.message });
    }
  }

  if (pathname === "/api/jobs" && req.method === "POST") {
    try {
      const payload = JSON.parse(await readRequestBody(req));
      const job = await createJob(payload);
      return json(res, 202, { job: publicJob(job), statusUrl: `/api/jobs/${job.id}`, outputUrl: `/api/jobs/${job.id}/output` });
    } catch (error) {
      return json(res, error.statusCode || 400, { error: error.message });
    }
  }

  if (req.method === "GET") return serveStatic(req, res, pathname);
  return json(res, 405, { error: "Method not allowed." });
}

await loadJobs();
await pruneOldJobs();
void drain();

const server = createServer((req, res) => {
  handle(req, res).catch((error) => {
    console.error(error);
    if (!res.headersSent) json(res, 500, { error: "Internal server error." });
    else res.destroy();
  });
});

server.listen(port, host, () => {
  console.log(`Fengetheus background service listening on http://${host}:${port}`);
  console.log(`Open http://${host}:${port}/ for the local web UI.`);
});

function shutdown(signal) {
  console.log(`Received ${signal}; waiting for the active job before stopping.`);
  server.close(() => {});
  const finish = () => {
    if (draining) {
      setTimeout(finish, 500);
      return;
    }
    process.exit(0);
  };
  finish();
}
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
