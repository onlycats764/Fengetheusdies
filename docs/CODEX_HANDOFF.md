# CODEX HANDOFF — Fengetheus/Lumora overhaul (FIX#3 + remaining phases)

## Context
This handoff documents an in-flight fix discovered via systematic debugging, plus
the remaining work of the overhaul plan. It is written so that a fresh agent can
pick up exactly where this session left off, without redoing the diagnosis.

## Deliverable being finished
A robust patch fixing the VM's nil-hole semantic-equivalence bug. This doc contains
everything needed to write the patch files and validate them.

## Status when this handoff was written
- HEAD: 6ab9df5. Uncommitted (already validated, ready to commit separately):
  - `src/fengetheus/steps/AntiTamper.lua` — FIX#1 (debug.info vs debug.getinfo)
  - `src/fengetheus/steps/JunkCode.lua` — FIX#2 (type-safe randBinary)
- FIX#3 is designed but NOT applied to the real repo. It was validated on a
  throwaway copy (`/tmp/fengdbg`) in a previous sandbox session; that copy and
  its patch scripts were lost to a sandbox reset. This file reconstructs the
  entire design from first principles, including the corrections found during
  design review, so the patch can be rewritten from scratch and validated again.

## The bug being fixed (FIX#3)
### Symptoms
- Obfuscating `test/cases/varargs.lua` with `--preset Cipher --seed 42`:
  - lua5.1: completes correctly in 0.02s (rc=0, output matches original)
  - luajit: rc=124 (infinite hang) — deterministic
- Bisect isolates it to AntiTamper's AT_02 safeCheck; the check is
  engine-independent, but the VM produced by Vmify truncates varargs on LuaJIT.
- Standalone probes of all AntiSandbox/AntiTamper checks PASS on every engine
  (lua5.1/luajit/5.3/5.4/luau-vm) — the failure is VM-context-dependent, and
  AT_02 is the canary.

### Root cause
The Vmify VM represents multi-values (varargs, call results, returns) as raw Lua
tables `{...}` expanded via `unpack(t)`. `#t` is UNDEFINED for tables with
embedded nils (border search). LuaJIT truncates at the first hole, so the VM
`select('#', ...)` inside a VM closure returns 1 instead of 3 for
`('head', nil, 'tail')` — i.e. any user script passing nils in varargs/multi-
returns through the VM gets wrong arity. This is a semantic-equivalence break
for standard Lua, not just anti-tamper checks.

### Empirically validated primitives (all engines, including LuaJIT and Lumora)
```
P = function(...) return {[0] = select("#", ...), ...} end
X = function(t) return (unpack or table.unpack)(t, 1, t[0]) end
```
- Table constructors DO store values after nils; only the `#` border is undefined.
- `unpack(t, 1, t[0])` uses explicit bounds → never consults `#t` → hole-safe.
- `select("#", ...)` is hole-proof on every engine tested.
- Probe results (identical across lua5.1/luajit/5.3/5.4/luau-vm):
  - `select(3,'a')` → no error, nil (clamps on all engines)
  - `unpack({},1,0)`, `unpack({},1,-1)` → no error, zero values
  - `X(P("head",nil,"tail"))` → "head", nil, "tail" (count=3 preserved)
  - `X(P())` → zero values; `P()[0]` → 0

## Architecture notes needed to write the patch
The VM compiler (`src/fengetheus/compiler/`) is scope-aware. Key facts:
- VM infra vars (packVar/expandVar, etc.) live in `self.scope` (the top-level VM
  function scope). Any use from a deeper scope must call
  `scope:addReferenceToHigherScope(self.scope, self.packVar)` — WITHOUT the
  reference the name-renamer (`Scope:renameVariables`) can generate a name in
  the child scope that SHADOWS the infra var (forbidden-names list is built from
  `variablesFromHigherScopes`), silently breaking the VM. Pattern to copy:
  `Compiler:unpack(scope)` in `compiler/register.lua`.
- `self.containerFuncScope` holds posVar/argsVar/returnVar + registers.
- `psc` = outer script scope where `astItems` are evaluated; its locals can only
  reference globals (newGlobalScope), NOT `self.scope` infra locals like packVar.
