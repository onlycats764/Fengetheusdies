local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local Attributes = require("fengetheus.attributes")
local logger = require("logger")
local AstKind = Ast.AstKind

local InlineFunctions = Step:extend()
InlineFunctions.Name = "Inline Functions"
InlineFunctions.Description = "Inline small local functions with equivalent single- and multiple-return call sites"
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

local function parameterIndexMap(arguments)
	local params = {}
	for index, arg in ipairs(arguments) do
		if arg.kind ~= AstKind.VariableExpression then return nil end
		params[arg.scope] = params[arg.scope] or {}
		params[arg.scope][arg.id] = index
	end
	return params
end

local function varargForward(statement)
	local args = statement.args
	if #args < 1 or args[#args].kind ~= AstKind.VarargExpression then return nil end
	local fixedCount = #args - 1
	local returned = statement.body.statements[1].args
	if #returned ~= fixedCount + 1 or returned[#returned].kind ~= AstKind.VarargExpression then
		return nil
	end
	for index = 1, fixedCount do
		local arg, value = args[index], returned[index]
		if value.kind ~= AstKind.VariableExpression or value.scope ~= arg.scope or value.id ~= arg.id then
			return nil
		end
	end
	return fixedCount
end

local function makeCandidate(statement, maxArguments)
	local body = statement.body
	local attribute = statement.fengAttributes and statement.fengAttributes.inline
	if attribute == "disabled" or (statement.fengAttributes and statement.fengAttributes.optimize == false) then return nil end
	if #body.statements ~= 1 or body.statements[1].kind ~= AstKind.ReturnStatement then return nil end
	local returned = body.statements[1].args
	local isVararg = statement.args[#statement.args]
		and statement.args[#statement.args].kind == AstKind.VarargExpression
	local fixedArgumentCount = #statement.args - (isVararg and 1 or 0)
	if fixedArgumentCount > maxArguments then return nil end
	local forwardingCount = varargForward(statement)
	if isVararg then
		if forwardingCount == nil then return nil end
		local fixedArgs = {}
		for index = 1, forwardingCount do fixedArgs[index] = statement.args[index] end
		local params = parameterIndexMap(fixedArgs)
		if not params then return nil end
		return {
			statement = statement,
			scope = statement.scope,
			id = statement.id,
			params = params,
			arguments = fixedArgs,
			returns = returned,
			varargForward = true,
			fixedArgumentCount = forwardingCount,
			captures = {},
			references = 0,
			directCalls = 0,
			eligibleCalls = 0,
			written = false,
			inlineMode = attribute,
		}
	end
	if #returned < 1 then return nil end

	local params = parameterIndexMap(statement.args)
	if not params then return nil end
	local arguments = {}
	for index, arg in ipairs(statement.args) do
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

	for _, expr in ipairs(returned) do
		if not supported(expr) then return nil end
	end
	return {
		statement = statement,
		scope = statement.scope,
		id = statement.id,
		params = params,
		arguments = arguments,
		uses = uses,
		captures = captures,
		returns = returned,
		references = 0,
		directCalls = 0,
		eligibleCalls = 0,
		written = false,
		inlineMode = attribute,
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

local function canInline(candidate, call, callScope, captureArguments)
	if candidate.varargForward then return false end
	if not captureArguments and #call.args ~= #candidate.arguments then return false end
	for i, arg in ipairs(call.args) do
		if not captureArguments then
			if not simpleArgument(arg) then return false end
			if candidate.uses[i] and candidate.uses[i] > 1 and not literal(arg) then
				return false
			end
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
			local argument = arguments[argumentIndex]
			if type(argument) == "function" then return argument() end
			return cloneExpression(argument, nil, nil, callScope, false)
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

local function canInlineVarargReturn(candidate, call)
	if not candidate.varargForward then return false end
	-- A missing fixed argument becomes an observable nil in the forwarded
	-- return list. Do not guess whether a final call expression expands enough
	-- values to fill it; that case stays unmodified.
	return candidate.fixedArgumentCount == 0 or #call.args >= candidate.fixedArgumentCount
end

function InlineFunctions:init() end

function InlineFunctions:apply(ast)
	local declarations, candidates = {}, {}
	visitast(ast, function(node)
		if node.kind == AstKind.LocalFunctionDeclaration then
			local candidate = makeCandidate(node, self.MaxArguments)
			if node.fengAttributes and node.fengAttributes.inline == "checked" and not candidate then
				logger:error("INLINE(checked) requires a local function with a supported return-only body")
			end
			if candidate then
				declarations[node.scope] = declarations[node.scope] or {}
				declarations[node.scope][node.id] = candidate
				candidates[#candidates + 1] = candidate
			end
		end
	end)
	if #candidates == 0 then return ast end

	local eligibleCalls, eligibleReturns = {}, {}
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
				if Attributes.optimizationEnabled(data)
					and #candidate.returns == 1 and canInline(candidate, node, data.scope) then
					candidate.eligibleCalls = candidate.eligibleCalls + 1
					eligibleCalls[node] = candidate
				end
			end
		end
	end, function(node, data)
		if node.kind == AstKind.ReturnStatement and #node.args == 1
			and node.args[1].kind == AstKind.FunctionCallExpression then
			local call = node.args[1]
			local candidate = candidateFor(declarations, call.base)
			if Attributes.optimizationEnabled(data) and candidate
				and (candidate.varargForward or #candidate.returns > 1 or not eligibleCalls[call]) then
				local eligible = candidate.varargForward
					and canInlineVarargReturn(candidate, call)
					or (not candidate.varargForward and canInline(candidate, call, data.scope, true))
				if eligible and not eligibleCalls[call] then
					candidate.eligibleCalls = candidate.eligibleCalls + 1
					eligibleReturns[node] = { candidate = candidate, call = call }
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
		if candidate.inlineMode == "checked" and not candidate.remove then
			logger:error("INLINE(checked) could not inline every use of the marked function")
		end
		if candidate.remove then removable[candidate.statement] = true end
	end

	visitast(ast, nil, function(node, data)
		if not Attributes.optimizationEnabled(data) then return nil end
		if node.kind == AstKind.FunctionCallExpression then
			local candidate = eligibleCalls[node]
			if candidate then
				return cloneExpression(candidate.returns[1], candidate.params, node.args, data.scope, true)
			end
		elseif node.kind == AstKind.ReturnStatement then
			local inline = eligibleReturns[node]
			if inline then
				local candidate, call = inline.candidate, inline.call
				if candidate.varargForward then
					-- This exact forwarding pattern returns each incoming argument
					-- once and in order; keeping the expression list also preserves
					-- a final multi-valued call/vararg expression.
					return Ast.ReturnStatement(call.args)
				end

				local ids, arguments = {}, {}
				local bindingCount = math.max(1, #candidate.arguments)
				for index = 1, bindingCount do
					ids[index] = data.scope:addVariable(nil, nil)
				end
				for index = 1, #candidate.arguments do
					local id = ids[index]
					arguments[index] = function()
						return Ast.VariableExpression(data.scope, id)
					end
				end
				local results = {}
				for index, expression in ipairs(candidate.returns) do
					results[index] = cloneExpression(expression, candidate.params, arguments, data.scope, true)
				end
				local binding = Ast.LocalVariableDeclaration(data.scope, ids, call.args)
				return binding, Ast.ReturnStatement(results)
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
