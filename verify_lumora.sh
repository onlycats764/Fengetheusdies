#!/usr/bin/env bash
# verify_lumora.sh — obfuscate a file with a custom config and compare output via Lumora (Luau)
# Usage: verify_lumora.sh <input.lua> <preset-or-config> [--no-roblox]
set -u
INPUT="$1"
MODE="$2"
SHIFT=0
if [[ "${3:-}" == "--no-roblox" ]]; then
	LUMORA_FLAGS="--no-roblox"
else
	LUMORA_FLAGS=""
fi
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
LUMORA="${LUMORA:-$(CDPATH= cd -- "$ROOT/../Lumora" 2>/dev/null && pwd)/bin/lumora}"
LUA_BIN="lua5.1"

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

ORIG_OUT="$TMP/orig.txt"
OBF_OUT="$TMP/obf.txt"

# Run original via Lumora
timeout 30 "$LUMORA" $LUMORA_FLAGS "$INPUT" > "$ORIG_OUT" 2>&1
ORIG_RC=$?

# Obfuscate (obfuscation itself runs on Lua 5.1 host)
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

# Run obfuscated via Lumora
timeout 60 "$LUMORA" $LUMORA_FLAGS "$TMP/obf.lua" > "$OBF_OUT" 2>&1
OBF_RC=$?

if [[ "$ORIG_RC" -ne "$OBF_RC" ]]; then
	echo "FAIL: return code mismatch (orig=$ORIG_RC obf=$OBF_RC)"
	echo "--- ORIG OUT ---"; cat "$ORIG_OUT"
	echo "--- OBF OUT ---"; cat "$OBF_OUT"
	echo "--- OBF LOG ---"; tail -5 "$TMP/obflog.txt"
	exit 1
fi

# Normalize source-string names and line refs
norm() {
	sed -E \
		-e 's@\[string "[^"]*"\]@[string]@g' \
		-e "s@\[string '[^']*'\]@[string]@g" \
		-e 's@(\[[^]]*\]):[0-9]+:@\1:@g' \
		-e 's@^.*\.lua:[0-9]*:@<file>:<line>:@' \
		"$1"
}
norm "$ORIG_OUT" > "$TMP/orig_norm.txt"
norm "$OBF_OUT" > "$TMP/obf_norm.txt"

if diff -q "$TMP/orig_norm.txt" "$TMP/obf_norm.txt" >/dev/null; then
	if diff -q "$ORIG_OUT" "$OBF_OUT" >/dev/null; then
		echo "PASS: $INPUT ($MODE) [Lumora] — output identical"
	else
		echo "PASS (normalized): $INPUT ($MODE) [Lumora] — identical modulo file/line refs"
	fi
	exit 0
fi
echo "FAIL: output mismatch [Lumora]"
echo "--- ORIG OUT ---"; cat "$ORIG_OUT"
echo "--- OBF OUT ---"; cat "$OBF_OUT"
exit 1
