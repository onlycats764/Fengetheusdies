# Patches applied to upstream Prometheus (Fengetheus)

Fengetheus embeds the real [Prometheus](https://github.com/prometheus-lua/Prometheus)
Lua obfuscator source (all 81 `.lua` files under `src/`), running inside
[Fengari](https://fengari.io) — a real Lua 5.3 VM compiled to JavaScript.

Prometheus was written assuming it runs under a real, on-disk Lua 5.1
interpreter (as its own CLI, or `require`d from a normal Lua project).
Running it inside a JS-hosted VM with no filesystem, and with Fengari's
Lua-5.3-flavored standard library, needed a handful of small, mechanical
compatibility patches. **No obfuscation logic was changed** — every patch
either adds a `nil`-guard around something that assumes a real OS process,
or polyfills a stdlib function Fengari doesn't ship.

## 1. `src/prometheus.lua` — skip `package.path` rewrite when there's no real file path

```lua
-- before
local oldPkgPath = package.path;
package.path = script_path() .. "?.lua;" .. package.path;

-- after
local oldPkgPath = package.path;
local resolvedScriptPath = script_path();
if resolvedScriptPath then
	package.path = resolvedScriptPath .. "?.lua;" .. package.path;
end
```

`script_path()` resolves Prometheus's own location on disk via
`debug.getinfo(2, "S").source` so it can add itself to `package.path`. Inside
Fengari there is no disk and no real chunk filename, so the pattern match
returns `nil` and the original code would try to concatenate `nil`. Every
module in this build is registered directly via `package.preload`, so the
`package.path` mutation is unnecessary here anyway — this patch just makes it
a no-op instead of a crash when it can't resolve a path.

## 2. `src/config.lua` — guard the CLI-arguments loop

```lua
-- before
for _, currArg in pairs(arg) do

-- after
for _, currArg in pairs(arg or {}) do
```

`arg` is the global table of command-line arguments that a real Lua CLI
process gets. There's no process/CLI in a browser tab, so `arg` is `nil`.

## 3. `src/prometheus.lua` — polyfill `math.log10`

```lua
-- added, next to the existing math.random polyfill
math.log10 = math.log10 or function(x)
	return math.log(x, 10);
end
```

`math.log10` was removed from Lua's standard library in 5.2+; Fengari
implements the newer stdlib shape. `NumbersToExpressions.lua` uses it to
pick a compact literal representation for large numbers.

## 4. `src/prometheus/steps/NumbersToExpressions.lua` — guard hex-literal formatting

```lua
-- before
local hexStr = string.format("0x%X", val)

-- after
local intVal = math.tointeger and math.tointeger(val) or val
if not intVal then
    return Ast.NumberExpression(val)
end
local ok, hexStr = pcall(string.format, "0x%X", intVal)
if not ok then
    return Ast.NumberExpression(val)
end
```

Lua 5.3+'s `string.format("%X", …)` requires an exact integer representation
and throws for float values that can't be represented as a 64-bit integer
(e.g. very large integer-valued doubles). Real Lua 5.1 has no such
restriction, since it only has floats. This patch falls back to a plain
decimal literal instead of crashing the whole obfuscation for those edge-case
values — functionally identical output, just not hex-formatted.

## 5. `web/src/engine.js` — force a fresh, non-clock-based seed on every retry

Fengetheus-specific, not a patch to the Lua source itself. The original
mitigation reseeded Prometheus's RNG via `Seed <= 0`, which falls back to
`os.time()` — a clock with 1-second resolution. On a fast machine, several
obfuscation attempts inside the same second could end up seeded identically,
silently defeating the retry loop. Fengetheus's driver script now clones the
selected preset and injects an explicit `Seed = Date.now() + attempt * 104729`
on every retry, guaranteeing each attempt takes a genuinely different random
path through `Vmify`/`ConstantArray`. `maxAttempts` was also raised from 5 to
8 by default, since each additional attempt is cheap and meaningfully raises
the odds of landing on a clean, self-verified result.

## 6. `node_modules/fengari` — two browser-compatibility fixes (applied via `patch-package`, see `patches/fengari+0.1.5.patch`)

Fengari has no `"browser"` field in its `package.json` — it ships one
Node-targeted source tree, and (correctly) uses `typeof process !==
"undefined"` throughout as its own "are we running in Node" detector,
taking a browser-safe fallback path almost everywhere. Two spots didn't
follow that pattern:

**`src/luaconf.js`** read `process.env.FENGARICONF` completely unguarded,
at module-evaluation time — the very first line fengari runs. In a real
browser (`process` doesn't exist) this threw `ReferenceError: process is
not defined` the instant `web/src/engine.js` did `import * as fengari from
"fengari"`, which aborted its entire module graph before a single line of
`web/src/app.js` executed — including the loop that populates the preset
`<select>`. This was the root cause of the preset dropdown showing no
options. Fixed by guarding the access with the same `typeof process !==
"undefined"` check fengari uses everywhere else.

**`src/liolib.js`**'s `luaopen_io` — unlike every other Node-specific
branch in fengari, this function had no guard at all: it always did
`createstdfile(L, process.stdin, ...)` etc. directly. `luaopen_io` runs on
every single `luaL_openlibs()` call, i.e. on every obfuscation attempt, so
even after the `luaconf.js` fix, clicking "Obfuscate" would immediately
throw the same class of error. Fixed by falling back to inert no-op stream
stand-ins when `process` is undefined — this build never performs real
file I/O (see `web/src/node-shims/fs.js`), so the fallback objects only
need to exist, not do anything.

`package.json`'s `postinstall` script now runs `patch-package`
automatically after every `npm install` (including in CI, see
`.github/workflows/pages.yml`), so this patch is never silently lost by a
future dependency bump.

## 7. `src/prometheus/steps.lua` was completely empty

Not a host-compatibility patch — this is Prometheus's own step registry
(the table `pipeline.lua` looks up `Name = "Vmify"` etc. against), and the
file contained no code at all, just blank lines. In Lua, `require()`-ing a
module that doesn't `return` anything yields `true`, not `nil` — so
`local Steps = require("prometheus.steps")` at the top of `pipeline.lua`
silently became `local Steps = true`, and the first time any preset with a
non-empty `Steps` list (i.e. every preset except `Minify`) tried to look up
a step constructor, it failed with `attempt to index a boolean value
(field 'Steps')`. This made every preset except `Minify` completely
non-functional. Restored the aggregator table, following the exact same
pattern already used by `src/prometheus/namegenerators.lua`, mapping each
of the 11 step names actually referenced by `src/presets.lua` (and file
basenames under `src/prometheus/steps/`) to its `require(...)`.


The `Vmify` step, combined with `ConstantArray`, has a real, currently open,
non-deterministic upstream bug
([#155](https://github.com/prometheus-lua/Prometheus/issues/155),
[#18](https://github.com/prometheus-lua/Prometheus/issues/18)) that can
produce obfuscated code which throws at runtime, or — worse — runs without
error but produces a subtly wrong result. This affects the `Medium` and
`Strong` presets (both use `Vmify` + `ConstantArray` together); `Minify` and
`Weak` are unaffected.

This build does not attempt to fix that upstream compiler bug (it's a deep
issue in how `Vmify`'s generated bytecode-interpreter and `ConstantArray`'s
constant-hoisting interact, and fixing it properly means patching the
obfuscator's own logic, not just adapting it to a new host). Instead,
`web/src/engine.js` mitigates it pragmatically: after obfuscating, it
executes the result in a sandboxed VM, diffs its printed output against the
original script's, and retries with a freshly forced seed (see patch 5 above)
up to 8 times. If it still can't get a clean result, it hands back the
best-effort output with an explicit warning rather than silently shipping
broken code. If you hit this repeatedly on a specific script, the `Weak`
preset is unaffected and still gives meaningful obfuscation.

See `test/run.mjs` for a regression test confirming this self-check doesn't
produce false "verified" results.
