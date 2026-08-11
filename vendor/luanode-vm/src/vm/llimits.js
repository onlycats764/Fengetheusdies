"use strict";

const lua_assert = function(c) {
    if (!c) throw Error("assertion failed");
};
module.exports.lua_assert = lua_assert;

const api_check = function(l, e, msg) {
    if (!e) throw Error(msg);
};
module.exports.api_check = api_check;

const LUAI_MAXCCALLS = 200;
module.exports.LUAI_MAXCCALLS = LUAI_MAXCCALLS;

/* minimum size for string buffer */
const LUA_MINBUFFER = 32;
module.exports.LUA_MINBUFFER = LUA_MINBUFFER;

const luai_nummod = function(L, a, b) {
    let m = a % b;
    if ((m*b) < 0)
        m += b;
    return m;
};
module.exports.luai_nummod = luai_nummod;

/*
** MAX_INT / MIN_INT are the structural limits used by the lexer and parser:
**   - llex.js:   b.buffer.length >= MAX_INT/2  (max lexical element size)
**                ++ls.linenumber >= MAX_INT     (max source line number)
**   - lparser.js: checklimit(..., MAX_INT, ...) (max items in a constructor)
** These are *not* Lua integer values — they are size/line/count caps, so they
** must be plain JS Numbers to stay compatible with the Number arithmetic the
** lexer performs (MAX_INT/2, ++linenumber). Carrying them as BigInt (the real
** int64 extremes) broke that arithmetic: `BigInt / Number` throws a TypeError,
** which crashed the parser with a status of -1 and no error message whenever a
** string token grew the lexer buffer past its initial size.
**
** The true 64-bit integer limits exposed to Lua code (math.maxinteger /
** math.mininteger, LUA_MAXINTEGER / LUA_MININTEGER, and the int64 overflow
** checks in lobject.js / lvm.js) are the BigInt MAX_INT64 / MIN_INT64 below,
** which are unaffected by this change.
*/
const { MAX_INT64, MIN_INT64 } = require('./lint64.js');
const MAX_INT = Number.MAX_SAFE_INTEGER;  /* structural limit (lexer/parser) */
module.exports.MAX_INT = MAX_INT;
const MIN_INT = -Number.MAX_SAFE_INTEGER; /* structural limit (lexer/parser) */
module.exports.MIN_INT = MIN_INT;
/* True 64-bit integer extremes, carried as BigInt (outside safe-integer range). */
module.exports.MAX_INT64 = MAX_INT64;
module.exports.MIN_INT64 = MIN_INT64;
