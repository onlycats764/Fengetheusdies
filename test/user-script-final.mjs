// Regression for the exact browser report:
//   local function greet(name) ... print(greet("World")) / print("total=" .. total)
// Strong must complete and return generated source; this file is run from the
// main suite in a separate process with a hard deadline so a future regression
// is reported as a timeout instead of silently wedging the test runner.
import { performance } from "node:perf_hooks";
import { obfuscate } from "../web/src/engine.js";

const source = `local function greet(name)
	return "Hello, " .. name .. "!"
end

local total = 0
for i = 1, 5 do
	total = total + i
end

print(greet("World"))
print("total=" .. total)
`;

let failed = false;
for (const preset of ["Medium", "Strong"]) {
  const logs = [];
  const startedAt = performance.now();
  const result = obfuscate(source, preset, {
    onLog: (message) => logs.push(message),
  });
  const elapsedMs = Math.round(performance.now() - startedAt);
  const passed = result.ok && !result.warning && typeof result.code === "string" && result.code.length > 0;

  console.log(`${passed ? "PASS" : "FAIL"}  reported script (${preset}) — ${elapsedMs} ms, ${result.code?.length ?? 0} output bytes`);
  if (!passed) {
    failed = true;
    console.log(`  error: ${result.error ?? result.warning ?? "empty generated output"}`);
    for (const line of logs) console.log(`  log: ${line}`);
  }
}

process.exitCode = failed ? 1 : 0;
