# Fengetheus — Changelog

Entries are listed most recent first. Each entry corresponds to a discrete
change to the codebase (compiler, engine, or presets). For the full
before/after diffs and root-cause writeups behind each entry, see
`PATCHES.md`.

> Note: this project does not currently tag dated releases, so entries below
> are ordered by dependency/landing order (each entry assumes everything
> above it in this list is already applied), not by calendar date.

---

## Changed — Load LuaNode-VM as a package dependency (remove vendored copy)
**Files:** `package.json`, `.gitignore`, `web/src/engine.js`, `test/regression.mjs`, `test/full-suite.mjs`, `test/run-invariant.mjs`, `web/dist/*` (rebuilt)
The full LuaNode-VM repository was previously embedded directly under
`vendor/luanode-vm/` (42 files) and wired in via
`"fengari": "file:vendor/luanode-vm"` with a `node_modules/fengari` symlink.
That vendored copy is removed entirely: `vendor/` is now in `.gitignore` and
the dependency is declared the normal way —
`"luanode-vm": "github:Xyraniz/LuaNode-VM"` — so `npm install` pulls
LuaNode-VM from its real GitHub repository. Every `import`/`require` site
(`web/src/engine.js` and the three test runners) was updated from the `fengari`
alias to `luanode-vm`, and the web bundles were rebuilt from the package.
Functional behaviour is unchanged; only the packaging/source of the VM changed.

## Added — Stronger obfuscation presets (Weak/Medium/Strong)
**Files:** `src/presets.lua`
All three non-trivial presets were strengthened with features that upstream
left unused, while preserving correctness. No existing obfuscation layer was
removed from any preset, so obfuscation power only increased.

`Weak` — `Shuffle = true, Rotate = true` added to the ConstantArray step.
The constant lookup array is now shuffled (randomised index order) and rotated
(per-call rotation of the decrypted array), so the constant-to-index mapping is
no longer trivially sequential.

`Medium` — `SplitStrings` step (Threshold=0.5, MinLength=2, MaxLength=6,
ConcatenationType="custom", CustomFunctionType="global") inserted before
AntiTamper, and `LocalWrapperCount=3, LocalWrapperArgCount=8,
LocalWrapperThreshold=1` added to the ConstantArray step. String literals are
split into shuffled chunks reassembled via custom global functions, and the
ConstantArray decoder is wrapped in 3 junk wrapper functions per scope with 8
bogus arguments each.

`Strong` — `SplitStrings` step (Threshold=0.7, MinLength=2, MaxLength=8,
ConcatenationType="custom", CustomFunctionType="local",
CustomLocalFunctionsCount=2) added after EncryptStrings, and
`LocalWrapperCount=4, LocalWrapperArgCount=10, LocalWrapperThreshold=1` added
to the full ConstantArray pass. A second `Vmify` pass (bytecode-in-bytecode)
was tested and is technically correct thanks to the upvalue.lua root-cause fix,
but rejected for performance — a 186-line Roblox GUI script takes over 5
minutes with double-Vmify versus 38 seconds with SplitStrings + LocalWrappers,
which give comparable indirection. Strong now layers: Vmify → EncryptStrings
→ SplitStrings (local reassembly) → AntiTamper → ProxifyLocals →
ConstantArray (full, shuffle/rotate, 4 junk wrappers) → ConstantArray
(strings, shuffle/rotate) → NumbersToExpressions → WrapInFunction.

All 9 regression cases (including a 186-line Roblox GUI script) pass under
Weak, Medium, and Strong (9/9 each), matching the original output exactly.

