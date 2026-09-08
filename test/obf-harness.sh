#!/usr/bin/env bash
# test/obf-harness.sh — Compara output original vs obfuscado para cada caso y preset.
# Usa Lumora (runtime Luau headless) para ejecutar.
# Uso: ./test/obf-harness.sh [preset...] (default: todos los presets)
set -u

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
LUMORA="${LUMORA:-/workspace/lumora/bin/lumora}"
LUA_BIN="${LUA_BIN:-lua5.1}"
export LUA_BIN

# ── Preflight: fail loudly if the VM is unusable ─────────────────────────
# A silent fallback made this harness report "identical output" (both runs
# printed the same "cannot open script" error) when the VM path was wrong or
# the environment variable was forgotten. That produced false-green runs
# that masked real regressions. Now the harness refuses to run instead.
if [ ! -x "$LUMORA" ]; then
  echo "obf-harness: FATAL: Lumora VM not found or not executable: $LUMORA" >&2
  echo "obf-harness: set LUMORA=/path/to/lumora (built from the Lumora repo)" >&2
  exit 2
fi
if ! "$LUMORA" --version >/dev/null 2>&1; then
  echo "obf-harness: FATAL: Lumora VM does not run: $LUMORA" >&2
  exit 2
fi

# Todos los casos del directorio test/cases (auto-discover, igual que
# lua51-harness.sh): incluye control_flow_mutation, deep_closures,
# numeric_edges, signed_zeros y truthiness_metamethods.
CASES=$(cd "$ROOT_DIR/test/cases" && ls *.lua | sed 's/\.lua$//')
PRESETS=("$@")
if [ ${#PRESETS[@]} -eq 0 ]; then
  PRESETS=(Minify Balanced Phantom Wraith Cipher Aegis Titan TitanVM2 StrongScalable)
fi

TMP=$(mktemp -d /tmp/feng-harness.XXXXXX)
trap 'rm -rf "$TMP"' EXIT

PASS=0
FAIL=0
SKIP=0
FAILED_CASES=()

# Normalize file paths, source-string names and line numbers inside error
# messages so cosmetic differences (temp dir name, collapsed line numbers,
# wrapped vs unwrapped source) don't produce false failures. Semantic content
# is what matters.
#
# Position references take three shapes depending on which runtime produced
# the error and how the code was loaded:
#   1. [string "chunk"] / [string 'chunk']  — pre-5.2 style (Lua 5.1 host,
#      Lumora before CLI parity, or string-loaded chunks)
#   2. ./relative/script.lua:LINE: / /abs/script.lua:LINE: — file chunk
#      names (modern Lumora matches the official Luau CLI: "@"+normalized
#      path, so a runtime error names the running file, which is the
#      OBFUSCATED file, not the original)
#   3. plain bare paths produced by custom loaders
# All three normalize to the same token so only the message text matters.
norm() {
  sed -E \
    -e 's@\[string "[^"]*"\]@[string]@g' \
    -e "s@\[string '[^']*'\]@[string]@g" \
    -e 's@(\[[^]]*\]):[0-9]+:@\1:@g' \
    -e 's@(^|[^A-Za-z0-9_./-])(/?[A-Za-z0-9_.-]+(/[A-Za-z0-9_.-]+)+(\.(lua|luau|luac))?):[0-9]+:@\1[chunk]:@g' \
    -e 's@(^|[^A-Za-z0-9_./-])([A-Za-z0-9_.-]+\.(lua|luau|luac)):[0-9]+:@\1[chunk]:@g' \
    -e 's@(^|[^A-Za-z0-9_./-])(/?[A-Za-z0-9_.-]+(/[A-Za-z0-9_.-]+)+(\.(lua|luau|luac))?):[0-9]+([^0-9]|$)@\1[chunk]\5@g' \
    "$1"
}

run_case() {
  local preset="$1" case="$2"
  local src="test/cases/${case}.lua"
  local obf="$TMP/${case}.${preset}.lua"
  local out_orig="$TMP/${case}.orig.out"
  local out_obf="$TMP/${case}.${preset}.out"

  if ! "$ROOT_DIR/bin/fengetheus" --preset "$preset" --out "$obf" "$src" >"$TMP/obf.log" 2>&1; then
    echo "  [$preset/$case] OBFUSCATE-FAIL"
    SKIP=$((SKIP+1))
    return
  fi

  local flags=""
  if [[ "$case" == "roblox_gui" || "$case" == "tween" ]]; then
    flags=""
  else
    flags="--no-roblox"
  fi
  # nilholes only prints/returns; it is engine-portable (5.1/5.2+/JIT/Luau)
  timeout 30 "$LUMORA" $flags "$src" >"$out_orig" 2>&1 || true
  timeout 60 "$LUMORA" $flags "$obf" >"$out_obf" 2>&1
  local rc=$?

  if [ $rc -eq 124 ]; then
    echo "  [$preset/$case] TIMEOUT"
    FAIL=$((FAIL+1)); FAILED_CASES+=("$preset/$case(timeout)")
    return
  fi

  # Guard against the false-green failure mode: if BOTH runs produced no
  # output at all, the comparison is vacuous — report it instead of passing.
  if [ ! -s "$out_orig" ] && [ ! -s "$out_obf" ]; then
    echo "  [$preset/$case] VACUOUS (both runs empty; orig rc stored)"
    FAIL=$((FAIL+1)); FAILED_CASES+=("$preset/$case(vacuous)")
    return
  fi

  if diff -q <(norm "$out_orig") <(norm "$out_obf") >/dev/null 2>&1; then
    echo "  [$preset/$case] PASS"
    PASS=$((PASS+1))
  else
    echo "  [$preset/$case] FAIL (rc=$rc)"
    echo "    --- orig ---"; head -5 "$out_orig" | sed 's/^/    /'
    echo "    --- obf  ---"; head -5 "$out_obf" | sed 's/^/    /'
    FAIL=$((FAIL+1)); FAILED_CASES+=("$preset/$case")
  fi
}

echo "=== Fengetheus obfuscation invariant harness ==="
echo "Lumora: $LUMORA  |  Lua: $LUA_BIN"
echo
for preset in "${PRESETS[@]}"; do
  echo "## Preset: $preset"
  for case in $CASES; do
    run_case "$preset" "$case"
  done
  echo
done

echo "=== SUMMARY: PASS=$PASS FAIL=$FAIL SKIP=$SKIP ==="
if [ ${#FAILED_CASES[@]} -gt 0 ]; then
  echo "FAILED:"
  for fc in "${FAILED_CASES[@]}"; do echo "  - $fc"; done
  exit 1
fi
exit 0
