#!/usr/bin/env bash
# test/lua51-harness.sh — Regresión semántica en Lua 5.1: el mismo script
# original y obfuscado deben producir salida idéntica bajo lua5.1.
# Complementa obf-harness.sh (que usa Lumora/Luau) para garantizar que la
# salida del ofuscador se comporta igual en AMBOS lenguajes objetivo.
# Uso: ./test/lua51-harness.sh [preset...] (default: todos los presets)
set -u

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
LUA51="${LUA51:-lua5.1}"

if ! command -v "$LUA51" >/dev/null 2>&1; then
  echo "lua51-harness: FATAL: Lua 5.1 interpreter not found: $LUA51" >&2
  echo "lua51-harness: apt-get install lua5.1 or set LUA51=/path/to/lua5.1" >&2
  exit 2
fi

# Todos los casos del directorio test/cases (incluye los que el harness Luau
# clásico no listaba: control_flow_mutation, deep_closures, numeric_edges).
CASES=$(cd "$ROOT_DIR/test/cases" && ls *.lua | sed 's/\.lua$//')
PRESETS=("$@")
if [ ${#PRESETS[@]} -eq 0 ]; then
  PRESETS=(Minify Balanced Phantom Wraith Cipher Aegis Titan TitanVM2 StrongScalable)
fi

TMP=$(mktemp -d /tmp/feng-lua51.XXXXXX)
trap 'rm -rf "$TMP"' EXIT

PASS=0; FAIL=0; SKIP=0
FAILED_CASES=()

# Misma normalización que obf-harness.sh: posiciones de error (ruta de
# archivo o [string "..."]) y números de línea no son contenido semántico.
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
    FAIL=$((FAIL+1)); FAILED_CASES+=("$preset/$case(obf-fail)")
    return
  fi

  timeout 30 "$LUA51" "$src" >"$out_orig" 2>&1 || true
  timeout 60 "$LUA51" "$obf" >"$out_obf" 2>&1
  local rc=$?

  if [ $rc -eq 124 ]; then
    echo "  [$preset/$case] TIMEOUT"
    FAIL=$((FAIL+1)); FAILED_CASES+=("$preset/$case(timeout)")
    return
  fi
  if [ ! -s "$out_orig" ] && [ ! -s "$out_obf" ]; then
    echo "  [$preset/$case] VACUOUS (both runs empty)"
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

echo "=== Fengetheus Lua 5.1 semantic invariant harness ==="
echo "Lua: $LUA51"
echo
for preset in "${PRESETS[@]}"; do
  echo "## Preset: $preset"
  for case in $CASES; do
    run_case "$preset" "$case"
  done
  echo
done

echo "=== SUMMARY: PASS=$PASS FAIL=$FAIL ==="
if [ ${#FAILED_CASES[@]} -gt 0 ]; then
  echo "FAILED:"
  for fc in "${FAILED_CASES[@]}"; do echo "  - $fc"; done
  exit 1
fi
exit 0
