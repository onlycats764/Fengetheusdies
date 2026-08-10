# Fengetheus

A static site that runs a real Lua obfuscator entirely client-side â€” no
backend, nothing sent over the network. Fengetheus is built on top of the
real [Prometheus](https://github.com/prometheus-lua/Prometheus) Lua
obfuscator: it embeds Prometheus's actual `.lua` source (all 81 files,
essentially unmodified â€” see [PATCHES.md](./PATCHES.md) for the small
host-compatibility patches) and runs it inside
[Fengari](https://fengari.io), a real Lua 5.3 VM compiled to JavaScript.

Live at: `(https://xyraniz.github.io/Fengetheus/)` once deployed (see below).

## What Fengetheus adds on top of Prometheus

- **Runs anywhere, no install** â€” a static web page instead of a CLI tool,
  hostable for free on GitHub Pages, while still running the *actual*
  compiler (compiled Lua source executing inside a Lua VM, not a
  reimplementation).
- **Self-verifying output.** The `Medium` and `Strong` presets can
  (non-deterministically) emit broken code due to a known upstream bug in how
  `Vmify` and `ConstantArray` interact
  ([details in PATCHES.md](./PATCHES.md#a-known-upstream-bug-this-build-does-not-patch)).
  Fengetheus self-tests its own output â€” executing it in a sandbox and
  diffing against the original script's behavior â€” and retries with a
  forced fresh seed before handing you a result, flagging it clearly if it
  never got a clean pass.
- **Attach a file, not just paste.** You can drag a `.lua`/`.luau`/`.txt`
  file straight onto the input pane, or use the "Attach file" button, instead
  of copy-pasting your script.
- **Large-result delivery.** Results up to 64 KiB are previewed inline. Larger
  results remain in memory and are offered through `Download` without assigning
  the full generated source to a textarea, avoiding expensive browser layout
  and rendering work.

## Project layout

```
src/                          Prometheus source (81 .lua files, patched for the browser host)
web/
  index.html                  The page
  style.css                   Styling
  src/
    engine.js                 Fengari + Prometheus wiring, self-test/retry logic
    app.js                    UI wiring, file attach / drag & drop, Worker lifecycle
    worker.js                 Worker entrypoint; runs Fengari/Prometheus off the UI thread
    lua-modules.generated.js  (generated) all of src/ embedded as a JS object
  scripts/
    build-lua-modules.mjs     Generates lua-modules.generated.js from src/
  dist/
    bundle.js                 (generated) UI bundle
    worker.js                 (generated) Fengari/Prometheus Worker bundle
test/
  regression.mjs              Regression test: obfuscates representative scripts
                               with every preset and cross-checks against lua5.3
.github/workflows/pages.yml   CI: build + deploy to GitHub Pages on push to main
PATCHES.md                    Exactly what was changed vs. upstream Prometheus, and why
CHANGELOG.md                  Fengetheus release history
```

## Local development

```sh
npm install
npm run build   # embeds Lua and bundles both the UI and Worker entrypoints
```

Then just open `web/index.html` in a browser (or serve the `web/` folder with
any static file server â€” no build step is needed at request time, everything
is pre-bundled). The UI sends work to `web/dist/worker.js`, so the tab remains
responsive while Fengari processes large inputs.

To re-run the regression test (needs a `lua5.3` binary on your `PATH` â€”
`apt-get install lua5.3` on Debian/Ubuntu):

```sh
npm test
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo's **Settings â†’ Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The included workflow (`.github/workflows/pages.yml`) runs `npm run build`
in CI and deploys the `web/` folder â€” you never need to commit the generated
`lua-modules.generated.js` or `dist/bundle.js` files.

## Presets

| Preset | What it does | Reliability |
|---|---|---|
| `Minify` | Strips whitespace/comments, renames locals | Always reliable |
| `Weak` | Minify + light control-flow obfuscation | Always reliable |
| `Medium` | Adds string encryption, a constant array, a bytecode VM layer | Self-tested & retried; rare cases get flagged |
| `Strong` | Everything Medium has, more aggressively | Self-tested & retried; rare cases get flagged |

## Credits & attribution

Fengetheus is a fork/derivative of
[Prometheus](https://github.com/prometheus-lua/Prometheus) by Elias
Oelschner, https://github.com/prometheus-lua/Prometheus â€” the obfuscation
engine itself (everything under `src/`) is Prometheus's code, essentially
unmodified.

- Prometheus itself is licensed under the [Prometheus License](./LICENSE)
  (permissive, MIT-like, with a mandatory-attribution clause â€” see the
  license file for the exact terms; this README and the site's footer
  satisfy it).
- Fengetheus's own code (the web playground, build scripts, file-attach UI,
  self-verification engine) is MIT.
- [Fengari](https://fengari.io) â€” Lua 5.3 VM in JavaScript (MIT).

See [CHANGELOG.md](./CHANGELOG.md) for what's changed since the original
Prometheus-in-the-browser build this was forked from.
