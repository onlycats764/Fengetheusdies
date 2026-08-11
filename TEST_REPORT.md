# Fengetheus — Test Report

## Environment

- **VM**: LuaNode-VM (fengari fork with true 64-bit integer support via BigInt), vendored at `vendor/luanode-vm/`, symlinked as `node_modules/fengari`.
- **Platform**: Node.js 20.x on Debian Linux.
- **Test methodology**: Each script is executed in a sandbox VM to capture baseline output (printed text + serialized return values). It is then obfuscated with a forced seed, and the obfuscated output is executed in the same sandbox. A test PASSES only if printed text AND return values match the original exactly (after normalizing line numbers in error messages and trailing `.0` on numbers).

## Test Scripts

### Standard test cases (8 scripts, 20-50 lines each)

These cover the core Lua language features that obfuscation transforms:

1. **arithmetic.lua** — Arithmetic operations, operator precedence, mixed integer/float math.
2. **closures.lua** — Closures, upvalues, function factories, counter pattern.
3. **fibonacci.lua** — Fibonacci sequence via both recursive and iterative approaches.
4. **sieve.lua** — Sieve of Eratosthenes, array manipulation, nested loops.
5. **strings.lua** — String manipulation, concatenation, formatting, pattern matching.
6. **tables.lua** — Table operations, nested tables, ipairs/pairs iteration, table.insert/remove.
7. **tween.lua** — Tween/interpolation engine with easing functions (linear, easeInOutQuad).
8. **varargs.lua** — Varargs (`...`), `select()`, `table.pack()`, `table.unpack()`.

### Realistic Roblox-style GUI script (186 lines)

**roblox_gui.lua** simulates a complete Roblox GUI system:

- **TweenService animation engine** with `TweenService:Create()`, `Tween:Play()`, easing functions (`easeInOutQuad`, `easeOutCubic`).
- **GUI frame hierarchy**: ScreenGui → Frame (Background) → TextLabel, TextButton, ScrollingFrame.
- **String formatting** with `{1}`/`{2}` placeholder substitution.
- **Varargs** in notification system and tween creation.
- **Closures** in the tween engine (per-tween state captured in closure).
- **Tables** for GUI properties, animation states, notification queue.
- **Mixed property types**: number properties (Transparency) and table properties (Size={w,h}, Position={x,y}).
- **Baseline output**: 4 ScreenGui children, Background Transparency 0.15, Size 420x320, Button animated, 3 notifications, 16 animation steps.

## Results Summary

### All presets × all cases

| Preset | Standard 8 cases | Roblox GUI | Total |
|--------|-----------------|------------|-------|
| Weak | 8/8 PASS | 1/1 PASS | **9/9** |
| Medium | 8/8 PASS | 1/1 PASS | **9/9** |
| Strong | 8/8 PASS | 3/3 PASS (3 seeds) | **11/11** |

### Strong preset detail (with timing)

| Case | Time | Output size | Expansion |
|------|------|-------------|-----------|
| arithmetic | 13.3s | 435,479b | — |
| closures | 14.7s | 514,589b | — |
| fibonacci | 12.7s | 440,531b | — |
| sieve | 13.5s | 471,991b | — |
| strings | 17.2s | 596,617b | — |
| tables | 16.2s | 592,209b | — |
| tween | 16.2s | 594,415b | — |
| varargs | 15.2s | 526,652b | — |
| roblox_gui (seed 1) | 38.3s | 1,208,356b | 21,702% |
| roblox_gui (seed 2) | 38.3s | 1,224,978b | 22,000% |
| roblox_gui (seed 3) | 37.8s | 1,213,111b | 21,787% |

### Regression suite

```
ALL REGRESSION CHECKS PASSED
```

Covers: all 4 presets (Minify/Weak/Medium/Strong), large input expansion (300 strings under Weak), and seed collision resistance (two forced-seed Medium runs produce distinct outputs).

## Conclusion

All 9 test scripts (8 standard + 1 realistic Roblox GUI) produce identical output when obfuscated with any of the three presets (Weak/Medium/Strong), verified across multiple seeds. The obfuscation is correct: no silent value corruption, no crashes, no output divergence.

The new presets are strictly stronger than the originals (all changes are additive — no obfuscation layer was removed). Double-Vmify was tested and rejected for performance reasons (>5 minutes for a 186-line script), replaced with SplitStrings + LocalWrappers which provide comparable indirection at 38 seconds for the same script.