- Block scopes are children of containerFuncScope (`Compiler:createBlock`).
- `Ast.KeyedTableEntry(key, value)` emits `[k] = v` in table constructors.
- `unparser.lua` emits `function(args) body end` verbatim; a VarargExpression arg
  emits `...`.
- `unpackVar = unpack or table.unpack` fallback handled in compiler.lua already
  (astItems[2] fallback via `Ast.OrExpression`); the VM's own X references the
  VM-local `unpackVar` (item declared in the parallel assignment list).
- The top-level `functionNode` is called with 7 items (env, unpack, newproxy,
  setmetatable, getmetatable, select, args) in shuffled order (`ids`), plus
  `unpack(util.shuffle(tbl))` — infra closures + optional fixed-arity closure
  creators. **packVar/expandVar MUST be added to `tbl` as well as the assignment
  list**, else they emit as global assignments.
- VM infra declarations are parallel-assigned at the top of the VM function via
  `functionNodeAssignments` (list of {var=, val=}) pairs, then shuffled.
- MAX_CLOSURE_CREATORS cap (120) with arity-based reuse (see `getCreateClosureVar`).

## The 10 multi-value channels (complete map)
Legend: "P" = pack call, "X" = expand call, literal-count = KeyedTableEntry(0, N)
when the count is statically known (fixed arity); otherwise count via P's select.

Channels (file → site → patch):
1. `compiler/compiler.lua` :: `astItems[7]` `{...}` → PACKED outer-args carrier.
   Evaluated in `psc` scope where packVar is invisible → must INLINE the packed
   constructor with the GLOBAL select, not call P:
   `Ast.TableConstructorExpression({`
   `  Ast.KeyedTableEntry(Ast.NumberExpression(0),`
   `    Ast.FunctionCallExpression(Ast.VariableExpression(newGlobalScope, selectVar), {Ast.StringExpression("#"), Ast.VarargExpression()})),`
   `  Ast.TableEntry(Ast.VarargExpression())`
   `})`
   (packVar version was already empirically validated in the old /tmp copy; the
   inlined version only changes the *name resolution*, not semantics.)
2. `compiler/compiler.lua` :: entry call `{unpack(argVar)}` → `{X(argVar)}` =
   `Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.expandVar), {Ast.VariableExpression(self.scope, argVar)})`
   (scope = self.scope, no extra refs needed — same scope).
3. `compiler/compile_top.lua` :: `compileFunction` vararg slice (line ~126):
   raw `{select(i, unpack(args))}` → packed single-value slice:
   `{[0]=1, select(i, X(args))}` — keeps count slot = 1 for downstream X().
   Add refs: `scope:addReferenceToHigherScope(self.scope, self.expandVar)`.
4. `compiler/compile_top.lua` :: TopNode varargReg alias (line ~54):
   `varargReg = argsVar` (direct alias) — stays as-is (args is already packed
   by channel 1/2), BUT the register assignment happens in the container func:
   `setRegister(scope, self.varargReg, Ast.VariableExpression(self.containerFuncScope, self.argsVar))`
   — no change needed; varargReg inherits packed form. (Verified: alias path.)
5. `compiler/compile_top.lua` :: implicit empty return `{}` (TWO sites: lines
   ~59 and ~140) → `{[0]=0}` = `Ast.TableConstructorExpression({Ast.KeyedTableEntry(Ast.NumberExpression(0), Ast.NumberExpression(0))})`.
   CRITICAL: X(t) reads t[0] as the bound — `{}` would make X(t)=unpack(t,1,nil)
   → "bad argument" error on all engines. Empty packed = count 0.
6. `compiler/compiler.lua` :: vararg closure creator passes raw `{...}` to
   container (line ~365) → `P(...)` = `Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.packVar), {Ast.VarargExpression()})`.
   Add ref: `createClosureSubScope:addReferenceToHigherScope(self.scope, self.packVar)`.
   NOTE: this call happens inside the creator's inner function, so it sees the
   infra var through the closure chain; the reference must be registered from
   createClosureSubScope (where P is used).
