-- Compile-time function and loop attributes used by Fengetheus' optimizers.
-- Directives are removed before the user-configured transformation steps run.

local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local logger = require("logger")

local AstKind = Ast.AstKind
local Attributes = {}

local function expressionName(expression)
	if expression and expression.kind == AstKind.VariableExpression
		and expression.scope and expression.scope.isGlobal then
		return expression.scope:getVariableName(expression.id)
	end
	return nil
end

local function attributeCallName(expression)
	if not expression or expression.kind ~= AstKind.FunctionCallExpression then
		return nil
	end
	return expressionName(expression.base)
end

local function parseMode(expression, name)
	if expression and expression.kind == AstKind.BooleanExpression then
		return expression.value and "checked" or "disabled"
	end
	local value = expressionName(expression)
	if value == "checked" then return "checked" end
	if value == "optional" then return "optional" end
	if value == "false" then return "disabled" end
	logger:error(string.format("FENG_ATTRIBUTES(%s(...)) expects true, false, checked, or optional", name))
end

local function parseAttributeCall(expression, targetKind)
	local name = attributeCallName(expression)
	if not name then
		logger:error("FENG_ATTRIBUTES arguments must be simple attribute calls")
	end
	if #expression.args ~= 1 then
		logger:error(string.format("FENG_ATTRIBUTES(%s(...)) expects one argument", name))
	end
	local value = expression.args[1]
	if name == "OPTIMIZE" then
		if targetKind == "loop" then
			logger:error("OPTIMIZE can only be used on a function")
		end
		if value.kind ~= AstKind.BooleanExpression then
			logger:error("FENG_ATTRIBUTES(OPTIMIZE(...)) expects true or false")
		end
		return name, value.value
	elseif name == "INLINE" then
		if targetKind ~= "function" then
			logger:error("INLINE can only be used on a local function")
		end
		return name, parseMode(value, name)
	elseif name == "UNROLL" then
		if targetKind ~= "loop" then
			logger:error("UNROLL can only be used on a numeric for-loop")
		end
		return name, parseMode(value, name)
	end
	logger:error(string.format("Unknown Fengetheus attribute %q", name))
end

local function isDirective(statement)
	return statement and statement.kind == AstKind.FunctionCallStatement
		and expressionName(statement.base) == "FENG_ATTRIBUTES"
end

local function readBlockDirective(block, targetKind)
	local attributes = {}
	local statement = block.statements[1]
	if not isDirective(statement) then
		return attributes
	end
	if #statement.args < 1 then
		logger:error("FENG_ATTRIBUTES expects at least one attribute")
	end
	for _, expression in ipairs(statement.args) do
		local name, value = parseAttributeCall(expression, targetKind)
		if attributes[name] ~= nil then
			logger:error(string.format("FENG_ATTRIBUTES contains duplicate %s attributes", name))
		end
		attributes[name] = value
	end
	table.remove(block.statements, 1)
	return attributes
end

local function copyFunctionAttributes(parent, localAttributes)
	local result = {
		optimize = parent and parent.optimize,
		inline = nil,
	}
	if localAttributes.OPTIMIZE ~= nil then
		result.optimize = localAttributes.OPTIMIZE
	end
	if localAttributes.INLINE ~= nil then
		result.inline = localAttributes.INLINE
	end
	return result
end

function Attributes.prepare(ast)
	local requirements = { inline = false, unroll = false }
	local rootAttributes = copyFunctionAttributes(nil, readBlockDirective(ast.body, "root"))
	ast.fengAttributes = rootAttributes

	visitast(ast, function(node, data)
		if node.kind == AstKind.LocalFunctionDeclaration
			or node.kind == AstKind.FunctionDeclaration
			or node.kind == AstKind.FunctionLiteralExpression then
			local parent = data.functionData.node.fengAttributes or rootAttributes
			local localAttributes = readBlockDirective(node.body, "function")
			local effective = copyFunctionAttributes(parent, localAttributes)
			if effective.inline and node.kind ~= AstKind.LocalFunctionDeclaration then
				logger:error("INLINE attributes currently require a local function declaration")
			end
			if effective.inline == "checked" then
				requirements.inline = true
				if effective.optimize == false then
					logger:error("INLINE(checked) cannot be used inside OPTIMIZE(false)")
				end
			end
			node.fengAttributes = effective
		elseif node.kind == AstKind.ForStatement then
			local localAttributes = readBlockDirective(node.body, "loop")
			node.fengUnroll = localAttributes.UNROLL
			if node.fengUnroll == "checked" then
				requirements.unroll = true
				if not Attributes.optimizationEnabled(data) then
					logger:error("UNROLL(checked) cannot be used inside OPTIMIZE(false)")
				end
			end
		end
	end)

	-- Reject misplaced or unsupported directives instead of emitting a runtime
	-- call to an undefined macro and silently losing the requested behavior.
	visitast(ast, function(node)
		if (node.kind == AstKind.FunctionCallStatement or node.kind == AstKind.FunctionCallExpression)
			and expressionName(node.base) == "FENG_ATTRIBUTES" then
			logger:error("FENG_ATTRIBUTES must be the first statement of a function or numeric for-loop body")
		end
	end)

	return ast, requirements
end

function Attributes.optimizationEnabled(data)
	local owner = data and data.functionData and data.functionData.node
	local attributes = owner and owner.fengAttributes
	return not attributes or attributes.optimize ~= false
end

return Attributes
