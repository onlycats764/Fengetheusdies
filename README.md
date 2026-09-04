# Fengetheus

[![Lua](https://img.shields.io/badge/Lua-5.1%20%7C%20Luau-000080?logo=lua&logoColor=white)](https://www.lua.org/)[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)[![Shell](https://img.shields.io/badge/Interface-CLI-2ea44f.svg)](./bin/fengetheus)[![Repository](https://img.shields.io/badge/Repository-GitHub-181717?logo=github&logoColor=white)](https://github.com/Xyraniz/Fengetheus)

Fengetheus is a local command-line Lua obfuscator built around the Prometheus compiler and transformation pipeline. It reads a Lua source file, applies a selectable transformation preset or custom configuration, and writes the generated Lua output to disk.

> **Based on Prometheus by Elias Oelschner, **[**https://github.com/prometheus-lua/Prometheus**](https://github.com/prometheus-lua/Prometheus)

## Features

- Local file-to-file obfuscation with no remote service required.

- Presets for different transformation levels: `Minify`, `Weak`, `Medium`, `Strong`, and `StrongScalable`.

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
bin/fengetheus --preset Medium --out output.lua input.lua
```

The launcher can also be called directly through Lua:

```
lua src/cli.lua --preset Strong input.lua
```

When `--out` is omitted, Fengetheus writes the result beside the input file using the `.obfuscated.lua` suffix. If neither a preset nor a custom configuration is provided, the `Minify` preset is used.

## Presets

| Preset | Intended use |
| --- | --- |
| `Minify` | Reduce formatting and output size without adding the heavier obfuscation layers. |
| `Weak` | Apply a light obfuscation pipeline with lower transformation overhead. |
| `Medium` | Apply multiple protection and transformation layers for a balanced profile. |
| `Strong` | Apply the most comprehensive standard pipeline, including VM-based transformation, string encryption, anti-tamper logic, local proxying, constant-array transformations, numeric expression mutation, and function wrapping. |
| `StrongVM2` | Use the Strong pipeline with randomized virtual-register layout, validated VM IR materialization, nonlinear bucket-encoded VM states, bounded bounce trampolines, masked dispatcher bounds, and a bounded second lookup-indirection layer for encrypted strings. |
| `StrongScalable` | Use a strong, more scalable profile for large scripts by omitting transformation layers that can produce excessive local-variable or nesting depth. |

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

On Windows, the equivalent Lumora-backed regression harness is available as
`test/obf-harness.ps1`. It discovers the locally built Lumora executable under
the sibling `work/Lumora` checkout; pass `-Lumora` to select another binary:

```
powershell -ExecutionPolicy Bypass -File test/obf-harness.ps1 -Preset Minify,Balanced,StrongVM2 -Lumora C:\path\to\lumora.exe
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
