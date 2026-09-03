-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
--
-- OpaquePredicate.lua
--
-- Replaces simple branch/loop conditions with semantically-equivalent
-- expressions wrapped in an opaque predicate. An opaque predicate is an
-- expression whose truth value is known at obfuscation time (always true or
-- always false) but is difficult to determine by static analysis of the
-- obfuscated output.
--
-- Unlike ConditionCamouflage (which only applies `not not x`), this step
-- injects arithmetic opaque predicates built from a dedicated numeric local
-- variable that this step introduces, e.g.:
--
--   local __opaque = 7
--   cond  ->  cond and (__opaque * __opaque >= 0)    -- always true
--   cond  ->  cond or  not(__opaque * __opaque >= 0) -- always false branch
--
-- Because the opaque variable is a numeric constant known at compile time,
-- `v * v >= 0` is provably always true for real numbers.  But because the
-- variable is a *runtime local* (not an inline literal), a static analyzer
-- cannot fold it away without data-flow analysis — the value is opaque to
-- simple pattern matching.
--
-- The transformation is side-effect free (no function calls, no math.random
-- consumption) and preserves short-circuit semantics because `and`/`or` still
-- evaluate the original condition first.  This step only touches the
-- *condition* slot of if/while/repeat/if-else-expr nodes. It never
-- restructures blocks, loops, or break/continue/return, so there is no risk
-- of the correctness hazards associated with control-flow flattening.
--
-- DESIGN NOTE on why we use a fresh local instead of an in-scope variable:
-- An in-scope variable might hold a table, string, boolean, or function at
-- runtime, and `v * v` would raise "attempt to perform arithmetic on a
-- table/string/..." — a correctness bug.  By introducing our own numeric
-- local we guarantee the operand is always a number.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local AstKind = Ast.AstKind

local OpaquePredicate = Step:extend()
OpaquePredicate.Description = "Wraps branch conditions in arithmetic opaque predicates that are always true/false but hard to prove statically"
OpaquePredicate.Name = "Opaque Predicate"

OpaquePredicate.SettingsDescriptor = {
	Threshold = {
		name = "Threshold",
		description = "The probability that an eligible condition receives an opaque predicate",
		type = "number",
		default = 0.5,
		min = 0,
		max = 1,
	},
}

function OpaquePredicate:init(_) end

-- Build an opaque predicate expression that is ALWAYS TRUE, using a numeric
-- local variable `v` (which holds a known constant). All sub-expressions use
-- simplify=false so the AST constructors do not fold them. Examples:
--   (v * v) >= 0
--   (v * v) + 1 > 0
--   (v * v) >= 0 and (v - v) == 0
--   (v * v) + (v * v) >= 0
-- Each variant creates fresh node instances (no sharing).
local function alwaysTrue(v)
	local variants = {
		function()
			return Ast.GreaterThanOrEqualsExpression(
				Ast.MulExpression(v, v, false),
				Ast.NumberExpression(0), false)
		end,
		function()
			return Ast.GreaterThanExpression(
				Ast.AddExpression(Ast.MulExpression(v, v, false), Ast.NumberExpression(1), false),
				Ast.NumberExpression(0), false)
		end,
		function()
			return Ast.AndExpression(
				Ast.GreaterThanOrEqualsExpression(Ast.MulExpression(v, v, false), Ast.NumberExpression(0), false),
				Ast.EqualsExpression(Ast.SubExpression(v, v, false), Ast.NumberExpression(0), false), false)
		end,
		function()
			return Ast.GreaterThanOrEqualsExpression(
				Ast.AddExpression(Ast.MulExpression(v, v, false), Ast.MulExpression(v, v, false), false),
				Ast.NumberExpression(0), false)
		end,
	}
	return variants[math.random(1, #variants)]()
end

-- Build an opaque predicate that is ALWAYS FALSE: not (alwaysTrue).
local function alwaysFalse(v)
	return Ast.NotExpression(alwaysTrue(v), false)
end

-- Wrap a condition with an opaque predicate, preserving truthiness:
--   always-true predicate  =>  cond and opaqueTrue    (still cond)
--   always-false predicate =>  cond or  opaqueFalse   (still cond, since opaqueFalse is false)
-- We pick true/false randomly for variety. Both forms preserve the original
-- condition's truth value because of Lua's short-circuit semantics.
--
-- `v` is a fresh VariableExpression referencing the opaque local variable
-- (a numeric constant introduced by the caller). We create a fresh
-- VariableExpression for each use to avoid node sharing.
local function wrapCondition(condition, vScope, vId, threshold)
	if math.random() > threshold then
		return condition
	end

	if math.random() < 0.5 then
		-- cond and (alwaysTrue)  => truth value == truth value of cond
		local v1 = Ast.VariableExpression(vScope, vId)
		return Ast.AndExpression(condition, alwaysTrue(v1), false)
	else
		-- cond or (alwaysFalse)  => truth value == truth value of cond
		local v1 = Ast.VariableExpression(vScope, vId)
		return Ast.OrExpression(condition, alwaysFalse(v1), false)
	end
end

function OpaquePredicate:apply(ast)
	local threshold = self.Threshold

	-- Allocate a single opaque numeric local in the top-level (global) block
	-- scope. This variable is visible to all nested scopes (functions, blocks)
	-- via normal lexical scoping / upvalue resolution, so we can reference it
	-- from any condition in the program.
	local topScope = ast.body.scope
	local opaqueId = topScope:addVariable()
	local opaqueValue = math.random(1, 100)

	-- We must insert the local declaration as the FIRST statement so it is
	-- visible to everything that follows. We do this at the very end (after
	-- visiting) to avoid interfering with the visitor's statement list
	-- management, then prepend it.
	local opaqueDecl = Ast.LocalVariableDeclaration(topScope, { opaqueId }, { Ast.NumberExpression(opaqueValue) })

	visitast(ast, nil, function(node, data)
		if node.kind == AstKind.IfStatement then
			node.condition = wrapCondition(node.condition, topScope, opaqueId, threshold)
			for _, elseifNode in ipairs(node.elseifs) do
				elseifNode.condition = wrapCondition(elseifNode.condition, topScope, opaqueId, threshold)
			end
		elseif node.kind == AstKind.WhileStatement or node.kind == AstKind.RepeatStatement then
			node.condition = wrapCondition(node.condition, topScope, opaqueId, threshold)
		elseif node.kind == AstKind.IfElseExpression then
			node.condition = wrapCondition(node.condition, topScope, opaqueId, threshold)
			for _, elseifNode in ipairs(node.elseifs) do
				elseifNode.condition = wrapCondition(elseifNode.condition, topScope, opaqueId, threshold)
			end
		end
		return node
	end)

	-- Register the upvalue reference from each scope that uses the opaque
	-- variable. The visitast walker already created VariableExpression nodes
	-- with topScope/opaqueId, but the scope reference tracking was not updated.
	-- We do a second pass to fix this: whenever we encounter a VariableExpression
	-- for our opaque var in a scope != topScope, add the upvalue reference.
	visitast(ast, nil, function(node, data)
		if (node.kind == AstKind.VariableExpression or node.kind == AstKind.AssignmentVariable) then
			if node.scope == topScope and node.id == opaqueId then
				if data.scope ~= topScope and not data.scope.isGlobal then
					data.scope:addReferenceToHigherScope(topScope, opaqueId)
				end
			end
		end
		return node
	end)

	-- Prepend the opaque local declaration to the top-level block.
	table.insert(ast.body.statements, 1, opaqueDecl)

	return ast
end

return OpaquePredicate
