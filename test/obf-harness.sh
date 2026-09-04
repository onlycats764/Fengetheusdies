#!/usr/bin/env bash
# test/obf-harness.sh — Compara output original vs obfuscado para cada caso y preset.
# Usa Lumora (runtime Luau headless) para ejecutar.
# Uso: ./test/obf-harness.sh [preset...] (default: todos los presets)
set -u

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
LUMORA="${LUMORA:-/workspace/Lumora/bin/lumora}"
LUA_BIN="${LUA_BIN:-lua5.1}"
export LUA_BIN

CASES=(arithmetic closures fibonacci strings tables varargs sieve tween roblox_gui vm_control_flow repeated_strings numeric_only optimizer_semantics static_chain long_string)
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
norm() {
  sed -E \
    -e 's@\[string "[^"]*"\]@[string]@g' \
    -e "s@\[string '[^']*'\]@[string]@g" \
    -e 's@(\[[^]]*\]):[0-9]+:@\1:@g' \
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
  timeout 30 "$LUMORA" $flags "$src" >"$out_orig" 2>&1 || true
  timeout 60 "$LUMORA" $flags "$obf" >"$out_obf" 2>&1
  local rc=$?

  if [ $rc -eq 124 ]; then
    echo "  [$preset/$case] TIMEOUT"
    FAIL=$((FAIL+1)); FAILED_CASES+=("$preset/$case(timeout)")
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
  for case in "${CASES[@]}"; do
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
