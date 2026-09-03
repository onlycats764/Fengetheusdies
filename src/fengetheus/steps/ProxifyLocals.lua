-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
--
-- ProxifyLocals.lua
--
-- This Script provides a Obfuscation Step for putting all Locals into Proxy Objects

local Step = require("fengetheus.step");
local Ast = require("fengetheus.ast");
local Scope = require("fengetheus.scope");
local visitast = require("fengetheus.visitast");
local RandomLiterals = require("fengetheus.randomLiterals")

-- Lua 5.3 (including Fengari) moved unpack to table.unpack. Keep this
-- module compatible with both Lua 5.1 and Lua 5.2+ without relying on a
-- global compatibility shim that could leak into user code.
local unpack = table.unpack or unpack;

local AstKind = Ast.AstKind;

local ProxifyLocals = Step:extend();
ProxifyLocals.Description = "This Step wraps all locals into Proxy Objects";
ProxifyLocals.Name = "Proxify Locals";

ProxifyLocals.SettingsDescriptor = {
	LiteralType = {
		name = "LiteralType",
		description = "The type of the randomly generated literals",
		type = "enum",
		values = {
			"dictionary",
			"number",
			"string",
            "any",
		},
		default = "string",
	},
}

local function shallowcopy(orig)
    local orig_type = type(orig)
    local copy
    if orig_type == 'table' then
        copy = {}
        for orig_key, orig_value in pairs(orig) do
            copy[orig_key] = orig_value
        end
    else -- number, string, boolean, etc
        copy = orig
    end
    return copy
end

local function callNameGenerator(generatorFunction, ...)
	if(type(generatorFunction) == "table") then
		generatorFunction = generatorFunction.generateName;
	end
	return generatorFunction(...);
end

local MetatableExpressions = {
    {
        constructor = Ast.AddExpression,
        key = "__add";
    },
    {
        constructor = Ast.SubExpression,
        key = "__sub";
    },
    {
        constructor = Ast.IndexExpression,
        key = "__index";
    },
    {
        constructor = Ast.MulExpression,
        key = "__mul";
    },
    {
        constructor = Ast.DivExpression,
        key = "__div";
    },
    {
        constructor = Ast.PowExpression,
        key = "__pow";
    },
    {
        constructor = Ast.StrCatExpression,
        key = "__concat";
    }
}

function ProxifyLocals:init(_) end

