-- invariant-check.lua (v2)
-- Verifies the parentScope invariant of the AST produced by Vmify's
-- compiler, as relied upon by ConstantArray (addReferenceToHigherScope)
-- and the final emitter.
--
-- Checks performed:
--   1. For every VariableExpression / AssignmentVariable whose defining
--      scope is not global: the defining scope must be an ancestor of
--      the scope of the expression (walking parentScope upward).
--      If it is not, addReferenceToHigherScope can never reach the
--      defining scope and the emitter drops the upvalue -> runtime nil.
--      (This is the check that directly catches the reported bug class.)
--   2. For every FunctionLiteralExpression: body.scope must be either
--      the block scope that lexically contains the literal, OR (the
--      emitter's deliberate self-containment of the VM's container
--      functions, where the FunctionLiteral's own body scope is also
--      the block that holds its internal AssignmentStatements) a scope
--      whose parentScope IS an ancestor of the lexical container.
--      Anything else breaks the scope chain ConstantArray walks.
--
-- Returns the number of real violations found (0 = invariant holds).
local Ast = require("prometheus.ast");
local visitast = require("prometheus.visitast");

local function ancestorsOf(scope)
	local set = {};
	local current = scope;
	while current do
		set[current] = true;
		current = current.parentScope;
	end
	return set;
end

local function checkAstInvariant(ast)
	local violations = 0;
	local reported = {};
	local structuralCount = 0;

	local function report(msg)
		if not reported[msg] then
			reported[msg] = true;
			print("[invariant] VIOLATION: " .. msg);
		end
		violations = violations + 1;
	end

	visitast(ast, function(node, data)
		if node.kind == Ast.AstKind.VariableExpression
			or node.kind == Ast.AstKind.AssignmentVariable then
			local definingScope = node.scope;
			local exprScope = data.scope;
			if definingScope and definingScope.isGlobal then
				return; -- globals resolve independently
			end
			local ancestors = ancestorsOf(exprScope);
			if definingScope and not ancestors[definingScope] then
				report(string.format(
					"VariableExpression references scope %s (level %d) from scope %s (level %d); defining scope is NOT an ancestor; variable id=%d name=%s",
					definingScope.name, tostring(definingScope.level),
					exprScope.name, tostring(exprScope.level),
					node.id, tostring(definingScope:getVariableName(node.id))
				));
			end
		elseif node.kind == Ast.AstKind.FunctionLiteralExpression then
			local bodyScope = node.body.scope;
			local lexicalScope = data.scope;
			if lexicalScope then
				local directAncestors = ancestorsOf(lexicalScope);
				-- Structurally legit self-containment: the compiler
				-- emits container functions whose body.scope equals the
				-- block that holds their inner statements (e.g. the
				-- container function's body block contains the
				-- assignments for its own helper closures). In that
				-- case body.scope == lexicalScope or body.scope is a
				-- sibling whose parentScope is already an ancestor of
				-- the lexical container; the scope chain remains
				-- unbroken for ConstantArray's upward walk.
				if bodyScope ~= lexicalScope and not directAncestors[bodyScope] then
					local parentScope = bodyScope.parentScope;
					local parentAncestors = ancestorsOf(parentScope or {});
					local parentOk = parentScope ~= nil and parentAncestors[lexicalScope] == nil
						and parentScope == lexicalScope.parentScope; -- same generation
					if parentOk then
						structuralCount = structuralCount + 1;
					else
						report(string.format(
							"FunctionLiteral body scope %s (level %d) has parent %s instead of lexical container %s (level %d); not a structural self-containment",
							bodyScope.name, tostring(bodyScope.level),
							bodyScope.parentScope and bodyScope.parentScope.name or "nil",
							lexicalScope.name, tostring(lexicalScope.level)
						));
					end
				end
			end
		end
	end);

	if structuralCount > 0 then
		print(string.format("[invariant] %d structurally-legit self-contained closures (emitter design, not a violation)", structuralCount));
	end
	return violations;
end

return checkAstInvariant;
