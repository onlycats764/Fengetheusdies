# Luraph v15 — Documentación oficial (Attributes + Performance)

Fuente: https://lura.ph/dashboard/documents/attributes y /performance
Capturada para análisis de mejora de Fengetheus.

## Attributes

Attributes are special types of macros that enforce certain properties or apply
special effects to an entire structure. To declare attributes on a structure,
the first statement of its body must be a call to LPH_ATTRIBUTES and the
arguments to the call are the desired attributes.

### Attribute Properties

- VM - The attribute can only be used inside of virtualized functions.
- AST - The attribute can only be used inside of non-virtualized functions.
- Inherited - Functions automatically inherit the attribute definition from an
  ancestor. Inheritance is automatic and can be overridden by reapplying the
  attribute.

```lua
local function f() LPH_ATTRIBUTES(ERROR_HANDLING(false))
	local function g()
		-- inherits ERROR_HANDLING from parent
	end
	local function h() LPH_ATTRIBUTES(ERROR_HANDLING(true))
		-- explicitly overrides
	end
end
```

Function attributes may be applied to any function structure, as well as the
outer-most scope of the file. LPH_ATTRIBUTES may only be the first statement in
a body. The only exception is the outer-most scope, where a single obfuscation
guard is allowed:

```lua
if not LPH_OBFUSCATED then ... end
LPH_ATTRIBUTES(...)
```

### ENCRYPT

```lua
function() LPH_ATTRIBUTES(ENCRYPT(key, expression)) end
```

Cryptographically encrypt the passed function with the provided encryption key
and decrypt/load it at runtime with the passed decryption key. Any
non-virtualized child functions (marked with VM(NONE)) are excluded.

Key forms:
- an integer (lesser security due to smaller key size)
- a 64-character hexadecimal string, e.g. "6c75...2331"
- a "{...}" hex table-string - 64 hex chars wrapped in braces; expression must
  be a 32-entry byte array.

The expression is the runtime expression that should contain the decryption
key. During execution, the runtime expression must match the key passed at
compilation, or undefined behavior will occur.

### VM

```lua
function() LPH_ATTRIBUTES(VM(type)) end
```

VM Options:
- NONE - No virtual machine is used (non-virtualized).
- OPAL - Luraph's default VM. Balances security and performance.
- ONYX - Specialty VM with a unique ISA that prioritizes security over
  performance.

By default, Luraph scripts are initialized with the Opal VM.

### PRESET

```lua
function() LPH_ATTRIBUTES(PRESET(preset)) end
```

VM presets control the intensity of bytecode security passes. Lower presets
favor less security for performance, higher presets sacrifice performance for
security.

Preset Options:
- FAST: Low security, high performance.
- BALANCED: A balance of performance and security.
- SECURE: High security, low performance.

By default, virtualized functions use the BALANCED preset.

### OPTIMIZE

```lua
function() LPH_ATTRIBUTES(OPTIMIZE(level)) end
```

Specifies the level of optimization to apply to the function. Optimization
level does not change the intensity of security that is applied. To adjust
security intensity for higher performance, see PRESET.

By default, Luraph functions use the highest optimization level.

### TRANSFORM

```lua
function() LPH_ATTRIBUTES(TRANSFORM(...)) end
```

Applies rewriting passes (usually for security) to a non-virtualized function.

```lua
local function main_functionality()
	LPH_ATTRIBUTES(VM(NONE), TRANSFORM(CONTROL_FLOW, REWRITE_NAMECALLS))
end
```

By default, no transformations are applied to non-virtualized code.

### ERROR_HANDLING

```lua
function() LPH_ATTRIBUTES(ERROR_HANDLING(enabled)) end
```

Controls whether the VM emits the error-handling routine that embeds original
line information into runtime errors. When true (default), errors report their
original source line. When false, the routine is omitted, which improves
performance and removes the stack-level limitation, at the cost of line
information when the script throws an error. Non-virtualized functions cannot
have error handling.

It is recommended to disable error handling when shipping to production, as
error handling significantly worsens performance and causes issues with stack
levels.

### INLINE

```lua
function() LPH_ATTRIBUTES(INLINE(checked)) end
```

