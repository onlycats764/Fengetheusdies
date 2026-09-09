# Third-party notices

`vendor/wasmoon/index.js` and `vendor/wasmoon/glue.wasm` are distributed from [Wasmoon](https://github.com/ceifa/wasmoon), version 1.16.0. Wasmoon embeds the official Lua runtime compiled to WebAssembly.

Wasmoon is Copyright (c) 2020 Ceifa and contributors and is distributed under the MIT License. The complete license is available at https://github.com/ceifa/wasmoon/blob/master/LICENSE.

The previous LuaNode-VM browser bundle is no longer loaded by the web client; the Wasmoon worker is substantially faster for the compiler workload while preserving local processing.
