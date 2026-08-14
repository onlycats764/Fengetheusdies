# Fengetheus

A static site that runs a real Lua obfuscator entirely client-side — no
backend, nothing sent over the network. Fengetheus is built on top of the
real [Prometheus](https://github.com/prometheus-lua/Prometheus) Lua
obfuscator: it embeds Prometheus's actual `.lua` source (all 81 files,
essentially unmodified — see [PATCHES.md](./PATCHES.md) for the small
host-compatibility patches) and runs it inside
[LuaNode-VM](https://github.com/Xyraniz/LuaNode-VM), a real Lua 5.3 VM
implemented in JavaScript with true 64-bit integer support via BigInt (a
specialized fork of [Fengari](https://fengari.io)).

Live at: `(https://xyraniz.github.io/Fengetheus/)` once deployed (see below).

## What Fengetheus adds on top of Prometheus

- **Runs anywhere, no install** — a static web page instead of a CLI tool,
  hostable for free on GitHub Pages, while still running the *actual*
  compiler (compiled Lua source executing inside a Lua VM, not a
  reimplementation).
- **Strong keeps its full layer stack.** The browser and background service use
  the same Prometheus preset; the background path changes where the work runs,
  not which protection layers are applied.

- **Attach a file, not just paste.** You can drag a `.lua`/`.luau`/`.txt`
  file straight onto the input pane, or use the "Attach file" button, instead
  of copy-pasting your script.
- **Large-result delivery.** Results up to 64 KiB are previewed inline. Larger
  results remain in memory and are offered through `Download` without assigning
  the full generated source to a textarea, avoiding expensive browser layout
  and rendering work.
- **Optional background jobs.** Run `npm run background` and open the service
  URL. Enable background mode in the page, enter a webhook, and press
  `Obfuscate`; the service queues the source, persists the job, runs Strong
  outside the browser tab, and uploads `obfuscated.lua` to the webhook. Once
  the job is queued, the tab can be closed.

## Project layout

```
src/                          Prometheus source (81 .lua files, patched for the browser host)
web/
  index.html                  The page
  style.css                   Styling
  src/
    engine.js                 LuaNode-VM + Prometheus wiring
    app.js                    UI wiring, file attach / drag & drop, Worker and background-job lifecycle
    worker.js                 Worker entrypoint; runs LuaNode-VM/Prometheus off the UI thread
    lua-modules.generated.js  (generated) all of src/ embedded as a JS object
  scripts/
    build-lua-modules.mjs     Generates lua-modules.generated.js from src/
  dist/
    bundle.js                 (generated) UI bundle
    worker.js                 (generated) LuaNode-VM/Prometheus Worker bundle
background/
  server.mjs                  Optional persistent queue and webhook delivery service
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
any static file server — no build step is needed at request time, everything is
pre-bundled). The normal UI sends work to `web/dist/worker.js`, so the tab remains
responsive while LuaNode-VM processes large inputs.

GitHub Pages continues to serve the static, browser-only mode. For a job that must continue after the tab closes, start the optional service on a computer or server that will remain on:

```sh
npm run background
```

Open `http://127.0.0.1:8787/`, enable **Run in background and deliver by webhook**,
enter the webhook and the service URL, then press `Obfuscate`. The page shows a
job ID as soon as the source is safely queued. The service writes temporary job
state under `background/data/`, retries webhook delivery up to three times, and
keeps completed jobs for seven days by default. Set `FENGETHEUS_DATA_DIR` if the
state should live elsewhere.


To re-run the regression test (needs a `lua5.3` binary on your `PATH` —
`apt-get install lua5.3` on Debian/Ubuntu):

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

Fengetheus is a fork/derivative of
[Prometheus](https://github.com/prometheus-lua/Prometheus) by Elias
Oelschner, https://github.com/prometheus-lua/Prometheus — the obfuscation
engine itself (everything under `src/`) is Prometheus's code, essentially
unmodified.

- Prometheus itself is licensed under the [Prometheus License](./LICENSE)
  (permissive, MIT-like, with a mandatory-attribution clause — see the
  license file for the exact terms; this README and the site's footer
  satisfy it).
- Fengetheus's own code (the web playground, build scripts, file-attach UI,
  self-verification engine) is MIT.
- [LuaNode-VM](https://github.com/Xyraniz/LuaNode-VM) — Lua 5.3 VM in
  JavaScript with true 64-bit integer support via BigInt (MIT), a fork of
  [Fengari](https://fengari.io) (also MIT). LuaNode-VM is vendored directly
  under `vendor/luanode-vm/` and exposed to the rest of the project as the
  `fengari` package alias (drop-in compatible API).

See [CHANGELOG.md](./CHANGELOG.md) for what's changed since the original
Prometheus-in-the-browser build this was forked from.