Declares that the attributed function should be inlined at all call sites. By
default, the compiler enforces all usages to be resolvable inline calls. When
all call sites are successfully inlined, the function itself is discarded. If
the compiler cannot inline all usages, it throws an error. Passing false
disables checked inlining and allows the function to escape.

Inlined functions inherit attributes (VM type and preset) of the function they
are inlined to. Any function signature is accepted, multi-return / variadic
fully functional. Upvalues supported (mutable and immutable), inlined child
functions not duplicated. No side effects to execution order. Recursive
functions and indirect function calls cannot be inlined. Luraph automatically
restructures inlined code in non-virtualized functions, and will not emit goto
statements or other illegal syntax.

### NO_UPVALUES

```lua
function() LPH_ATTRIBUTES(NO_UPVALUES) end
```

Applies a lightweight wrapper to the function that has zero upvalues.
Eliminates incompatibilities with certain APIs (notably hookfunction and
hookmetamethod) that have known issues with functions that have high upvalue
counts. Legacy attribute for compatibility.

### UNROLL (Numeric Loop Attributes)

```lua
for i = start, limit, step do LPH_ATTRIBUTES(UNROLL(checked)) end
```

Declares that the attributed loop should be unrolled. The compiler must be able
to resolve start, limit, step during analysis. If not resolvable, throws an
error. Passing false disables checked unrolling and allows optional unrolling.

Any loop structure accepted, including break/continue, unrolled child functions
not duplicated. No side effects to execution order. No goto or illegal syntax.

## Transformations

Transformations can be applied to non-virtualized code to add layers of
security.

### EXTRACT

Extracts constants and globals from the function. Does not extract namecall
method names unless REWRITE_NAMECALLS is also applied. The exact type of
content to extract can be specified using arguments. By default, all types:

- GLOBALS
- CONSTANTS

```lua
LPH_ATTRIBUTES(TRANSFORM(EXTRACT(GLOBALS)))
```

### CONTROL_FLOW

Applies control flow flattening to the entire function.

### REWRITE_NAMECALLS

Rewrites a:b(...) namecalls into the form a.b(a, ...).

## Performance

Obfuscation has an unavoidable impact on performance. Solutions Luraph offers:

### Disable Error Handling

ERROR_HANDLING(false) can be used in the outer-most scope (or per-function) to
disable error handling, which can increase performance by over 2-3x.

### Choose a VM Preset

PRESET(FAST) on virtualized functions to reduce bytecode security and improve
performance. Not recommended on sensitive or authoritative code.

### Optimize Code

Three scenarios of poor performance:
1. Obfuscating code that doesn't need to be obfuscated (UIs, Rendering, etc.).
2. Poorly written code (lack of value caching, redundant operations, etc.).
3. Obfuscating code that runs very frequently.

### Redundant Obfuscation

Not all code needs to be obfuscated. Large libraries that deal with unimportant
code (UI libraries, physics calculations, 2D/3D rendering & drawing) should
usually be left unobfuscated. To exclude code from obfuscation, use VM(NONE).
This still hides variable names and comments and greatly improves performance.

### Unoptimized Code

Poorly written code has a much greater impact on performance when obfuscated
than unobfuscated. Example optimization:

Before:
```lua
a.b.c.d.e.f.g.x = 1
a.b.c.d.e.f.g.y = 2
a.b.c.d.e.f.g.z = 1
```
After:
```lua
local myTable = a.b.c.d.e.f.g
myTable.x = 1
myTable.y = 2
myTable.z = 1
```

Since Luraph is emulating Lua, one instruction may turn into dozens depending
on the operation. Optimizing code to have fewer instructions is always better.

### Frequently Ran Code

Code that runs frequently (per game tick, render frame, multiple times per
second) may cause freezes, drop FPS, reduce throughput, increase latency.
VM(NONE) can be applied to code that runs frequently to run at full speed.

Common culprits:
- FiveM: Citizen.CreateThread threads, loops with short Citizen.Wait, frequent
  event handlers.
- Roblox: RunService events (RenderStepped, Heartbeat), UserInputService events
  (InputChanged), Instance __index/__namecall/__newindex hooks, loops/threads
  with short wait intervals, frequently-called function hooks.
