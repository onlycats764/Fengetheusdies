local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local Scope = require("fengetheus.scope")
local visitast = require("fengetheus.visitast")
local Attributes = require("fengetheus.attributes")
local logger = require("logger")

local AstKind = Ast.AstKind

local UnrollLoops = Step:extend()
UnrollLoops.Name = "Unroll Loops"
UnrollLoops.Description = "Unroll small numeric loops with computable integer bounds"
UnrollLoops.SettingsDescriptor = {
	MaxIterations = { type = "number", default = 8, min = 1, max = 64 },
}

local preservedKeys = {
	scope = true,
	parentScope = true,
	baseScope = true,
	globalScope = true,
	loop = true,
	getName = true,
}

local function cloneNode(value, seen)
	if type(value) ~= "table" then return value end
	seen = seen or {}
	if seen[value] then return seen[value] end
	local copy = {}
	seen[value] = copy
	for key, child in pairs(value) do
		if preservedKeys[key] then
			copy[key] = child
		else
			copy[key] = cloneNode(child, seen)
		end
	end
	return copy
end

local function constantNumber(expr)
	if not expr then return nil end
	if expr.kind == AstKind.NumberExpression then
		return expr.value
	end
	if expr.kind == AstKind.NegateExpression then
		local value = constantNumber(expr.rhs)
		return value and -value or nil
	end
	local operators = {
		[AstKind.AddExpression] = function(a, b) return a + b end,
		[AstKind.SubExpression] = function(a, b) return a - b end,
		[AstKind.MulExpression] = function(a, b) return a * b end,
		[AstKind.DivExpression] = function(a, b) if b ~= 0 then return a / b end end,
		[AstKind.ModExpression] = function(a, b) if b ~= 0 then return a % b end end,
		[AstKind.PowExpression] = function(a, b) return a ^ b end,
	}
	local operation = operators[expr.kind]
	if not operation then return nil end
	local lhs, rhs = constantNumber(expr.lhs), constantNumber(expr.rhs)
	if lhs == nil or rhs == nil then return nil end
	local ok, value = pcall(operation, lhs, rhs)
	if not ok then return nil end
	return value
end

local function literalInteger(expr)
	local value = constantNumber(expr)
	if type(value) ~= "number" or value ~= value or value == math.huge or value == -math.huge then return nil end
	if value ~= math.floor(value) or math.abs(value) > 2147483647 then return nil end
	return value
end

local function iterationCount(startValue, endValue, stepValue, maximum)
	if stepValue == 0 then return nil, "the increment cannot be zero" end
	local count = 0
	if stepValue > 0 and startValue <= endValue then
		count = math.floor((endValue - startValue) / stepValue) + 1
	elseif stepValue < 0 and startValue >= endValue then
		count = math.floor((startValue - endValue) / -stepValue) + 1
	end
	if count > maximum then return nil, "the loop exceeds MaxIterations" end
	return count
end

local function inspectLoop(statement, maximum)
	local startValue = literalInteger(statement.initialValue)
	local endValue = literalInteger(statement.finalValue)
	local stepValue = literalInteger(statement.incrementBy)
	if startValue == nil or endValue == nil or stepValue == nil then
		return nil, "bounds and step must be statically computable integer expressions"
	end
	local count, countError = iterationCount(startValue, endValue, stepValue, maximum)
	if count == nil then return nil, countError end

	local safe = true
	local reason = nil
	local bodyWasBlock = statement.body.isBlock
	local bodyWasFunctionBlock = statement.body.isFunctionBlock
	visitast(Ast.TopNode(statement.body, statement.body.scope), function(node)
		if node.kind == AstKind.VariableExpression and node.scope == statement.scope and node.id == statement.id then
			safe = false
			reason = "the loop index is read by its body"
		elseif node.kind == AstKind.AssignmentVariable and node.scope == statement.scope and node.id == statement.id then
			safe = false
			reason = "the loop index is assigned by its body"
		end
	end)
	statement.body.isBlock = bodyWasBlock
	statement.body.isFunctionBlock = bodyWasFunctionBlock
	if not safe then return nil, reason end
	return count
end

local function loopFlag(scope, id)
	return Ast.VariableExpression(scope, id)
end

local function rewriteLoopExits(body, originalLoop, repeatLoop, flagScope, flagId, globalScope)
	local ast = Ast.TopNode(body, globalScope)
	visitast(ast, nil, function(node)
		if node.kind == AstKind.BreakStatement and node.loop == originalLoop then
			node.scope:addReferenceToHigherScope(flagScope, flagId)
			return Ast.AssignmentStatement(
				{ Ast.AssignmentVariable(flagScope, flagId) },
				{ Ast.BooleanExpression(true) }
			), Ast.BreakStatement(repeatLoop, node.scope)
		elseif node.kind == AstKind.ContinueStatement and node.loop == originalLoop then
			return Ast.BreakStatement(repeatLoop, node.scope)
		end
	end)
	return ast.body
end

local function unrolledStatement(statement, count, globalScope)
	local wrapperScope = Scope:new(statement.parentScope)
	-- The source loop's variable scope becomes an enclosing synthetic scope for
	-- the cloned iteration blocks. This keeps the generated break flag visible
	-- to nested blocks and prevents variable renaming from shadowing its name.
	statement.scope:setParent(wrapperScope)
	local exitId = wrapperScope:addVariable(nil, nil)
	local statements = {
		Ast.LocalVariableDeclaration(wrapperScope, { exitId }, { Ast.BooleanExpression(false) }),
	}

	for index = 0, count - 1 do
		local body = cloneNode(statement.body)
		local repeatNode = Ast.RepeatStatement(Ast.BooleanExpression(true), body, wrapperScope)
		body = rewriteLoopExits(body, statement, repeatNode, wrapperScope, exitId, globalScope)
		body.isBlock = true
		body.isFunctionBlock = false
		repeatNode.body = body
		local conditionScope = Scope:new(wrapperScope)
		conditionScope:addReferenceToHigherScope(wrapperScope, exitId)
		local iterationGuard = Ast.IfStatement(
			Ast.NotExpression(loopFlag(wrapperScope, exitId)),
			Ast.Block({ repeatNode }, conditionScope),
			{},
			nil
		)
		statements[#statements + 1] = iterationGuard
	end

	return Ast.DoStatement(Ast.Block(statements, wrapperScope))
end

function UnrollLoops:init() end

function UnrollLoops:apply(ast)
	local maximum = self.MaxIterations
	visitast(ast, function(node, data)
		if not Attributes.optimizationEnabled(data) then return nil end
		if node.kind ~= AstKind.ForStatement then return nil end
		if node.fengUnroll == "disabled" then return nil end

		local count, reason = inspectLoop(node, maximum)
		if count == nil then
			if node.fengUnroll == "checked" then
				logger:error("UNROLL(checked) could not unroll the marked loop: " .. tostring(reason))
			end
			return nil
		end
		if count == 0 then return Ast.NopStatement() end
		return unrolledStatement(node, count, ast.globalScope), true
	end)
	return ast
end

return UnrollLoops
