--
-- LocalCaching.lua
--
-- This Step hoists repeated chained index accesses into a single local, e.g.:
--
--   a.b.c.x = 1
--   a.b.c.y = 2
--   a.b.c.z = 3
--   print(a.b.c.x)
--
-- becomes
--
--   local _c = a.b.c
--   _c.x = 1
--   _c.y = 2
--   _c.z = 3
--   print(_c.x)
--
-- This directly mirrors the optimization Luraph v15 documents under
-- "Performance > Optimize Code > Unoptimized Code":
--
--   "While this optimization may not have a noticeable impact on raw source,
--    it will greatly improve obfuscation performance. Optimizations that may
--    seem like micro-optimizations may have a much larger impact when
--    obfuscated due to the nature of Luraph's VM. Since Luraph is emulating
--    Lua, one instruction may turn into dozens depending on the operation.
--    Optimizing your code to have fewer instructions is always better."
--
-- For Fengetheus this matters because Vmify compiles every IndexExpression
-- into multiple VM instructions; collapsing N identical deep chains into
-- one cached local removes (N-1) * chainDepth index ops from the bytecode.
--
-- Correctness model
-- -----------------
-- We cache a chain PREFIX (e.g. a.b.c) when it is READ two or more times
-- within a single straight-line block. A "read" of a prefix happens whenever
-- the prefix is the `.base` of a longer access (a.b.c.x, a.b.c.d = ...,
-- a.b.c:method(), a.b.c[k]) or when the prefix is itself a standalone
-- expression (print(a.b.c), return a.b.c).
--
-- We deliberately do NOT cache a chain that is the full assignment TARGET
-- (a.b.c = 1) because that is a WRITE, not a read, and caching it would
-- break write-back semantics.
--
-- Soundness guarantees:
--   * Only PURE access chains are considered: the root must be a
--     VariableExpression and every index must be a constant literal
--     (StringExpression / NumberExpression / BooleanExpression). Such a
--     chain has no side effects and is deterministic, so caching is sound.
--   * A prefix is only cached when NONE of its prefixes (including the root
--     variable) is assigned to anywhere in the same block. We collect every
--     mutated target (assignment LHS, compound-assignment LHS) and its
--     prefixes, and skip any cache candidate that overlaps a mutation.
--   * The cache `local` is inserted immediately BEFORE the first statement
--     that reads the prefix. This guarantees the root variable is already
--     in scope (the original code read it at that point, so it must be
--     defined there) and avoids forward references to locals declared later
--     in the block.
--   * We never cache across loop iterations in a way that would observe a
--     stale value: the cache is declared at the top of the loop BODY (a
--     straight-line block), recomputed each iteration, so it reflects the
--     current state at the start of every iteration. Mutations inside the
--     same body invalidate the candidate (see above), so the cached prefix
--     is stable within one iteration.
--   * We do not recurse into nested function bodies when collecting reads or
--     mutations: a nested function's reads happen at call time, not inline,
--     and a nested function's writes to an upvalue are not guaranteed to run
--     between two reads in the enclosing block.

local Step = require("fengetheus.step")
local Ast = require("fengetheus.ast")
local visitast = require("fengetheus.visitast")
local AstKind = Ast.AstKind

local LocalCaching = Step:extend()
LocalCaching.Description = "Hoists repeated chained index accesses into a cached local (Luraph v15 'Optimize Code')"
LocalCaching.Name = "Local Caching"

LocalCaching.SettingsDescriptor = {
	-- Minimum depth of an access chain (number of index ops) to be worth
	-- caching. Depth 2 means a.b is the shallowest cacheable prefix.
	MinDepth = {
		type = "number",
		default = 2,
		min = 1,
		max = 16,
	},
	-- Minimum number of reads of a chain prefix within a block to trigger
	-- caching.
	MinOccurrences = {
		type = "number",
		default = 2,
		min = 2,
		max = 64,
	},
	-- Probability (0..1) that an eligible chain is actually cached. <1 lets
	-- the pass stay non-deterministic and lighter when stacked with other
	-- passes.
	Chance = {
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},
}

function LocalCaching:init(_) end

-- Local unpack compat (host may be Lua 5.3 without global unpack)
local unpack = table.unpack or unpack

-- Returns true if `expr` is a constant literal that can be an index key.
local function isConstantIndex(expr)
	if expr == nil then return false end
	local k = expr.kind
	return k == AstKind.StringExpression
		or k == AstKind.NumberExpression
		or k == AstKind.BooleanExpression
