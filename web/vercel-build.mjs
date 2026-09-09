import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const webRoot = resolve(import.meta.dirname);
const source = resolve(webRoot, "..", "src");
const publishedSource = resolve(webRoot, "src");

await rm(publishedSource, { recursive: true, force: true });
await mkdir(publishedSource, { recursive: true });
await cp(source, publishedSource, { recursive: true });

console.log(`Fengetheus compiler modules copied to ${publishedSource}`);
