local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local AstKind = Ast.AstKind

local InlineFunctions = Step:extend()
InlineFunctions.Name = "Inline Functions"
InlineFunctions.Description = "Inline small local functions with one pure return expression"
InlineFunctions.SettingsDescriptor = {
	MaxArguments = { type = "number", default = 4, min = 0, max = 16 },
}

local binaryKinds = {
	[AstKind.OrExpression] = true,
	[AstKind.AndExpression] = true,
	[AstKind.LessThanExpression] = true,
	[AstKind.GreaterThanExpression] = true,
	[AstKind.LessThanOrEqualsExpression] = true,
	[AstKind.GreaterThanOrEqualsExpression] = true,
	[AstKind.NotEqualsExpression] = true,
	[AstKind.EqualsExpression] = true,
	[AstKind.StrCatExpression] = true,
	[AstKind.AddExpression] = true,
	[AstKind.SubExpression] = true,
	[AstKind.MulExpression] = true,
	[AstKind.DivExpression] = true,
	[AstKind.ModExpression] = true,
	[AstKind.PowExpression] = true,
}

local unaryKinds = {
	[AstKind.NotExpression] = true,
	[AstKind.NegateExpression] = true,
	[AstKind.LenExpression] = true,
}

local function literal(expr)
	return expr.kind == AstKind.BooleanExpression
		or expr.kind == AstKind.NumberExpression
		or expr.kind == AstKind.StringExpression
		or expr.kind == AstKind.NilExpression
end

local function simpleArgument(expr)
	return literal(expr) or (expr.kind == AstKind.VariableExpression and not expr.scope.isGlobal)
end

local function candidateFor(declarations, expr)
	if not expr or expr.kind ~= AstKind.VariableExpression then return nil end
	local scope = declarations[expr.scope]
	return scope and scope[expr.id]
end

local function makeCandidate(statement, maxArguments)
	local body = statement.body
	if #statement.args > maxArguments then return nil end
	if #body.statements ~= 1 or body.statements[1].kind ~= AstKind.ReturnStatement then return nil end
	local returned = body.statements[1].args
	if #returned ~= 1 then return nil end

	local params, arguments = {}, {}
	for index, arg in ipairs(statement.args) do
		if arg.kind ~= AstKind.VariableExpression then return nil end
		params[arg.scope] = params[arg.scope] or {}
		params[arg.scope][arg.id] = index
		arguments[index] = arg
	end

	local uses, captures = {}, {}
	local function supported(expr)
		local kind = expr.kind
		if kind == AstKind.VariableExpression then
			local byId = params[expr.scope]
			local index = byId and byId[expr.id]
			if index then
				uses[index] = (uses[index] or 0) + 1
			else
				captures[#captures + 1] = expr
			end
			return true
		end
		if literal(expr) then return true end
		if binaryKinds[kind] then
			return supported(expr.lhs) and supported(expr.rhs)
		end
		if unaryKinds[kind] then return supported(expr.rhs) end
		return false
	end

	if not supported(returned[1]) then return nil end
	return {
		statement = statement,
		scope = statement.scope,
		id = statement.id,
		params = params,
		arguments = arguments,
		uses = uses,
		captures = captures,
		expression = returned[1],
		references = 0,
		directCalls = 0,
		eligibleCalls = 0,
		written = false,
	}
end

local function resolveVariable(scope, name)
	while scope do
		local id = scope.variablesLookup and scope.variablesLookup[name]
		if id ~= nil then return scope, id end
		scope = scope.parentScope
	end
	return nil
end

local function canInline(candidate, call, callScope)
	if #call.args ~= #candidate.arguments then return false end
	for i, arg in ipairs(call.args) do
		if not simpleArgument(arg) then return false end
		if candidate.uses[i] and candidate.uses[i] > 1 and not literal(arg) then
			return false
		end
	end
	for _, capture in ipairs(candidate.captures) do
		local name = capture.scope:getVariableName(capture.id)
		local scope, id = resolveVariable(callScope, name)
		if scope ~= capture.scope or id ~= capture.id then return false end
	end
	return true
end

local function cloneExpression(expr, params, arguments, callScope, trackReferences)
	if expr.kind == AstKind.VariableExpression then
		local byId = params and params[expr.scope]
		local argumentIndex = byId and byId[expr.id]
		if argumentIndex then
			return cloneExpression(arguments[argumentIndex], nil, nil, callScope, false)
		elseif trackReferences then
			callScope:addReferenceToHigherScope(expr.scope, expr.id)
		end
	end

	local copy = {}
	for key, value in pairs(expr) do
		if key == "lhs" or key == "rhs" then
			copy[key] = cloneExpression(value, params, arguments, callScope, trackReferences)
		else
			copy[key] = value
		end
	end
	return copy
end

function InlineFunctions:init() end

function InlineFunctions:apply(ast)
	local declarations, candidates = {}, {}
	visitast(ast, function(node)
		if node.kind == AstKind.LocalFunctionDeclaration then
			local candidate = makeCandidate(node, self.MaxArguments)
			if candidate then
				declarations[node.scope] = declarations[node.scope] or {}
				declarations[node.scope][node.id] = candidate
				candidates[#candidates + 1] = candidate
			end
		end
	end)
	if #candidates == 0 then return ast end

	local eligibleCalls = {}
	visitast(ast, function(node, data)
		if node.kind == AstKind.VariableExpression then
			local candidate = candidateFor(declarations, node)
			if candidate then candidate.references = candidate.references + 1 end
		elseif node.kind == AstKind.AssignmentVariable then
			local candidate = candidateFor(declarations, node)
			if candidate then candidate.written = true end
		elseif node.kind == AstKind.FunctionCallExpression then
			local candidate = candidateFor(declarations, node.base)
			if candidate then
				candidate.directCalls = candidate.directCalls + 1
				if canInline(candidate, node, data.scope) then
					candidate.eligibleCalls = candidate.eligibleCalls + 1
					eligibleCalls[node] = candidate
				end
			end
		end
	end)

	local removable = {}
	for _, candidate in ipairs(candidates) do
		candidate.remove = not candidate.written
			and candidate.directCalls > 0
			and candidate.references == candidate.directCalls
			and candidate.eligibleCalls == candidate.directCalls
		if candidate.remove then removable[candidate.statement] = true end
	end

	visitast(ast, nil, function(node, data)
		if node.kind == AstKind.FunctionCallExpression then
			local candidate = eligibleCalls[node]
			if candidate then
				return cloneExpression(candidate.expression, candidate.params, node.args, data.scope, true)
			end
		elseif node.kind == AstKind.Block then
			local kept = {}
			for _, statement in ipairs(node.statements) do
				if not removable[statement] then
					kept[#kept + 1] = statement
				end
			end
			node.statements = kept
		end
	end)
	return ast
end

return InlineFunctions
