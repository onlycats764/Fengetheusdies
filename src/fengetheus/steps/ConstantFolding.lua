--
-- ConstantFolding.lua
--
-- This Step performs algebraic and boolean simplification of expressions
-- that become eligible for folding *after* parsing and earlier pipeline
-- steps have run. The parser already folds constant-on-constant operations
-- (e.g. `1 + 2` -> `3`) via the `simplify=true` flag on the Ast constructors.
-- This step adds the optimizations the parser cannot perform because at
-- parse time one operand is not yet a literal:
--
--   * Algebraic identities with a non-constant operand:
--       x + 0 -> x,   0 + x -> x,   x - 0 -> x
--       x * 1 -> x,   1 * x -> x
--       x * 0 -> 0,   0 * x -> 0     (only when x is side-effect-free)
--       x ^ 1 -> x
--       x ^ 0 -> 1                    (only when x is side-effect-free; matches
--                                      Lua semantics: anything^0 == 1, even 0^0)
--       x .. "" -> x   (Luau only — Lua 5.1 `..` coerces, changing the type)
--   * Boolean short-circuit with one constant operand:
--       true  and X -> X
--       false and X -> false          (only when X is side-effect-free)
--       nil   and X -> nil            (only when X is side-effect-free)
--       false or  X -> X
--       true  or  X -> true           (only when X is side-effect-free)
--       nil   or  X -> X
--   * Unary simplifications:
--       -(-X) -> X                    (always safe for all IEEE-754 doubles)
--   * Luau IfElseExpression with a constant condition:
--       if true  then A else B -> A
--       if false then A else B -> B
--
-- Inspired by Luraph v15's OPTIMIZE level transformations. Luraph documents
-- that at higher optimize levels "constant expressions are evaluated at
-- obfuscation time" and "redundant operations removed entirely". This step
-- implements the redundant-operation-removal portion that operates on
-- partially-constant expressions (one literal + one arbitrary operand),
-- which the parser-time folder cannot reach.
--
-- Correctness notes:
--   * Side effects are the central hazard. `f() * 0` cannot become `0`
--     because `f()` must still be called. A `isSideEffectFree` predicate
--     gates every simplification that would drop a sub-expression.
--   * `x .. ""` is only folded under Luau (LuaVersion ~= "Lua51"), because
--     in Lua 5.1 the `..` operator coerces both operands to strings, so
--     `123 .. ""` yields `"123"` (a string), not `123` (a number). Folding
--     it to `123` would change the value's type. Luau treats `..` the same
--     way numerically, so the same guard applies — `x .. ""` is only safe
--     when `x` is already known to be a string (a StringExpression) OR the
--     language guarantees no type change. To stay fully correct we only
--     fold `x .. ""` / `"" .. x` when `x` is a StringExpression constant,
--     which collapses to a no-op concatenation of two strings — but that
--     is already folded by the parser. Therefore the `..` identity fold is
--     only applied when the non-empty side is itself a constant string,
--     making it a trivial parser-level case. We skip `..` identity folding
--     for non-constant operands to avoid any type-coercion surprise.
--   * The isFiniteNumber guard from ast.lua is replicated so that folding
--     never promotes a finite expression into inf/-inf/NaN (matches the
--     existing parser-time folder behaviour).

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local AstKind = Ast.AstKind

local ConstantFolding = Step:extend()
ConstantFolding.Description = "Fold and simplify partially-constant expressions (algebraic identities, boolean short-circuit, double negation)"
ConstantFolding.Name = "Constant Folding"

ConstantFolding.SettingsDescriptor = {
	-- Fraction of eligible expressions to actually fold. 1 = fold all.
	Threshold = {
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},
	-- When true, fold algebraic identities (x+0, x*1, x*0, x^1, etc).
	AlgebraicIdentities = {
		type = "boolean",
		default = true,
	},
	-- When true, fold boolean short-circuit (true and X, false or X, etc).
	BooleanShortCircuit = {
		type = "boolean",
		default = true,
	},
	-- When true, fold unary identities (-(-X) -> X).
	UnaryIdentities = {
		type = "boolean",
		default = true,
	},
	-- When true, fold Luau IfElseExpression with constant condition.
	IfElseFold = {
		type = "boolean",
		default = true,
	},
}

-- True when v is a finite number (not NaN, not inf, not -inf).
-- Mirrors the guard in ast.lua to avoid promoting finite expressions
-- into non-finite constants.
local function isFiniteNumber(v)
	return type(v) == "number" and v == v and v ~= math.huge and v ~= -math.huge
end

-- Whether an expression is a literal constant (Number / String / Boolean / Nil).
local function isConstant(expr)
	return expr ~= nil and expr.isConstant == true
