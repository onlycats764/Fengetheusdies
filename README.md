# Fengetheus

[![Lua](https://img.shields.io/badge/Lua-5.1%20%7C%20Luau-000080?logo=lua&logoColor=white)](https://www.lua.org/)[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)[![Shell](https://img.shields.io/badge/Interface-CLI-2ea44f.svg)](./bin/fengetheus)[![Repository](https://img.shields.io/badge/Repository-GitHub-181717?logo=github&logoColor=white)](https://github.com/Xyraniz/Fengetheus)

Fengetheus is a local command-line Lua obfuscator built around the Prometheus compiler and transformation pipeline. It reads a Lua source file, applies a selectable transformation preset or custom configuration, and writes the generated Lua output to disk.

> **Based on Prometheus by Elias Oelschner, **[**https://github.com/prometheus-lua/Prometheus**](https://github.com/prometheus-lua/Prometheus)

## Features

- Local file-to-file obfuscation with no remote service required.

- Presets for different transformation levels: `Minify`, `Balanced`, `Phantom`, `Wraith`, `Cipher`, `Aegis`, `Titan`, `TitanVM2`, and `StrongScalable`.

- Lua 5.1 and Luau target selection.

- Custom Lua configuration files for pipeline-level control.

- Optional pretty-printed output, deterministic seeds, colored logging control, and parser error files.

- POSIX launcher script and a CLI smoke test for basic verification.

## Requirements

Fengetheus requires a compatible Lua interpreter available as `lua`, or through the `LUA_BIN` environment variable. The launcher is POSIX-compatible and does not require a JavaScript runtime, package manager, or build step.

## Installation

Clone the repository and make the launcher executable:

```
git clone https://github.com/Xyraniz/Fengetheus.git
cd Fengetheus
chmod +x bin/fengetheus
```

If the interpreter is not named `lua`, set `LUA_BIN` when invoking the command:

```
LUA_BIN=lua5.3 bin/fengetheus --help
```

## Usage

Obfuscate a source file with a preset and an explicit output path:

```
bin/fengetheus --preset Balanced --out output.lua input.lua
```

The launcher can also be called directly through Lua:

```
lua src/cli.lua --preset Titan input.lua
```

When `--out` is omitted, Fengetheus writes the result beside the input file using the `.obfuscated.lua` suffix. If neither a preset nor a custom configuration is provided, the `Minify` preset is used.

## Presets

| Preset | Intended use |
| --- | --- |
| `Minify` | Simplify and minify code without enabling the heavier obfuscation steps. |
| `Balanced` | Apply AST transforms without virtualizing the full program; includes the bounded inlining and loop optimizations. |
| `Phantom` | Apply the VM-based pipeline with string, number, and control-flow transformations. |
| `Wraith` | Use a different step order with flow mutation, string splitting, VM conversion, and integrity checks. |
| `Cipher` | Apply VM, string, anti-tamper, and constant transformations in a distinct order. |
| `Aegis` | Apply AST hardening without the VM step. |
| `Titan` | Use the most comprehensive standard pipeline. |
| `TitanVM2` | Use Titan with the second-generation VM dispatch settings. |
| `StrongScalable` | Use a strong profile for large scripts while avoiding the heaviest scope and nesting transforms. |
| `Vmify` | Isolated VM test preset. |

Obfuscation changes code structure and may affect size, performance, or compatibility. Test the generated file with the interpreter and runtime environment that will execute it. Obfuscation is not a substitute for access control, secret management, or a secure execution boundary.

## Command-line options

| Option | Description |
| --- | --- |
| `--preset`, `--p <name>` | Select a built-in preset. |
| `--config`, `--c <file>` | Load a custom Lua configuration file. |
| `--out`, `--o <file>` | Set the output path. |
| `--Lua51` | Force the Lua 5.1 target. |
| `--LuaU` | Force the Luau target. |
| `--pretty` | Use readable formatting for generated output. |
| `--seed <number>` | Set the transformation seed. |
| `--nocolors` | Disable colored CLI messages. |
| `--saveerrors` | Save parser errors beside the input file. |
| `--version`, `-v` | Print the configured CLI version. |
| `--help`, `-h` | Print the complete help message. |
| `update` | Run the official Prometheus updater. |

Without a forced target or a custom configuration that sets `LuaVersion`, the
CLI parses the source as both Lua 5.1 and Luau. It switches targets only when
one grammar accepts the source and the other rejects it; shared syntax keeps
the preset's target. The parser API exposes the same check as
`Fengetheus.Parser.detectLuaVersion(source)`, returning a unique version or
`nil` when the source is ambiguous, plus per-dialect parse results.

The `Balanced` preset also enables bounded local-function inlining, unrolling
of small numeric loops whose index is unused, and a checked mixed-arithmetic
number expression. The inline and unroll passes skip cases outside their safe
subset; they can also be added to custom configurations as `InlineFunctions`
and `UnrollLoops` steps.

For the complete command syntax, run:

```
bin/fengetheus --help
```

## Testing

Run the CLI smoke test from the repository root:

```
test/cli-smoke.sh
```

The test creates a temporary Lua program, runs the `Minify` preset, verifies that an output file is produced, and checks that the expected source string remains present. To use a differently named interpreter:

```
LUA_BIN=lua5.3 test/cli-smoke.sh
```

Additional Lua cases and invariant or trace checks are available under [`test/`](./test).

## Browser web client

The repository includes a complete browser client under [`web/`](./web). It runs the Fengetheus pipeline locally in a Web Worker backed by Wasmoon's Lua WebAssembly runtime, keeps source and generated Lua in memory, and exposes the result only through a download button. The Vercel build copies the compiler modules beside the static client so private repositories do not need a GitHub Raw request.

To deploy it with Vercel, import the repository with the repository root as the project root. The checked-in [`vercel.json`](./vercel.json) runs `scripts/vercel-build.mjs` and publishes the generated `.vercel-site` directory. No server runtime or environment variable is required.

On Windows, the equivalent Lumora-backed regression harness is available as
`test/obf-harness.ps1`. It discovers the locally built Lumora executable under
the sibling `work/Lumora` checkout; pass `-Lumora` to select another binary:

```
powershell -ExecutionPolicy Bypass -File test/obf-harness.ps1 -Preset Minify,Balanced,TitanVM2 -Lumora C:\path\to\lumora.exe
```

To exercise the randomised transforms across multiple deterministic builds,
pass more than one seed. The original program is run once per case and each
obfuscated build is compared against that same baseline:

```
powershell -ExecutionPolicy Bypass -File test/obf-harness.ps1 -Seed 424242,8675309,13371337 -Lumora C:\path\to\lumora.exe
```

The harness compares Lumora's structured result (`ok`, `kind`, and `stdout`)
for every case and preset, so file paths and generated line numbers do not
create false failures. Use a timeout when validating protection-heavy presets:
anti-tamper and anti-sandbox failure paths intentionally do not return.

## Project layout

```
bin/
  fengetheus                 POSIX launcher for the CLI
src/
  cli.lua                    Command-line entry point
  fengetheus.lua             Engine initialization and public exports
  presets.lua                Built-in transformation presets
  fengetheus/                Parser, compiler, pipeline, and transformation steps
test/
  cli-smoke.sh               End-to-end CLI smoke test
  cases/                     Lua input cases
  invariant-check.lua        Invariant checks
  trace-anomalies.lua        Trace diagnostics
LICENSE                      License and attribution terms
```

## Attribution and license

Fengetheus is derived from [Prometheus](https://github.com/prometheus-lua/Prometheus), created by Elias Oelschner. The software under `src/` remains subject to the Prometheus license and its attribution requirements. The repository also contains project-specific material covered by the terms stated in [`LICENSE`](./LICENSE).

Before redistributing Fengetheus or software generated with it, review the complete license and preserve the required attribution.

[1]: https://github.com/Xyraniz/Fengetheus "Fengetheus repository"

[2]: https://github.com/prometheus-lua/Prometheus "Prometheus"
