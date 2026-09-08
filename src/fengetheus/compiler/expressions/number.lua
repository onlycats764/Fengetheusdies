--
-- number.lua
--
-- This Script contains the expression handler for the NumberExpression.

local Ast = require("fengetheus.ast");

-- Negative zero cannot be emitted as a literal into the VM container
-- function. The container already contains +0 literals from its own
-- template (`currentUpvalId = 0`, pack-table `[0]` keys, ...), and stock
-- Lua 5.1/5.4 compilers dedupe function constants NUMERICALLY
-- (-0.0 == 0.0), so a user -0.0 literal emitted anywhere in that function
-- collapses onto the first +0 literal and silently becomes +0.0
-- (1/-0.0 printing "inf" instead of "-inf"). Luau dedupes bit-exactly and
-- is immune. Emitting -(0.5-0.5) does NOT help: stock compilers fold that
-- back to a -0.0 literal in the same K-table. The len-of-empty-string form
-- -#"" computes -0.0 at runtime with no zero literal and no global
-- dependency, and is not folded by any stock compiler (verified: lua5.1,
-- Luau CLI, Lumora; survives a +0 literal appearing earlier in the same
-- function).
local function negativeZeroValue(value)
	return value == 0 and 1 / value < 0;
end

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local value;
            if negativeZeroValue(expression.value) then
                value = Ast.NegateExpression(Ast.LenExpression(Ast.StringExpression("")));
            else
                value = Ast.NumberExpression(expression.value);
            end
            self:addStatement(self:setRegister(scope, regs[i], value), {regs[i]}, {}, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