end

-- Serialize a constant index node to a canonical string key.
local function indexKey(expr)
	if expr.kind == AstKind.StringExpression then
		return '["' .. expr.value .. '"]'
	elseif expr.kind == AstKind.NumberExpression then
		return "[" .. tostring(expr.value) .. "]"
	elseif expr.kind == AstKind.BooleanExpression then
		return "[" .. tostring(expr.value) .. "]"
	end
	return nil
end

-- Resolve the canonical root name of a VariableExpression node without using
-- the broken node:getName() closure (VariableExpression.getName uses '.' not
-- ':', see ast.lua). We call scope:getVariableName directly.
local function variableRootName(node)
	if node.scope and type(node.scope.getVariableName) == "function" then
		return node.scope:getVariableName(node.id)
	end
	return tostring(node.id)
end

-- Walk an access chain (IndexExpression or AssignmentIndexing) and return:
--   rootName : canonical name of the root VariableExpression (or nil)
--   segments : list of canonical index keys from base outward
--   depth    : #segments
--   rootNode : the root VariableExpression node (for building a fresh ref)
-- Returns nil if the chain is not a pure constant-indexed access rooted at a
-- VariableExpression.
local function analyzeChain(node)
	-- segments are stored INNERMOST-first: segments[1] is the index closest
	-- to the root (e.g. "b" in a.b.c.d), segments[#segments] is the outermost.
	local segments = {}
	local cur = node
	while cur.kind == AstKind.IndexExpression or cur.kind == AstKind.AssignmentIndexing do
		if not isConstantIndex(cur.index) then
			return nil
		end
		table.insert(segments, 1, indexKey(cur.index))
		cur = cur.base
	end
	if cur.kind ~= AstKind.VariableExpression then
		return nil
	end
	return variableRootName(cur), segments, #segments, cur
end

-- Build the canonical full-chain key from root + segments.
local function chainKey(rootName, segments)
	return rootName .. table.concat(segments)
end

-- Rebuild an IndexExpression chain from a root VariableExpression + canonical
-- segment keys, using FRESH nodes (and a fresh root ref) so the resulting
-- expression is independent of any node we later mutate.
local function buildChain(rootNode, segments)
	-- Fresh root VariableExpression referencing the same scope/id.
	local cur = Ast.VariableExpression(rootNode.scope, rootNode.id)
	-- `segments` are stored INNERMOST-first (segments[1] closest to root),
	-- so we apply them in natural order 1..#segments.
	for i = 1, #segments do
		local seg = segments[i]
		local idxNode
		if seg:sub(1, 2) == '["' then
			local s = seg:sub(3, #seg - 2)
			idxNode = Ast.StringExpression(s)
		elseif seg:sub(1, 1) == "[" then
			local s = seg:sub(2, #seg - 1)
			local n = tonumber(s)
			if n then
				idxNode = Ast.NumberExpression(n)
			elseif s == "true" or s == "false" then
				idxNode = Ast.BooleanExpression(s == "true")
			else
				idxNode = Ast.StringExpression(s)
			end
		else
			idxNode = Ast.StringExpression(seg)
		end
		cur = Ast.IndexExpression(cur, idxNode)
	end
	return cur
end

-- Collect every assignment target within a block's statements (NOT recursing
-- into nested function bodies). Returns a map:
--   rootName -> list of segment-arrays (each the full mutated chain's
--   segments, outermost-first as returned by analyzeChain).
-- A plain AssignmentVariable (root reassignment) is stored as an empty
-- segment-array {}, which means "the root itself is reassigned" and blocks
-- every cache candidate on that root.
--
-- Invalidation rule (applied in postvisit):
--   A cache candidate (root, segs of length K) is BLOCKED iff there is a
--   mutation (same root, mSegs of length L) with L <= K and
--   segs[1..L] == mSegs[1..L]. Rationale: reassigning a path of length L
--   changes what that path refers to, so any cached prefix of length >= L
--   along the SAME path becomes stale. A SHALLOWER cache (length < L) is
--   unaffected, because reassigning a deeper field/table does not change the
--   reference held by the shallower prefix. (e.g. a.b.c.w = 1 does NOT
--   invalidate a cache of a.b.c, since a.b.c still refers to the same table.)
local function collectMutations(statements)
	local mutated = {}

	local function recordChain(node)
		local rootName, segments = analyzeChain(node)
		if rootName == nil then
			if node and node.kind == AstKind.AssignmentVariable then
				local name = variableRootName(node)
				local list = mutated[name] or {}
				list[#list + 1] = {} -- root reassignment
				mutated[name] = list
			end
			return
		end
		local list = mutated[rootName] or {}
		list[#list + 1] = segments
		mutated[rootName] = list
	end

	for _, stmt in ipairs(statements) do
		if stmt.kind == AstKind.AssignmentStatement then
			for _, lhs in ipairs(stmt.lhs) do recordChain(lhs) end
		elseif stmt.kind == AstKind.CompoundAddStatement
			or stmt.kind == AstKind.CompoundSubStatement
			or stmt.kind == AstKind.CompoundMulStatement
			or stmt.kind == AstKind.CompoundDivStatement
			or stmt.kind == AstKind.CompoundModStatement
			or stmt.kind == AstKind.CompoundPowStatement
			or stmt.kind == AstKind.CompoundConcatStatement then
			recordChain(stmt.lhs)
		end
	end
	return mutated
end

-- Check whether a candidate (rootName, segs of length K) is blocked by the
-- structural mutation map. segs are outermost-first.
local function isBlocked(mutated, rootName, segs)
	local list = mutated[rootName]
	if not list then return false end
	local K = #segs
	for _, mSegs in ipairs(list) do
		local L = #mSegs
		if L <= K then
			local same = true
			for i = 1, L do
				if mSegs[i] ~= segs[i] then same = false; break end
			end
			if same then return true end
		end
	end
	return false
end

-- Return roots whose table identity is locally established by a literal. A
-- generic variable may point to a table with an __index metamethod, or to a
-- value that another call changes between two reads; caching either case can
-- change observable Lua behaviour. This intentionally accepts only the
-- strongest cheap proof available in the AST.
local function collectLiteralTableRoots(statements, scope)
	local roots = {}
	for _, stmt in ipairs(statements) do
		if stmt.kind == AstKind.LocalVariableDeclaration then
			for i, id in ipairs(stmt.ids or {}) do
				local expr = (stmt.expressions or {})[i]
				if expr and expr.kind == AstKind.TableConstructorExpression then
					roots[scope:getVariableName(id)] = true
				end
			end
		end
	end
	return roots
end

-- A call can mutate a table or invoke a metamethod. Walk each statement
-- without using visitast (which would cross into child blocks); a candidate is
-- rejected only when a call lies between its first and last read. Calls after
-- the last read cannot affect the cached value. False positives only reduce
-- the optimization; false negatives would risk changing program semantics.
local function containsCall(value, seen)
	if type(value) ~= "table" then return false end
	seen = seen or {}
	if seen[value] then return false end
	seen[value] = true
	if value.kind == AstKind.FunctionCallExpression
		or value.kind == AstKind.PassSelfFunctionCallExpression
		or value.kind == AstKind.FunctionCallStatement
		or value.kind == AstKind.PassSelfFunctionCallStatement then
		return true
	end
	for key, child in pairs(value) do
		if key ~= "scope" and key ~= "parentScope" and key ~= "children"
			and containsCall(child, seen) then
			return true
		end
	end
	return false
end

-- A "read site" of a prefix. Two kinds:
--   { mode = "base", parent = parentNode }
--       The prefix is parentNode.base (parentNode is an IndexExpression or
--       AssignmentIndexing). To apply caching we set parentNode.base = cacheVar.
--   { mode = "whole", node = prefixNode }
--       The prefix is a standalone expression node. To apply caching we
--       mutate the node in place into a VariableExpression referencing the
--       cache var (the parent still holds this node by reference).
local function makeBaseSite(parent)   return { mode = "base", parent = parent } end
local function makeWholeSite(nodeNode) return { mode = "whole", node = nodeNode } end

-- Collect all pure-chain PREFIX reads in a list of statements (NOT recursing
-- into nested function bodies or nested control-flow bodies — those are
-- handled as their own blocks by visitast). Returns:
--   found : map canonicalKey -> {
--       rootName, segments, rootNode,
--       sites   = list of read sites,
--       count   = #sites,
--       firstStmtIndex = index (1-based) into `statements` of the first
--                        statement containing a read of this prefix,
--   }
-- A prefix of length L of a pure chain of depth D is a "read" iff L < D (it
-- is the base of a longer access) OR L == D and the full chain is NOT an
-- assignment target (it is a standalone read expression).
local function collectChainPrefixes(statements)
	local found = {}

	local function ensure(rootName, segs, rootNode)
		local key = chainKey(rootName, segs)
		local entry = found[key]
		if not entry then
			entry = { rootName = rootName, segments = segs, rootNode = rootNode,
				sites = {}, count = 0, firstStmtIndex = nil, lastStmtIndex = nil }
			found[key] = entry
		end
		return entry, key
	end

	-- Walk an expression, recording chain reads. `stmtIndex` is the index of
	-- the enclosing statement in `statements`.
	local function walkExpr(expr, stmtIndex, isLHSTarget)
		if expr == nil then return end
		local k = expr.kind

		if k == AstKind.IndexExpression or k == AstKind.AssignmentIndexing then
			local rootName, segments, depth, rootNode = analyzeChain(expr)
			if rootName == nil or depth < 1 then
				-- Not a pure constant-indexed chain: recurse into base and index
				-- to find nested chains / calls (e.g. a[foo()].b or t[g()].x).
				walkExpr(expr.base, stmtIndex, false)
				walkExpr(expr.index, stmtIndex, false)
				return
			end

			-- This node is a pure chain of `depth`. Every prefix of length
			-- 1..depth-1 is a "base" read whose parent is the corresponding
			-- intermediate node. We can find each intermediate node by
			-- walking down expr.base.
			--
			-- Build the list of intermediate nodes: node[len] for len=1..depth
			-- where node[depth] == expr and node[len].base == node[len-1].
			-- node[1] is the shallowest index node (a.b), its base is the root
			-- VariableExpression.
			-- For prefix length L (1..depth-1): parent = node[L+1], and
			-- node[L+1].base == node[L] == the prefix. So we record a base
			-- site on node[L+1] (swapping its base to cacheVar collapses the
			-- prefix).
			--
			-- For the FULL prefix (L == depth): if this node is NOT an
			-- assignment target, it is a standalone read -> whole site.
			-- If it IS an assignment target, the full chain is written, not
			-- read, so we do NOT record a whole site (only its prefixes,
			-- already handled above, are reads).
			local nodesByLen = {}
			local cur = expr
			for L = depth, 1, -1 do
				nodesByLen[L] = cur
				cur = cur.base
			end
			-- cur is now the root VariableExpression.

			for L = 1, depth - 1 do
				local segs = {}
				for i = 1, L do segs[i] = segments[i] end
				local entry = ensure(rootName, segs, rootNode)
				-- The prefix of length L is nodesByLen[L]; its parent (the
				-- node whose .base == prefix) is nodesByLen[L+1].
				entry.sites[#entry.sites + 1] = makeBaseSite(nodesByLen[L + 1])
				entry.count = entry.count + 1
				if entry.firstStmtIndex == nil or stmtIndex < entry.firstStmtIndex then
					entry.firstStmtIndex = stmtIndex
				end
				if entry.lastStmtIndex == nil or stmtIndex > entry.lastStmtIndex then
					entry.lastStmtIndex = stmtIndex
				end
			end

			if not isLHSTarget then
				-- Full chain is a standalone read.
				local segs = {}
				for i = 1, depth do segs[i] = segments[i] end
				local entry = ensure(rootName, segs, rootNode)
				entry.sites[#entry.sites + 1] = makeWholeSite(expr)
				entry.count = entry.count + 1
				if entry.firstStmtIndex == nil or stmtIndex < entry.firstStmtIndex then
					entry.firstStmtIndex = stmtIndex
				end
				if entry.lastStmtIndex == nil or stmtIndex > entry.lastStmtIndex then
					entry.lastStmtIndex = stmtIndex
				end
			end
			return
		end

		if k == AstKind.FunctionCallExpression or k == AstKind.PassSelfFunctionCallExpression
			or k == AstKind.FunctionCallStatement or k == AstKind.PassSelfFunctionCallStatement then
			walkExpr(expr.base, stmtIndex, false)
			for _, a in ipairs(expr.args or {}) do walkExpr(a, stmtIndex, false) end
			return
		end

		if k == AstKind.OrExpression or k == AstKind.AndExpression
			or k == AstKind.LessThanExpression or k == AstKind.GreaterThanExpression
			or k == AstKind.LessThanOrEqualsExpression or k == AstKind.GreaterThanOrEqualsExpression
			or k == AstKind.NotEqualsExpression or k == AstKind.EqualsExpression
			or k == AstKind.StrCatExpression or k == AstKind.AddExpression
			or k == AstKind.SubExpression or k == AstKind.MulExpression
			or k == AstKind.DivExpression or k == AstKind.ModExpression
			or k == AstKind.PowExpression then
			walkExpr(expr.lhs, stmtIndex, false)
			walkExpr(expr.rhs, stmtIndex, false)
			return
		end

		if k == AstKind.NotExpression or k == AstKind.NegateExpression
			or k == AstKind.LenExpression then
			walkExpr(expr.rhs, stmtIndex, false)
			return
		end

		if k == AstKind.IfElseExpression then
			walkExpr(expr.condition, stmtIndex, false)
			walkExpr(expr.true_value, stmtIndex, false)
			for _, eif in ipairs(expr.elseifs or {}) do
				walkExpr(eif.condition, stmtIndex, false)
				walkExpr(eif.true_value, stmtIndex, false)
			end
			walkExpr(expr.false_value, stmtIndex, false)
			return
		end

		if k == AstKind.TableConstructorExpression then
			for _, e in ipairs(expr.entries or {}) do
				if e.kind == AstKind.KeyedTableEntry or e.kind == AstKind.TableEntry then
					walkExpr(e.value, stmtIndex, false)
				end
			end
			return
		end
		-- VariableExpression / literals: nothing to record.
	end

	-- Walk a statement's expressions. We do NOT recurse into nested blocks.
	for idx, stmt in ipairs(statements) do
		local k = stmt.kind
		if k == AstKind.AssignmentStatement then
			for _, lhs in ipairs(stmt.lhs) do walkExpr(lhs, idx, true) end
			for _, rhs in ipairs(stmt.rhs or {}) do walkExpr(rhs, idx, false) end
		elseif k == AstKind.LocalVariableDeclaration then
			for _, rhs in ipairs(stmt.expressions or {}) do walkExpr(rhs, idx, false) end
		elseif k == AstKind.FunctionCallStatement or k == AstKind.PassSelfFunctionCallStatement then
			walkExpr(stmt.base, idx, false)
			for _, a in ipairs(stmt.args or {}) do walkExpr(a, idx, false) end
		elseif k == AstKind.ReturnStatement then
			for _, a in ipairs(stmt.args or {}) do walkExpr(a, idx, false) end
		elseif k == AstKind.CompoundAddStatement or k == AstKind.CompoundSubStatement
			or k == AstKind.CompoundMulStatement or k == AstKind.CompoundDivStatement
			or k == AstKind.CompoundModStatement or k == AstKind.CompoundPowStatement
			or k == AstKind.CompoundConcatStatement then
			walkExpr(stmt.lhs, idx, true)
			walkExpr(stmt.rhs, idx, false)
		elseif k == AstKind.IfStatement then
			walkExpr(stmt.condition, idx, false)
		elseif k == AstKind.WhileStatement or k == AstKind.RepeatStatement then
			walkExpr(stmt.condition, idx, false)
		elseif k == AstKind.ForStatement then
			walkExpr(stmt.initialValue, idx, false)
			walkExpr(stmt.finalValue, idx, false)
			walkExpr(stmt.incrementBy, idx, false)
		elseif k == AstKind.ForInStatement then
			for _, e in ipairs(stmt.expressions or {}) do walkExpr(e, idx, false) end
		end
	end

	return found
end

-- Apply a cache var to a single read site in place.
local function applySite(site, cacheVarFactory)
	if site.mode == "base" then
		site.parent.base = cacheVarFactory()
	elseif site.mode == "whole" then
		-- Mutate the node in place into a VariableExpression referencing the
		-- cache var. The parent still holds this node object by reference.
		local fresh = cacheVarFactory()
		local node = site.node
		node.kind = AstKind.VariableExpression
		node.scope = fresh.scope
		node.id = fresh.id
		node.getName = fresh.getName
		node.base = nil
		node.index = nil
		node.isConstant = nil
	end
end

function LocalCaching:apply(ast)
	local minDepth = self.MinDepth
	local minOcc = self.MinOccurrences
	local chance = self.Chance

	local function postvisit(node)
		if node.kind ~= AstKind.Block then
			return node
		end
		local statements = node.statements
		local scope = node.scope
		if not scope then return node end

		local mutated = collectMutations(statements)
		local found = collectChainPrefixes(statements)
		local literalRoots = collectLiteralTableRoots(statements, scope)
		local callStatements = {}
		for index, statement in ipairs(statements) do
			callStatements[index] = containsCall(statement)
		end

		-- Select eligible prefixes.
		local toCache = {} -- list of entries
		for _, entry in pairs(found) do
			if #entry.segments >= minDepth and entry.count >= minOcc
				and #entry.sites >= minOcc then
				-- Do not memoize dynamic roots or anything in a block where a call
				-- could alter the table or dispatch through __index.
				local callBetweenReads = false
				for i = entry.firstStmtIndex or 1, entry.lastStmtIndex or #statements do
					if callStatements[i] then
						callBetweenReads = true
						break
					end
				end
				if literalRoots[entry.rootName] and not callBetweenReads
					and (chance >= 1 or math.random() <= chance) then
					local blocked = isBlocked(mutated, entry.rootName, entry.segments)
					if not blocked then
						toCache[#toCache + 1] = entry
					end
				end
			end
		end

		if #toCache == 0 then return node end

		-- Cache deepest prefixes first so that, e.g., a.b.c is cached before
		-- a.b, and a.b's sites (which are bases of a.b.c accesses) can be
		-- re-pointed to the a.b.c cache when they coincide. We keep it simple
		-- and cache each eligible prefix independently; overlapping is rare
		-- and the per-prefix sites are distinct node positions.
		table.sort(toCache, function(a, b) return #a.segments > #b.segments end)

		-- Process deepest prefixes first. When a deeper prefix is cached, the
		-- intermediate chain nodes of its occurrences become unreachable (the
		-- deeper cache re-points the parent's base to the cache local). Any
		-- SHALLOWER prefix whose sites all reference those now-orphaned nodes
		-- would produce a dead local (its replacements have no effect on the
		-- live tree). We track orphaned nodes by identity and skip such entries
		-- so we never emit a cache local that is never read.
		local orphaned = {} -- node identity -> true (using a table key set)
		local function markOrphaned(prefixNode)
			local cur = prefixNode
			while cur and (cur.kind == AstKind.IndexExpression
				or cur.kind == AstKind.AssignmentIndexing) do
				orphaned[cur] = true
				cur = cur.base
			end
		end

		local function entryFullyOrphaned(entry)
			if #entry.sites == 0 then return true end
			for _, site in ipairs(entry.sites) do
				if site.mode == "whole" then
					-- Whole sites are standalone nodes; a deeper cache on the same
					-- occurrence never orphans them, so they keep the entry alive.
					return false
				end
				if not orphaned[site.parent] then
					return false
				end
			end
			return true
		end

		local inserted = {} -- list of { decl, beforeIndex }

		for _, entry in ipairs(toCache) do
			if #entry.sites > 0 and not entryFullyOrphaned(entry) then
				local cacheId = scope:addVariable(nil, nil)
				-- Factory producing a FRESH VariableExpression for each site
				-- (so no two parent nodes share the exact same table).
				local function cacheVarFactory()
					return Ast.VariableExpression(scope, cacheId)
				end
				-- Cache init expression: fresh chain independent of mutated nodes.
				local cacheExpr = buildChain(entry.rootNode, entry.segments)
				local decl = Ast.LocalVariableDeclaration(scope, { cacheId }, { cacheExpr })

				-- Apply replacements and mark orphaned prefix nodes.
				for _, site in ipairs(entry.sites) do
					if site.mode == "base" then
						-- The current base (the prefix node) becomes orphaned once we
						-- re-point the parent's base to the cache var. Mark it and its
					-- entire base chain so shallower prefixes pointing into this
					-- chain are recognised as dead.
						markOrphaned(site.parent.base)
					elseif site.mode == "whole" then
						-- The node is about to become a VariableExpression; any
						-- shallower prefix whose base-site parent IS this node is now
						-- dead (the parent no longer has a re-pointable .base chain).
						orphaned[site.node] = true
					end
					applySite(site, cacheVarFactory)
				end

				-- Place the decl before the first statement that reads it.
				local before = entry.firstStmtIndex or 1
				if before < 1 then before = 1 end
				inserted[#inserted + 1] = { decl = decl, before = before }
			end
		end

		-- Insert declarations. We must insert in order of ascending `before`
		-- and adjust indices as we go (each insertion shifts later indices).
		table.sort(inserted, function(a, b) return a.before < b.before end)
		local offset = 0
		for _, item in ipairs(inserted) do
			local pos = item.before + offset
			if pos < 1 then pos = 1 end
			if pos > #statements + 1 then pos = #statements + 1 end
			table.insert(statements, pos, item.decl)
			offset = offset + 1
		end

		return node
	end

	visitast(ast, nil, postvisit)
	return ast
end

return LocalCaching
