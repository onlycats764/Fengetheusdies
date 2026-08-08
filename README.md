# Fengetheus

A static site that runs a real Lua obfuscator entirely client-side — no
backend, nothing sent over the network. Fengatheus is built on top of the
real [Prometheus](https://github.com/prometheus-lua/Prometheus) Lua
obfuscator: it embeds Prometheus's actual `.lua` source (all 81 files,
essentially unmodified — see [PATCHES.md](./PATCHES.md) for the small
host-compatibility patches) and runs it inside
[Fengari](https://fengari.io), a real Lua 5.3 VM compiled to JavaScript.

Live at: `(https://xyraniz.github.io/Fengetheus/)` once deployed (see below).

## What Fengatheus adds on top of Prometheus

- **Runs anywhere, no install** — a static web page instead of a CLI tool,
  hostable for free on GitHub Pages, while still running the *actual*
  compiler (compiled Lua source executing inside a Lua VM, not a
  reimplementation).
- **Self-verifying output.** The `Medium` and `Strong` presets can
  (non-deterministically) emit broken code due to a known upstream bug in how
  `Vmify` and `ConstantArray` interact
  ([details in PATCHES.md](./PATCHES.md#a-known-upstream-bug-this-build-does-not-patch)).
  Fengatheus self-tests its own output — executing it in a sandbox and
  diffing against the original script's behavior — and retries with a
  forced fresh seed before handing you a result, flagging it clearly if it
  never got a clean pass.
- **Attach a file, not just paste.** You can drag a `.lua`/`.luau`/`.txt`
  file straight onto the input pane, or use the "Attach file" button, instead
  of copy-pasting your script.

## Project layout

```
src/                          Prometheus source (81 .lua files, patched for the browser host)
web/
  index.html                  The page
  style.css                   Styling
  src/
    engine.js                 Fengari + Prometheus wiring, self-test/retry logic
    app.js                    UI wiring, incl. file attach / drag & drop
    lua-modules.generated.js  (generated) all of src/ embedded as a JS object
  scripts/
    build-lua-modules.mjs     Generates lua-modules.generated.js from src/
  dist/
    bundle.js                 (generated) the whole app, bundled for the browser
test/
  run.mjs                     Regression test: obfuscates sample scripts with
                               every preset and cross-checks against a real
                               lua5.1 interpreter
.github/workflows/pages.yml   CI: build + deploy to GitHub Pages on push to main
PATCHES.md                    Exactly what was changed vs. upstream Prometheus, and why
CHANGELOG.md                  Fengatheus release history
```

## Local development

```sh
npm install
npm run build   # embeds src/*.lua and bundles web/src/app.js -> web/dist/bundle.js
```

Then just open `web/index.html` in a browser (or serve the `web/` folder with
any static file server — no build step is needed at request time, everything
is pre-bundled).

To re-run the regression test (needs a `lua5.1` binary on your `PATH` —
`apt-get install lua5.1` on Debian/Ubuntu):

```sh
npm test
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The included workflow (`.github/workflows/pages.yml`) runs `npm run build`
in CI and deploys the `web/` folder — you never need to commit the generated
`lua-modules.generated.js` or `dist/bundle.js` files.

## Presets

| Preset | What it does | Reliability |
|---|---|---|
| `Minify` | Strips whitespace/comments, renames locals | Always reliable |
| `Weak` | Minify + light control-flow obfuscation | Always reliable |
| `Medium` | Adds string encryption, a constant array, a bytecode VM layer | Self-tested & retried; rare cases get flagged |
| `Strong` | Everything Medium has, more aggressively | Self-tested & retried; rare cases get flagged |

## Credits & attribution

Fengatheus is a fork/derivative of
[Prometheus](https://github.com/prometheus-lua/Prometheus) by Elias
Oelschner, https://github.com/prometheus-lua/Prometheus — the obfuscation
engine itself (everything under `src/`) is Prometheus's code, essentially
unmodified.

- Prometheus itself is licensed under the [Prometheus License](./LICENSE)
  (permissive, MIT-like, with a mandatory-attribution clause — see the
  license file for the exact terms; this README and the site's footer
  satisfy it).
- Fengatheus's own code (the web playground, build scripts, file-attach UI,
  self-verification engine) is MIT.
- [Fengari](https://fengari.io) — Lua 5.3 VM in JavaScript (MIT).

See [CHANGELOG.md](./CHANGELOG.md) for what's changed since the original
Prometheus-in-the-browser build this was forked from.
