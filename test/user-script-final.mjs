// Final replication of the user's exact report:
//   local function greet(name) ... print(greet("World")) / print("total=" .. total)
// This used to be flagged "silent corruption" 8/8 times in Medium/Strong by
// the old comparison (integer-as-float rendering: 15 vs 15.0). With the
// 1.3.1 normalization fix, every attempt must verify cleanly.
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

for (const preset of ["Medium", "Strong"]) {
  const res = await obfuscate(source, preset, {
    maxAttempts: 8,
    onLog: () => {},
  });
  const flag = res.ok && !res.warning ? "PASS" : "FAIL";
  console.log(`${flag}  ${preset}: ok=${res.ok} warning=${res.warning !== null} attempts=${res.attempts}`);
  if (res.warning) console.log("   warning:", res.warning.slice(0, 200));
  if (!res.ok || res.warning) process.exitCode = 1;
}
