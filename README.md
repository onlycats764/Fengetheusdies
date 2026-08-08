# Prometheus, in your browser

A static site that runs the real [Prometheus](https://github.com/prometheus-lua/Prometheus)
Lua obfuscator entirely client-side — no backend, nothing sent over the
network. It works by embedding Prometheus's actual `.lua` source (all 81
files, essentially unmodified — see [PATCHES.md](./PATCHES.md) for the 4
small host-compatibility patches) and running it inside
[Fengari](https://fengari.io), a real Lua 5.3 VM compiled to JavaScript.

Live at: `https://<your-username>.github.io/<repo-name>/` once deployed (see below).

## Why this exists / how it's different from just shipping Prometheus's CLI

Prometheus normally runs as a Lua script on a real Lua interpreter. This repo
turns it into a static web page you can host for free on GitHub Pages, while
still running the *actual* compiler — not a reimplementation — because it's
compiled Lua source executing inside a Lua VM, not a lookalike.

It also fixes a correctness gap that upstream Prometheus has: the `Medium`
and `Strong` presets can (non-deterministically) emit broken code due to a
known upstream bug in how `Vmify` and `ConstantArray` interact
([details in PATCHES.md](./PATCHES.md#a-known-upstream-bug-this-build-does-not-patch)).
This build self-tests its own output — executing it in a sandbox and diffing
against the original script's behavior — and retries before handing you a
result, flagging it clearly if it never got a clean pass.

## Project layout

```
src/                          Real Prometheus source (81 .lua files, 4 patched)
web/
  index.html                  The page
  style.css                   Styling
  src/
    engine.js                 Fengari + Prometheus wiring, self-test/retry logic
    app.js                    UI wiring
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
PATCHES.md                    Exactly what was changed in the Prometheus source, and why
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

## Credits

Based on [Prometheus](https://github.com/prometheus-lua/Prometheus) by Elias Oelschner, https://github.com/prometheus-lua/Prometheus

- Prometheus itself is licensed under the [Prometheus License](./LICENSE) (permissive, MIT-like, with a mandatory-attribution clause — see the license file for the exact terms; this README and the site's footer satisfy it).
- This repo's own code (the web playground, build scripts, self-verification engine) is MIT.
- [Fengari](https://fengari.io) — Lua 5.3 VM in JavaScript (MIT).
