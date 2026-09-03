--
-- RedundantOperationElimination.lua
--
-- This Step removes redundant operations that ConstantFolding does not
-- cover. ConstantFolding handles identities where ONE operand is a literal
-- (x + 0, x * 1, true and X, etc). This step handles operations where BOTH
-- operands are the SAME non-constant expression, and trivial self-assignment.
--
-- Transformations implemented:
--
--   1. Duplicate-operand boolean reduction.
--      `X and X` -> X   (when X is side-effect-free)
--      `X or  X` -> X   (when X is side-effect-free)
--      Rationale: `and` returns its first operand if falsy, otherwise its
--      second; `or` returns its first if truthy, otherwise its second. When
--      both operands are identical, the result is always that operand. But
--      the second operand is only evaluated when the first is truthy (and)
--      / falsy (or), so a side-effecting X would be evaluated twice in the
--      original and only once after the fold. The side-effect-free guard
--      prevents dropping that second evaluation.
--
--   2. Self-assignment removal.
--      `x = x` -> removed   (when the LHS is a simple AssignmentVariable and
--      the RHS is the same VariableExpression in the same scope+id).
--      `a[i] = a[i]` is NOT removed because table indexing can trigger
--      metamethods. Only plain variable-to-itself assignments are safe.
--      This is realized as a statement-level removal via the REMOVED
--      sentinel, filtered by the block postvisit.
--
--   3. Double-negation of a constant is already handled by ConstantFolding's
--      unary pass (not true -> false). `not not X` for non-constant X cannot
--      be reduced to X because `not not X` normalizes to a boolean while X
--      may be a non-boolean truthy/falsy value. Not folded here.
--
-- Inspired by Luraph v15 OPTIMIZE: "redundant operations removed entirely".
--
-- Correctness notes:
--   * The side-effect-free predicate is shared with ConstantFolding's logic
--     (literals, variable reads, index reads, function literals, and pure
--     binary/unary compositions). Function calls and table constructors are
--     NOT considered free.
--   * Self-assignment removal compares scope identity and variable id. Two
--     VariableExpressions refer to the same variable iff their scope table
--     is identical and their id is equal.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local AstKind = Ast.AstKind

local unpack = table.unpack or unpack

-- Sentinel for statement deletion (same pattern as DeadCodeElimination).
local REMOVED = {}

local RedundantOperationElimination = Step:extend()
RedundantOperationElimination.Description = "Eliminate redundant self-assignment and duplicate-operand boolean operations"
RedundantOperationElimination.Name = "Redundant Operation Elimination"

RedundantOperationElimination.SettingsDescriptor = {
	-- Fold `X and X` / `X or X` -> X.
	FoldDuplicateBoolean = {
		type = "boolean",
		default = true,
	},
	-- Remove `x = x` self-assignment.
	RemoveSelfAssignment = {
		type = "boolean",
		default = true,
	},
	-- Fraction of eligible expressions to fold (1 = all).
	Threshold = {
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},
}

function RedundantOperationElimination:init(_)
	-- No per-instance setup required.
end

-- Side-effect-free predicate (mirrors ConstantFolding's).
local function isSideEffectFree(expr)
	if expr == nil then return false end
	local k = expr.kind
	if k == AstKind.NumberExpression
		or k == AstKind.StringExpression
		or k == AstKind.BooleanExpression
		or k == AstKind.NilExpression
		or k == AstKind.VariableExpression
		or k == AstKind.IndexExpression
		or k == AstKind.FunctionLiteralExpression
	then
		return true
	end
	if k == AstKind.AddExpression or k == AstKind.SubExpression
		or k == AstKind.MulExpression or k == AstKind.DivExpression
		or k == AstKind.ModExpression or k == AstKind.PowExpression
		or k == AstKind.StrCatExpression
		or k == AstKind.EqualsExpression or k == AstKind.NotEqualsExpression
		or k == AstKind.LessThanExpression or k == AstKind.GreaterThanExpression
		or k == AstKind.LessThanOrEqualsExpression or k == AstKind.GreaterThanOrEqualsExpression
		or k == AstKind.OrExpression or k == AstKind.AndExpression
	then
		return isSideEffectFree(expr.lhs) and isSideEffectFree(expr.rhs)
	end
	if k == AstKind.NotExpression or k == AstKind.NegateExpression or k == AstKind.LenExpression then
		return isSideEffectFree(expr.rhs)
	end
	return false
end

-- Whether two VariableExpression nodes refer to the same variable.
local function sameVariable(a, b)
	if a == nil or b == nil then return false end
	if a.kind ~= AstKind.VariableExpression or b.kind ~= AstKind.VariableExpression then
		return false
	end
	return a.scope == b.scope and a.id == b.id
end

function RedundantOperationElimination:apply(ast)
	local threshold = self.Threshold
	local foldDup = self.FoldDuplicateBoolean
	local removeSelf = self.RemoveSelfAssignment

	local function exprPostvisit(node, _)
		if not (node and node.isExpression) then return nil end
		if threshold < 1 and math.random() > threshold then
			return nil
		end
		local k = node.kind
		if foldDup then
			if k == AstKind.AndExpression or k == AstKind.OrExpression then
				-- Duplicate-operand reduction: X and X / X or X -> X
				if isSideEffectFree(node.lhs) and sameVariable(node.lhs, node.rhs) then
					return node.lhs
				end
				-- Constant-on-constant boolean fold. The parser-time folder in
				-- ast.lua guards these with isFiniteNumber, which rejects
				-- boolean/nil/string results, so `false and false`, `nil or 5`,
				-- etc. are NOT folded at parse time. These are always safe
				-- (no NaN/inf/signed-zero concern) so we fold them here.
				if node.lhs.isConstant and node.rhs.isConstant then
					local val
					if k == AstKind.AndExpression then
						val = node.lhs.value and node.rhs.value
					else
						val = node.lhs.value or node.rhs.value
					end
					return Ast.ConstantNode(val)
				end
			end
		end
		return nil
	end

	local function stmtPostvisit(stmt, _)
		if removeSelf and stmt.kind == AstKind.AssignmentStatement then
			-- `x = x` with a single LHS/RHS pair where both are the same
			-- simple variable.
			if #stmt.lhs == 1 and #stmt.rhs == 1 then
				local lhs = stmt.lhs[1]
				local rhs = stmt.rhs[1]
				if lhs.kind == AstKind.AssignmentVariable
					and rhs.kind == AstKind.VariableExpression
					and lhs.scope == rhs.scope and lhs.id == rhs.id then
					return REMOVED
				end
			end
		end
		return stmt
	end

	local function blockPostvisit(block, _)
		if block.statements == nil then return block end
		local kept = {}
		for _, st in ipairs(block.statements) do
			if st ~= REMOVED then
				kept[#kept + 1] = st
			end
		end
		block.statements = kept
		return block
	end

	visitast(ast, nil, function(node, data)
		if node == nil then return nil end
		if node.isBlock then
			return blockPostvisit(node, data)
		end
		if node.isStatement then
			return stmtPostvisit(node, data)
		end
		return exprPostvisit(node, data)
	end, nil)
end

return RedundantOperationElimination
