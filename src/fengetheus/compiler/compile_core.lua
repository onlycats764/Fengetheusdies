
-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
--
-- compile_core.lua
-- This Script contains the core compilation functions: compileTopNode, compileFunction, compileBlock,
-- compileStatement, and compileExpression

local compileTop = require("fengetheus.compiler.compile_top");
local statementHandlers = require("fengetheus.compiler.statements");
local expressionHandlers = require("fengetheus.compiler.expressions");
local Ast = require("fengetheus.ast");
local logger = require("logger");

return function(Compiler)
    compileTop(Compiler);

    function Compiler:compileStatement(statement, funcDepth)
        local handler = statementHandlers[statement.kind];
        if handler then
            handler(self, statement, funcDepth);
            return;
        end
        logger:error(string.format("%s is not a compileable statement!", statement.kind));
    end

    function Compiler:compileExpression(expression, funcDepth, numReturns)
        local handler = expressionHandlers[expression.kind];
        if handler then
            return handler(self, expression, funcDepth, numReturns);
        end
        logger:error(string.format("%s is not an compliable expression!", expression.kind));
    end
end
