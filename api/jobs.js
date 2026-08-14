import { randomUUID } from "node:crypto";
import { waitUntil } from "@vercel/functions";
import { obfuscate, PRESET_NAMES } from "../web/src/engine.js";

export const config = {
  maxDuration: 300,
};

const MAX_SOURCE_BYTES = 2 * 1024 * 1024;
const WEBHOOK_TIMEOUT_MS = 30_000;

function sendJson(response, status, payload) {
  response.status(status).json(payload);
}

function validWebhook(value) {
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

function safeFilename(value) {
  const filename = String(value || "input.lua").split(/[\\/]/).pop().replace(/[^a-zA-Z0-9._-]/g, "_");
  return filename || "input.lua";
}

async function postWebhook(webhook, metadata, code) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const form = new FormData();
      form.append("payload_json", JSON.stringify({
        content: code ? `Fengetheus terminó ${metadata.originalFilename} con ${metadata.preset}.` : `Fengetheus no pudo terminar ${metadata.originalFilename}.`,
        ...metadata,
      }));
      form.append("metadata", JSON.stringify(metadata));
      if (code) {
        form.append("files[0]", new Blob([code], { type: "text/x-lua; charset=utf-8" }), "obfuscated.lua");
      }
      const response = await fetch(webhook, {
        method: "POST",
        body: form,
        signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
      });
      if (!response.ok) throw new Error(`Webhook returned HTTP ${response.status}.`);
      return;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    }
  }
  throw lastError || new Error("Webhook delivery failed.");
}

async function runJob({ jobId, source, preset, webhook, filename }) {
  const startedAt = performance.now();
  const metadata = {
    jobId,
    originalFilename: filename,
    preset,
    inputBytes: Buffer.byteLength(source, "utf8"),
  };

  try {
    const result = obfuscate(source, preset, {
      onLog: (message) => console.log(`[${jobId}] ${message}`),
    });
    if (!result.ok) throw new Error(result.error || result.warning || "Obfuscation failed.");

    await postWebhook(webhook, {
      event: "fengetheus.obfuscation.completed",
      filename: "obfuscated.lua",
      outputBytes: Buffer.byteLength(result.code, "utf8"),
      elapsedMs: Math.round(performance.now() - startedAt),
      ...metadata,
    }, result.code);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[${jobId}] ${message}`);
    try {
      await postWebhook(webhook, {
        event: "fengetheus.obfuscation.failed",
        error: message,
        elapsedMs: Math.round(performance.now() - startedAt),
        ...metadata,
      });
    } catch (deliveryError) {
      console.error(`[${jobId}] ${deliveryError instanceof Error ? deliveryError.message : String(deliveryError)}`);
    }
  }
}

export default async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  try {
    const payload = typeof request.body === "string" ? JSON.parse(request.body) : request.body || {};
    const source = typeof payload.source === "string" ? payload.source : "";
    const preset = String(payload.preset || "Strong");
    if (!source.trim()) throw new Error("Source code is empty.");
    if (Buffer.byteLength(source, "utf8") > MAX_SOURCE_BYTES) {
      throw new Error(`Source is too large. Maximum input is ${MAX_SOURCE_BYTES} bytes.`);
    }
    if (!PRESET_NAMES.includes(preset)) {
      throw new Error(`Unknown preset. Use one of: ${PRESET_NAMES.join(", ")}.`);
    }

    const jobId = randomUUID();
    const webhook = validWebhook(payload.webhook);
    const filename = safeFilename(payload.filename);
    const job = { jobId, source, preset, webhook, filename };

    // Defer CPU-bound execution until after the accepted response can leave the
    // browser. Vercel keeps the task alive through waitUntil for this function.
    waitUntil(new Promise((resolve) => setTimeout(resolve, 0)).then(() => runJob(job)));
    sendJson(response, 202, {
      job: {
        id: jobId,
        status: "accepted",
        preset,
        filename,
      },
    });
  } catch (error) {
    sendJson(response, 400, { error: error instanceof Error ? error.message : String(error) });
  }
}
