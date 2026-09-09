import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, ".vercel-site");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "web"), output, { recursive: true });
await cp(resolve(root, "src"), resolve(output, "src"), { recursive: true });

console.log(`Fengetheus Vercel site prepared at ${output}`);
