# Fengetheus Web

This is the Vercel client for Fengetheus. It loads the compiler's Lua modules into a local Web Worker backed by [Wasmoon](https://github.com/ceifa/wasmoon), whose official Lua runtime is compiled to WebAssembly. The source and generated program are kept in memory; the generated code is only offered as a download.

The Vercel build copies `src/` beside the web assets so the compiler can be loaded without a server API or a GitHub Raw request. Both repository-root Vercel projects and projects configured with `web/` as their Root Directory are supported. The loader also has a fallback for local previews where `web/` is served directly.
