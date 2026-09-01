-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
--
-- steps.lua
--
-- This Script provides a collection of all available obfuscation Steps for Fengetheus.

return {
	AddVararg = require("fengetheus.steps.AddVararg");
	AntiTamper = require("fengetheus.steps.AntiTamper");
	ConstantArray = require("fengetheus.steps.ConstantArray");
	ConditionCamouflage = require("fengetheus.steps.ConditionCamouflage");
	EncryptStrings = require("fengetheus.steps.EncryptStrings");
	NumbersToExpressions = require("fengetheus.steps.NumbersToExpressions");
	ProxifyLocals = require("fengetheus.steps.ProxifyLocals");
	SplitStrings = require("fengetheus.steps.SplitStrings");
	Vmify = require("fengetheus.steps.Vmify");
	Watermark = require("fengetheus.steps.Watermark");
	WatermarkCheck = require("fengetheus.steps.WatermarkCheck");
	WrapInFunction = require("fengetheus.steps.WrapInFunction");
}
