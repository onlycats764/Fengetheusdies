--
-- compiler.lua
--
-- This Script is the main compiler module.

local Ast = require("fengetheus.ast");
local Scope = require("fengetheus.scope");
local util = require("fengetheus.util");
local constants = require("fengetheus.compiler.constants");

local lookupify = util.lookupify;
local AstKind = Ast.AstKind;
local MAX_CLOSURE_CREATORS = constants.MAX_CLOSURE_CREATORS;

local unpack = unpack or table.unpack;

local blockModule = require("fengetheus.compiler.block");
local registerModule = require("fengetheus.compiler.register");
local upvalueModule = require("fengetheus.compiler.upvalue");
local emitModule = require("fengetheus.compiler.emit");
local compileCoreModule = require("fengetheus.compiler.compile_core");
local irModule = require("fengetheus.compiler.ir");

local Compiler = {};

function Compiler:new(options)
    options = options or {};
    local compiler = {
        blocks = {};
        registers = {};
        activeBlock = nil;
        registersForVar = {};
        usedRegisters = 0;
        maxUsedRegister = 0;
        registerVars = {};
		DispatchMask = options.DispatchMask == true;
		DispatchAffine = options.DispatchAffine == true;
		DispatchBounce = options.DispatchBounce == true;
		DispatchNonlinear = options.DispatchNonlinear == true;
		DispatchAliasCount = options.DispatchAliasCount or 1;
		DispatchMaskMagnitude = options.DispatchMaskMagnitude or 4096;
		DispatchNoiseMagnitude = options.DispatchNoiseMagnitude or 7;
		InstructionVM = options.InstructionVM == true;
		DispatchMultiplier = 1;
		DispatchOffset = 0;
		DispatchNoise = {};

        VAR_REGISTER = newproxy(false);
        RETURN_ALL = newproxy(false);
        POS_REGISTER = newproxy(false);
        RETURN_REGISTER = newproxy(false);
        UPVALUE = newproxy(false);

        BIN_OPS = lookupify{
            AstKind.LessThanExpression,
            AstKind.GreaterThanExpression,
            AstKind.LessThanOrEqualsExpression,
            AstKind.GreaterThanOrEqualsExpression,
            AstKind.NotEqualsExpression,
            AstKind.EqualsExpression,
            AstKind.StrCatExpression,
            AstKind.AddExpression,
            AstKind.SubExpression,
            AstKind.MulExpression,
            AstKind.DivExpression,
            AstKind.ModExpression,
            AstKind.PowExpression,
        };
    };

    setmetatable(compiler, self);
    self.__index = self;

    return compiler;
end

blockModule(Compiler);
registerModule(Compiler);
upvalueModule(Compiler);
emitModule(Compiler);
compileCoreModule(Compiler);

function Compiler:pushRegisterUsageInfo()
    table.insert(self.registerUsageStack, {
        usedRegisters = self.usedRegisters;
        registers = self.registers;
    });
    self.usedRegisters = 0;
    self.registers = {};
end

function Compiler:popRegisterUsageInfo()
    local info = table.remove(self.registerUsageStack);
    self.usedRegisters = info.usedRegisters;
    self.registers = info.registers;
end