## Removed — Auto-verification (engine self-test) and retry loop
**Files:** `web/src/engine.js`, `web/src/worker.js`, `web/src/app.js`, `web/index.html`
The engine's sandbox-execution-and-retry loop was removed. Previously
`obfuscate()` ran the original source in a sandbox to capture a baseline,
obfuscated it, ran the obfuscated output, compared the two, and retried with a
fresh seed up to 8 times on mismatch. This was a workaround for the
Vmify+ConstantArray upvalue crash (upstream Prometheus #155/#18), whose root
cause is now fixed directly in `upvalue.lua` (see the "ROOT CAUSE RESOLVED"
entry below), so the retry loop no longer has anything to retry for. The
self-test was also actively harmful for real-world Roblox/GUI scripts that
reference globals (`game`, services, etc.) not available in a bare sandbox.

`engine.js` went from 283 to 111 lines: `obfuscate(source, preset,
{ onLog = () => {} } = {})` now obfuscates once and returns immediately. The
worker no longer destructures/passes `maxAttempts`; `app.js` no longer posts
`maxAttempts` or shows an attempt count; `index.html` dropped the `verify`
pipeline step and the "Self-verifying output" about card (which referenced the
now-fixed bugs) in favour of a "Layered obfuscation" card.

---

## Changed — Host VM migrated from Fengari to LuaNode-VM (true 64-bit integers)
**Files:** `package.json`, `web/src/engine.js`, `src/prometheus/steps/NumbersToExpressions.lua`, `README.md`, `PATCHES.md`
Fengetheus now runs Prometheus inside [LuaNode-VM](https://github.com/Xyraniz/LuaNode-VM)
instead of upstream Fengari. LuaNode-VM is a specialized Fengari fork that fixes
a critical correctness flaw: Fengari represented Lua's `lua_Integer` with
JavaScript `Number` (IEEE-754 double), capping integers at the 53-bit
safe-integer range (`math.maxinteger` reported `9007199254740991` instead of
`9223372036854775807`, with broken overflow wraparound). LuaNode-VM uses a
hybrid Number/BigInt representation giving the full signed 64-bit range with
correct two's-complement wraparound, matching PUC-Rio Lua 5.3 exactly.

LuaNode-VM is loaded as a normal package dependency from its GitHub repository
(`"luanode-vm": "github:Xyraniz/LuaNode-VM"` in `package.json`) — a drop-in
compatible API, so no source `import`/`require` statements reference the old
`fengari` package name anymore (all `import`/`require` sites now resolve
`luanode-vm`). The `patch-package` postinstall step and `patches/` directory were removed:
LuaNode-VM already ships the two browser-compatibility guards
(`luaconf.js`'s `process.env.FENGARICONF` guard and `liolib.js`'s
`luaopen_io` `process` guard) that those patches previously added to Fengari.

A lexer bug in LuaNode-VM was also fixed as part of this migration:
`src/vm/llimits.js` exported `MAX_INT`/`MIN_INT` as BigInt (the real int64
extremes), but the lexer uses them as plain-Number structural limits
(`MAX_INT/2` for max lexical-element size, `++linenumber >= MAX_INT` for max
source line, and `checklimit(..., MAX_INT, ...)` for max constructor items).
`BigInt / Number` throws a `TypeError`, which crashed the parser with a
status of `-1` and no error message whenever a string token grew the lexer
buffer past its initial size — i.e. on most non-trivial Prometheus modules.
`MAX_INT`/`MIN_INT` are now `Number.MAX_SAFE_INTEGER` / its negation
(structural limits, as in upstream Fengari), while the true 64-bit integer
extremes remain available as `MAX_INT64`/`MIN_INT64` (BigInt) for the VM's
int64 overflow checks. The conservative 32-bit literal cap in
`NumbersToExpressions.lua` is retained (it never produces an incorrect
result on the 64-bit-double target; it only bounds operand magnitude), with
its comments updated to reflect the new host. See PATCHES.md #6.

---

## Fixed — Non-finite constant folding crash (Medium/Strong)
**Files:** `src/prometheus/ast.lua`, `src/prometheus/steps/NumbersToExpressions.lua`
Constant folding in the parser could fold `inf`/`-inf`/`NaN` results (e.g.
from `AntiTamper`'s sanity-check strings coercing to numbers) into the AST as
literal constants, which then crashed `NumbersToExpressions`'s arithmetic
decomposition. All 18 folding sites now reject non-finite results via an
`isFiniteNumber` guard; `NumbersToExpressions` returns the literal untouched
as defense-in-depth. See PATCHES.md #13.

## Fixed — False-positive corruption reports in the self-test
**Files:** `web/src/engine.js`
Two bugs in `normalizeOutput`: (1) the line-number-normalization regex never
matched the host VM's actual error format, so it was dead code; (2) whole-integer
floats (`15.0` vs `15`) were compared as literal text and flagged as
"corruption" even though they're the same value. Both are fixed, with a
regression suite (`test/check-normalization.mjs`, 23 cases) confirming real
corruption is still caught. See PATCHES.md #12.

## Added — Serialized return-value comparison in the self-test
**Files:** `web/src/engine.js`
The self-test previously only compared printed output and crash/no-crash
status, which meant a hoisted constant resolving to the wrong value (rather
than `nil`) could pass silently. The sandbox now also serializes and
compares the chunk's return value(s), and normalizes chunk-relative line
numbers before diffing. See PATCHES.md #11.

## Fixed — Upstream Prometheus #155 / #18 (Vmify + ConstantArray upvalue loss) — ROOT CAUSE RESOLVED
**Files:** `src/prometheus/compiler/upvalue.lua`
**Status: fixed, not a workaround.** `createUpvaluesProxyFunc`'s else-branch
`__len` metamethod was parented to the wrong scope (`Scope:new(ifScope)`
instead of `Scope:new(elseScope)`), a sibling of the block it actually lived
in. Any constant `ConstantArray` hoisted through that scope silently lost its
upvalue link, so the emitted function saw `nil` at runtime — the long-standing
non-deterministic `attempt to index a nil value` crash reported upstream as
[#155](https://github.com/prometheus-lua/Prometheus/issues/155) and
[#18](https://github.com/prometheus-lua/Prometheus/issues/18). The fix is a
one-line reparenting; it does not touch `AntiTamper`, `EncryptStrings`, or any
other obfuscation step. An automated scope-invariant checker
(`test/invariant-check.lua`) found no further broken `parentScope` links
after this fix across hundreds of seeded Medium/Strong compilations. This
supersedes the previous mitigation (forced-seed retry loop, below): the retry
loop no longer has anything to retry *for* on this bug, and is kept only as
general defense-in-depth. See PATCHES.md #10.

## Added — Worker isolation and large-result delivery
**Files:** `web/src/worker.js`, `web/src/app.js`, build config
Moved the obfuscation/self-verification pipeline off the main thread into a
dedicated Web Worker so large inputs no longer freeze the page. Results over
64 KiB are marked `download-only` and are not force-rendered into the output
textarea. See PATCHES.md #9.

## Fixed — `unpack` global missing under the host VM (Lua 5.3)
**Files:** Prometheus compiler entrypoint, visitor and `ProxifyLocals` modules
Embedded Prometheus source called the Lua 5.1 global `unpack`, which Lua 5.3
(the host VM) exposes only as `table.unpack`. Aliases `_G.unpack` to
`table.unpack` when absent, plus local compatibility bindings as
defense-in-depth. See PATCHES.md #8.

## Fixed — `src/prometheus/steps.lua` was empty (Medium/Strong/Weak completely non-functional)
**Files:** `src/prometheus/steps.lua`
The step registry file contained no `return` statement, so
`require("prometheus.steps")` silently resolved to `true` instead of a table,
and every preset except `Minify` failed with
`attempt to index a boolean value (field 'Steps')`. Restored the aggregator
table mapping all 11 step names to their `require(...)`. See PATCHES.md #7.

## Fixed — host VM not usable in a real browser (blank preset dropdown)
**Files:** `vendor/luanode-vm` (LuaNode-VM ships these guards natively; the legacy `patch-package` workflow is no longer needed)
Two unguarded `process` references in the VM's `luaconf.js` and `liolib.js`
threw immediately on import in a browser (no `process` global), aborting the
whole module graph before the UI could populate. LuaNode-VM already guards
both the same way the rest of its own Node-detection code does, so no
post-install patch is required anymore. See PATCHES.md #6.

## Changed — Non-clock-based retry seeding (mitigation, superseded above for #155/#18)
**Files:** `web/src/engine.js`
Retries previously reseeded via `os.time()`, which has 1-second resolution
and could produce identical seeds across attempts on a fast machine. Each
retry now injects an explicit `Seed = Date.now() + attempt * 104729`;
`maxAttempts` raised from 5 to 8. This was originally the only mitigation for
#155/#18 (retry until you get a clean seed); the root cause is now fixed
directly (see above), so this exists purely as general defense-in-depth
against any *other* seed-dependent issue. See PATCHES.md #5.

## Fixed — `string.format("%X", …)` throws on non-integer-representable floats
**Files:** `src/prometheus/steps/NumbersToExpressions.lua`
Lua 5.3's `string.format("%X", …)` requires an exact 64-bit integer
representation and throws for large integer-valued doubles that Lua 5.1
would have formatted without complaint. Falls back to a plain decimal
literal instead of crashing obfuscation. See PATCHES.md #4.

## Added — `math.log10` polyfill
**Files:** `src/prometheus.lua`
`math.log10` was removed from Lua's stdlib in 5.2+; `NumbersToExpressions`
depends on it to pick compact literal representations for large numbers.
See PATCHES.md #3.

## Fixed — CLI-argument loop crashed with no `arg` global
**Files:** `src/config.lua`
`arg` is only populated by a real CLI process; guarded with `arg or {}` since
there is no process in a browser tab. See PATCHES.md #2.

## Fixed — `package.path` rewrite crashed with no resolvable script path
**Files:** `src/prometheus.lua`
`script_path()` returns `nil` inside Fengari (no real chunk filename to
pattern-match against); the `package.path` mutation is unnecessary anyway
since every module is registered via `package.preload`, so this is now a
no-op instead of a crash. See PATCHES.md #1.

---

## Superseded entry: Strong preset — replace second `Vmify` pass
**Files:** `src/presets.lua`
**Status: superseded by the upvalue.lua root-cause fix above; retained here for history.**
Before the root cause of #155/#18 was identified, the working fix for the
`Strong` preset's crash was to replace its second `Vmify` pass with
`ProxifyLocals` + a full `ConstantArray` pass, since double-`Vmify` re-compiling
its own VM-interpreter output triggered the (then-unidentified) upvalue bug
100% of the time on every input. This is no longer necessary now that
`upvalue.lua` is fixed directly — a straight double-`Vmify` `Strong` preset
would also work today — but the swap is kept as-is because it is not a
regression: measured output is 35–56% larger than the old (crashing) preset,
with the VM dispatch loop, proxy objects, and full constant hoisting all
still present. Revisiting this (reverting to plain double-`Vmify`) is a
separate, optional cleanup, not a bug fix.

## Fixed — Block-dispatch threshold off-by-one for adjacent block IDs
**Files:** `src/prometheus/compiler/emit.lua`
`buildBlockThresholdCondition` and the binary-split logic could compute a
midpoint threshold equal to the left partition's block ID when two IDs were
numerically adjacent, causing that block to be dispatched down the wrong
branch. Clamped so the threshold always strictly exceeds the left ID; binary
split's reversed-branch condition style is now only chosen when the ID gap
actually permits it. Equivalent to upstream PR #166's fix, applied locally.

## Fixed — host VM integer overflow leaking float subtype into output
**Files:** `src/prometheus/steps/NumbersToExpressions.lua`
The host VM (Lua 5.3 compiled to JS) uses a `lua_Integer` subtype, unlike the
target runtime (Lua 5.1 / Luau, 64-bit doubles only, no integer subtype).
Three `NumbersToExpressions` generators (modulo decomposition,
addition/subtraction, scientific notation) could produce values exceeding
the integer range, which the host VM silently treats as float — e.g. an
integer `15` printing as `"15.0"` instead of `"15"` — which then tripped the
self-test's strict string comparison as a false-positive "corruption". Added
a `fitsInt32` bound to every affected generator (a conservative cap kept
from the Fengari era, when `lua_Integer` was 32-bit; LuaNode-VM now provides
true 64-bit integers, so the cap only bounds operand magnitude and never
produces incorrect results), and made the scientific notation path skip
integer-valued inputs (since `val / 10^exp` always produces a float in Lua
5.3).
