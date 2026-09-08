--
-- return.lua
--
-- This Script contains the statement handler for the ReturnStatement.

local Ast = require("fengetheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local entries = {};
    local regs = {};

    for i, expr in ipairs(statement.args) do
        if i == #statement.args and not expr.isParenthesizedExpression and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(entries, Ast.TableEntry(Ast.FunctionCallExpression(
                self:expand(scope),
                {self:register(scope, reg)})));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(entries, Ast.TableEntry(self:register(scope, reg)));
            table.insert(regs, reg);
        end
    end

    for _, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end

    -- FIX#3 channel 8: returns pack via P(v1, ..., vn) with the TRUE
    -- count. Spread tail is the X(reg) call whose values flow into P's
    -- varargs; select('#',...) computes n-1+k correctly, nils included.
    local packArgs = {};
    for i, entry in ipairs(entries) do
        table.insert(packArgs, entry.value);
    end
    self:addStatement(self:setReturn(scope, Ast.FunctionCallExpression(self:pack(scope), packArgs)), {self.RETURN_REGISTER}, regs, false);
    self:addStatement(self:setPos(self.activeBlock.scope, nil), {self.POS_REGISTER}, {}, false);
    self.activeBlock.advanceToNextBlock = false;
end;
