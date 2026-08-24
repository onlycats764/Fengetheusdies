-- This Script is Part of the Prometheus Obfuscator by Levno_710
--
-- ConditionCamouflage.lua
--
-- Adds a semantics-preserving boolean boundary around selected branch
-- conditions. Lua's `not` operator has no user-overridable metamethod, and
-- `not not value` has exactly the same truthiness as `value` in a branch.
-- Keeping this transformation local to condition slots avoids changing the
-- values returned by expressions that use `and`/`or` as value selectors.

local Step = require("prometheus.step")
local Ast = require("prometheus.ast")
local visitast = require("prometheus.visitast")
local AstKind = Ast.AstKind

local ConditionCamouflage = Step:extend()
ConditionCamouflage.Description = "Adds semantics-preserving boolean boundaries to control-flow conditions"
ConditionCamouflage.Name = "Condition Camouflage"

ConditionCamouflage.SettingsDescriptor = {
	Threshold = {
		type = "number",
		default = 0.7,
		min = 0,
		max = 1,
	},
}

function ConditionCamouflage:init(_) end

local function camouflage(condition, threshold)
	if condition and math.random() <= threshold then
		-- Do not use Ast.NotExpression(..., true): constant folding would make
		-- the added boundary disappear before the VM compiler sees it.
		return Ast.NotExpression(Ast.NotExpression(condition))
	end
	return condition
end

function ConditionCamouflage:apply(ast)
	local threshold = self.Threshold
	visitast(ast, nil, function(node)
		if node.kind == AstKind.IfStatement then
			node.condition = camouflage(node.condition, threshold)
			for _, elseifNode in ipairs(node.elseifs) do
				elseifNode.condition = camouflage(elseifNode.condition, threshold)
			end
		elseif node.kind == AstKind.WhileStatement or node.kind == AstKind.RepeatStatement then
			node.condition = camouflage(node.condition, threshold)
		elseif node.kind == AstKind.IfElseExpression then
			node.condition = camouflage(node.condition, threshold)
			for _, elseifNode in pairs(node.elseifs) do
				elseifNode.condition = camouflage(elseifNode.condition, threshold)
			end
		end
		return node
	end)
	return ast
end

return ConditionCamouflage