local function generateLocalMetatableInfo(pipeline)
    local usedOps = {};
    local info = {};
    -- Only getValue and setValue are actually emitted into the proxy
    -- metatable (see CreateAssignmentExpression). The original code also
    -- assigned an "index" role, but that value was never read anywhere -
    -- it merely consumed an extra math.random draw per local, perturbing
    -- the random stream for every subsequent step (ConstantArray,
    -- NumbersToExpressions, …) without producing any obfuscation.
    for _, v in ipairs({"setValue", "getValue"}) do
        local rop;
        repeat
            rop = MetatableExpressions[math.random(#MetatableExpressions)];
        until not usedOps[rop];
        usedOps[rop] = true;
        info[v] = rop;
    end

    -- The valueName is used both as a table key (fine for any string) AND,
    -- for FunctionDeclaration nodes, as a dot-index in `function T.name.field()`.
    -- Lua 5.1 / LuaU have no bracket syntax for function-statement indices, so
    -- a keyword like "do" or "end" produces invalid source (`function G.do()` is
    -- a parse error). Regenerate until we get a non-keyword identifier.
    local keywordList = pipeline.conventions and pipeline.conventions.Keywords or {};
    local keywordLookup = {};
    for _, kw in ipairs(keywordList) do keywordLookup[kw] = true; end
    repeat
        info.valueName = callNameGenerator(pipeline.namegenerator, math.random(1, 4096));
    until not keywordLookup[info.valueName];

    return info;
end

function ProxifyLocals:CreateAssignmentExpression(info, expr, parentScope)
    local metatableVals = {};

    -- Setvalue Entry
    local setValueFunctionScope = Scope:new(parentScope);
    local setValueSelf = setValueFunctionScope:addVariable();
    local setValueArg = setValueFunctionScope:addVariable();
    local setvalueFunctionLiteral = Ast.FunctionLiteralExpression(
        {
            Ast.VariableExpression(setValueFunctionScope, setValueSelf), -- Argument 1
            Ast.VariableExpression(setValueFunctionScope, setValueArg), -- Argument 2
        },
        Ast.Block({ -- Create Function Body
            Ast.AssignmentStatement({
                Ast.AssignmentIndexing(Ast.VariableExpression(setValueFunctionScope, setValueSelf), Ast.StringExpression(info.valueName));
            }, {
                Ast.VariableExpression(setValueFunctionScope, setValueArg)
            })
        }, setValueFunctionScope)
    );
    table.insert(metatableVals, Ast.KeyedTableEntry(Ast.StringExpression(info.setValue.key), setvalueFunctionLiteral));

    -- Getvalue Entry
    local getValueFunctionScope = Scope:new(parentScope);
    local getValueSelf = getValueFunctionScope:addVariable();
    local getValueArg = getValueFunctionScope:addVariable();
    local getValueIdxExpr;
    if(info.getValue.key == "__index" or info.setValue.key == "__index") then
        -- resolveGlobal returns (scope, id); the previous code passed only the
        -- scope to Ast.VariableExpression, dropping the id and producing a node
        -- whose getVariableName(nil) returns nil. That nil name then propagates
        -- into the generated source (e.g. `rawget(...)` becoming `<nil>(...)`,
        -- or, after ConstantArray/renaming, a reference to a non-existent
        -- local), which surfaces at runtime as "attempt to call a nil value".
        -- Capture both return values and use the real id.
        local rawgetScope, rawgetId = getValueFunctionScope:resolveGlobal("rawget");
        getValueIdxExpr = Ast.FunctionCallExpression(Ast.VariableExpression(rawgetScope, rawgetId), {
            Ast.VariableExpression(getValueFunctionScope, getValueSelf),
            Ast.StringExpression(info.valueName),
        });
    else
        getValueIdxExpr = Ast.IndexExpression(Ast.VariableExpression(getValueFunctionScope, getValueSelf), Ast.StringExpression(info.valueName));
    end
    local getvalueFunctionLiteral = Ast.FunctionLiteralExpression(
        {
            Ast.VariableExpression(getValueFunctionScope, getValueSelf), -- Argument 1
            Ast.VariableExpression(getValueFunctionScope, getValueArg), -- Argument 2
        },
        Ast.Block({ -- Create Function Body
            Ast.ReturnStatement({
                getValueIdxExpr;
            });
        }, getValueFunctionScope)
    );
    table.insert(metatableVals, Ast.KeyedTableEntry(Ast.StringExpression(info.getValue.key), getvalueFunctionLiteral));

    parentScope:addReferenceToHigherScope(self.setMetatableVarScope, self.setMetatableVarId);
    return Ast.FunctionCallExpression(
        Ast.VariableExpression(self.setMetatableVarScope, self.setMetatableVarId),
        {
            Ast.TableConstructorExpression({
                Ast.KeyedTableEntry(Ast.StringExpression(info.valueName), expr)
            }),
            Ast.TableConstructorExpression(metatableVals)
        }
    );
end

function ProxifyLocals:apply(ast, pipeline)
    local localMetatableInfos = {};
    local function getLocalMetatableInfo(scope, id)
        -- Global Variables should not be transformed
        if(scope.isGlobal) then return nil end;

        localMetatableInfos[scope] = localMetatableInfos[scope] or {};
        if localMetatableInfos[scope][id] then
            -- If locked, return no Metatable
            if localMetatableInfos[scope][id].locked then
                return nil
            end
            return localMetatableInfos[scope][id];
        end
        local localMetatableInfo = generateLocalMetatableInfo(pipeline);
        localMetatableInfos[scope][id] = localMetatableInfo;
        return localMetatableInfo;
    end

    local function disableMetatableInfo(scope, id)
        -- Global Variables should not be transformed
        if(scope.isGlobal) then return nil end;

        localMetatableInfos[scope] = localMetatableInfos[scope] or {};
        localMetatableInfos[scope][id] = {locked = true}
    end

    -- Create Setmetatable Variable
    self.setMetatableVarScope = ast.body.scope;
    self.setMetatableVarId = ast.body.scope:addVariable();

    -- Create Empty Function Variable
    self.emptyFunctionScope = ast.body.scope;
    self.emptyFunctionId = ast.body.scope:addVariable();
    self.emptyFunctionUsed = false;

    -- Add Empty Function Declaration
    table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration(self.emptyFunctionScope, {self.emptyFunctionId}, {
        Ast.FunctionLiteralExpression({}, Ast.Block({}, Scope:new(ast.body.scope)));
    }));

    -- Lock the two internal helper locals (setmetatable alias + empty discard
    -- function) so they are NOT themselves proxified. These are bookkeeping
    -- variables that ProxifyLocals itself emits - they carry zero obfuscation
    -- value (an attacker already knows the obfuscator's helpers exist) and
    -- wrapping them in proxies only adds cost. In particular, EVERY proxified
    -- write is rewritten as `emptyfunc((var OP value))`; if `emptyfunc` is
    -- itself proxified, each write pays an extra metamethod dispatch + table
    -- lookup just to retrieve the do-nothing function before calling it. By
    -- keeping both helpers as plain locals, writes stay a single direct
    -- function call with no metamethod overhead on the helper side. This
    -- preserves the exact same obfuscation of every user-defined local while
    -- removing a per-write metamethod call.
    disableMetatableInfo(self.setMetatableVarScope, self.setMetatableVarId);
    disableMetatableInfo(self.emptyFunctionScope, self.emptyFunctionId);

    -- Pre-scan: lock any local that the ORIGINAL script itself uses as a metatable, by
    -- literally assigning one of the reserved metamethod names (__add, __sub, __index,
    -- __mul, __div, __pow, __concat) as a field on it - e.g. the extremely common Lua OOP
    -- idiom `Class.__index = Class`. ProxifyLocals repurposes exactly these same field
    -- names on the proxy object it builds for each local (to hide get/set access behind
    -- real Lua operators). If the local were proxified AND the original script also writes
    -- one of these fields on it directly, the two uses collide on the same key of the same
    -- table, silently corrupting whichever the proxy needed for its own bookkeeping (this
    -- previously surfaced as sporadic "attempt to index a nil value" crashes, since which
    -- key collides depends on the random metamethod assignment, i.e. Seed). Locals used this
    -- way must be excluded from proxification entirely; there is no way to safely rewrite
    -- them without either technique's key going missing.
    local reservedMetamethodKeys = {};
    for _, entry in ipairs(MetatableExpressions) do
        reservedMetamethodKeys[entry.key] = true;
    end
    visitast(ast, function(node, data)
        if(node.kind == AstKind.AssignmentStatement) then
            for _, lhs in ipairs(node.lhs) do
                if(lhs.kind == AstKind.AssignmentIndexing
                    and lhs.base.kind == AstKind.VariableExpression
                    and lhs.index.kind == AstKind.StringExpression
                    and reservedMetamethodKeys[lhs.index.value]) then
                    disableMetatableInfo(lhs.base.scope, lhs.base.id);
                end
            end
        end
    end)


    -- Pre-scan: lock all variables in any scope that already has too many
    -- locals. ProxifyLocals doubles the local count of every proxified
    -- variable (it emits one temporary local + one proxy local per original
    -- local). Lua 5.1 limits a function to 200 locals and Luau to 255, so a
    -- scope with > 100 locals would exceed both limits after proxification
    -- (100 originals + 100 temps + 100 proxies = 300). This commonly happens
    -- in Vmify-generated code, where the container function declares up to
    -- MAX_REGS (100) register variables. Locking such scopes prevents the
    -- "too many local variables" / "Out of registers" compilation error while
    -- still proxifying all smaller scopes. The cap of 100 keeps the worst
    -- case at 100 + 100 = 200, just under Lua 5.1's limit.
    local PROXIFY_LOCAL_CAP = 100;
    visitast(ast, function(node, data)
        if(node.kind == AstKind.Block) then
            local scope = node.scope;
            if scope and not scope.isGlobal and #scope.variables > PROXIFY_LOCAL_CAP then
                for id = 1, #scope.variables do
                    disableMetatableInfo(scope, id);
                end
            end
        end
    end)


    visitast(ast, function(node, data)
        -- Lock for loop variables
        if(node.kind == AstKind.ForStatement) then
            disableMetatableInfo(node.scope, node.id)
        end
        if(node.kind == AstKind.ForInStatement) then
            for i, id in ipairs(node.ids) do
                disableMetatableInfo(node.scope, id);
            end
        end

        -- Lock Function Arguments
        if(node.kind == AstKind.FunctionDeclaration or node.kind == AstKind.LocalFunctionDeclaration or node.kind == AstKind.FunctionLiteralExpression) then
            for i, expr in ipairs(node.args) do
                if expr.kind == AstKind.VariableExpression then
                    disableMetatableInfo(expr.scope, expr.id);
                end
            end
        end

        -- Assignment Statements may be Obfuscated Differently
        if(node.kind == AstKind.AssignmentStatement) then
            if(#node.lhs == 1 and node.lhs[1].kind == AstKind.AssignmentVariable) then
                local variable = node.lhs[1];
                local localMetatableInfo = getLocalMetatableInfo(variable.scope, variable.id);
                if localMetatableInfo then
                    local args = shallowcopy(node.rhs);
                    local vexp = Ast.VariableExpression(variable.scope, variable.id);
                    vexp.__ignoreProxifyLocals = true;
                    args[1] = localMetatableInfo.setValue.constructor(vexp, args[1]);
                    self.emptyFunctionUsed = true;
                    data.scope:addReferenceToHigherScope(self.emptyFunctionScope, self.emptyFunctionId);
                    return Ast.FunctionCallStatement(Ast.VariableExpression(self.emptyFunctionScope, self.emptyFunctionId), args);
                end
            end
        end
    end, function(node, data)
        -- Local Variable Declaration
        if(node.kind == AstKind.LocalVariableDeclaration) then
            -- Figure out which (if any) of the declared ids need to be proxified.
            local infos = {};
            local anyProxified = false;
            for i, id in ipairs(node.ids) do
                infos[i] = getLocalMetatableInfo(node.scope, id);
                if infos[i] then
                    anyProxified = true;
                end
            end

            if anyProxified then
                -- IMPORTANT: Lua's multi-assignment semantics allow the number of
                -- expressions to differ from the number of ids. When there are
                -- fewer expressions than ids, the *last* expression (if it is a
                -- function call or vararg) expands to supply values for every
                -- remaining id. Rewriting `node.expressions[i]` per-id (the naive
                -- approach) silently discards those extra values whenever
                -- #expressions < #ids, e.g. `local a, b, c = someCall()` would end
                -- up with `b` and `c` set to nil instead of the 2nd/3rd results.
                --
                -- To stay correct in every case, we first evaluate the original,
                -- untouched expression list into plain temporary locals - which
                -- lets the Lua runtime itself apply the usual truncation/expansion
                -- rules exactly as it would without this step - and only then wrap
                -- each temporary's value into its proxy.
                local declScope = node.scope;
                local tempIds = {};
                for i = 1, #node.ids do
                    tempIds[i] = declScope:addVariable();
                end
                local statements = {
                    Ast.LocalVariableDeclaration(declScope, tempIds, node.expressions);
                };
                for i, id in ipairs(node.ids) do
                    local tempExpr = Ast.VariableExpression(declScope, tempIds[i]);
                    local localMetatableInfo = infos[i];
                    if localMetatableInfo then
                        local newExpr = self:CreateAssignmentExpression(localMetatableInfo, tempExpr, declScope);
                        table.insert(statements, Ast.LocalVariableDeclaration(declScope, {id}, {newExpr}));
                    else
                        table.insert(statements, Ast.LocalVariableDeclaration(declScope, {id}, {tempExpr}));
                    end
                end
                return unpack(statements);
            end
        end

        -- Variable Expression
        if(node.kind == AstKind.VariableExpression and not node.__ignoreProxifyLocals) then
            local localMetatableInfo = getLocalMetatableInfo(node.scope, node.id);
            -- Apply Only to Some Variables if Threshold is non 1
            if localMetatableInfo then
                local literal;
                if self.LiteralType == "dictionary" then
                    literal = RandomLiterals.Dictionary();
                elseif self.LiteralType == "number" then
                    literal = RandomLiterals.Number();
                elseif self.LiteralType == "string" then
                    literal = RandomLiterals.String(pipeline);
                else
                    literal = RandomLiterals.Any(pipeline);
                end
                return localMetatableInfo.getValue.constructor(node, literal);
            end
        end

        -- Assignment Variable for Assignment Statement
        if(node.kind == AstKind.AssignmentVariable) then
            local localMetatableInfo = getLocalMetatableInfo(node.scope, node.id);
            -- Apply Only to Some Variables if Threshold is non 1
            if localMetatableInfo then
                -- `node` here is an AssignmentVariable, which is only ever valid in LHS
                -- position (it represents "assign into this slot", not a value) - it is not a
                -- compilable expression. Passing it straight through as the `base` of
                -- AssignmentIndexing (as done previously) compiles fine for single-target
                -- assignments only because that case is intercepted earlier by the
                -- AssignmentStatement previsit above and never reaches this branch; any
                -- multi-target assignment to a proxified local (e.g. `a, b = b, a`) hits this
                -- code directly and fails to compile ("AssignmentVariable is not an compliable
                -- expression!"). Build a proper VariableExpression referencing the same
                -- scope/id instead, matching the pattern already used a few lines above.
                return Ast.AssignmentIndexing(Ast.VariableExpression(node.scope, node.id), Ast.StringExpression(localMetatableInfo.valueName));
            end
        end

        -- Local Function Declaration
        if(node.kind == AstKind.LocalFunctionDeclaration) then
            local localMetatableInfo = getLocalMetatableInfo(node.scope, node.id);
            -- Apply Only to Some Variables if Threshold is non 1
            if localMetatableInfo then
                local funcLiteral = Ast.FunctionLiteralExpression(node.args, node.body);
                local newExpr = self:CreateAssignmentExpression(localMetatableInfo, funcLiteral, node.scope);
                -- `local function h() ... h() ... end` is sugar for `local h; h = function()
                -- ... h() ... end`, which pre-declares `h` so the function body can call
                -- itself recursively. Collapsing this into a single `local h = <newExpr>`
                -- (as previously done) breaks that self-reference: at the point the function
                -- literal is evaluated, the new local `h` is not yet in scope, so any read of
                -- `h` inside the body resolves to an outer/global `h` (typically nil) instead
                -- of the function itself. We predeclare `h` first, then assign - matching the
                -- original desugaring - so recursive calls keep working.
                return
                    Ast.LocalVariableDeclaration(node.scope, {node.id}, {}),
                    Ast.AssignmentStatement({ Ast.AssignmentVariable(node.scope, node.id) }, { newExpr });
            end
        end

        -- Function Declaration
        if(node.kind == AstKind.FunctionDeclaration) then
            local localMetatableInfo = getLocalMetatableInfo(node.scope, node.id);
            if(localMetatableInfo) then
                table.insert(node.indices, 1, localMetatableInfo.valueName);
            end
        end
    end)

    -- Add Setmetatable Variable Declaration
    -- resolveGlobal returns (scope, id); keep both so the VariableExpression
    -- references the real global id (same fix as the rawget call above).
    local setmetaScope, setmetaId = self.setMetatableVarScope:resolveGlobal("setmetatable");
    table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration(self.setMetatableVarScope, {self.setMetatableVarId}, {
        Ast.VariableExpression(setmetaScope, setmetaId)
    }));
end

return ProxifyLocals;