-- Add one shared trampoline block for every encoded VM destination. This is a
-- source-level equivalent of bytecode "bounce" edges: the instruction that
-- chooses a destination no longer exposes the destination block directly,
-- while the trampoline itself performs one simple state transition. Keeping
-- one trampoline per target bounds the overhead and avoids an exponential
-- graph expansion.
function Compiler:addDispatchBounces()
	if not self.DispatchBounce then
		return
	end

	local originalBlocks = {}
	for i, block in ipairs(self.blocks) do
		originalBlocks[i] = block
	end

	local bounces = {}
	local seen = {}

	local function getBounces(target)
		if bounces[target] then
			return bounces[target]
		end

		local aliases = {}
		for _ = 1, self.DispatchAliasCount do
			local bounce = self:createBlock()
			bounce.advanceToNextBlock = false
			local scope = bounce.scope
			scope:addReferenceToHigherScope(self.containerFuncScope, self.posVar)
			local transition = Ast.AssignmentStatement({
				Ast.AssignmentVariable(self.containerFuncScope, self.posVar)
			}, {
				Ast.NumberExpression(self:encodeDispatchValue(target))
			})
			bounce.statements[1] = {
				statement = transition,
				writes = lookupify({ self.POS_REGISTER }),
				reads = {},
				usesUpvals = false,
			}
			aliases[#aliases + 1] = bounce.id
		end
		bounces[target] = aliases
		return aliases
	end

	local function chooseBounce(target)
		local aliases = getBounces(target)
		return aliases[math.random(1, #aliases)]
	end

	local function rewrite(node)
		if type(node) ~= "table" or seen[node] then
			return
		end
		seen[node] = true

		if node.kind == AstKind.NumberExpression and node.__dispatchTarget ~= nil then
			local bounceId = chooseBounce(node.__dispatchTarget)
			node.value = self:encodeDispatchValue(bounceId)
			node.__dispatchTarget = nil
		end

		for key, value in pairs(node) do
			if key ~= "scope" and key ~= "globalScope" and key ~= "parentScope" and
				key ~= "variables" and key ~= "variablesLookup" and
				key ~= "referenceCounts" and key ~= "variablesFromHigherScopes" and
				key ~= "children" and key ~= "loop" and key ~= "__dispatchTarget" then
				rewrite(value)
			end
		end
	end

	for _, block in ipairs(originalBlocks) do
		for _, entry in ipairs(block.statements) do
			rewrite(entry.statement)
		end
	end

	-- The top-level closure entry is constructed after this pass. Point it at
	-- the trampoline too, so the first VM iteration follows the same shape as
	-- every later transition.
	self.startBlockId = chooseBounce(self.startBlockId)
end

function Compiler:compile(ast)
    self.blocks = {};
    self.registers = {};
    self.activeBlock = nil;
    self.registersForVar = {};
    self.scopeFunctionDepths = {};
    self.maxUsedRegister = 0;
    self.usedRegisters = 0;
    self.registerVars = {};
	self.usedBlockIds = {};
	self.ir = nil;
	self.instructionProgramsAst = nil;
	self.usedInstructionOpcodes = {};
	self.DispatchAliasCount = math.max(1, math.min(4, math.floor(self.DispatchAliasCount or 1)));

	self.upvalVars = {};
	self.registerUsageStack = {};
	self.DispatchNoise = {};
	if self.DispatchAffine then
		-- Keep the multiplier positive so the binary dispatch tree remains
		-- ordered. Block IDs are 24-bit integers, so these products are exact.
		-- Nonlinear bucket encoding uses a larger stride than its per-value
		-- noise, preserving order while preventing a simple affine inversion.
		if self.DispatchNonlinear then
			local noise = math.max(1, math.floor(self.DispatchNoiseMagnitude or 7));
			self.DispatchNoiseMagnitude = noise;
			self.DispatchMultiplier = math.random(noise * 4 + 1, noise * 8 + 1);
		else
			self.DispatchMultiplier = math.random(3, 15) * 2 + 1;
		end
		self.DispatchOffset = math.random(-2^20, 2^20);
	else
		self.DispatchMultiplier = 1;
		self.DispatchOffset = 0;
		self.DispatchNoiseMagnitude = 0;
	end

    self.upvalsProxyLenReturn = math.random(-2^22, 2^22);

    local newGlobalScope = Scope:newGlobal();
    local psc = Scope:new(newGlobalScope, nil);

    local _, getfenvVar = newGlobalScope:resolve("getfenv");
    local _, tableVar = newGlobalScope:resolve("table");
    local _, unpackVar = newGlobalScope:resolve("unpack");
    -- NOTE: this used to resolve "_ENV" instead of "_G" as the fallback for
    -- when getfenv() is unavailable (Lua 5.2+/Fengari). That worked when
    -- Vmify is applied once, because the *only* parser that ever sees this
    -- fallback expression as real syntax is the host Lua/Fengari parser
    -- loading the final generated program, and _ENV is a genuine upvalue
    -- there. But when Vmify is applied a second time (the "Strong" preset),
    -- the first pass's already-generated source - including this literal
    -- fallback expression - becomes plain input text for Fengetheus's own
    -- parser (fengetheus.parser), which has no notion of _ENV as anything
    -- other than an ordinary global name. It gets re-compiled as a normal
    -- global lookup, i.e. (globalTable)["_ENV"], which is nil (_ENV is not
    -- an entry of the global table, unlike _G, which is a real self-
    -- referential entry: _G._G == _G). Under real Lua 5.1 this dead code
    -- path is never evaluated at runtime because getfenv() always exists
    -- and the "and/or" short-circuits before reaching it - so the bug was
    -- invisible there. Under Fengari, getfenv is nil, so the fallback IS
    -- evaluated, and double-Vmify output throws "attempt to index a nil
    -- value" while resolving any global (e.g. print). Using "_G" instead
    -- fixes this because _G is an ordinary global binding that survives
    -- any number of re-parse/re-compile passes, at every nesting depth.
    local _, envVar = newGlobalScope:resolve("_G");
    local _, newproxyVar = newGlobalScope:resolve("newproxy");
    local _, setmetatableVar = newGlobalScope:resolve("setmetatable");
    local _, getmetatableVar = newGlobalScope:resolve("getmetatable");
    local _, selectVar = newGlobalScope:resolve("select");

    psc:addReferenceToHigherScope(newGlobalScope, getfenvVar, 2);
    psc:addReferenceToHigherScope(newGlobalScope, tableVar);
    psc:addReferenceToHigherScope(newGlobalScope, unpackVar);
    psc:addReferenceToHigherScope(newGlobalScope, envVar);
    psc:addReferenceToHigherScope(newGlobalScope, newproxyVar);
    psc:addReferenceToHigherScope(newGlobalScope, setmetatableVar);
    psc:addReferenceToHigherScope(newGlobalScope, getmetatableVar);

    self.scope = Scope:new(psc);
    self.envVar = self.scope:addVariable();
    self.containerFuncVar = self.scope:addVariable();
	if self.InstructionVM then
		self.instructionProgramsVar = self.scope:addVariable();
	end
    self.unpackVar = self.scope:addVariable();
    -- FIX#3: P (pack multi-values with true count) and X (hole-safe expand)
    self.packVar = self.scope:addVariable();
    self.expandVar = self.scope:addVariable();
    self.newproxyVar = self.scope:addVariable();
    self.setmetatableVar = self.scope:addVariable();
    self.getmetatableVar = self.scope:addVariable();
    self.selectVar = self.scope:addVariable();

    local argVar = self.scope:addVariable();

    self.containerFuncScope = Scope:new(self.scope);
    self.whileScope = Scope:new(self.containerFuncScope);

    self.posVar = self.containerFuncScope:addVariable();
	if self.InstructionVM then
		self.registerFrameVar = self.containerFuncScope:addVariable();
	end
    self.argsVar = self.containerFuncScope:addVariable();
    self.currentUpvaluesVar = self.containerFuncScope:addVariable();
    self.detectGcCollectVar = self.containerFuncScope:addVariable();
    self.returnVar = self.containerFuncScope:addVariable();

    self.upvaluesTable = self.scope:addVariable();
    self.upvaluesReferenceCountsTable = self.scope:addVariable();
    self.allocUpvalFunction = self.scope:addVariable();
    self.currentUpvalId = self.scope:addVariable();

    self.upvaluesProxyFunctionVar = self.scope:addVariable();
    self.upvaluesGcFunctionVar = self.scope:addVariable();
    self.freeUpvalueFunc = self.scope:addVariable();

    self.createClosureVars = {};
    self.createVarargClosureVar = self.scope:addVariable();
    local createClosureScope = Scope:new(self.scope);
    local createClosurePosArg = createClosureScope:addVariable();
    local createClosureUpvalsArg = createClosureScope:addVariable();
    local createClosureProxyObject = createClosureScope:addVariable();
    local createClosureFuncVar = createClosureScope:addVariable();

    local createClosureSubScope = Scope:new(createClosureScope);

    local upvalEntries = {};
    local upvalueIds = {};
    self.getUpvalueId = function(self, scope, id)
        local expression;
        local scopeFuncDepth = self.scopeFunctionDepths[scope];
        if(scopeFuncDepth == 0) then
            if upvalueIds[id] then
                return upvalueIds[id];
            end
            expression = Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.allocUpvalFunction), {});
        else
            require("logger"):error("Unresolved Upvalue, this error should not occur!");
        end
        table.insert(upvalEntries, Ast.TableEntry(expression));
        local uid = #upvalEntries;
        upvalueIds[id] = uid;
        return uid;
    end

    createClosureSubScope:addReferenceToHigherScope(self.scope, self.containerFuncVar);
    -- FIX#3 A6-companion: the vararg creator's inner function packs '...'
    -- with P(), so the sub-scope must treat the pack variable as an
    -- upvalue reference; otherwise the renamer may shadow it with the
    -- proxy local and the generated VM breaks at runtime.
    createClosureSubScope:addReferenceToHigherScope(self.scope, self.packVar);
    createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosurePosArg)
    createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosureUpvalsArg, 1)
    createClosureScope:addReferenceToHigherScope(self.scope, self.upvaluesProxyFunctionVar)
    createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosureProxyObject);

	self:compileTopNode(ast);
	self:addDispatchBounces();

	-- Establish and validate the VM IR before constructing the final AST. This
	-- catches malformed/duplicate control-flow blocks at the compiler boundary,
	-- where the error is actionable, instead of producing a misleading nil
	-- dispatch failure much later in the generated program.
	self.ir = irModule.fromCompiler(self);
	irModule.materialize(self.ir);

    local functionNodeAssignments = {
        {
            var = Ast.AssignmentVariable(self.scope, self.containerFuncVar),
            val = Ast.FunctionLiteralExpression({
                Ast.VariableExpression(self.containerFuncScope, self.posVar),
                Ast.VariableExpression(self.containerFuncScope, self.argsVar),
                Ast.VariableExpression(self.containerFuncScope, self.currentUpvaluesVar),
                Ast.VariableExpression(self.containerFuncScope, self.detectGcCollectVar)
            }, self:emitContainerFuncBody());
        }, {
            var = Ast.AssignmentVariable(self.scope, self.createVarargClosureVar),
            val = Ast.FunctionLiteralExpression({
                    Ast.VariableExpression(createClosureScope, createClosurePosArg),
                    Ast.VariableExpression(createClosureScope, createClosureUpvalsArg),
                },
                Ast.Block({
                    Ast.LocalVariableDeclaration(createClosureScope, {
                        createClosureProxyObject
                    }, {
                        Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.upvaluesProxyFunctionVar), {
                            Ast.VariableExpression(createClosureScope, createClosureUpvalsArg)
                        })
                    }),
                    Ast.LocalVariableDeclaration(createClosureScope, {createClosureFuncVar},{
                        Ast.FunctionLiteralExpression({
                            Ast.VarargExpression();
                        },
                        Ast.Block({
                            Ast.ReturnStatement{
                                Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.containerFuncVar), {
                                    Ast.VariableExpression(createClosureScope, createClosurePosArg),
                                    Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.packVar), {Ast.VarargExpression()}),
                                    Ast.VariableExpression(createClosureScope, createClosureUpvalsArg),
                                    Ast.VariableExpression(createClosureScope, createClosureProxyObject)
                                })
                            }
                        }, createClosureSubScope)
                        );
                    });
                    Ast.ReturnStatement{Ast.VariableExpression(createClosureScope, createClosureFuncVar)};
                }, createClosureScope)
            );
        }, {
            -- P: pack varargs/multi-values into {[0]=trueCount, v1..vn}.
            -- select('#',...) is hole-proof on every engine; the count lives
            -- at integer key 0 so it never participates in the length border.
            var = Ast.AssignmentVariable(self.scope, self.packVar),
            val = (function()
                local pScope = Scope:new(self.scope);
                pScope:addReferenceToHigherScope(self.scope, self.selectVar);
                return Ast.FunctionLiteralExpression({Ast.VarargExpression()}, Ast.Block({
                    Ast.ReturnStatement({Ast.TableConstructorExpression({
                        Ast.KeyedTableEntry(
                            Ast.NumberExpression(0),
                            Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.selectVar), {
                                Ast.StringExpression("#"), Ast.VarargExpression();
                            })),
                        Ast.TableEntry(Ast.VarargExpression());
                    })})
                }, pScope));
            end)(),
        }, {
            -- X: expand a packed table back to multiple values with explicit
            -- bounds: unpack(t, 1, t[0]). Never consults #t, so embedded nils
            -- survive on every engine (5.1/LuaJIT/5.3/5.4/Lumora).
            var = Ast.AssignmentVariable(self.scope, self.expandVar),
            val = (function()
                local xScope = Scope:new(self.scope);
                xScope:addReferenceToHigherScope(self.scope, self.unpackVar);
                local xArg = xScope:addVariable();
                return Ast.FunctionLiteralExpression({Ast.VariableExpression(xScope, xArg)}, Ast.Block({
                    Ast.ReturnStatement({Ast.FunctionCallExpression(
                        Ast.VariableExpression(self.scope, self.unpackVar), {
                            Ast.VariableExpression(xScope, xArg),
                            Ast.NumberExpression(1),
                            Ast.IndexExpression(Ast.VariableExpression(xScope, xArg), Ast.NumberExpression(0))
                        })})
                }, xScope));
            end)(),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.upvaluesTable),
            val = Ast.TableConstructorExpression({}),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.upvaluesReferenceCountsTable),
            val = Ast.TableConstructorExpression({}),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.allocUpvalFunction),
            val = self:createAllocUpvalFunction(),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.currentUpvalId),
            val = Ast.NumberExpression(0),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.upvaluesProxyFunctionVar),
            val = self:createUpvaluesProxyFunc(),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.upvaluesGcFunctionVar),
            val = self:createUpvaluesGcFunc(),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.freeUpvalueFunc),
            val = self:createFreeUpvalueFunc(),
        },
    }

    local tbl = {
        Ast.VariableExpression(self.scope, self.containerFuncVar),
        Ast.VariableExpression(self.scope, self.createVarargClosureVar),
        Ast.VariableExpression(self.scope, self.packVar),
        Ast.VariableExpression(self.scope, self.expandVar),
        Ast.VariableExpression(self.scope, self.upvaluesTable),
        Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable),
        Ast.VariableExpression(self.scope, self.allocUpvalFunction),
        Ast.VariableExpression(self.scope, self.currentUpvalId),
        Ast.VariableExpression(self.scope, self.upvaluesProxyFunctionVar),
        Ast.VariableExpression(self.scope, self.upvaluesGcFunctionVar),
        Ast.VariableExpression(self.scope, self.freeUpvalueFunc),
    };
    for i, entry in pairs(self.createClosureVars) do
        table.insert(functionNodeAssignments, entry);
        table.insert(tbl, Ast.VariableExpression(entry.var.scope, entry.var.id));
    end
	if self.InstructionVM then
		table.insert(functionNodeAssignments, {
			var = Ast.AssignmentVariable(self.scope, self.instructionProgramsVar),
			val = self.instructionProgramsAst,
		});
	end

    util.shuffle(functionNodeAssignments);
    local assignmentStatLhs, assignmentStatRhs = {}, {};
    for i, v in ipairs(functionNodeAssignments) do
        assignmentStatLhs[i] = v.var;
        assignmentStatRhs[i] = v.val;
    end


    -- NEW: Position Shuffler
    local ids = util.shuffle({1, 2, 3, 4, 5, 6, 7});

    local items = {
        Ast.VariableExpression(self.scope, self.envVar),
        Ast.VariableExpression(self.scope, self.unpackVar),
        Ast.VariableExpression(self.scope, self.newproxyVar),
        Ast.VariableExpression(self.scope, self.setmetatableVar),
        Ast.VariableExpression(self.scope, self.getmetatableVar),
        Ast.VariableExpression(self.scope, self.selectVar),
        Ast.VariableExpression(self.scope, argVar),
    }

    local astItems = {
        Ast.OrExpression(Ast.AndExpression(Ast.VariableExpression(newGlobalScope, getfenvVar), Ast.FunctionCallExpression(Ast.VariableExpression(newGlobalScope, getfenvVar), {})), Ast.VariableExpression(newGlobalScope, envVar));
        Ast.OrExpression(Ast.VariableExpression(newGlobalScope, unpackVar), Ast.IndexExpression(Ast.VariableExpression(newGlobalScope, tableVar), Ast.StringExpression("unpack")));
        Ast.VariableExpression(newGlobalScope, newproxyVar);
        Ast.VariableExpression(newGlobalScope, setmetatableVar);
        Ast.VariableExpression(newGlobalScope, getmetatableVar);
        Ast.VariableExpression(newGlobalScope, selectVar);
        -- FIX#3 channel 1: packed outer-args carrier. Inlined (global select)
        -- because psc can only reference globals, never self.scope locals.
        Ast.TableConstructorExpression({
            Ast.KeyedTableEntry(
                Ast.NumberExpression(0),
                Ast.FunctionCallExpression(Ast.VariableExpression(newGlobalScope, selectVar), {
                    Ast.StringExpression("#"), Ast.VarargExpression();
                })),
            Ast.TableEntry(Ast.VarargExpression());
        })
    }

    local functionNode = Ast.FunctionLiteralExpression({
      items[ids[1]], items[ids[2]], items[ids[3]], items[ids[4]],
      items[ids[5]], items[ids[6]], items[ids[7]],
      unpack(util.shuffle(tbl))
    }, Ast.Block({
        Ast.AssignmentStatement(assignmentStatLhs, assignmentStatRhs);
        Ast.ReturnStatement{
            Ast.FunctionCallExpression(Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.createVarargClosureVar), {
					self:blockIdExpression(self.startBlockId);
                    Ast.TableConstructorExpression(upvalEntries);
                }), {Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.expandVar), {Ast.VariableExpression(self.scope, argVar)})});
        }
    }, self.scope));

    return Ast.TopNode(Ast.Block({
        Ast.ReturnStatement{Ast.FunctionCallExpression(functionNode, {
            astItems[ids[1]], astItems[ids[2]], astItems[ids[3]], astItems[ids[4]],
            astItems[ids[5]], astItems[ids[6]], astItems[ids[7]],
        })};
    }, psc), newGlobalScope);
