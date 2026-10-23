--
-- emit.lua
--
-- This Script contains the container function body emission for the compiler.

local Ast = require("fengetheus.ast");
local Scope = require("fengetheus.scope");
local util = require("fengetheus.util");
local constants = require("fengetheus.compiler.constants");
local AstKind = Ast.AstKind;

local MAX_REGS = constants.MAX_REGS;

return function(Compiler)
    local function hasAnyEntries(tbl)
        return type(tbl) == "table" and next(tbl) ~= nil;
    end

    local function unionLookupTables(a, b)
        local out = {};
        for k, v in pairs(a or {}) do
            out[k] = v;
        end
        for k, v in pairs(b or {}) do
            out[k] = v;
        end
        return out;
    end

    -- Luau limits a single function to 255 registers and Lua 5.1 to ~200.
    -- A parallel assignment with N LHS entries where some are table-index
    -- assignments (t[k] = ...) needs up to 3 registers per entry (t, k, and
    -- the value) plus N registers for the RHS evaluation. When the merge
    -- logic combines many adjacent assignments the combined LHS can easily
    -- exceed 255, producing "Out of registers" compilation errors on large
    -- scripts. This cap keeps every merged assignment well under both limits.
    -- 60 LHS entries × ~3 regs ≈ 180, leaving headroom for RHS temporaries
    -- and any other live registers in the function.
    local MAX_MERGE_LHS = 60;

    local function canMergeParallelAssignmentStatements(statA, statB)
        if type(statA) ~= "table" or type(statB) ~= "table" then
            return false;
        end

        if statA.usesUpvals or statB.usesUpvals then
            return false;
        end

        local a = statA.statement;
        local b = statB.statement;
        if type(a) ~= "table" or type(b) ~= "table" then
            return false;
        end
        if a.kind ~= AstKind.AssignmentStatement or b.kind ~= AstKind.AssignmentStatement then
            return false;
        end

        if type(a.lhs) ~= "table" or type(a.rhs) ~= "table" or type(b.lhs) ~= "table" or type(b.rhs) ~= "table" then
            return false;
        end

        if #a.lhs ~= #a.rhs or #b.lhs ~= #b.rhs then
            return false;
        end

        -- Refuse to merge if the combined assignment would have too many LHS
        -- entries, which would exceed the Luau/Lua register limit.
        if (#a.lhs + #b.lhs) > MAX_MERGE_LHS then
            return false;
        end

        -- Avoid merging vararg/call assignments because they can affect multi-return behavior.
        local function hasUnsafeRhs(rhsList)
            for _, rhsExpr in ipairs(rhsList) do
                if type(rhsExpr) ~= "table" then
                    return true;
                end
                local kind = rhsExpr.kind;
                if kind == AstKind.FunctionCallExpression or kind == AstKind.PassSelfFunctionCallExpression or kind == AstKind.VarargExpression then
                    return true;
                end
            end
            return false;
        end
        if hasUnsafeRhs(a.rhs) or hasUnsafeRhs(b.rhs) then
            return false;
        end

        local aReads = type(statA.reads) == "table" and statA.reads or {};
        local aWrites = type(statA.writes) == "table" and statA.writes or {};
        local bReads = type(statB.reads) == "table" and statB.reads or {};
        local bWrites = type(statB.writes) == "table" and statB.writes or {};

        -- Allow merging even if one statement has no writes (e.g., x = o(x) style assignments)
        -- Only require that at least one of them has writes
        if not hasAnyEntries(aWrites) and not hasAnyEntries(bWrites) then
            return false;
        end

        for r in pairs(aReads) do
            if bWrites[r] then
                return false;
            end
        end

        for r, b in pairs(aWrites) do
            if bWrites[r] or bReads[r] then
                return false;
            end
        end

        return true;
    end

    local function mergeParallelAssignmentStatements(statA, statB)
        local lhs = {};
        local rhs = {};
        local aLhs, bLhs = statA.statement.lhs, statB.statement.lhs;
        local aRhs, bRhs = statA.statement.rhs, statB.statement.rhs;
        for i = 1, #aLhs do lhs[i] = aLhs[i]; end
        for i = 1, #bLhs do lhs[#aLhs + i] = bLhs[i]; end
        for i = 1, #aRhs do rhs[i] = aRhs[i]; end
        for i = 1, #bRhs do rhs[#aRhs + i] = bRhs[i]; end

        return {
            statement = Ast.AssignmentStatement(lhs, rhs),
            writes = unionLookupTables(statA.writes, statB.writes),
            reads = unionLookupTables(statA.reads, statB.reads),
            usesUpvals = statA.usesUpvals or statB.usesUpvals,
        };
    end

    local function mergeAdjacentParallelAssignments(blockstats)
        local merged = {};
        local i = 1;
        while i <= #blockstats do
            local stat = blockstats[i];
            i = i + 1;

            while i <= #blockstats and canMergeParallelAssignmentStatements(stat, blockstats[i]) do
                stat = mergeParallelAssignmentStatements(stat, blockstats[i]);
                i = i + 1;
            end

            table.insert(merged, stat);
        end
        return merged;
    end

	local function instructionOperands(stat)
		local seen, operands = {}, {};
		for _, registers in ipairs({ stat.reads or {}, stat.writes or {} }) do
			for registerId in pairs(registers) do
				if type(registerId) == "number" and not seen[registerId] then
					seen[registerId] = true;
					operands[#operands + 1] = registerId;
				end
			end
		end
		table.sort(operands);
		return operands;
	end

	local function reserveAncestorNames(source, target)
		local ancestor = source;
		while ancestor and not ancestor.isGlobal do
			for id = 1, #ancestor.variables do
				target:addReferenceToHigherScope(ancestor, id, 1, true);
			end
			ancestor = ancestor.parentScope;
		end
	end

	local function copyVisibleReferences(source, target)
		-- A decoded action runs under target's lexical block, even though its
		-- existing AST nodes still name variables from source and its ancestors.
		-- Reserve all those names so the opcode/index locals cannot shadow them.
		reserveAncestorNames(source, target);
		for id, count in pairs(source.referenceCounts or {}) do
			if count > 0 then target:addReferenceToHigherScope(source, id, count) end
		end
		for scope, ids in pairs(source.variablesFromHigherScopes or {}) do
			for id, count in pairs(ids) do
				if count > 0 then target:addReferenceToHigherScope(scope, id, count) end
			end
		end
	end

	local function nextInstructionOpcode(compiler)
		local opcode;
		repeat
			opcode = math.random(1, 2^24);
		until not compiler.usedInstructionOpcodes[opcode];
		compiler.usedInstructionOpcodes[opcode] = true;
		return opcode;
	end

	local function rewriteInstructionOperands(statement, operandPositions, loopScope, instructionVar, operandOffset)
		local seen = {};
		local function visit(node)
			if type(node) ~= "table" or seen[node] then return end
			seen[node] = true;

			local registerId = node.__instructionRegister;
			if registerId ~= nil then
				local operandIndex = operandPositions[registerId];
				if not operandIndex then
					error("Fengetheus instruction VM: register " .. tostring(registerId) .. " is missing from its operand list", 0);
				end
				if node.kind ~= AstKind.IndexExpression and node.kind ~= AstKind.AssignmentIndexing then
					error("Fengetheus instruction VM: unsupported register operand node " .. tostring(node.kind), 0);
				end
				node.index = Ast.IndexExpression(
					Ast.VariableExpression(loopScope, instructionVar),
					Ast.NumberExpression(operandIndex + operandOffset)
				);
				node.__instructionRegister = nil;
			end

			for key, value in pairs(node) do
				if key ~= "scope" and key ~= "globalScope" and key ~= "parentScope" and
					key ~= "variables" and key ~= "variablesLookup" and
					key ~= "referenceCounts" and key ~= "variablesFromHigherScopes" and
					key ~= "children" and key ~= "loop" and key ~= "__instructionRegister" then
					visit(value);
				end
			end
		end
		visit(statement);
	end

	local function instructionFailureCall(compiler, scope, reason)
		scope:addReferenceToHigherScope(compiler.globalScope, compiler.errorGlobalVar)
		return Ast.FunctionCallStatement(
			Ast.VariableExpression(compiler.globalScope, compiler.errorGlobalVar),
			{ Ast.StringExpression("Fengetheus: invalid instruction stream (" .. reason .. ")"), Ast.NumberExpression(0) }
		)
	end

	local function instructionTypeExpression(compiler, scope, value)
		scope:addReferenceToHigherScope(compiler.globalScope, compiler.typeGlobalVar)
		return Ast.FunctionCallExpression(
			Ast.VariableExpression(compiler.globalScope, compiler.typeGlobalVar),
			{ value }
		)
	end

	local function instructionFailureGuard(compiler, scope, condition, reason)
		local failureScope = Scope:new(scope)
		local emptyScope = Scope:new(scope)
		return Ast.IfStatement(
			condition,
			Ast.Block({ instructionFailureCall(compiler, failureScope, reason) }, failureScope),
			{},
			Ast.Block({}, emptyScope)
		)
	end

	local function buildInstructionDispatch(nodes, left, right, parentScope, loopScope, opcodeVar, instructionVar, frameScope, frameVar, handledVar, compiler)
		local dispatchScope = Scope:new(parentScope);
		dispatchScope:addReferenceToHigherScope(loopScope, opcodeVar);

		if left == right then
			local instruction = nodes[left];
			local bodyScope = Scope:new(dispatchScope);
			bodyScope:addReferenceToHigherScope(loopScope, instructionVar);
			bodyScope:addReferenceToHigherScope(frameScope, frameVar);
			rewriteInstructionOperands(instruction.statement, instruction.operandPositions, loopScope, instructionVar,
				compiler.InstructionIntegrity and 2 or 1);
			local validInstruction = Ast.EqualsExpression(
				Ast.VariableExpression(loopScope, opcodeVar),
				Ast.NumberExpression(instruction.opcode)
			);
			local skippedScope = Scope:new(dispatchScope);
			local action = { instruction.statement };
			if compiler.InstructionIntegrity then
				table.insert(action, 1, Ast.AssignmentStatement(
					{ Ast.AssignmentVariable(loopScope, handledVar) },
					{ Ast.BooleanExpression(true) }
				));
			end
			return Ast.Block({
				Ast.IfStatement(
					validInstruction,
					Ast.Block(action, bodyScope),
					{},
					Ast.Block({}, skippedScope)
				)
			}, dispatchScope);
		end

		local middle = math.floor((left + right) / 2);
		local leftOpcode = nodes[middle].opcode;
		local rightOpcode = nodes[middle + 1].opcode;
		local bound = math.floor((leftOpcode + rightOpcode) / 2);
		if bound <= leftOpcode then bound = leftOpcode + 1 end

		local leftBlock = buildInstructionDispatch(nodes, left, middle, dispatchScope, loopScope, opcodeVar, instructionVar, frameScope, frameVar, handledVar, compiler);
		local rightBlock = buildInstructionDispatch(nodes, middle + 1, right, dispatchScope, loopScope, opcodeVar, instructionVar, frameScope, frameVar, handledVar, compiler);
		return Ast.Block({
			Ast.IfStatement(
				Ast.LessThanExpression(
					Ast.VariableExpression(loopScope, opcodeVar),
					Ast.NumberExpression(bound)
				),
				leftBlock,
				{},
				rightBlock
			)
		}, dispatchScope);
	end

	local MAX_INLINE_INSTRUCTION_DISPATCH = 64

	local function buildInstructionDispatchGroups(groups, left, right, parentScope, loopScope,
		opcodeVar, instructionVar, handlerTableScope, handlerTableVar, handledVar, compiler)
		local dispatchScope = Scope:new(parentScope)
		dispatchScope:addReferenceToHigherScope(loopScope, opcodeVar)
		dispatchScope:addReferenceToHigherScope(loopScope, instructionVar)
		dispatchScope:addReferenceToHigherScope(handlerTableScope, handlerTableVar)
		if compiler.InstructionIntegrity then
			dispatchScope:addReferenceToHigherScope(loopScope, handledVar)
		end

		if left == right then
			local handlerCall = Ast.FunctionCallExpression(
				Ast.IndexExpression(
					Ast.VariableExpression(handlerTableScope, handlerTableVar),
					Ast.NumberExpression(groups[left].handlerIndex)
				),
				{
					Ast.VariableExpression(loopScope, instructionVar),
					Ast.VariableExpression(loopScope, opcodeVar),
				}
			)
			local statement
			if compiler.InstructionIntegrity then
				statement = Ast.AssignmentStatement(
					{ Ast.AssignmentVariable(loopScope, handledVar) }, { handlerCall }
				)
			else
				statement = Ast.FunctionCallStatement(handlerCall.base, handlerCall.args)
			end
			return Ast.Block({ statement }, dispatchScope)
		end

		local middle = math.floor((left + right) / 2)
		local leftMaxOpcode = groups[middle].lastOpcode
		local rightMinOpcode = groups[middle + 1].firstOpcode
		local bound = math.floor((leftMaxOpcode + rightMinOpcode) / 2)
		if bound <= leftMaxOpcode then bound = leftMaxOpcode + 1 end
		local leftBlock = buildInstructionDispatchGroups(groups, left, middle, dispatchScope,
			loopScope, opcodeVar, instructionVar, handlerTableScope, handlerTableVar, handledVar, compiler)
		local rightBlock = buildInstructionDispatchGroups(groups, middle + 1, right, dispatchScope,
			loopScope, opcodeVar, instructionVar, handlerTableScope, handlerTableVar, handledVar, compiler)
		return Ast.Block({ Ast.IfStatement(
			Ast.LessThanExpression(
				Ast.VariableExpression(loopScope, opcodeVar), Ast.NumberExpression(bound)
			),
			leftBlock, {}, rightBlock
		) }, dispatchScope)
	end

	local function buildInstructionHandlerTable(compiler, handlerParentScope, dispatchNodes, frameScope, frameVar)
		local handlerEntries, groups = {}, {}
		for first = 1, #dispatchNodes, MAX_INLINE_INSTRUCTION_DISPATCH do
			local chunk = {}
			local last = math.min(#dispatchNodes, first + MAX_INLINE_INSTRUCTION_DISPATCH - 1)
			for index = first, last do chunk[#chunk + 1] = dispatchNodes[index] end

			local handlerScope = Scope:new(handlerParentScope)
			-- The handler body contains VM-generated expressions which refer to
			-- ancestor locals directly. Reserve every visible ancestor name before
			-- assigning names to the handler arguments, and explicitly record the
			-- register-frame capture so minification cannot shadow it.
			reserveAncestorNames(handlerParentScope, handlerScope)
			handlerScope:addReferenceToHigherScope(frameScope, frameVar)
			local instructionArg = handlerScope:addVariable()
			local opcodeArg = handlerScope:addVariable()
			local handledVar
			local statements = {}
			if compiler.InstructionIntegrity then
				handledVar = handlerScope:addVariable()
				statements[#statements + 1] = Ast.LocalVariableDeclaration(
					handlerScope, { handledVar }, { Ast.BooleanExpression(false) }
				)
			end
			local dispatch = buildInstructionDispatch(
				chunk, 1, #chunk, handlerScope, handlerScope, opcodeArg, instructionArg,
				frameScope, frameVar, handledVar, compiler
			)
			statements[#statements + 1] = Ast.DoStatement(dispatch)
			if compiler.InstructionIntegrity then
				statements[#statements + 1] = Ast.ReturnStatement({
					Ast.VariableExpression(handlerScope, handledVar)
				})
			end
			handlerEntries[#handlerEntries + 1] = Ast.TableEntry(
				Ast.FunctionLiteralExpression(
					{
						Ast.VariableExpression(handlerScope, instructionArg),
						Ast.VariableExpression(handlerScope, opcodeArg),
					},
					Ast.Block(statements, handlerScope)
				)
			)
			groups[#groups + 1] = {
				firstOpcode = chunk[1].opcode,
				lastOpcode = chunk[#chunk].opcode,
				handlerIndex = #handlerEntries,
			}
		end
		return groups, Ast.TableConstructorExpression(handlerEntries)
	end

	local integrityModuli = { 2147483647, 2147483629 };

	local function updateIntegrityHash(hash, multiplier, value, modulus)
		return (hash * multiplier + value) % modulus;
	end

	local function integrityHashStatement(scope, hashVar, multiplier, modulus, value)
		local multiplierExpression
		if type(multiplier) == "number" then
			multiplierExpression = Ast.NumberExpression(multiplier)
		elseif type(multiplier) == "table" and multiplier.kind == Ast.AstKind.VariableExpression then
			multiplierExpression = Ast.VariableExpression(multiplier.scope, multiplier.id)
		else
			multiplierExpression = multiplier
		end
		return Ast.AssignmentStatement(
			{ Ast.AssignmentVariable(scope, hashVar) },
			{
				Ast.ModExpression(
					Ast.AddExpression(
						Ast.MulExpression(Ast.VariableExpression(scope, hashVar), multiplierExpression),
						value
					),
					Ast.NumberExpression(modulus)
				)
			}
		)
	end

	local function buildInstructionIntegrityCheck(compiler, functionScope, programVar, expectedCount, hashes)
		local integrityScope = Scope:new(functionScope)
		copyVisibleReferences(functionScope, integrityScope)
		local hashVars = { integrityScope:addVariable(), integrityScope:addVariable() }
		local rowScope = Scope:new(integrityScope)
		copyVisibleReferences(integrityScope, rowScope)
		local rowIndexVar = rowScope:addVariable()
		local rowVar = rowScope:addVariable()
		local rowLengthVar = rowScope:addVariable()
		local rowStatements = {
			Ast.LocalVariableDeclaration(rowScope, { rowVar }, {
				Ast.IndexExpression(
					Ast.VariableExpression(functionScope, programVar),
					Ast.VariableExpression(rowScope, rowIndexVar)
				)
			}),
			instructionFailureGuard(compiler, rowScope,
				Ast.NotEqualsExpression(
					instructionTypeExpression(compiler, rowScope, Ast.VariableExpression(rowScope, rowVar)),
					Ast.StringExpression("table")
				), "instruction row type"
			),
			Ast.LocalVariableDeclaration(rowScope, { rowLengthVar }, {
				Ast.LenExpression(Ast.VariableExpression(rowScope, rowVar))
			}),
		}
		for hashIndex = 1, 2 do
			rowStatements[#rowStatements + 1] = integrityHashStatement(
				integrityScope, hashVars[hashIndex], hashes[hashIndex].multiplier, integrityModuli[hashIndex],
				Ast.VariableExpression(rowScope, rowIndexVar)
			)
			rowStatements[#rowStatements + 1] = integrityHashStatement(
				integrityScope, hashVars[hashIndex], hashes[hashIndex].multiplier, integrityModuli[hashIndex],
				Ast.VariableExpression(rowScope, rowLengthVar)
			)
		end

		local fieldScope = Scope:new(rowScope)
		copyVisibleReferences(rowScope, fieldScope)
		local fieldIndexVar = fieldScope:addVariable()
		local fieldValueVar = fieldScope:addVariable()
		local fieldStatements = {
			Ast.LocalVariableDeclaration(fieldScope, { fieldValueVar }, {
				Ast.IndexExpression(
					Ast.VariableExpression(rowScope, rowVar),
					Ast.VariableExpression(fieldScope, fieldIndexVar)
				)
			}),
			instructionFailureGuard(compiler, fieldScope,
				Ast.NotEqualsExpression(
					instructionTypeExpression(compiler, fieldScope, Ast.VariableExpression(fieldScope, fieldValueVar)),
					Ast.StringExpression("number")
				), "instruction field type"
			),
		}
		for hashIndex = 1, 2 do
			fieldStatements[#fieldStatements + 1] = integrityHashStatement(
				integrityScope, hashVars[hashIndex], hashes[hashIndex].multiplier, integrityModuli[hashIndex],
				Ast.VariableExpression(fieldScope, fieldValueVar)
			)
		end
		rowStatements[#rowStatements + 1] = Ast.ForStatement(
			fieldScope, fieldIndexVar, Ast.NumberExpression(1),
			Ast.VariableExpression(rowScope, rowLengthVar), Ast.NumberExpression(1),
			Ast.Block(fieldStatements, fieldScope), rowScope
		)

		local rowLoop = Ast.ForStatement(
			rowScope, rowIndexVar, Ast.NumberExpression(1),
			Ast.LenExpression(Ast.VariableExpression(functionScope, programVar)), Ast.NumberExpression(1),
			Ast.Block(rowStatements, rowScope), integrityScope
		)
		local statements = {
			Ast.LocalVariableDeclaration(integrityScope, hashVars, {
				type(hashes[1].seed) == "number" and Ast.NumberExpression(hashes[1].seed) or hashes[1].seed,
				type(hashes[2].seed) == "number" and Ast.NumberExpression(hashes[2].seed) or hashes[2].seed,
			}),
			integrityHashStatement(
				integrityScope, hashVars[1], hashes[1].multiplier, integrityModuli[1],
				Ast.LenExpression(Ast.VariableExpression(functionScope, programVar))
			),
			integrityHashStatement(
				integrityScope, hashVars[2], hashes[2].multiplier, integrityModuli[2],
				Ast.LenExpression(Ast.VariableExpression(functionScope, programVar))
			),
			rowLoop,
		}
		local invalidHash = Ast.OrExpression(
			Ast.NotEqualsExpression(
				Ast.VariableExpression(integrityScope, hashVars[1]),
				type(hashes[1].value) == "number" and Ast.NumberExpression(hashes[1].value) or hashes[1].value
			),
			Ast.NotEqualsExpression(
				Ast.VariableExpression(integrityScope, hashVars[2]),
				type(hashes[2].value) == "number" and Ast.NumberExpression(hashes[2].value) or hashes[2].value
			)
		)
		statements[#statements + 1] = instructionFailureGuard(
			compiler, integrityScope, invalidHash, "instruction data fingerprint"
		)
		return Ast.Block({
			instructionFailureGuard(compiler, functionScope,
				Ast.NotEqualsExpression(
					instructionTypeExpression(compiler, functionScope, Ast.VariableExpression(functionScope, programVar)),
					Ast.StringExpression("table")
				), "block program type"
			),
			instructionFailureGuard(compiler, functionScope,
				Ast.NotEqualsExpression(
					Ast.LenExpression(Ast.VariableExpression(functionScope, programVar)),
					Ast.VariableExpression(functionScope, expectedCount)
				), "block program length"
			),
			Ast.DoStatement(Ast.Block(statements, integrityScope)),
		}, functionScope)
	end

	local function buildInstructionIntegrityVerifier(compiler)
		local functionScope = Scope:new(compiler.containerFuncScope)
		local programVar = functionScope:addVariable()
		local metadataVar = functionScope:addVariable()
		local metadataIds, metadataValues = {}, {}
		for index = 1, 7 do
			metadataIds[index] = functionScope:addVariable()
			metadataValues[index] = Ast.IndexExpression(
				Ast.VariableExpression(functionScope, metadataVar), Ast.NumberExpression(index)
			)
		end
		local hashes = {
			{
				seed = Ast.VariableExpression(functionScope, metadataIds[2]),
				multiplier = Ast.VariableExpression(functionScope, metadataIds[3]),
				value = Ast.VariableExpression(functionScope, metadataIds[4]),
			},
			{
				seed = Ast.VariableExpression(functionScope, metadataIds[5]),
				multiplier = Ast.VariableExpression(functionScope, metadataIds[6]),
				value = Ast.VariableExpression(functionScope, metadataIds[7]),
			},
		}
		local body = buildInstructionIntegrityCheck(
			compiler, functionScope, programVar, metadataIds[1], hashes
		)
		table.insert(body.statements, 1, Ast.LocalVariableDeclaration(functionScope, metadataIds, metadataValues))
		table.insert(body.statements, 1, instructionFailureGuard(compiler, functionScope,
			Ast.NotEqualsExpression(
				instructionTypeExpression(compiler, functionScope, Ast.VariableExpression(functionScope, metadataVar)),
				Ast.StringExpression("table")
			), "block integrity metadata type"
		))
		return Ast.LocalFunctionDeclaration(
			compiler.containerFuncScope,
			compiler.instructionIntegrityVerifierVar,
			{
				Ast.VariableExpression(functionScope, programVar),
				Ast.VariableExpression(functionScope, metadataVar),
			},
			body
		)
	end

	local function compileInstructionBlock(compiler, block, stats, programRows, integrityMetadataRows,
		instructionDispatchRows, instructionDispatchTablesVar)
		local instructions, rows = {}, {};
		for _, stat in ipairs(stats) do
			local operands = instructionOperands(stat);
			local positions = {};
			local opcode = nextInstructionOpcode(compiler);
			local ordinal = #instructions + 1;
			local row = { Ast.TableEntry(Ast.NumberExpression(opcode)) };
			if compiler.InstructionIntegrity then
				row[#row + 1] = Ast.TableEntry(Ast.NumberExpression(ordinal));
			end
			for index, registerId in ipairs(operands) do
				positions[registerId] = index;
				row[#row + 1] = Ast.TableEntry(Ast.NumberExpression(registerId));
			end
			instructions[#instructions + 1] = {
				opcode = opcode,
				ordinal = compiler.InstructionIntegrity and ordinal or nil,
				operands = compiler.InstructionIntegrity and operands or nil,
				operandPositions = positions,
				statement = stat.statement,
			};
			rows[#rows + 1] = Ast.TableEntry(Ast.TableConstructorExpression(row));
		end
		local hashes;
		if compiler.InstructionIntegrity then
			local metadata = { Ast.TableEntry(Ast.NumberExpression(#instructions)) };
			hashes = {}
			for hashIndex = 1, 2 do
				local seed = math.random(1, 32767)
				local multiplier = math.random(257, 32767)
				local modulus = integrityModuli[hashIndex]
				local hash = updateIntegrityHash(seed, multiplier, #instructions, modulus)
				for _, instruction in ipairs(instructions) do
					hash = updateIntegrityHash(hash, multiplier, instruction.ordinal, modulus)
					hash = updateIntegrityHash(hash, multiplier, #instruction.operands + 2, modulus)
					hash = updateIntegrityHash(hash, multiplier, instruction.opcode, modulus)
					hash = updateIntegrityHash(hash, multiplier, instruction.ordinal, modulus)
					for _, registerId in ipairs(instruction.operands) do
						hash = updateIntegrityHash(hash, multiplier, registerId, modulus)
					end
				end
				hashes[hashIndex] = { seed = seed, multiplier = multiplier, value = hash }
				metadata[#metadata + 1] = Ast.TableEntry(Ast.NumberExpression(seed))
				metadata[#metadata + 1] = Ast.TableEntry(Ast.NumberExpression(multiplier))
				metadata[#metadata + 1] = Ast.TableEntry(Ast.NumberExpression(hash))
			end
			integrityMetadataRows[#integrityMetadataRows + 1] = Ast.KeyedTableEntry(
				Ast.NumberExpression(block.id), Ast.TableConstructorExpression(metadata)
			);
		end

		-- Store the numeric program once with the wrapper. Each instruction
		-- carries its virtual-register operands; dispatch resolves them against
		-- the current invocation's frame table.
		programRows[#programRows + 1] = Ast.KeyedTableEntry(
			Ast.NumberExpression(block.id),
			Ast.TableConstructorExpression(rows)
		);

		local blockScope = block.scope;
		-- The per-block program and instruction pointer are locals in blockScope.
		-- Reserve outer VM locals first (especially the main position variable),
		-- otherwise an instruction pointer can shadow the block-dispatch state.
		reserveAncestorNames(blockScope.parentScope, blockScope);
		local programVar = blockScope:addVariable();
		local instructionIndexVar = blockScope:addVariable();
		local loopScope = Scope:new(blockScope);
		copyVisibleReferences(blockScope, loopScope);
		local instructionVar = loopScope:addVariable();
		local opcodeVar = loopScope:addVariable();
		blockScope:addReferenceToHigherScope(compiler.scope, compiler.instructionProgramsVar);
		if compiler.InstructionIntegrity then
			blockScope:addReferenceToHigherScope(compiler.scope, compiler.instructionIntegrityMetadataVar);
		end
		blockScope:addReferenceToHigherScope(compiler.containerFuncScope, compiler.registerFrameVar);
		if compiler.InstructionIntegrity then
			blockScope:addReferenceToHigherScope(compiler.containerFuncScope, compiler.instructionIntegrityVerifierVar);
		end
		loopScope:addReferenceToHigherScope(blockScope, programVar);
		loopScope:addReferenceToHigherScope(blockScope, instructionIndexVar);

		local dispatchNodes = {};
		for index, instruction in ipairs(instructions) do dispatchNodes[index] = instruction end
		table.sort(dispatchNodes, function(left, right) return left.opcode < right.opcode end);
		local instructionHandlerTableVar, instructionHandlerGroups
		if #dispatchNodes > MAX_INLINE_INSTRUCTION_DISPATCH then
			instructionHandlerTableVar = blockScope:addVariable()
			blockScope:addReferenceToHigherScope(compiler.containerFuncScope, instructionDispatchTablesVar)
			local handlerTableAst
			instructionHandlerGroups, handlerTableAst = buildInstructionHandlerTable(
				compiler, compiler.containerFuncScope, dispatchNodes,
				compiler.containerFuncScope, compiler.registerFrameVar
			)
			instructionDispatchRows[#instructionDispatchRows + 1] = Ast.KeyedTableEntry(
				Ast.NumberExpression(block.id), handlerTableAst
			)
		end
		local loopStatements = {};
		local handledVar;
		if #dispatchNodes > 0 then
			loopStatements[#loopStatements + 1] = Ast.LocalVariableDeclaration(loopScope, { instructionVar }, {
				Ast.IndexExpression(
					Ast.VariableExpression(blockScope, programVar),
					Ast.VariableExpression(blockScope, instructionIndexVar)
				)
			});
			loopStatements[#loopStatements + 1] = Ast.LocalVariableDeclaration(loopScope, { opcodeVar }, {
				Ast.IndexExpression(Ast.VariableExpression(loopScope, instructionVar), Ast.NumberExpression(1))
			});
			if compiler.InstructionIntegrity then
				handledVar = loopScope:addVariable();
				loopStatements[#loopStatements + 1] = Ast.LocalVariableDeclaration(loopScope, { handledVar }, {
					Ast.BooleanExpression(false)
				});
			end
			local dispatch
			if instructionHandlerGroups then
				dispatch = buildInstructionDispatchGroups(
					instructionHandlerGroups, 1, #instructionHandlerGroups, loopScope, loopScope,
					opcodeVar, instructionVar, blockScope, instructionHandlerTableVar,
					handledVar, compiler
				)
			else
				dispatch = buildInstructionDispatch(
					dispatchNodes, 1, #dispatchNodes, loopScope, loopScope,
					opcodeVar, instructionVar, compiler.containerFuncScope, compiler.registerFrameVar,
					handledVar, compiler
				)
			end
			loopStatements[#loopStatements + 1] = Ast.DoStatement(dispatch);
			if compiler.InstructionIntegrity then
				loopStatements[#loopStatements + 1] = instructionFailureGuard(compiler, loopScope,
					Ast.NotExpression(Ast.VariableExpression(loopScope, handledVar)), "unknown opcode"
				);
			end
			loopStatements[#loopStatements + 1] = Ast.AssignmentStatement(
				{ Ast.AssignmentVariable(blockScope, instructionIndexVar) },
				{ Ast.AddExpression(Ast.VariableExpression(blockScope, instructionIndexVar), Ast.NumberExpression(1)) }
			);
		end
		local loopBody = Ast.Block(loopStatements, loopScope);
		local loop = Ast.WhileStatement(loopBody,
			Ast.LessThanOrEqualsExpression(
				Ast.VariableExpression(blockScope, instructionIndexVar),
				Ast.LenExpression(Ast.VariableExpression(blockScope, programVar))
			)
		);
		local statements = {};
		statements[#statements + 1] = Ast.LocalVariableDeclaration(blockScope, { programVar }, {
			Ast.IndexExpression(
				Ast.VariableExpression(compiler.scope, compiler.instructionProgramsVar),
				Ast.NumberExpression(block.id)
			)
		})
		statements[#statements + 1] = Ast.LocalVariableDeclaration(
			blockScope, { instructionIndexVar }, { Ast.NumberExpression(1) }
		)
		if instructionHandlerTableVar then
			statements[#statements + 1] = Ast.LocalVariableDeclaration(
				blockScope, { instructionHandlerTableVar }, {
					Ast.IndexExpression(
						Ast.VariableExpression(compiler.containerFuncScope, instructionDispatchTablesVar),
						Ast.NumberExpression(block.id)
					)
				}
			)
		end
		if compiler.InstructionIntegrity then
			statements[#statements + 1] = Ast.FunctionCallStatement(
				Ast.VariableExpression(compiler.containerFuncScope, compiler.instructionIntegrityVerifierVar),
				{
					Ast.VariableExpression(blockScope, programVar),
					Ast.IndexExpression(
						Ast.VariableExpression(compiler.scope, compiler.instructionIntegrityMetadataVar),
						Ast.NumberExpression(block.id)
					),
				}
			);
		end
		statements[#statements + 1] = loop;
		if compiler.InstructionIntegrity then
			statements[#statements + 1] = instructionFailureGuard(compiler, blockScope,
				Ast.NotEqualsExpression(
					Ast.VariableExpression(blockScope, instructionIndexVar),
					Ast.NumberExpression(#instructions + 1)
			), "final instruction index"
			);
		end

		return {
			id = block.id,
			block = Ast.Block(statements, blockScope),
		};
	end

    function Compiler:emitContainerFuncBody()
        local blocks = {};
		local instructionPrograms = {};
		local integrityMetadata = {};
		local instructionDispatchRows = {};
		if self.InstructionVM then
			self.instructionDispatchTablesVar = self.containerFuncScope:addVariable();
		end
		if self.InstructionIntegrity then
			self.instructionIntegrityVerifierVar = self.containerFuncScope:addVariable();
		end

        util.shuffle(self.blocks);

        for i, block in ipairs(self.blocks) do
            local id = block.id;
            local blockstats = block.statements;

            for i = 2, #blockstats do
                local stat = blockstats[i];
                local reads = stat.reads;
                local writes = stat.writes;
                local maxShift = 0;
                local usesUpvals = stat.usesUpvals;
                for shift = 1, i - 1 do
                    local stat2 = blockstats[i - shift];

                    if stat2.usesUpvals or usesUpvals then
                        break;
                    end

                    local reads2 = stat2.reads;
                    local writes2 = stat2.writes;
                    local f = true;

                    for r, b in pairs(reads2) do
                        if(writes[r]) then
                            f = false;
                            break;
                        end
                    end

                    if f then
                        for r, b in pairs(writes2) do
                            if(writes[r]) then
                                f = false;
                                break;
                            end
                            if(reads[r]) then
                                f = false;
                                break;
                            end
                        end
                    end

                    if not f then
                        break
                    end

                    maxShift = shift;
                end

                local shift = math.random(0, maxShift);
                for j = 1, shift do
                    blockstats[i - j], blockstats[i - j + 1] = blockstats[i - j + 1], blockstats[i - j];
                end
            end

            local mergedBlockStats = mergeAdjacentParallelAssignments(blockstats);
            for _=1, 7 do
                mergedBlockStats = mergeAdjacentParallelAssignments(mergedBlockStats);
            end

			local emittedBlock;
			if self.InstructionVM then
				emittedBlock = compileInstructionBlock(self, block, mergedBlockStats, instructionPrograms,
					integrityMetadata, instructionDispatchRows, self.instructionDispatchTablesVar);
			else
				blockstats = {};
				for _, stat in ipairs(mergedBlockStats) do
					table.insert(blockstats, stat.statement);
				end
				emittedBlock = { id = id, index = i, block = Ast.Block(blockstats, block.scope) };
			end
			table.insert(blocks, emittedBlock);
        end
		if self.InstructionVM then
			self.instructionProgramsAst = Ast.TableConstructorExpression(instructionPrograms);
		end
		if self.InstructionIntegrity then
			self.instructionIntegrityMetadataAst = Ast.TableConstructorExpression(integrityMetadata);
		end
		if #instructionDispatchRows > 0 then
			self.instructionDispatchTablesAst = Ast.TableConstructorExpression(instructionDispatchRows);
		end

        table.sort(blocks, function(a, b) return a.id < b.id end);

        -- Build a strict threshold condition between adjacent block IDs.
        -- Using a midpoint avoids exact-id comparisons while preserving dispatch.
        local function buildBlockThresholdCondition(scope, leftId, rightId, useAndOr)
            -- The threshold must be STRICTLY GREATER than leftId so that a
            -- block whose id == leftId satisfies `pos < bound` and is
            -- dispatched to its own branch. A naive floor midpoint equals
            -- leftId when leftId and rightId are adjacent integers, which
            -- drops that block into the wrong branch (the #155/#18
            -- "attempt to index a nil value" crash). Bump it to leftId+1
            -- in that case; ids are distinct & sorted so leftId+1 <= rightId.
            local bound = math.floor((leftId + rightId) / 2);
            if bound <= leftId then
                bound = leftId + 1;
            end
            local posExpr = self:pos(scope);
            local boundExpr = Ast.NumberExpression(self:encodeDispatchValue(bound));
			if self.DispatchMask then
				local magnitude = math.max(1, math.floor(self.DispatchMaskMagnitude or 4096));
				local jitter = math.random(-magnitude, magnitude);
				if jitter == 0 then jitter = magnitude; end
				posExpr = Ast.AddExpression(posExpr, Ast.NumberExpression(jitter));
				boundExpr = Ast.NumberExpression(self:encodeDispatchValue(bound) + jitter);
			end

            if useAndOr then
                -- Kept for compatibility with caller variations.
                return Ast.LessThanExpression(posExpr, boundExpr);
            else
                local variant = math.random(1, 2);
                if variant == 1 then
                    return Ast.LessThanExpression(posExpr, boundExpr);
                else
                    return Ast.GreaterThanExpression(boundExpr, posExpr);
                end
            end
        end

        -- Build an elseif chain for a range of blocks
        local function buildElseifChain(tb, l, r, pScope)
            -- Handle invalid range by returning an empty block
            if r < l then
                local emptyScope = Scope:new(pScope);
                return Ast.Block({}, emptyScope);
            end

            local len = r - l + 1;

            -- For single block
            if len == 1 then
                tb[l].block.scope:setParent(pScope);
                return tb[l].block;
            end

            -- For small ranges, use elseif chain
            if len <= 4 then
                local ifScope = Scope:new(pScope);
                local elseifs = {};

                -- First block uses the first midpoint threshold
                tb[l].block.scope:setParent(ifScope);
                local firstCondition = buildBlockThresholdCondition(ifScope, tb[l].id, tb[l + 1].id, false);
                local firstBlock = tb[l].block;

                -- Middle blocks use their upper midpoint threshold
                for i = l + 1, r - 1 do
                    tb[i].block.scope:setParent(ifScope);
                    local condition = buildBlockThresholdCondition(ifScope, tb[i].id, tb[i + 1].id, false);
                    table.insert(elseifs, {
                        condition = condition,
                        body = tb[i].block
                    });
                end

                -- Last block becomes else
                tb[r].block.scope:setParent(ifScope);
                local elseBlock = tb[r].block;

                return Ast.Block({
                    Ast.IfStatement(firstCondition, firstBlock, elseifs, elseBlock);
                }, ifScope);
            end

            -- For larger ranges, use binary split with and/or chaining
            local mid = l + math.ceil(len / 2);
            local leftMaxId = tb[mid - 1].id;
            local rightMinId = tb[mid].id;
            -- The split threshold must sit STRICTLY BETWEEN leftMaxId and
            -- rightMinId. condStyle 1/2 (`pos < bound` / `bound > pos`,
            -- true=left) need leftMaxId < bound <= rightMinId; condStyle 3
            -- (`pos > bound`, true=right) needs leftMaxId <= bound < rightMinId,
            -- i.e. a gap of at least 2. When the ids are adjacent (gap 1)
            -- there is no integer strictly between them, so condStyle 3 is
            -- impossible -- force 1 or 2. A naive floor midpoint equals
            -- leftMaxId in the adjacent case, dropping the left block into
            -- the wrong branch (the #155/#18 nil-index crash), so bump it to
            -- leftMaxId+1. This is a correctness fix only; the dispatch tree
            -- shape is unchanged.
            local gap = rightMinId - leftMaxId;
            local bound = math.floor((leftMaxId + rightMinId) / 2);
            if bound <= leftMaxId then
                bound = leftMaxId + 1;
            end
            local ifScope = Scope:new(pScope);

            local lBlock = buildElseifChain(tb, l, mid - 1, ifScope);
            local rBlock = buildElseifChain(tb, mid, r, ifScope);

            -- Randomly choose between different condition styles. condStyle 3
            -- (`pos > bound`, reversed branches) requires a gap >= 2; for an
            -- adjacent-id split it cannot produce a correct dispatch, so pick
            -- from {1, 2} instead.
            local condStyle = (gap >= 2) and math.random(1, 3) or math.random(1, 2);
            local condition;
            local trueBlock, falseBlock;
			local posExpr = self:pos(ifScope);
			local boundExpr = Ast.NumberExpression(self:encodeDispatchValue(bound));
			if self.DispatchMask then
				local magnitude = math.max(1, math.floor(self.DispatchMaskMagnitude or 4096));
				local jitter = math.random(-magnitude, magnitude);
				if jitter == 0 then jitter = magnitude; end
				posExpr = Ast.AddExpression(posExpr, Ast.NumberExpression(jitter));
				boundExpr = Ast.NumberExpression(self:encodeDispatchValue(bound) + jitter);
			end

            if condStyle == 1 then
                -- pos < bound
                condition = Ast.LessThanExpression(posExpr, boundExpr);
                trueBlock, falseBlock = lBlock, rBlock;
            elseif condStyle == 2 then
                -- bound > pos
                condition = Ast.GreaterThanExpression(boundExpr, posExpr);
                trueBlock, falseBlock = lBlock, rBlock;
            else
                -- Equivalent split using strict > with branches reversed.
                condition = Ast.GreaterThanExpression(posExpr, boundExpr);
                trueBlock, falseBlock = rBlock, lBlock;
            end

            return Ast.Block({
                Ast.IfStatement(condition, trueBlock, {}, falseBlock);
            }, ifScope);
        end

        local whileBody = buildElseifChain(blocks, 1, #blocks, self.containerFuncScope);
        if self.whileScope then
            -- Ensure whileScope is properly connected
            self.whileScope:setParent(self.containerFuncScope);
        end

        self.whileScope:addReferenceToHigherScope(self.containerFuncScope, self.returnVar, 1);
        self.whileScope:addReferenceToHigherScope(self.containerFuncScope, self.posVar);

        self.containerFuncScope:addReferenceToHigherScope(self.scope, self.unpackVar);
        self.containerFuncScope:addReferenceToHigherScope(self.scope, self.expandVar);

        local declarations = {
            self.returnVar,
        }

        for i, var in pairs(self.registerVars) do
            if(i ~= MAX_REGS) then
                table.insert(declarations, var);
            end
        end

        local stats = {}
		local integrityVerifier
		if self.InstructionIntegrity then
			integrityVerifier = buildInstructionIntegrityVerifier(self);
		end

        if not self.InstructionVM and self.maxUsedRegister >= MAX_REGS then
            table.insert(stats, Ast.LocalVariableDeclaration(self.containerFuncScope, {self.registerVars[MAX_REGS]}, {Ast.TableConstructorExpression({})}));
        end

        table.insert(stats, Ast.LocalVariableDeclaration(self.containerFuncScope, util.shuffle(declarations), {}));
		if self.InstructionVM then
			table.insert(stats, Ast.LocalVariableDeclaration(self.containerFuncScope, { self.registerFrameVar }, { Ast.TableConstructorExpression({}) }));
		end
		if self.instructionDispatchTablesAst then
			table.insert(stats, Ast.LocalVariableDeclaration(self.containerFuncScope,
				{ self.instructionDispatchTablesVar }, { self.instructionDispatchTablesAst }))
		end
		if integrityVerifier then table.insert(stats, integrityVerifier) end
		if self.InstructionIntegrity then
			self.containerFuncScope:addReferenceToHigherScope(self.scope, self.instructionProgramsVar)
			self.containerFuncScope:addReferenceToHigherScope(self.scope, self.instructionIntegrityMetadataVar)
			stats[#stats + 1] = instructionFailureGuard(self, self.containerFuncScope,
				Ast.NotEqualsExpression(
					instructionTypeExpression(self, self.containerFuncScope,
						Ast.VariableExpression(self.scope, self.instructionProgramsVar)
					),
					Ast.StringExpression("table")
				), "instruction program table type"
			)
			stats[#stats + 1] = instructionFailureGuard(self, self.containerFuncScope,
				Ast.NotEqualsExpression(
					instructionTypeExpression(self, self.containerFuncScope,
						Ast.VariableExpression(self.scope, self.instructionIntegrityMetadataVar)
					),
					Ast.StringExpression("table")
				), "integrity metadata table type"
			)
		end

        table.insert(stats, Ast.WhileStatement(whileBody, Ast.VariableExpression(self.containerFuncScope, self.posVar)));


        table.insert(stats, Ast.AssignmentStatement({
            Ast.AssignmentVariable(self.containerFuncScope, self.posVar)
        }, {
            Ast.LenExpression(Ast.VariableExpression(self.containerFuncScope, self.detectGcCollectVar))
        }));

        -- FIX#3 channel 10: hole-safe expansion of the container's return
        -- value; unpack(t,1,t[0]) never consults #t so nils survive.
        table.insert(stats, Ast.ReturnStatement{
            Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.expandVar), {
                Ast.VariableExpression(self.containerFuncScope, self.returnVar)
            });
        });

        return Ast.Block(stats, self.containerFuncScope);
    end
end

