import { obfuscate } from "./engine.js";

self.onmessage = (event) => {
  const { source, preset, maxAttempts } = event.data || {};
  try {
    const result = obfuscate(source, preset, {
      maxAttempts,
      onLog: (message) => self.postMessage({ type: "log", message }),
    });
    self.postMessage({ type: "result", result });
  } catch (error) {
    self.postMessage({
      type: "error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
