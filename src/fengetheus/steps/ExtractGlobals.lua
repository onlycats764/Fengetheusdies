-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
--
-- ExtractGlobals.lua
--
-- This Step extracts references to global built-in functions / libraries into
-- a single local table captured at the top of the script. Each subsequent use
-- of an extracted global is replaced by an index into that table
-- (e.g. `print(...)` becomes `__G["print"](...)`).
--
-- This mirrors the Luraph v15 "EXTRACT" attribute: it hides the real global
-- name behind indirection and freezes the reference so a later redefinition of
-- the global (e.g. by an anti-cheat hooking `print`) does not affect the
-- obfuscated program.
--
-- Safety model:
--   * In SafeMode (default) only a curated whitelist of Lua / Luau built-in
--     globals that are guaranteed not to be *written* by the obfuscated script
--     are extracted. This avoids accidentally capturing a global that the
--     program assigns to at the top level (which would change semantics if we
--     cached the pre-assignment value).
--   * When SafeMode is false, every global *read* that has no corresponding
--     global *write* in the script is extracted. This is more aggressive but
--     requires a full scan for global assignments first.

local Step = require("fengetheus.step");
local Ast = require("fengetheus.ast");
local visitast = require("fengetheus.visitast");
local util = require("fengetheus.util")

local AstKind = Ast.AstKind;

-- table.unpack on 5.2+/5.3, global unpack on 5.1 / Luau
local unpack = table.unpack or unpack;

-- Whitelist of safe built-in globals (Lua 5.1 + Luau / Roblox).
-- These are standard library functions and libraries that no well-formed
-- program assigns to, so caching their value at startup is semantics-preserving.
local SAFE_GLOBALS = {
	["print"] = true,
	["tostring"] = true,
	["tonumber"] = true,
	["type"] = true,
	["typeof"] = true,        -- Luau / Roblox
	["error"] = true,
	["assert"] = true,
	["pcall"] = true,
	["xpcall"] = true,
	["select"] = true,
	["unpack"] = true,
	["pairs"] = true,
	["ipairs"] = true,
	["next"] = true,
	["rawget"] = true,
	["rawset"] = true,
	["rawequal"] = true,
	["rawlen"] = true,        -- Luau
	["setmetatable"] = true,
	["getmetatable"] = true,
	["getfenv"] = true,
	["setfenv"] = true,
	["loadstring"] = true,
	["load"] = true,
	["dofile"] = true,
	["require"] = true,
	["newproxy"] = true,
	["warn"] = true,          -- Luau / Roblox
	["tick"] = true,          -- Roblox
	["wait"] = true,          -- Robox
	["delay"] = true,         -- Roblox
	["spawn"] = true,         -- Roblox
	["gcinfo"] = true,        -- Roblox
	["collectgarbage"] = true,
	["math"] = true,
	["string"] = true,
	["table"] = true,
	["os"] = true,
	["io"] = true,
	["coroutine"] = true,
	["utf8"] = true,          -- Luau / Roblox
	["buffer"] = true,        -- Luau
	["task"] = true,          -- Roblox
	["bit32"] = true,         -- Lua 5.2 / Roblox
	["debug"] = true,
	["game"] = true,          -- Roblox global
	["workspace"] = true,     -- Roblox global
	["script"] = true,        -- Roblox global
};

local ExtractGlobals = Step:extend();
ExtractGlobals.Description = "Extracts global built-in references into a local lookup table (Luraph EXTRACT equivalent)";
ExtractGlobals.Name = "Extract Globals";

ExtractGlobals.SettingsDescriptor = {
	Threshold = {
		name = "Threshold",
		description = "The relative amount of global references that will be extracted",
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},
	SafeMode = {
		name = "SafeMode",
		description = "When true, only a curated whitelist of built-in globals is extracted. When false, every read-only global is extracted.",
		type = "boolean",
		default = true,
	},
}

function ExtractGlobals:init(_) end

