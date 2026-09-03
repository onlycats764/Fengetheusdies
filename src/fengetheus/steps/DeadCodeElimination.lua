--
-- DeadCodeElimination.lua
--
-- This Step removes code that is provably unreachable or has no effect,
-- reducing the size of the AST before the heavy obfuscation passes (Vmify,
-- ConstantArray) run. Smaller AST -> smaller obfuscated output and faster
-- runtime. This is a pure optimization pass; it never changes observable
-- behaviour.
--
-- Transformations implemented:
--
--   1. Unreachable statements after a terminator.
--      In any block, statements that follow a `return`, `break`, or
--      `continue` are unreachable and are removed. This is the Luraph
--      "unreachable code removed entirely" optimization.
--
--   2. Constant-condition if-statement flattening.
--      `if true  then B end`             -> B's statements (inlined)
--      `if false then B end`             -> removed (no else)
--      `if true  then B else C end`      -> B's statements (inlined)
--      `if false then B else C end`      -> C's statements (inlined)
--      `if false then B elseif true then D else C end` -> D's statements
--      A constant truthy/falsy condition is one whose Ast node is a literal
--      (Boolean / Nil / Number / String). A non-empty string and non-zero
--      number are truthy in Lua; false and nil are falsy; "" is truthy, 0 is
--      truthy (Lua has no falsy number).
--
--   3. Constant-condition loop elimination.
--      `while false do B end`  -> removed (body never executes)
--      `repeat B until true`   -> B runs exactly once -> flatten into parent
--                                 block (only when B contains no `break`/
--                                 `continue` that target this loop, since
--                                 flattening would orphan those jumps).
--      `while true do B end`   -> kept (infinite loop is NOT dead code).
--      `repeat B until false`  -> kept (infinite).
--
--   4. Empty statement removal.
--      `do end` (empty do-block) -> removed.
--      An if-statement whose surviving body is an empty block and which has
--      no else -> the whole if is removed.
--
-- The pass runs as a single visitast walk. Statement postvisit may return
-- multiple statements (replacing the original), which is how if-flattening
-- and repeat-until-true inlining work. To DELETE a statement (return zero
-- replacements) we use a sentinel `REMOVED` because visitStatement's
-- postvisit treats a zero-value return as "keep the original". The block
-- postvisit filters out any statement equal to `REMOVED`.
--
-- Inspired by Luraph v15 OPTIMIZE: "unreachable code removed entirely" and
-- "redundant branches eliminated at higher optimize levels".
--
-- Correctness notes:
--   * We only treat a condition as constant when it is a literal node
--     (isConstant == true). Metamethods cannot be involved in a literal
--     truthiness test, so the Lua truthiness rule (false and nil are falsy,
--     everything else truthy) is exact.
--   * `repeat ... until true` flattening is gated on the absence of break/
--     continue targeting the repeat's loop, because those statements would
--     become invalid once the loop scope is removed.
--   * Statements after a return/break/continue are removed only within the
--     same lexical block; a return inside a nested if does not terminate
--     the outer block.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local AstKind = Ast.AstKind

-- Lua 5.3 (host) compat.
local unpack = table.unpack or unpack

-- Sentinel returned by the statement postvisit to signal "delete this
-- statement". Must be a unique table so identity comparison works.
local REMOVED = {}

local DeadCodeElimination = Step:extend()
DeadCodeElimination.Description = "Remove unreachable statements and fold constant-condition branches and loops"
DeadCodeElimination.Name = "Dead Code Elimination"

DeadCodeElimination.SettingsDescriptor = {
	RemoveAfterTerminator = {
		type = "boolean",
		default = true,
	},
	FoldConstantIf = {
		type = "boolean",
		default = true,
	},
	FoldConstantLoops = {
		type = "boolean",
		default = true,
	},
	RemoveEmpty = {
		type = "boolean",
		default = true,
	},
}

function DeadCodeElimination:init(_)
	-- No per-instance setup required. Settings are populated by Step:new.
end

-- Lua truthiness: only false and nil are falsy.
local function isFalsyValue(v)
	return v == nil or v == false
end

local function isConstantFalsy(expr)
	return expr ~= nil and expr.isConstant == true and isFalsyValue(expr.value)
end

local function isConstantTruthy(expr)
	return expr ~= nil and expr.isConstant == true and not isFalsyValue(expr.value)
end

local function blockIsEmpty(block)
	if block == nil then return true end
	if block.statements == nil then return true end
	for _, st in ipairs(block.statements) do
		if st ~= REMOVED and st.kind ~= AstKind.NopStatement then
			return false
		end
	end
	return true
end

