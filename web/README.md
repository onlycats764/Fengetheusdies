# Fengetheus Web

This is the Vercel client for Fengetheus. It loads the compiler's Lua modules into a local Web Worker backed by [Wasmoon](https://github.com/ceifa/wasmoon), whose official Lua runtime is compiled to WebAssembly. The source and generated program are kept in memory; the generated code is only offered as a download.

The Vercel build copies `src/` beside the web assets so the compiler can be loaded without a server API or a GitHub Raw request. Both repository-root Vercel projects and projects configured with `web/` as their Root Directory are supported. Run `node web/vercel-build.mjs` before serving `web/` for a local preview.

Syntax detection uses the compiler's Lua 5.1 and Luau parsers, regardless of the file extension. Shared syntax uses Lua 5.1 output and is labeled “Lua / Luau compatible”; invalid input includes both parser diagnostics. Every browser build uses seed `0` for a fresh layout.

Preset controls load their defaults from the actual compiler configuration. Only edited fields override a preset; repeated passes keep their distinct defaults until that setting is edited. Controls for steps absent from a preset are disabled. Custom pipelines apply the selected controls to each checked step in the displayed order.

Run `node test/web-client.mjs` for the client/worker regression check using the bundled Wasmoon runtime.
