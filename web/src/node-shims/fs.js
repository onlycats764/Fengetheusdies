// Minimal browser stand-in for Node's "fs" module.
// Only reached by fengari code paths for reading Lua source files off disk
// (lauxlib.js loadfile) and native module loading (loadlib.js) — Fengetheus
// never does either: source comes from the textarea, and every Lua module
// is preloaded in-memory via package.preload (see engine.js). These stubs
// exist purely so an accidental call fails with a clear message instead of
// a bundler-internal "dynamic require" error.
function unsupported(name) {
  return () => {
    throw new Error(`node-shims/fs: "${name}" is not available in the browser build`);
  };
}
export const readFileSync = unsupported("readFileSync");
export const existsSync = () => false;
export default { readFileSync, existsSync };