7. `compiler/compiler.lua` :: fixed-arity creators `argsTb2` (lines ~519-524,
   543): raw `{a1..an}` → `[0]=n` literal count slot inserted at position 1:
   `table.insert(argsTb2, 1, Ast.KeyedTableEntry(Ast.NumberExpression(0), Ast.NumberExpression(argCount)))`
   (arity known statically; P not needed).
8. `compiler/statements/return.lua` :: `setReturn(scope, TableConstructorExpression(entries))`
   → `setReturn(scope, P(v1, ..., vn))` where the call args are the ENTRY VALUES
   (not TableEntry wrappers): collect `entries[i].value` expressions into
   callArgs. Last entry (spread) is the X(reg) call expression already (patched
   by channel 9). P computes true count via select('#',...) over its varargs —
   including the spread → count = n-1+k. Zero entries → P() → {[0]=0} → X → 0
   values ✓. Add refs: `Compiler:pack(scope)` helper (see helper section).
9. `compiler/expressions/function_call.lua` + `pass_self_function_call.lua`
   (expr) :: RETURN_ALL pack sites (function_call line ~40, pass_self line ~46):
   raw `{f(args)}` → `P(f(args))`:
   `Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.packVar), {innerCall})`
   Add refs via `Compiler:pack(scope)` helper.
   Also pass_self multi-return tmp pack (pass_self line ~57) → `P(innerCall)`.
   NOTE: function_call.lua's multi-return path (numReturns>1, line ~58) packs a
   PARENTHESIZED call → still packs count=1 always: P((call)) → P receives one
   arg → {[0]=1}. ✓ correct (parenthesized calls adjust to 1 value in Lua).
10. `compiler/emit.lua` :: container tail `return unpack(returnVar)` →
    `return X(returnVar)`:
    `Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.expandVar), {Ast.VariableExpression(self.cursorFuncScope, self.returnVar)})`
    — wait, actual var is `containerFuncScope` and the tail uses
    `self.scope`'s expandVar → add ref:
    `self.containerFuncScope:addReferenceToHigherScope(self.scope, self.expandVar)`
    next to the existing unpackVar ref.

Spread sites (call/table/return last-arg spread) currently emit
`unpack(reg)` — these must become `X(reg)` = `self:expand(scope)(reg)`:
- `compiler/expressions/function_call.lua` line ~29
- `compiler/expressions/pass_self_function_call.lua` line ~29
- `compiler/expressions/table_constructor.lua` line ~23
- `compiler/statements/function_call.lua` line ~20
- `compiler/statements/pass_self_function_call.lua` line ~20
- `compiler/statements/return.lua` line ~18
All six: `self:unpack(scope)` → `self:expand(scope)` (helper registers refs).

## Helpers to add in `compiler/register.lua`
```lua
    -- pack(scope): reference-resolving accessor for the VM's P (packed varargs)
    function Compiler:pack(scope)
        scope:addReferenceToHigherScope(self.scope, self.packVar);
        return Ast.VariableExpression(self.scope, self.packVar);
    end

    -- expand(scope): hole-safe expansion of a packed multi-value register
    function Compiler:expand(scope)
        scope:addReferenceToHigherScope(self.scope, self.expandVar);
        return Ast.VariableExpression(self.scope, self.expandVar);
    end
```

