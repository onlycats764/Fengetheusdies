# Instruction-stream VM

`Vmify` accepts `InstructionVM = true`. The default remains `false`, so existing
presets and custom configurations keep using the original block dispatcher.
`SafeVM` enables the new mode.

The compiler keeps its existing Lua source-to-register compiler, closure
creation, upvalue cells, vararg packing, and hole-safe multiple-return helpers.
For each compiled block it emits a numeric program table. Each row contains a
randomized 24-bit opcode followed by the virtual-register IDs read or written
by that operation. At runtime, a per-invocation frame table stores those
registers, and a balanced opcode dispatch tree selects the corresponding
compiled action.

This is a specialized instruction stream: each opcode selects a compiler
action that still uses Lua's native operators and calls. It is not a generic
bytecode emulator, and opcode numbers alone do not make the generated program
cryptographically protected. `SafeVM` combines the stream with the existing
typed `ConstantArray` transform and `EncryptStrings` pass.

## Integrity checks and compatibility

`SafeVM` compiles the portable `AntiTamper` checks inside the instruction VM
and does not enable `TamperObfuscator` (the anti-tamper loader). A bounded
runtime test first exposed a scope-name collision: a block's instruction
pointer could shadow the VM's main block position and prevent loop progress.
The compiler now reserves ancestor variable names before adding block-local
instruction state; nested-loop and AntiTamper regressions cover that fix.

No obfuscator can guarantee compatibility with every valid script and host
runtime. The regression checks run under stock Lua 5.1 and compare output and
return tuples for small fixtures and representative larger scripts. Roblox
engine and executor behavior still needs testing in the target runtime.

Run the focused checks with:

```sh
lua test/instruction-vm-equivalence.lua
lua test/safevm-corpus.lua
lua test/preset-names.lua
```
