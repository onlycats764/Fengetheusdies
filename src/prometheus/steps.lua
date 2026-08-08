-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- steps.lua
--
-- This Script provides a collection of all available obfuscation Steps for Prometheus.

return {
	AddVararg = require("prometheus.steps.AddVararg");
	AntiTamper = require("prometheus.steps.AntiTamper");
	ConstantArray = require("prometheus.steps.ConstantArray");
	EncryptStrings = require("prometheus.steps.EncryptStrings");
	NumbersToExpressions = require("prometheus.steps.NumbersToExpressions");
	ProxifyLocals = require("prometheus.steps.ProxifyLocals");
	SplitStrings = require("prometheus.steps.SplitStrings");
	Vmify = require("prometheus.steps.Vmify");
	Watermark = require("prometheus.steps.Watermark");
	WatermarkCheck = require("prometheus.steps.WatermarkCheck");
	WrapInFunction = require("prometheus.steps.WrapInFunction");
}
