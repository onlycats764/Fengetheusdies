local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local AstKind = Ast.AstKind
local unpack = table.unpack or unpack

local UnrollLoops = Step:extend()
UnrollLoops.Name = "Unroll Loops"
UnrollLoops.Description = "Unroll small numeric loops with literal bounds and no loop-index use"
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

local function literalInteger(expr)
	if expr.kind ~= AstKind.NumberExpression then return nil end
	local value = expr.value
	if type(value) ~= "number" or value ~= value or value == math.huge or value == -math.huge then return nil end
	if value ~= math.floor(value) or math.abs(value) > 2147483647 then return nil end
	return value
end

local function iterationCount(startValue, endValue, stepValue, maximum)
	if stepValue == 0 then return nil end
	local count = 0
	if stepValue > 0 and startValue <= endValue then
		count = math.floor((endValue - startValue) / stepValue) + 1
	elseif stepValue < 0 and startValue >= endValue then
		count = math.floor((startValue - endValue) / -stepValue) + 1
	end
	if count > maximum then return nil end
	return count
end

local function canUnroll(statement, maximum)
	local startValue = literalInteger(statement.initialValue)
	local endValue = literalInteger(statement.finalValue)
	local stepValue = literalInteger(statement.incrementBy)
	if startValue == nil or endValue == nil or stepValue == nil then return nil end
	local count = iterationCount(startValue, endValue, stepValue, maximum)
	if count == nil then return nil end

	local safe = true
	local bodyWasBlock = statement.body.isBlock
	local bodyWasFunctionBlock = statement.body.isFunctionBlock
	visitast(Ast.TopNode(statement.body, statement.body.scope), function(node)
		if node.kind == AstKind.VariableExpression or node.kind == AstKind.AssignmentVariable then
			if node.scope == statement.scope and node.id == statement.id then safe = false end
		elseif node.kind == AstKind.BreakStatement or node.kind == AstKind.ContinueStatement then
			-- Keep all loop exits inside their original loop structure.
			safe = false
		end
	end)
	statement.body.isBlock = bodyWasBlock
	statement.body.isFunctionBlock = bodyWasFunctionBlock
	if not safe then return nil end
	return count
end

function UnrollLoops:init() end

function UnrollLoops:apply(ast)
	visitast(ast, nil, function(node)
		if node.kind ~= AstKind.ForStatement then return nil end
		local count = canUnroll(node, self.MaxIterations)
		if count == nil then return nil end
		if count == 0 then return Ast.NopStatement() end

		local replacements = {}
		for _ = 1, count do
			replacements[#replacements + 1] = Ast.DoStatement(cloneNode(node.body))
		end
		return unpack(replacements)
	end)
	return ast
end

return UnrollLoops