-- Whether `block` contains a break or continue that targets `loopStmt`.
local function blockHasLoopExitFor(block, loopStmt)
	if block == nil or block.statements == nil then return false end
	for _, st in ipairs(block.statements) do
		if st == REMOVED then
			-- skip
		elseif st.kind == AstKind.BreakStatement or st.kind == AstKind.ContinueStatement then
			if st.loop == loopStmt then
				return true
			end
		elseif st.kind == AstKind.IfStatement then
			if blockHasLoopExitFor(st.body, loopStmt) then return true end
			if st.elseifs then
				for _, eif in ipairs(st.elseifs) do
					if blockHasLoopExitFor(eif.body, loopStmt) then return true end
				end
			end
			if blockHasLoopExitFor(st.elsebody, loopStmt) then return true end
		elseif st.kind == AstKind.DoStatement then
			if blockHasLoopExitFor(st.body, loopStmt) then return true end
		end
	end
	return false
end

-- Resolve an if-statement with a constant condition to inlineable statements.
-- Returns:
--   * a list of statements to inline, OR
--   * the sentinel REMOVED (delete the if entirely), OR
--   * nil (keep the if as-is, condition not statically resolvable).
local function resolveConstantIf(stmt)
	local cond = stmt.condition
	if isConstantTruthy(cond) then
		return stmt.body.statements
	end
	if isConstantFalsy(cond) then
		if stmt.elseifs then
			for _, eif in ipairs(stmt.elseifs) do
				if isConstantTruthy(eif.condition) then
					return eif.body.statements
				end
				if not isConstantFalsy(eif.condition) then
					return nil  -- non-constant elseif: keep the if
				end
			end
		end
		if stmt.elsebody then
			return stmt.elsebody.statements
		end
		return REMOVED
	end
	return nil
end

-- Trim trailing dead elseif/else branches when an earlier elseif is
-- constant-true (and the main condition is non-constant). Returns the
-- (possibly modified) if-statement.
local function trimDeadElseifs(stmt)
	if not stmt.elseifs or #stmt.elseifs == 0 then
		return stmt
	end
	if isConstantTruthy(stmt.condition) or isConstantFalsy(stmt.condition) then
		return stmt  -- resolveConstantIf handles these
	end
	local cutIdx = nil
	for i, eif in ipairs(stmt.elseifs) do
		if isConstantTruthy(eif.condition) then
			cutIdx = i
			break
		end
		if not isConstantFalsy(eif.condition) then
			break
		end
	end
	if cutIdx == nil then
		return stmt
	end
	local newElseifs = {}
	for i = 1, cutIdx do
		newElseifs[#newElseifs + 1] = stmt.elseifs[i]
	end
	stmt.elseifs = newElseifs
	stmt.elsebody = nil
	return stmt
end

function DeadCodeElimination:apply(ast)
	-- Statement postvisit: returns 0, 1, or many replacement statements.
	-- To delete, return REMOVED (a single sentinel value).
	local function stmtPostvisit(stmt, data)
		local k = stmt.kind

		if k == AstKind.IfStatement and self.FoldConstantIf then
			local resolved = resolveConstantIf(stmt)
			if resolved == REMOVED then
				return REMOVED
			end
			if resolved ~= nil then
				-- Inline the chosen body's statements. If the body is empty,
				-- delete the if.
				if resolved and #resolved > 0 then
					return unpack(resolved)
				else
					return REMOVED
				end
			end
			-- Non-constant leading condition: trim dead trailing branches.
			stmt = trimDeadElseifs(stmt)
			-- Empty-body cleanup.
			if self.RemoveEmpty and blockIsEmpty(stmt.body)
				and (not stmt.elseifs or #stmt.elseifs == 0)
				and (stmt.elsebody == nil or blockIsEmpty(stmt.elsebody)) then
				if stmt.elsebody and not blockIsEmpty(stmt.elsebody) then
					return unpack(stmt.elsebody.statements)
				end
				return REMOVED
			end
			return stmt
		end

		if k == AstKind.WhileStatement and self.FoldConstantLoops then
			if isConstantFalsy(stmt.condition) then
				return REMOVED
			end
			return stmt
		end

		if k == AstKind.RepeatStatement and self.FoldConstantLoops then
			if isConstantTruthy(stmt.condition) then
				if not blockHasLoopExitFor(stmt.body, stmt) then
					if stmt.body and stmt.body.statements and #stmt.body.statements > 0 then
						return unpack(stmt.body.statements)
					else
						return REMOVED
					end
				end
			end
			return stmt
		end

		if k == AstKind.DoStatement and self.RemoveEmpty then
			if blockIsEmpty(stmt.body) then
				return REMOVED
			end
			return stmt
		end

		return stmt
	end

	-- Block postvisit: filter REMOVED sentinels and unreachable statements
	-- after a terminator.
	local function blockPostvisit(block, data)
		if block.statements == nil then return block end
		local kept = {}
		local terminated = false
		for _, st in ipairs(block.statements) do
			if st == REMOVED then
				-- drop sentinel
			elseif terminated then
				-- drop unreachable statement after return/break/continue
			else
				kept[#kept + 1] = st
				if self.RemoveAfterTerminator then
					if st.kind == AstKind.ReturnStatement
						or st.kind == AstKind.BreakStatement
						or st.kind == AstKind.ContinueStatement then
						terminated = true
					end
				end
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
		return nil
	end, nil)
end

return DeadCodeElimination
