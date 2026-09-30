local sourcePath = debug.getinfo(1, "S").source:sub(2):gsub("\\", "/")
local testDirectory = sourcePath:match("^(.*[/])") or "./"
local repositoryRoot = testDirectory .. "../"
package.path = repositoryRoot .. "src/?.lua;" .. package.path

local Fengetheus = require("fengetheus")
local Parser = Fengetheus.Parser
local Steps = Fengetheus.Pipeline.Steps
local Unparser = require("fengetheus.unparser")
local AstKind = require("fengetheus.ast").AstKind

local function applyStep(source, name, settings)
	local ast = Parser:new({ LuaVersion = "Lua51" }):parse(source)
	Steps[name]:new(settings or {}):apply(ast)
	return ast, Unparser:new({ LuaVersion = "Lua51" }):unparse(ast)
end

local _, inlined = applyStep(
	"local function plus(value) return value + 2 end; print(plus(40))",
	"InlineFunctions"
)
assert(not inlined:find("function", 1, true), "single-use pure local function was not inlined")

local unrolledAst, unrolled = applyStep(
	"local total = 0; for i = 1, 3 do total = total + 1 end",
	"UnrollLoops"
)
assert(not unrolled:find("for", 1, true), "bounded loop with an unused index was not unrolled")
local unrolledRepeat = unrolledAst.body.statements[2].body.statements[2].body.statements[1]
assert(unrolledRepeat.kind == "RepeatStatement" and unrolledRepeat.body.isFunctionBlock == false,
	"loop inspection marked the generated loop body as a function block")

local _, retainedIndexLoop = applyStep(
	"local total = 0; for i = 1, 3 do total = total + i end",
	"UnrollLoops"
)
assert(retainedIndexLoop:find("for", 1, true), "loop index use should prevent unrolling")

local _, retainedBreakLoop = applyStep(
	"local count = 0; for _ = 1, 3 do count = count + 1; if count == 2 then break end end",
	"UnrollLoops"
)
assert(not retainedBreakLoop:find("for _", 1, true), "break should be lowered while unrolling")

local _, computedBounds = applyStep(
	"local total = 0; for _ = 1 + 1, 2 * 3 do total = total + 1 end",
	"UnrollLoops"
)
assert(not computedBounds:find("for _", 1, true), "constant arithmetic bounds should be unrolled")

math.randomseed(424242)
local mixedAst = Parser:new({ LuaVersion = "Lua51" }):parse("return 13")
Steps.NumbersToExpressions:new({ Threshold = 1, MixedArithmetic = true }):apply(mixedAst)
local expression = mixedAst.body.statements[1].args[1]
assert(expression.kind == AstKind.DivExpression, "mixed arithmetic rewrite was not selected")
assert(expression.lhs.kind == AstKind.SubExpression, "mixed arithmetic expression has the wrong shape")

print("Optimization passes passed.")
