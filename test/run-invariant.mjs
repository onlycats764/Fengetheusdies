#!/usr/bin/env node
// Runs test/invariant-check.lua against the AST that Vmify produces, for
// many seeds, and counts how many times the parentScope invariant is
// violated in the compiler's OWN output (before ConstantArray even runs).
//
// This proves the root cause lives in the Vmify compiler, independent of
// ConstantArray or the RNG.
import fengari from "fengari";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { LUA_MODULES } from "../web/src/lua-modules.generated.js";

const { lua, lauxlib, lualib, to_luastring, to_jsstring } = fengari;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function newState() {
  const L = lauxlib.luaL_newstate();
  lualib.luaL_openlibs(L);
  for (const [modname, code] of Object.entries(LUA_MODULES)) {
    lua.lua_getglobal(L, to_luastring("package"));
    lua.lua_getfield(L, -1, to_luastring("preload"));
    const status = lauxlib.luaL_loadbuffer(L, to_luastring(code), to_luastring("=" + modname));
    if (status !== lua.LUA_OK) {
      throw new Error(`Failed to compile module ${modname}`);
    }
    lua.lua_setfield(L, -2, to_luastring(modname));
    lua.lua_pop(L, 2);
  }
  return L;
}

function loadFileIntoVM(L, filename) {
  const code = fs.readFileSync(filename, "utf-8");
  const status = lauxlib.luaL_loadbuffer(L, to_luastring(code), to_luastring("=" + filename));
  if (status !== lua.LUA_OK) {
    throw new Error(`Failed to load ${filename}: ${to_jsstring(lua.lua_tostring(L, -1))}`);
  }
  lua.lua_call(L, 0, 0);
}

const victim = process.argv[2];
const n = parseInt(process.argv[3] || "30", 10);
const seedStart = parseInt(process.argv[4] || "0", 10);

if (!victim) {
  console.error("Usage: node run-invariant.mjs <victim.lua> <n> [seedStart]");
  process.exit(1);
}
const source = fs.readFileSync(victim, "utf-8");

let totalViolations = 0;
let runsWithViolations = 0;
for (let i = 0; i < n; i++) {
  const L = newState();
  lua.lua_pushjsfunction(L, () => 0); // silence logger error print? keep default
  const driver = `
local seed = ${seedStart + i * 104729}
if seed > 0 then math.randomseed(seed) end
-- newproxy is Lua 5.1-only; the compiler entrypoint polyfills it, but this
-- driver loads the compiler submodules directly, so polyfill it here too.
-- unpack is Lua 5.1-only; alias it from table.unpack (patch 8).
if _G.unpack == nil and table.unpack then
    _G.unpack = table.unpack;
end
if _G.newproxy == nil then
    _G.newproxy = function(arg)
        if arg then return setmetatable({}, {}) end
        return {}
    end
end
local Ast = require("prometheus.ast")
local Parser = require("prometheus.parser")
local Compiler = require("prometheus.compiler.compiler")
local checkAstInvariant = require("test.invariant-check")
local parser = Parser:new({LuaVersion = "Lua51"})
local ast = parser:parse(${JSON.stringify(source)})
local compiler = Compiler:new()
local out = compiler:compile(ast)
local violations = checkAstInvariant(out)
return violations
`;
  const status = lauxlib.luaL_dostring(L, to_luastring(driver));
  if (status !== lua.LUA_OK) {
    console.log(`run ${i}: lua error: ${to_jsstring(lua.lua_tostring(L, -1))}`);
    totalViolations++;
    continue;
  }
  const violations = lua.lua_tonumber(L, -1);
  if (violations > 0) {
    runsWithViolations++;
    totalViolations += violations;
  }
  if ((i + 1) % 10 === 0) process.stdout.write(".");
}
console.log(`\n${n} runs: runs with violations=${runsWithViolations}, total violations=${totalViolations}`);
process.exit(totalViolations > 0 ? 1 : 0);