end

function Compiler:getCreateClosureVar(argCount)
    -- If we already have a creator for this exact arity, reuse it.
    if self.createClosureVars[argCount] then
        local var = self.createClosureVars[argCount].var;
        return var.scope, var.id;
    end

    -- Count how many distinct creators currently exist.
    local existingCount = 0;
    for _ in pairs(self.createClosureVars) do
        existingCount = existingCount + 1;
    end

    -- If we have reached the cap, reuse an existing creator whose arity is
    -- >= the requested argCount (it accepts extra trailing args that are
    -- simply ignored at the call site). If no suitable one exists, fall back
    -- to the vararg closure creator which handles any arity.
    if existingCount >= MAX_CLOSURE_CREATORS then
        local bestId = nil;
        local bestArity = math.huge;
        for arity, entry in pairs(self.createClosureVars) do
            if arity >= argCount and arity < bestArity then
                bestArity = arity;
                bestId = entry;
            end
        end
        if bestId then
            return bestId.var.scope, bestId.var.id;
        end
        -- No creator with enough arity; use the vararg closure creator.
        return self.scope, self.createVarargClosureVar;
    end

    local var = Ast.AssignmentVariable(self.scope, self.scope:addVariable());
        local createClosureScope = Scope:new(self.scope);
        local createClosureSubScope = Scope:new(createClosureScope);

        local createClosurePosArg = createClosureScope:addVariable();
        local createClosureUpvalsArg = createClosureScope:addVariable();
        local createClosureProxyObject = createClosureScope:addVariable();
        local createClosureFuncVar = createClosureScope:addVariable();

        createClosureSubScope:addReferenceToHigherScope(self.scope, self.containerFuncVar);
        createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosurePosArg)
        createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosureUpvalsArg, 1)
        createClosureScope:addReferenceToHigherScope(self.scope, self.upvaluesProxyFunctionVar)
        createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosureProxyObject);

        local  argsTb, argsTb2 = {}, {};
        for i = 1, argCount do
            local arg = createClosureSubScope:addVariable()
            argsTb[i] = Ast.VariableExpression(createClosureSubScope, arg);
            argsTb2[i] = Ast.TableEntry(Ast.VariableExpression(createClosureSubScope, arg));
        end
        -- FIX#3 channel 7: fixed-arity creators pack args with a literal
        -- count slot at [0]; arity is static so no P() call is needed.
        table.insert(argsTb2, 1, Ast.KeyedTableEntry(
            Ast.NumberExpression(0), Ast.NumberExpression(argCount)));

        local val = Ast.FunctionLiteralExpression({
            Ast.VariableExpression(createClosureScope, createClosurePosArg),
            Ast.VariableExpression(createClosureScope, createClosureUpvalsArg),
        }, Ast.Block({
                Ast.LocalVariableDeclaration(createClosureScope, {
                    createClosureProxyObject
                }, {
                    Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.upvaluesProxyFunctionVar), {
                        Ast.VariableExpression(createClosureScope, createClosureUpvalsArg)
                    })
                }),
                Ast.LocalVariableDeclaration(createClosureScope, {createClosureFuncVar},{
                    Ast.FunctionLiteralExpression(argsTb,
                    Ast.Block({
                        Ast.ReturnStatement{
                            Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.containerFuncVar), {
                                Ast.VariableExpression(createClosureScope, createClosurePosArg),
                                Ast.TableConstructorExpression(argsTb2),
                                Ast.VariableExpression(createClosureScope, createClosureUpvalsArg),
                                Ast.VariableExpression(createClosureScope, createClosureProxyObject)
                            })
                        }
                    }, createClosureSubScope)
                    );
                });
                Ast.ReturnStatement{Ast.VariableExpression(createClosureScope, createClosureFuncVar)}
            }, createClosureScope)
        );
        self.createClosureVars[argCount] = {
            var = var,
            val = val,
        }

    local v = self.createClosureVars[argCount].var;
    return v.scope, v.id;
end

return Compiler;
