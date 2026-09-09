# Fengetheus Web

This is the static GitHub Pages client for Fengetheus. It loads the compiler's Lua modules into the browser bundle built from [Xyraniz/LuaNode-VM](https://github.com/Xyraniz/LuaNode-VM) and performs the selected pipeline locally. The source and generated program are kept in memory; the generated code is only offered as a download.

The Pages workflow copies `src/` beside the web assets so the compiler can be loaded without a server API. The loader also has a pinned GitHub raw fallback for local previews where `web/` is served directly.
