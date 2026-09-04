--
-- ControlFlowMutation.lua
--
-- A semantics-preserving control-flow mutation pass inspired by the safe
-- part of the TestFlip/TestPreserve/EqMutate family used by bytecode VMs.
-- This intentionally operates on condition slots instead of rewriting the
-- statement graph: source expressions are evaluated exactly once, in the
-- original position, and break/continue/return targets remain untouched.
--
-- The generated opaque predicates use private numeric locals.  They never
-- read user values, call user code, index tables, or depend on metamethods.
-- That makes the transform valid for arbitrary truthy values (including
-- userdata and tables) and for values whose comparison operators could have
-- observable behaviour in a source-level rewrite.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")

local AstKind = Ast.AstKind

local ControlFlowMutation = Step:extend()
ControlFlowMutation.Description = "Mutates branch conditions through private opaque predicates without changing evaluation order"
ControlFlowMutation.Name = "Control Flow Mutation"

ControlFlowMutation.SettingsDescriptor = {
	Threshold = {
		name = "Threshold",
		description = "Probability that an eligible condition receives one mutation layer",
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},
	Layers = {
		name = "Layers",
		description = "Maximum number of nested condition mutation layers",
		type = "number",
		default = 1,
		min = 1,
		max = 4,
	},
}

function ControlFlowMutation:init(_) end

local function variable(scope, id)
	return Ast.VariableExpression(scope, id)
end

local function alwaysTrue(scope, leftId, rightId)
	-- `right` is generated as `left + positiveDelta`, so this comparison is
	-- always true while still looking like a runtime relation.
	return Ast.LessThanExpression(variable(scope, leftId), variable(scope, rightId), false)
end

local function alwaysFalse(scope, leftId, rightId)
	return Ast.GreaterThanExpression(variable(scope, leftId), variable(scope, rightId), false)
end

local function addReferences(data, scope, leftId, rightId)
	if data.scope ~= scope and not data.scope.isGlobal then
		data.scope:addReferenceToHigherScope(scope, leftId)
		data.scope:addReferenceToHigherScope(scope, rightId)
	end
end

local function mutate(condition, scope, leftId, rightId, variant)
	local truth = alwaysTrue(scope, leftId, rightId)
	local falsity = alwaysFalse(scope, leftId, rightId)

	if variant == 1 then
		-- A boolean boundary. This is deliberately a condition-only transform:
		-- unlike changing a value expression, boolean normalization is harmless
		-- here because only branch truthiness is observable.
		return Ast.NotExpression(Ast.NotExpression(condition, false), false)
	elseif variant == 2 then
		-- `condition and true` preserves false/nil and maps truthy values to
		-- another truthy value. The opaque branch has no side effects.
		return Ast.AndExpression(condition, truth, false)
	elseif variant == 3 then
		-- `condition or false` preserves every truthy value and maps falsey
		-- values to false. Again, only condition truthiness is observable.
		return Ast.OrExpression(condition, falsity, false)
	else
		-- A full opaque select: truthy condition takes the known-true branch,
		-- falsey condition takes the known-false branch.
		return Ast.OrExpression(
			Ast.AndExpression(condition, truth, false),
			falsity,
			false)
	end
end

local function mutateCondition(self, condition, scope, data)
	if not condition or math.random() > self.Threshold then
		return condition
	end

	local leftId = self.topScope:addVariable()
	local rightId = self.topScope:addVariable()
	local leftValue = math.random(-1000000, 1000000)
	local delta = math.random(1, 1000000)
	local declaration = Ast.LocalVariableDeclaration(self.topScope,
		{leftId, rightId},
		{Ast.NumberExpression(leftValue), Ast.NumberExpression(leftValue + delta)})
	self.declarations[#self.declarations + 1] = declaration
	addReferences(data, self.topScope, leftId, rightId)

	local layers = math.random(1, self.Layers)
	for _ = 1, layers do
		condition = mutate(condition, self.topScope, leftId, rightId, math.random(1, 4))
	end
	return condition
end

function ControlFlowMutation:apply(ast)
	self.topScope = ast.body.scope
	self.declarations = {}

	visitast(ast, nil, function(node, data)
		if node.kind == AstKind.IfStatement then
			node.condition = mutateCondition(self, node.condition, data.scope, data)
			for _, elseifNode in ipairs(node.elseifs) do
				elseifNode.condition = mutateCondition(self, elseifNode.condition, data.scope, data)
			end
		elseif node.kind == AstKind.WhileStatement or node.kind == AstKind.RepeatStatement then
			node.condition = mutateCondition(self, node.condition, data.scope, data)
		elseif node.kind == AstKind.IfElseExpression then
			node.condition = mutateCondition(self, node.condition, data.scope, data)
			for _, elseifNode in ipairs(node.elseifs) do
				elseifNode.condition = mutateCondition(self, elseifNode.condition, data.scope, data)
			end
		end
		return node
	end)

	-- Prepending in reverse preserves the declaration order and makes every
	-- generated local visible before the first condition that references it.
	for i = #self.declarations, 1, -1 do
		table.insert(ast.body.statements, 1, self.declarations[i])
	end
	return ast
end

return ControlFlowMutation
