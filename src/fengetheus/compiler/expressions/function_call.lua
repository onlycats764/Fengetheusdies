--
-- function_call.lua
--
-- This Script contains the expression handler for the FunctionCallExpression.

local Ast = require("fengetheus.ast");
local AstKind = Ast.AstKind;

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local baseReg = self:compileExpression(expression.base, funcDepth, 1)[1];

    local retRegs = {};
    local returnAll = numReturns == self.RETURN_ALL;
    if returnAll then
        retRegs[1] = self:allocRegister(false);
    else
        for i = 1, numReturns do
            retRegs[i] = self:allocRegister(false);
        end
    end

    local regs = {};
    local args = {};
    for i, expr in ipairs(expression.args) do
        if i == #expression.args and not expr.isParenthesizedExpression and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:expand(scope),
                {self:register(scope, reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(args, self:register(scope, reg));
            table.insert(regs, reg);
        end
    end

    if returnAll then
        -- FIX#3 channel 9a: RETURN_ALL packs via P(...) with the TRUE count.
        self:addStatement(self:setRegister(scope, retRegs[1], Ast.FunctionCallExpression(self:pack(scope), {Ast.FunctionCallExpression(self:register(scope, baseReg), args)})), {retRegs[1]}, {baseReg, unpack(regs)}, true);
    else
        if numReturns > 1 then
            local tmpReg = self:allocRegister(false);

            -- A parenthesized call, e.g. `local a, b = (f())`, must adjust to
            -- exactly one value in real Lua, even though the caller here may
            -- still ask for more registers (because there are more lhs
            -- targets than rhs expressions). Marking the generated call
            -- itself as parenthesized makes the *emitted* Lua source wrap it
            -- in "(...)" too, so the table constructor below only ever
            -- captures one real value; every other requested register is
            -- then indexed out as nil below, exactly like real Lua would.
            local innerCall = Ast.FunctionCallExpression(self:register(scope, baseReg), args);
            if expression.isParenthesizedExpression then
                innerCall.isParenthesizedExpression = true;
            end

            self:addStatement(self:setRegister(scope, tmpReg, Ast.TableConstructorExpression{Ast.TableEntry(innerCall)}), {tmpReg}, {baseReg, unpack(regs)}, true);


            for i, reg in ipairs(retRegs) do
                self:addStatement(self:setRegister(scope, reg, Ast.IndexExpression(self:register(scope, tmpReg), Ast.NumberExpression(i))), {reg}, {tmpReg}, false);
            end

            self:freeRegister(tmpReg, false);
        else
            self:addStatement(self:setRegister(scope, retRegs[1], Ast.FunctionCallExpression(self:register(scope, baseReg), args)), {retRegs[1]}, {baseReg, unpack(regs)}, true);
        end
    end

    self:freeRegister(baseReg, false);
    for i, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end

    return retRegs;
end;
