--
-- JunkCode.lua
--
-- This Step injects plausible junk code (do-blocks containing local
-- variable declarations, arithmetic, and conditional branches that
-- manipulate only throwaway locals) between existing statements. The
-- injected code executes but has no observable effect on the program,
-- yet it breaks static analysis by adding fake control flow, fake
-- locals, and fake computations that a reverser must untangle.
--
-- Safety model:
--   * Every junk block is wrapped in `do ... end`, creating an isolated
--     child scope. Junk locals never leak into the enclosing scope.
--   * Junk code only manipulates its own locals — it never reads or
--     writes globals, upvalues, or existing program variables.
--   * No function calls are emitted inside junk (avoids metamethod /
--     hooking side-effects and keeps the code side-effect-free).
--   * The numeric expressions use finite integers so no NaN / inf can
--     arise.

local Step = require("fengetheus.step");
local Ast = require("fengetheus.ast");
local Scope = require("fengetheus.scope");
local visitast = require("fengetheus.visitast");
local util = require("fengetheus.util")

local AstKind = Ast.AstKind;

local unpack = table.unpack or unpack;

local JunkCode = Step:extend();
JunkCode.Description = "Injects plausible junk code (do-blocks with throwaway locals) between statements";
JunkCode.Name = "Junk Code";

JunkCode.SettingsDescriptor = {
	Chance = {
		name = "Chance",
		description = "Probability of injecting a junk block before any given statement",
		type = "number",
		default = 0.15,
		min = 0,
		max = 1,
	},
	MinJunk = {
		name = "MinJunk",
		description = "Minimum number of statements inside each junk do-block",
		type = "number",
		default = 2,
		min = 1,
		max = 64,
	},
	MaxJunk = {
		name = "MaxJunk",
		description = "Maximum number of statements inside each junk do-block",
		type = "number",
		default = 5,
		min = 1,
		max = 64,
	},
	MaxDepth = {
		name = "MaxDepth",
		description = "Do not inject junk deeper than this scope nesting level (0 = top level only)",
		type = "number",
		default = 3,
		min = 0,
		max = 32,
	},
}

function JunkCode:init(_) end

-- Pick a random integer in [lo, hi]
local function randInt(lo, hi)
	return math.random(lo, hi);
end

-- Create a fresh scope that is a child of parentScope.
local function childScope(parentScope)
	return Scope:new(parentScope);
end

-- Generate a random finite number expression.
local function randNumber()
	return Ast.NumberExpression(randInt(-1000000, 1000000));
end

-- Generate a random boolean expression.
local function randBoolean()
	return Ast.BooleanExpression(math.random() < 0.5);
end

-- Generate a random string literal (short, plausible identifier-like).
local function randString()
	local len = randInt(3, 12);
	local chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
	local s = {};
	for i = 1, len do
		s[i] = chars:sub(randInt(1, #chars), randInt(1, #chars));
	end
	return Ast.StringExpression(table.concat(s));
end

-- Generate a random literal (number, boolean, or string).
local function randLiteral()
	local t = randInt(1, 3);
	if t == 1 then return randNumber() end
	if t == 2 then return randBoolean() end
	return randString();
end

-- Generate a random binary expression from two expressions.
local function randBinary(lhs, rhs)
	local ops = {
		Ast.AddExpression, Ast.SubExpression, Ast.MulExpression,
		Ast.LessThanExpression, Ast.GreaterThanExpression,
		Ast.LessThanOrEqualsExpression, Ast.GreaterThanOrEqualsExpression,
		Ast.EqualsExpression, Ast.NotEqualsExpression,
		Ast.AndExpression, Ast.OrExpression,
	};
	local op = ops[randInt(1, #ops)];
	-- simplify = false so the constructor does not try to fold.
	return op(lhs, rhs, false);
end

-- Build a single junk statement in the given junk scope.
function JunkCode:makeJunkStatement(junkScope)
	local r = randInt(1, 4);
	if r <= 2 then
		-- local x = <random literal or binary of fresh literals>
		local id = junkScope:addVariable();
		local expr;
		if randInt(1, 3) == 1 then
			expr = randBinary(randLiteral(), randLiteral());
		else
			expr = randLiteral();
		end
		return Ast.LocalVariableDeclaration(junkScope, { id }, { expr });
	elseif r == 3 then
		-- if <random condition> then local y = <expr> end
		local condScope = childScope(junkScope);
		local cond = randBinary(randLiteral(), randLiteral());
		local bodyStatements = {};
		local yId = condScope:addVariable();
		bodyStatements[1] = Ast.LocalVariableDeclaration(condScope, { yId }, { randLiteral() });
		local body = Ast.Block(bodyStatements, condScope);
		return Ast.IfStatement(cond, body, {}, nil);
	else
		-- local a, b = <lit>, <lit>
		local id1 = junkScope:addVariable();
		local id2 = junkScope:addVariable();
		return Ast.LocalVariableDeclaration(junkScope, { id1, id2 }, { randLiteral(), randLiteral() });
	end
end

-- Build a complete junk do-block: do <junk statements> end
function JunkCode:makeJunkBlock(parentScope)
	local junkScope = childScope(parentScope);
	local n = randInt(self.MinJunk, self.MaxJunk);
	local statements = {};
	for i = 1, n do
		statements[i] = self:makeJunkStatement(junkScope);
	end
	local body = Ast.Block(statements, junkScope);
	return Ast.DoStatement(body);
end

function JunkCode:apply(ast, _)
	visitast(ast, nil, function(node, data)
		if node.kind ~= AstKind.Block then return end

		local depth = #data.scopeStack;
		if self.MaxDepth == 0 then
			if depth > 1 then return end
		elseif depth > self.MaxDepth then
			return
		end

		local original = node.statements;
		local result = {};
		for _, stmt in ipairs(original) do
			if math.random() <= self.Chance then
				result[#result + 1] = self:makeJunkBlock(node.scope);
			end
			result[#result + 1] = stmt;
		end
		-- Maybe one more junk block at the end, but never after a terminator.
		local last = original[#original];
		local isTerminator = last and (
			last.kind == AstKind.ReturnStatement or
			last.kind == AstKind.BreakStatement or
			last.kind == AstKind.ContinueStatement
		);
		if not isTerminator and math.random() <= self.Chance then
			result[#result + 1] = self:makeJunkBlock(node.scope);
		end
		node.statements = result;
	end);
	return ast;
end

return JunkCode;
