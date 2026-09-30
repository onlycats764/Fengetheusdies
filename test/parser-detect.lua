local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Fengetheus = require("fengetheus")
local Parser = Fengetheus.Parser
local oldErrorCallback = Fengetheus.Logger.errorCallback

local version, details = Parser.detectLuaVersion("for i = 1, 2 do continue end")
assert(version == "LuaU" and details.LuaU and not details.Lua51, "Luau-only continue was not detected")

version, details = Parser.detectLuaVersion("local value = 4; return value")
assert(version == nil and details.Lua51 and details.LuaU, "shared Lua syntax should remain ambiguous")

version, details = Parser.detectLuaVersion("if then")
assert(version == nil and not details.Lua51 and not details.LuaU, "invalid syntax should fail both parsers")
assert(Fengetheus.Logger.errorCallback == oldErrorCallback, "parser detection did not restore the logger")

print("Parser dialect detection passed.")