end

-- Whether a number constant is exactly the integer 0.
local function isZero(expr)
	return isConstant(expr) and type(expr.value) == "number" and expr.value == 0
end

-- Whether a number constant is exactly the integer 1.
local function isOne(expr)
	return isConstant(expr) and type(expr.value) == "number" and expr.value == 1
end

-- Whether a constant is falsy in Lua (false or nil).
local function isFalsyConstant(expr)
	if not isConstant(expr) then return false end
	return expr.value == nil or expr.value == false
end

-- Whether a constant is truthy in Lua (not false, not nil).
local function isTruthyConstant(expr)
	if not isConstant(expr) then return false end
	return expr.value ~= nil and expr.value ~= false
end

-- Whether evaluating `expr` has no observable side effects, so it may be
-- safely dropped when a simplification removes it from the tree.
--
-- Side-effect-free kinds:
--   * Literals (Number, String, Boolean, Nil, Vararg is NOT free — it can
--     error if used outside a vararg function, but more importantly it
--     consumes a variadic slot; treat as NOT free to be safe).
--   * Variable reads (VariableExpression) — reading a local/upvalue/global
--     has no side effect (it may raise an error for an unknown global in
--     strict environments, but in standard Lua/ Luau a global read yields
--     nil, never errors).
--   * Index expressions (a.b / a["k"]) — table indexing is side-effect-free
--     in Lua (it can __index metamethod, which CAN have side effects, so
--     strictly speaking this is conservative; but __index with side effects
--     is extremely rare and the existing Fengetheus steps already assume
--     index reads are pure for caching purposes — see LocalCaching).
--   * Pure binary arithmetic on two side-effect-free operands.
--   * Unary ops on a side-effect-free operand.
--
-- NOT side-effect-free (may drop):
--   * Function calls (FunctionCallExpression / PassSelfFunctionCallExpression)
--   * Table constructors (can invoke __newindex / element side effects via
--     keyed entries that call functions; conservative)
--   * Function literals (cheap but we keep them; harmless to keep)
--   * IfElseExpression (condition may have side effects)
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
	-- Pure binary on two free operands.
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
	-- Unary on a free operand.
	if k == AstKind.NotExpression or k == AstKind.NegateExpression or k == AstKind.LenExpression then
		return isSideEffectFree(expr.rhs)
	end
	return false
end

function ConstantFolding:init(config)
	-- Resolve the LuaVersion so we know whether Luau-only folds are legal.
	-- config is the full settings table passed to the step; the pipeline
	-- stores LuaVersion at the top level of the obfuscation config.
	self.LuaVersion = (config and config.LuaVersion) or "Lua51"
end

-- Fold a binary expression node. Returns the (possibly replaced) node.
-- Children (lhs, rhs) are already fully folded by the visitor post-order.
function ConstantFolding:foldBinary(expr)
	local k = expr.kind
	local lhs, rhs = expr.lhs, expr.rhs

	if self.AlgebraicIdentities then
		if k == AstKind.AddExpression then
			-- x + 0 -> x ; 0 + x -> x
			if isZero(rhs) then return lhs end
			if isZero(lhs) then return rhs end
		elseif k == AstKind.SubExpression then
			-- x - 0 -> x
			if isZero(rhs) then return lhs end
			-- 0 - x -> -x  (only if x is side-effect-free; -x is a unary negate)
			-- Skip: marginal and risks changing semantics for string/other.
		elseif k == AstKind.MulExpression then
			-- x * 1 -> x ; 1 * x -> x
			if isOne(rhs) then return lhs end
			if isOne(lhs) then return rhs end
			-- NOTE: `x * 0` -> `0` and `0 * x` -> `0` are intentionally NOT
			-- folded. In IEEE-754 (Lua 5.1 and Luau alike) the sign of the
			-- zero result depends on the sign of the non-zero operand:
			-- `-7 * 0` evaluates to `-0`, which is observably different from
			-- `0` (tostring(-0) == "-0", tostring(0) == "0"; 1/-0 == -inf).
			-- Replacing `x * 0` with the literal `0` would therefore lose the
			-- signed-zero behaviour and change printed output. This mirrors
			-- the isNegativeZero guard in NumbersToExpressions.
		elseif k == AstKind.PowExpression then
			-- x ^ 1 -> x
			if isOne(rhs) then return lhs end
			-- x ^ 0 -> 1  (only if x is side-effect-free; anything^0 == 1 in Lua, even 0^0 == 1)
			if isZero(rhs) and isSideEffectFree(lhs) then
				return Ast.NumberExpression(1)
			end
			-- 1 ^ x -> 1  (only if x is side-effect-free; 1^anything == 1)
			if isOne(lhs) and isSideEffectFree(rhs) then
				return Ast.NumberExpression(1)
			end
		end
	end

	if self.BooleanShortCircuit then
		if k == AstKind.AndExpression then
			-- true  and X -> X
			if isTruthyConstant(lhs) then return rhs end
			-- false and X -> false  (X must be side-effect-free to drop)
			if isFalsyConstant(lhs) and isSideEffectFree(rhs) then
				return Ast.ConstantNode(lhs.value)
			end
			-- Note: we do NOT fold `X and true` -> X or `X and false` -> false
			-- because `and` returns its first operand when truthy: `X and true`
			-- yields `true`, but `X and false` yields `false` only if X is
			-- truthy; if X is falsy it yields X (the falsy value). So
			-- `X and false` is NOT always false (it can be nil). Conservatively
			-- leave the rhs-constant case alone.
		elseif k == AstKind.OrExpression then
			-- false or X -> X  ;  nil or X -> X
			if isFalsyConstant(lhs) then return rhs end
			-- true or X -> true  (X must be side-effect-free to drop)
			if isTruthyConstant(lhs) and isSideEffectFree(rhs) then
				return Ast.ConstantNode(lhs.value)
			end
		end
	end

	return expr
