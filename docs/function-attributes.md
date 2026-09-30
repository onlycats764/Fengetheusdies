# Function attributes and optimizer coverage

Fengetheus supports compile-time **FENG_ATTRIBUTES(...)** directives inspired by Luraph's per-function attributes. A directive must be the first statement in a function body (or numeric for-loop body); file-scope policy is also accepted as the first statement. Its call is removed before configured transformations run, so it does not need a runtime shim.

## Function policy

**OPTIMIZE(false)** disables Fengetheus' optimizer passes for that function:

    local function renderFrame()
        FENG_ATTRIBUTES(OPTIMIZE(false))
        -- Keep this high-frequency body in its authored form.
    end

The setting is inherited by nested functions. A child can re-enable it with **FENG_ATTRIBUTES(OPTIMIZE(true))**. The policy affects the configured **InlineFunctions**, **UnrollLoops**, **ConstantFolding**, **DeadCodeElimination**, **RedundantOperationElimination**, and **LocalCaching** steps. Parser-time folding of literal expressions still occurs before attributes are read.

## Inlining

**INLINE(checked)** marks a local function that must be inlined at every use. If its body or any use is outside the supported safe subset, compilation fails with an explanation. **INLINE(optional)** requests the ordinary best-effort behavior, while **INLINE(false)** leaves that function in place.

    local function pair(a, b)
        FENG_ATTRIBUTES(INLINE(checked))
        return a + b, a - b
    end

    local function results()
        return pair(9, 4)
    end

Inlining currently supports a single return statement with literal/local arguments and supported pure expression trees. Tail-return call sites can preserve argument evaluation in order using temporary locals, and can expand multiple returns. A pure vararg-forwarding function (return varargs, or fixed parameters followed by varargs in the same order) can inline in tail-return position. Complex statement bodies, indirect calls, recursive functions, and unsupported vararg transformations remain unchanged in optional mode and fail in checked mode.

## Numeric loop unrolling

Place **UNROLL(checked)** as the first statement inside a numeric for body to require unrolling. **UNROLL(optional)** attempts it when safe, and **UNROLL(false)** preserves the loop.

    local total = 0
    for _ = 1 + 1, 6 do
        FENG_ATTRIBUTES(UNROLL(checked))
        total = total + 1
    end

Bounds and steps may be statically evaluated integer arithmetic. **break** and Luau **continue** are lowered through per-iteration wrappers; loop-index reads or assignments remain unsupported because replacing them could change closure capture behavior. Checked unrolling reports these cases instead of silently leaving the loop intact. **MaxIterations** still limits code growth.

## Current VM boundary

The **Vmify** step compiles the whole chunk into one VM. These attributes control optimizer steps and do not select VM implementations or presets per function.