## Part A: infra declaration (compiler.lua) — exact insert
After `self.unpackVar = self.scope:addVariable();` (line ~263) add:
```lua
    self.packVar = self.scope:addVariable();
    self.expandVar = self.scope:addVariable();
```
P and X definitions inserted into `functionNodeAssignments` (the parallel
assignment list), keeping style consistent with the existing entries:
```lua
        }, {
            -- P: pack varargs (nil-hole safe) {[0]=count, v1..vn}. The
            -- count is computed on the TRUE vararg tuple via select('#',...),
            -- which is hole-proof on every engine; values are stored 1..n.
            var = Ast.AssignmentVariable(self.scope, self.packVar),
            val = (function()
                local pScope = Scope:new(self.scope);
                return Ast.FunctionLiteralExpression({Ast.VarargExpression()}, Ast.Block({
                    Ast.ReturnStatement({Ast.TableConstructorExpression({
                        Ast.KeyedTableEntry(Ast.NumberExpression(0),
                            Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.selectVar), {
                                Ast.StringExpression("#"), Ast.VarargExpression();
                            })),
                        Ast.TableEntry(Ast.VarargExpression());
                    })})
                }, pScope));
            end)(),
        }, {
            -- X: expand a packed table back to multiple values (bounded):
            -- unpack(t, 1, t[0]) — explicit bounds never consult #t, so
            -- embedded nils survive on every engine (lua5.1/LuaJIT/5.3/5.4/Lumora).
            var = Ast.AssignmentVariable(self.scope, self.expandVar),
            val = (function()
                local xScope = Scope:new(self.scope);
                local xArg = xScope:addVariable();
                return Ast.FunctionLiteralExpression({Ast.VariableExpression(xScope, xArg)}, Ast.Block({
                    Ast.ReturnStatement({Ast.FunctionCallExpression(
                        Ast.VariableExpression(self.scope, self.unpackVar), {
                            Ast.VariableExpression(xScope, xArg),
                            Ast.NumberExpression(1),
                            Ast.IndexExpression(Ast.VariableExpression(xScope, xArg), Ast.NumberExpression(0))
                        })})
                }, xScope));
            end)(),
        }, {
```
IMPORTANT (design corrections found in review):
- **Add BOTH vars to `tbl`** (the `local containerFunc, createVarargClosure, ...`
  parameter list that receives `unpack(util.shuffle(tbl))`): else they emit as
  global assignments.
- **Register child-scope refs inside P/X bodies**: P's body (pScope) uses
  self.scope's selectVar 1× and X's body (xScope) uses self.scope's unpackVar 1×:
  add `pScope:addReferenceToHigherScope(self.scope, self.selectVar)` and
  `xScope:addReferenceToHigherScope(self.scope, self.unpackVar)` BEFORE
  constructing the AST, so the renamer won't shadow them.
- P/X are assigned in `functionNodeAssignments` before/after other infra — order
  within the shuffled parallel assignment is irrelevant (they're parallel
  assigned; no dependency on each other at run time before first use).

## Part B: channel rewiring — correction summary
The original patch had 3 flaws; the corrections are baked into the channel map
above. Summary of corrections vs the original draft:
1. astItems[7] inlined packed ctor (global select) — packVar NOT visible in psc.
2. return.lua packs via P(entry-values...) — NOT a literal count slot (spread
   entry would make the static count wrong).
3. Every pack/expand use from a deeper scope registers its reference via the
   new Compiler:pack/expand helpers or explicit addReferenceToHigherScope —
   else renamer shadowing breaks the VM.

## Validation plan (MUST pass before committing FIX#3)
1. Rebuild debug copy: `rsync -a --exclude=.git /workspace/Fengetheus/ /tmp/fengdbg/`
2. Apply Part A + Part B patches to /tmp/fengdbg (write Python patch scripts,
   e.g. `/workspace/tmp/fix_nilholes_a.py` + `_b.py`, that do exact string
   replacements with count==1 verification; abort if any sub fails).
3. Syntax check: `luac -p` equivalent — `LUA_BIN=lua5.1 bin/fengetheus --preset Minify --out /tmp/x.lua /tmp/rc_test.lua` works (repo CLI needs LUA_BIN).
   Then regenerate the failing case on the debug copy:
   `cd /tmp/fengdbg && LUA_BIN=lua5.1 bin/fengetheus --preset Cipher --seed 42 --out /tmp/sw_cipher_varargs.lua test/cases/varargs.lua`
   → expect rc=0, no hang.
4. Run on all engines, compare against original:
   `for e in lua5.1 luajit lua5.3 lua5.4; do $e /tmp/sw_cipher_varargs.lua > /tmp/obf.txt; $e test/cases/varargs.lua > /tmp/orig.txt; cmp /tmp/obf.txt /tmp/orig.txt; done`
   plus `/workspace/Lumora/bin/luau-vm /tmp/sw_cipher_varargs.lua` vs luau run of original.
5. Full sweep: recreate `/tmp/sweep.sh` (9 presets × 6 cases × 4 engines) and
   require 100% pass, then run twice more (JunkCode randomness).