-- Collect the set of global names that are *assigned* somewhere in the script.
-- A global assignment is an AssignmentVariable / AssignmentIndexing whose
-- target scope is the global scope (i.e. it writes to a global, not a local).
local function collectGlobalWrites(ast)
	local written = {};
	visitast(ast, nil, function(node)
		if node.kind == AstKind.AssignmentVariable and node.scope and node.scope.isGlobal then
			local name = node.scope:getVariableName(node.id);
			if name then written[name] = true end
		end
	end);
	return written;
end

function ExtractGlobals:apply(ast, _)
	local rootScope = ast.body.scope;

	-- Determine which global names are safe to extract.
	local globalWrites = collectGlobalWrites(ast);

	-- Collect candidate global references: VariableExpression nodes whose
	-- scope is the global scope. We key by the global name so that multiple
	-- references to the same global share one table entry.
	local candidates = {};       -- name -> true (set of globals to extract)
	local nodesByGlobal = {};    -- name -> list of { node = ..., scope = dataScope }

	visitast(ast, nil, function(node, data)
		if node.kind ~= AstKind.VariableExpression then return end
		if not (node.scope and node.scope.isGlobal) then return end
		if math.random() > self.Threshold then return end

		local name = node.scope:getVariableName(node.id);
		if not name then return end

		-- Skip globals that the script writes to (would change semantics).
		if globalWrites[name] then return end

		-- In SafeMode only extract whitelisted built-ins.
		if self.SafeMode and not SAFE_GLOBALS[name] then return end

		if not candidates[name] then
			candidates[name] = true;
			nodesByGlobal[name] = {};
		end
		table.insert(nodesByGlobal[name], { node = node, scope = data.scope });
	end);

	-- If nothing to extract, bail out early.
	local names = {};
	for name in pairs(candidates) do
		table.insert(names, name);
	end
	if #names == 0 then
		return ast;
	end

	-- Shuffle the names so the table order is not predictable.
	names = util.shuffle(names);

	-- Allocate the lookup-table local in the root scope.
	local tableId = rootScope:addVariable();

	-- Build the table constructor: { print = print, math = math, ... }
	-- Each value is the ORIGINAL global reference (a fresh VariableExpression
	-- pointing at the global scope with that global's id). We must create these
	-- BEFORE we overwrite the existing references.
	local entries = {};
	for _, name in ipairs(names) do
		-- Find the global id for this name. The global scope auto-creates
		-- variables on hasVariable, so every candidate name has an id.
		local globalScope, globalId = rootScope:resolveGlobal(name);
		local key = Ast.StringExpression(name);
		local value = Ast.VariableExpression(globalScope, globalId);
		entries[#entries + 1] = Ast.KeyedTableEntry(key, value);
	end

	local tableExpr = Ast.TableConstructorExpression(entries);

	-- Insert the local declaration at the very top of the script.
	table.insert(ast.body.statements, 1,
		Ast.LocalVariableDeclaration(rootScope, { tableId }, { tableExpr }));

	-- Now replace every candidate VariableExpression with
	-- IndexExpression(VariableExpression(rootScope, tableId), StringExpression(name))
	for _, name in ipairs(names) do
		for _, ref in ipairs(nodesByGlobal[name]) do
			local dataScope = ref.scope;
			-- The replacement references the table local, which lives in the
		-- root scope. Record that reference so the compiler emits the
		-- correct upvalue / capture.
			dataScope:addReferenceToHigherScope(rootScope, tableId);

			-- Mutate the existing node in place so that parent nodes (which
		-- hold a reference to this table) see the replacement. We cannot
		-- return a new node from a VariableExpression visit reliably in all
		-- contexts (statement vs expression), so in-place mutation is safest.
			local replacement = Ast.IndexExpression(
				Ast.VariableExpression(rootScope, tableId),
				Ast.StringExpression(name)
			);
			for k in pairs(ref.node) do
				ref.node[k] = nil;
			end
			for k, v in pairs(replacement) do
				ref.node[k] = v;
			end
		end
	end

	return ast;
end

return ExtractGlobals;
