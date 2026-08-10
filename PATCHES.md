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

The root cause has now been located and fixed directly in the compiler
(see patch 10 below) — this is no longer a pure mitigation. The
sandboxed verification, diffing and forced-seed retry loop in
`web/src/engine.js` (patch 5) is kept as a defense-in-depth safety net
that now also catches silent value-corruption, not only crashes (see
patch 11).

See `test/full-suite.mjs` for the end-to-end correctness suite and
`test/regression.mjs` for the regression test confirming the self-check
doesn't produce false "verified" results.

## 8. Lua 5.3 compatibility boundary for legacy unpack calls

The embedded Prometheus source contains legacy Lua 5.1 calls to the global `unpack` function in compiler, visitor, and transformation modules. Fengari executes Lua 5.3, where the standard function is exposed as `table.unpack` and the global name is intentionally absent. This caused every preset that loaded those paths to fail before producing output, with errors such as `attempt to call a nil value (global 'unpack')`.

The fix is applied at the Prometheus entrypoint before any compiler submodule is required: the private compiler VM aliases `_G.unpack` to `table.unpack` only when the global is absent. The visitor and ProxifyLocals modules also use local compatibility bindings as defense-in-depth. This preserves Lua 5.3 semantics for generated user programs and avoids changing the Fengari fork or leaking a compatibility assumption into the target script.

## 9. Worker isolation and large-result delivery

The previous UI invoked Fengari synchronously from the main browser thread. Large inputs could make the page appear frozen, and assigning a large generated program directly to a textarea forced unnecessary DOM/layout work. `web/src/worker.js` now runs the complete obfuscation/self-verification pipeline in a dedicated Web Worker and streams progress logs back to the UI. `web/src/app.js` keeps the complete result for the existing Download action, but renders only results up to 64 KiB inline; larger results are explicitly marked `download-only` and are not inserted into the output textarea. Copy is disabled for those results, while Download remains enabled.

The build now emits both `web/dist/bundle.js` and `web/dist/worker.js`, and the regression suite covers the reported example, multiple-return semantics, closures, tables, all four presets, and a 51 KiB input producing a 100 KiB Weak result.

## 10. `src/prometheus/compiler/upvalue.lua` — fix `parentScope` breakage in the else-branch `__len` of the upvalues proxy (the actual fix for upstream #155 / #18)

