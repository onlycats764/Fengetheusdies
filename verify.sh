#!/usr/bin/env bash
# verify.sh — obfuscate a file with a custom config and compare output
# Usage: verify.sh <input.lua> <preset-or-config> [lua_bin]
set -u
INPUT="$1"
MODE="$2"
LUA_BIN="${3:-lua5.1}"
ROOT="/workspace/Fengetheus"

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

ORIG_OUT="$TMP/orig.txt"
OBF_OUT="$TMP/obf.txt"

# Run original
"$LUA_BIN" "$INPUT" > "$ORIG_OUT" 2>&1
ORIG_RC=$?

# Obfuscate
if [[ "$MODE" == --config=* ]]; then
  CFG="${MODE#--config=}"
  "$LUA_BIN" "$ROOT/src/cli.lua" --config "$CFG" --out "$TMP/obf.lua" "$INPUT" > "$TMP/obflog.txt" 2>&1
else
  "$LUA_BIN" "$ROOT/src/cli.lua" --preset "$MODE" --out "$TMP/obf.lua" "$INPUT" > "$TMP/obflog.txt" 2>&1
fi

if [[ ! -s "$TMP/obf.lua" ]]; then
  echo "FAIL: obfuscation produced no output"
  cat "$TMP/obflog.txt"
  exit 2
fi

# Run obfuscated
"$LUA_BIN" "$TMP/obf.lua" > "$OBF_OUT" 2>&1
OBF_RC=$?

if [[ "$ORIG_RC" -ne "$OBF_RC" ]]; then
  echo "FAIL: return code mismatch (orig=$ORIG_RC obf=$OBF_RC)"
  echo "--- ORIG OUT ---"; cat "$ORIG_OUT"
  echo "--- OBF OUT ---"; cat "$OBF_OUT"
  echo "--- OBF LOG ---"; tail -5 "$TMP/obflog.txt"
  exit 1
fi

if ! diff -q "$ORIG_OUT" "$OBF_OUT" >/dev/null; then
  # Normalize source-file paths and line references in error messages so
  # that expected differences (the obfuscated file has a different name and
  # collapsed line numbers) don't cause false failures.
  sed -e 's@^.*\.lua:[0-9]*:@<file>:<line>:@' "$ORIG_OUT" > "$TMP/orig_norm.txt"
  sed -e 's@^.*\.lua:[0-9]*:@<file>:<line>:@' "$OBF_OUT" > "$TMP/obf_norm.txt"
  if diff -q "$TMP/orig_norm.txt" "$TMP/obf_norm.txt" >/dev/null; then
    echo "PASS (normalized): $INPUT ($MODE) with $LUA_BIN — output identical modulo file/line refs"
    exit 0
  fi
  echo "FAIL: output mismatch"
  echo "--- ORIG OUT ---"; cat "$ORIG_OUT"
  echo "--- OBF OUT ---"; cat "$OBF_OUT"
  exit 1
fi

echo "PASS: $INPUT ($MODE) with $LUA_BIN — output identical"