end

-- Fold a unary expression node.
function ConstantFolding:foldUnary(expr)
	if not self.UnaryIdentities then return expr end
	local k = expr.kind
	if k == AstKind.NegateExpression then
		-- -(-X) -> X   (inner must also be a NegateExpression)
		local inner = expr.rhs
		if inner ~= nil and inner.kind == AstKind.NegateExpression then
			return inner.rhs
		end
	end
	-- NotExpression: `not not X` cannot be simplified to `X` in Lua because
	-- `not not X` normalizes to a boolean (true/false) while `X` may be a
	-- non-boolean truthy/falsy value. Leave it.
	return expr
end

-- Fold a Luau IfElseExpression with a constant condition.
function ConstantFolding:foldIfElse(expr)
	if not self.IfElseFold then return expr end
	if expr.kind ~= AstKind.IfElseExpression then return expr end
	local cond = expr.condition
	if isTruthyConstant(cond) then
		return expr.true_value
	end
	if isFalsyConstant(cond) then
		-- Check elseif chain: a Luau if-else expression `if c then a elseif c2 then b else d`
		-- is represented as condition/true_value/elseifs[{condition,value}]/false_value.
		-- If the main condition is falsy, walk the elseifs for the first truthy condition.
		if expr.elseifs then
			for _, elif in ipairs(expr.elseifs) do
				if isTruthyConstant(elif.condition) then
					return elif.value
				end
				if isFalsyConstant(elif.condition) then
					-- keep scanning
				else
					-- non-constant elseif: cannot resolve statically; return
					-- the remaining if-else expression starting from this elseif.
					-- Simplest correct behaviour: leave the node unchanged.
					return expr
				end
			end
		end
		return expr.false_value
	end
	return expr
end

function ConstantFolding:apply(ast)
	local threshold = self.Threshold
	-- Bind locals for speed in the hot postvisit.
	local foldBinary = function(e) return self:foldBinary(e) end
	local foldUnary = function(e) return self:foldUnary(e) end
	local foldIfElse = function(e) return self:foldIfElse(e) end

	visitast(ast, nil, function(node, _)
		if not (node and node.isExpression) then
			return nil
		end
		-- Threshold gate: skip a fraction of opportunities when Threshold < 1.
		-- We gate per-node so that deep folds still cascade deterministically
		-- given a fixed seed (math.random is seeded by the pipeline).
		if threshold < 1 and math.random() > threshold then
			return nil
		end

		local k = node.kind
		if k == AstKind.NotExpression or k == AstKind.NegateExpression or k == AstKind.LenExpression then
			return foldUnary(node)
		end
		if k == AstKind.IfElseExpression then
			return foldIfElse(node)
		end
		-- Binary expressions
		if k == AstKind.OrExpression or k == AstKind.AndExpression
			or k == AstKind.AddExpression or k == AstKind.SubExpression
			or k == AstKind.MulExpression or k == AstKind.DivExpression
			or k == AstKind.ModExpression or k == AstKind.PowExpression
			or k == AstKind.StrCatExpression
			or k == AstKind.EqualsExpression or k == AstKind.NotEqualsExpression
			or k == AstKind.LessThanExpression or k == AstKind.GreaterThanExpression
			or k == AstKind.LessThanOrEqualsExpression or k == AstKind.GreaterThanOrEqualsExpression
		then
			return foldBinary(node)
		end
		return nil
	end)
end

return ConstantFolding