This is the real fix for the long-standing, non-deterministic
`attempt to index a nil value` bug reported upstream as
[prometheus-lua/Prometheus #155](https://github.com/prometheus-lua/Prometheus/issues/155)
and [#18](https://github.com/prometheus-lua/Prometheus/issues/18).
It manifests in the `Medium` and `Strong` presets (which run `Vmify` +
`ConstantArray`) as runtime crashes that appear randomly, depend on
neither the input script nor the platform, and surface on a different
variable name each run — because `ConstantArray` selects its hoisting
targets with `math.random` (Shuffle/Threshold).

```lua
-- before (the else-branch's metatable table inside createUpvaluesProxyFunc)
Ast.KeyedTableEntry(Ast.StringExpression("__len"), Ast.FunctionLiteralExpression({}, Ast.Block({
    Ast.ReturnStatement({Ast.NumberExpression(self.upvalsProxyLenReturn)})
}, Scope:new(ifScope)))),
-- after
Ast.KeyedTableEntry(Ast.StringExpression("__len"), Ast.FunctionLiteralExpression({}, Ast.Block({
    Ast.ReturnStatement({Ast.NumberExpression(self.upvalsProxyLenReturn)})
}, Scope:new(elseScope)))),
```

**Root cause.** When `Vmify` rewrites the whole script as a bytecode VM,
it compiles many internal closures, each with a freshly created `Scope`.
`ConstantArray`'s hoisting only works if every intermediate scope on the
chain from a hoisted constant's use-site up to the root faithfully
mirrors the real lexical nesting. For each constant it hoists, it calls
`scope:addReferenceToHigherScope`, walking up `parentScope` so the final
emitter knows which upvalues each emitted function must capture. If any
link in that chain is wrong, the emitter silently drops that variable
(the hoisted constants array or its wrapper) from that function's
upvalue list, and at runtime the function sees `nil`.

`createUpvaluesProxyFunc` creates exactly one such broken link: the
`__len` metamethod that lives in the **else**-branch (the fallback taken
when `newproxy` is unavailable, which returns a plain table with a
metatable). Its scope was created as `Scope:new(ifScope)` — parented to
the if-branch's scope, a *sibling* of the block it actually lexically
lives in (`elseScope`'s sibling is `ifScope`; both hang off the same
outer `scope`). The walk up `parentScope` from inside that `__len` could
never reach the real ancestors, so any constant hoisted from that block
was emitted without its matching upvalue. Because hoisting inside
`__len` only happens when `ConstantArray`'s RNG-driven Shuffle/Threshold
chooses exactly that function, the failure was probabilistic and showed
a different nil variable each run.

The if-branch's own `__len` was already correct (it really does live
inside the if-block), which is why the same construction there never
triggered the bug — the else copy was the lone violation. An automated
scope-invariant checker (`test/invariant-check.lua`, driven by
`test/run-invariant.mjs`) over hundreds of seeded Medium/Strong
compilations found no further broken `parentScope` links after the fix,
and a monkey-patched `addReferenceToHigherScope` logger
(`test/trace-anomalies.lua`) recorded zero hoisting requests issued
from non-ancestor scopes in either preset: the compiler's other
self-contained closures (`containerFunc`, `createClosureVars`, the block
dispatcher) are structurally self-contained by design and never
participate in constant hoisting.

No obfuscation logic was removed or weakened: this is a one-line
parenting correction inside the compiler's own scope bookkeeping.
`AntiTamper`, `EncryptStrings`, and every transformation step are
untouched.

## 11. `web/src/engine.js` — silent-corruption detection (defense in depth)

The self-test previously compared only whether the obfuscated output
*crashed* against the original's baseline. A same-scope breakage could
instead let a hoisted wrapper silently evaluate to `nil` mid-expression
in a way that still throws — but hoisting a different constant can
produce a *wrong value* that never throws at all. The sandbox now also:

- captures and compares the chunk's **return value(s)**, serialized via
tostring through a small Lua-side serializer (the chunk is executed as
the body of a wrapper function so tail expressions and `return`
statements both produce comparable values), and
- normalizes chunk-relative line numbers inside error messages
(`[string "..."]:N: msg` → `:N:`) before diffing, so identical errors
raised from shifted line numbers (normal after re-wrapping/obfuscation)
never register as false corruption.

A failing comparison now retries with a freshly forced seed exactly like
a crash did, and the best-effort warning path is unchanged.

## 12. `web/src/engine.js` — fix comparison false positives (whole-integer floats and broken error-line regex)

**Bug.** After patch 10 the page could still flag a perfectly correct
script as `silent corruption`: an obfuscated output that prints
`total=15.0` was compared against an original that prints `total=15`,
and the textual diff treated them as different. Separately, the regex
that normalizes chunk-relative line numbers inside error messages
(`[string "..."]:N: msg`) never actually matched anything: it expected
the quote before the colon (`":\d+:`) while Fengari's real format places
the quote before the closing bracket (`"\]:\d+:`), so error-line
normalization had been dead code since it was written.

**Root cause.** The compiler rewrites integer literals and arithmetic as
expressions that evaluate to float-valued numbers; `tostring` then
renders `15` as `15.0`, a purely presentational difference with
identical semantics (`15 == 15.0` in Lua). The regex escape was simply
misplaced.

```js
// before (normalizeOutput)
.replace(/\[string "[^"]*":\d+:/g, (m) => m.replace(/:\d+:$/, ":N:"))
.replace(/^([^:\n]+):\d+: /gm, (m, pre) => `${pre}:N: `)

// after
.replace(/\[string "[^"]*"\]:\d+:/g, (m) => m.replace(/:\d+:$/, ":N:"))
.replace(/^([^:\n]+):\d+: /gm, (m, pre) => `${pre}:N: `)
.replace(/\b(\d+)\.0(?![0-9a-zA-Z_.])/g, "$1")
```

The numeric normalization is conservative: it only collapses `.0`
suffixes that are not followed by a digit, letter, underscore or dot,
and the serializer formats numbers with `%.17g` so a genuinely different
value is never normalized into another (verified by
`test/check-normalization.mjs`: 23 cases, real corruption remains
detectable). The serialized return-value comparison also goes through
`normalizeOutput`. The same changes are replicated in
`test/regression.mjs` and `test/full-suite.mjs` so the test suite stays
in sync with production.


## 13. `src/prometheus/ast.lua` + `src/prometheus/steps/NumbersToExpressions.lua` — non-finite constant folding rejected

**Severity:** medium. With certain RNG seeds, Medium/Strong compilation of an
otherwise valid script failed with `attempt to perform arithmetic on a nil
value`, apparently at random and independent of the input script.

**Root cause.** The constant folder in the parser accepts the result of a
`pcall` over any operation between constant operands — including results that
are `inf`, `-inf` or `NaN`. Under Fengari/Lua 5.3, a numerically-looking
string generated by `RandomStrings.randomString()` inside AntiTamper's sanity
check (e.g. `"67" ^ 16777216`) can legally fold to `Infinity`. That non-finite
constant then travels through the AST until NumbersToExpressions tries to
decompose it arithmetically, and its generators crash on `-Infinity`. Because
the random string depends on the seed, the failure was probabilistic.

**Fix.** All 18 folding sites in `ast.lua` now guard the folded value with
`isFiniteNumber` and leave the original expression intact when the result is
non-finite — semantically correct, because an expression whose operands are
finite can never produce a non-finite constant at runtime either. Defense-in-
depth: `NumbersToExpressions:CreateNumberExpression` returns the literal
untouched on `inf`/`-inf`/`NaN`, mirroring the existing negative-zero guard.

```lua
-- ast.lua
local function isFiniteNumber(v)
    return type(v) == "number" and v == v
        and v ~= math.huge and v ~= -math.huge
end
-- every folding site:
if success and isFiniteNumber(val) then
    return Ast.ConstantNode(val)
end

-- NumbersToExpressions.lua (CreateNumberExpression, right after the
-- negative-zero guard)
if val ~= val or val == math.huge or val == -math.huge then
    return Ast.NumberExpression(val)
end
```

