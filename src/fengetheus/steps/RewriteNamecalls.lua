-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
--
-- RewriteNamecalls.lua
--
-- This Step rewrites a:b(...) namecalls into the semantically-equivalent
-- a.b(a, ...). This hides method-name string constants from trivial
-- string-search reversers (the most common first pass against obfuscated
-- Roblox scripts is grep'ing for :GetService, :FindFirstChild, etc).
--
-- Inspired by Luraph v15's TRANSFORM(REWRITE_NAMECALLS) transformation.
--
-- Correctness notes:
--   * `base` may have side effects (e.g. obj:method():other()). The colon
--     syntax evaluates `base` once and passes it as the implicit first
--     argument. A naive rewrite `a.b(a, ...)` would evaluate `a` twice.
--     To preserve single-evaluation semantics we hoist `base` into a fresh
--     local when it is not a "cheap" expression (Variable / Index / nil /
--     number / string / boolean). Cheap expressions are duplicated inline.
--   * The implicit self argument is always inserted as the first positional
--     argument, matching Lua's namecall semantics exactly.
--   * Side-effecting bases are hoisted by emitting `local tmp = base` as a
--     sibling statement *before* the statement that contains the namecall.
--     This works because visitStatement's postvisit may return multiple
--     statements that replace the original. We accumulate pending hoisted
--     declarations while walking the expression sub-tree of a statement
--     and flush them in the statement postvisit.
--   * RewriteNamecalls should run BEFORE EncryptStrings / SplitStrings /
--     ConstantArray so those passes can further shuffle the extracted
--     method-name strings.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local AstKind = Ast.AstKind

-- Lua 5.3 (including the host VM) no longer exposes unpack globally.
local unpack = table.unpack or unpack

local RewriteNamecalls = Step:extend()
RewriteNamecalls.Description = "Rewrites a:b(...) namecalls into a.b(a, ...) to hide method-name strings"
RewriteNamecalls.Name = "Rewrite Namecalls"

RewriteNamecalls.SettingsDescriptor = {
	Threshold = {
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},
	-- When true, method names are emitted as obj["method"](obj, ...) which
	-- hides them from `.` grep too. When false (default), valid-identifier
	-- method names are emitted as obj.method(obj, ...).
	BracketIndex = {
		type = "boolean",
		default = false,
	},
}

function RewriteNamecalls:init(_) end

-- Returns true when duplicating `expr` inline cannot change observable
-- behaviour (pure, no side effects, always returns the same value).
local function isCheapExpr(expr)
	if expr == nil then return false end
	local k = expr.kind
	return k == AstKind.VariableExpression
		or k == AstKind.IndexExpression
		or k == AstKind.StringExpression
		or k == AstKind.NumberExpression
		or k == AstKind.BooleanExpression
		or k == AstKind.NilExpression
end

function RewriteNamecalls:apply(ast)
	local threshold = self.Threshold

	-- Pending hoisted declarations for the current statement. These are
	-- collected during expression visiting and flushed in the statement
	-- postvisit so they appear *before* the rewritten statement.
	local pending = {}

	-- The scope of the block currently containing the statement being
	-- visited. Captured via the Block previsit.
	local currentScope = nil

	local function previsit(node)
		if node.kind == AstKind.Block then
			currentScope = node.scope
		end
		return node
	end

	-- Rewrite a single namecall node (expression or statement form).
	-- Returns the rewritten node. May push a LocalVariableDeclaration into
	-- `pending` when the base needs hoisting.
	local function rewriteNamecall(node, base, methodName, args, ctor)
		if math.random() > threshold then
			return node
		end
		local strNode = Ast.StringExpression(methodName)

		if isCheapExpr(base) then
			local indexExpr = Ast.IndexExpression(base, strNode)
			local newArgs = { base }
			for i, a in ipairs(args) do
				newArgs[i + 1] = a
			end
			return ctor(indexExpr, newArgs)
		end

		-- base may have side effects: hoist into a fresh local in the
		-- enclosing block scope.
		local scope = currentScope
		if not scope then
			-- No block scope available (shouldn't happen for top-level
			-- statements). Fall back to inline duplication of base; this is
			-- only unsafe if base has side effects, but without a scope we
			-- cannot create a local either.
			local indexExpr = Ast.IndexExpression(base, strNode)
			local newArgs = { base }
			for i, a in ipairs(args) do
				newArgs[i + 1] = a
			end
			return ctor(indexExpr, newArgs)
		end

		local tmpId = scope:addVariable(nil, nil)
		local tmpVar = Ast.VariableExpression(scope, tmpId)
		local decl = Ast.LocalVariableDeclaration(scope, { tmpId }, { base })
		pending[#pending + 1] = decl

		local indexExpr = Ast.IndexExpression(tmpVar, strNode)
		local newArgs = { tmpVar }
		for i, a in ipairs(args) do
			newArgs[i + 1] = a
		end
		return ctor(indexExpr, newArgs)
	end

	local function postvisit(node)
		if node.kind == AstKind.PassSelfFunctionCallExpression then
			return rewriteNamecall(
				node, node.base, node.passSelfFunctionName, node.args,
				function(idx, args) return Ast.FunctionCallExpression(idx, args) end
			)
		elseif node.kind == AstKind.PassSelfFunctionCallStatement then
			return rewriteNamecall(
				node, node.base, node.passSelfFunctionName, node.args,
				function(idx, args) return Ast.FunctionCallStatement(idx, args) end
			)
		elseif node.isStatement then
			-- Flush any hoisted declarations collected while visiting this
			-- statement's expression children. Return them *before* the
			-- statement so they execute first.
			if #pending > 0 then
				local out = {}
				for i = 1, #pending do
					out[i] = pending[i]
				end
				out[#pending + 1] = node
				-- Clear pending for the next sibling statement.
				pending = {}
				return unpack(out)
			end
		end
		return node
	end

	visitast(ast, previsit, postvisit)

	return ast
end

return RewriteNamecalls