6. Add `test/cases/nilholes.lua` (varargs with nils, multi-returns with nils,
   packed ctor edge cases) to the permanent test suite and add it to CASES in
   matrix_test.sh and sweep.
7. Add regression gate to test/invariant-check.lua if it has a preset list.

## Remaining phases (after FIX#3)
- Phase 1 leftovers: verify Lumora Touched signal gap on BasePart; loadstring in
  --no-roblox mode; re-run Lumora baselines (ctest 16/16) + Fengetheus 135-case
  invariant harness after FIX#3 lands (matrix/sweep 100%).
- Phase 2: study /workspace/obf-src/{prometheus,moonsec,hercules} + luraph_docs.
  Implement/verify: VM dispatcher improvements (custom opcodes, opcode shuffle,
  constant churn), string encryption (EncryptStrings) verify on all engines,
  constant encryption, dead code, proxies, control-flow flattening with the
  overflow parameter, optimize slow code paths (AntiTamper junk interleave is
  O(n²)? check), guarantee semantic equivalence.
- Phase 3: full test matrix (Lua 5.1/LuaJIT/5.3/5.4 + Luau via luau-vm):
  closures, varargs, metatables, pcall, coroutines, goto, string methods,
  numeric for, upvalues; nil-holes suite; fix regressions until 100%.
- Phase 4: GitHub Pages web UI (black/white/gray, PC+mobile, file attach,
  presets, custom options, control-overflow value control, browser-side
  obfuscator so Pages works statically). Deploy.
- Phase 5: final commits to main, changelog (both repos), attach deliverables.

## Test artifacts to recreate (lost in sandbox reset)
- `/tmp/sweep.sh` — 9 presets × 6 cases × 4 engines comparator (content fully
  specified in "Validation plan" step 5; recreate from matrix_test.sh as base,
  CASES="arithmetic closures varargs strings tables fibonacci", PRESETS=
  "Minify Balanced Phantom Wraith Cipher Aegis Titan TitanVM2 StrongScalable",
  ENGINES="lua5.1 luajit lua5.3 lua5.4", LUA_BIN=luajit for generation).
- `test/cases/nilholes.lua` — nil-hole test case for the permanent suite.
- Instrumentation approach for future hangs: copy repo to /tmp/fengdbg, add
  io.stderr:write markers to safeCheck/check/detected in AntiTamper.lua,
  regenerate with --seed for determinism, read stderr markers.
- `--seed <n>` CLI flag: deterministic regeneration (config.Seed).
- LuaJIT intermittent JIT segfault workaround (pending, ~1.2% of runs): add to
  src/cli.lua `if jit and jit.off then pcall(function() jit.off() end) end`
  guard before pipeline — do NOT commit unless validated on a sweep with the
  guard enabled (JIT-off may slow Obfuscation; check it doesn't regress hangs
  vs the nil-hole fix; it's a separate issue from FIX#3).

## Committing
- Identity: Xyraniz <xyraniz@protonmail.com>; branch main.
- FIX#1+#2 commit separately with message:
  "Fix AntiTamper engine-compat (debug.getinfo fallback) and JunkCode type safety"
  (they are already validated; commit as one or two commits, message describes both)
- FIX#3 commit message: "Fix VM multi-value nil-holes: packed varargs/returns"
  body describing channels 1-10 + validation summary (sweep 100% pass).
- Push: `git push https://x-access-token:$GITHUB_TOKEN@github.com/Xyraniz/Fengetheus.git main`
- For Lumora: same identity/branch; push origin main.
- NEVER print/expose the token.

## Quick reference: repo state
- Fengetheus HEAD: 6ab9df5 "Delete obfuscated_output directory"
- Lumora HEAD: f8fc97d "dd"
- Fengeteheus test suites: test/invariant-check.lua, test/obf-harness.sh, test/cli-smoke.sh, test/cases/*.lua
- Preset flags: `--preset/--p`, `--config/--c`, `--out/--o`, `--seed <n>`, `--Lua51`, `--LuaU`, `--pretty`, `--nocolors`
- Custom config = Lua file returning {Name, LuaVersion, VarNamePrefix, NameGenerator, PrettyPrint, Seed, Steps={{Name=,Settings=}}}
