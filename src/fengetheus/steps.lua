--
-- steps.lua
--
-- This Script provides a collection of all available obfuscation Steps for Fengetheus.

return {
	AddVararg = require("fengetheus.steps.AddVararg");
	AntiSandbox = require("fengetheus.steps.AntiSandbox");
	AntiTamper = require("fengetheus.steps.AntiTamper");
	ConstantArray = require("fengetheus.steps.ConstantArray");
	ConstantFolding = require("fengetheus.steps.ConstantFolding");
	DeadCodeElimination = require("fengetheus.steps.DeadCodeElimination");
	RedundantOperationElimination = require("fengetheus.steps.RedundantOperationElimination");
	ConditionCamouflage = require("fengetheus.steps.ConditionCamouflage");
	ControlFlowMutation = require("fengetheus.steps.ControlFlowMutation");
	EncryptStrings = require("fengetheus.steps.EncryptStrings");
	ExtractGlobals = require("fengetheus.steps.ExtractGlobals");
	LocalCaching = require("fengetheus.steps.LocalCaching");
	NumbersToExpressions = require("fengetheus.steps.NumbersToExpressions");
	OpaquePredicate = require("fengetheus.steps.OpaquePredicate");
	ProxifyLocals = require("fengetheus.steps.ProxifyLocals");
	RewriteNamecalls = require("fengetheus.steps.RewriteNamecalls");
	SplitStrings = require("fengetheus.steps.SplitStrings");
	Vmify = require("fengetheus.steps.Vmify");
	Watermark = require("fengetheus.steps.Watermark");
	WatermarkCheck = require("fengetheus.steps.WatermarkCheck");
	WrapInFunction = require("fengetheus.steps.WrapInFunction");
	JunkCode = require("fengetheus.steps.JunkCode");
	TamperObfuscator = require("fengetheus.steps.TamperObfuscator");
}
