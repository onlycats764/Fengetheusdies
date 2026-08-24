#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
LUA_BIN=${LUA_BIN:-lua}

if ! command -v "$LUA_BIN" >/dev/null 2>&1; then
  echo "SKIP: no se encontró '$LUA_BIN'; define LUA_BIN para ejecutar la prueba." >&2
  exit 0
fi

TMP_DIR=$(mktemp -d "${TMPDIR:-/tmp}/fengetheus-cli.XXXXXX")
trap 'rm -rf "$TMP_DIR"' EXIT

cat > "$TMP_DIR/input.lua" <<'LUA'
local function greet(name)
  return "Hello, " .. name .. "!"
end

print(greet("World"))
LUA

"$ROOT_DIR/bin/fengetheus" --preset Minify --out "$TMP_DIR/output.lua" "$TMP_DIR/input.lua" > "$TMP_DIR/stdout.log" 2> "$TMP_DIR/stderr.log"

test -s "$TMP_DIR/output.lua"
grep -q 'Hello' "$TMP_DIR/output.lua"
printf '%s\n' 'CLI smoke test passed.'
