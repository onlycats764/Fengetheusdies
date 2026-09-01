
-- This Script is Part of the Fengetheus Obfuscator (Prometheus fork) by levno-710
--
-- namegenerators.lua
--
-- This Script provides a collection of name generators for Fengetheus.

return {
	Mangled = require("fengetheus.namegenerators.mangled");
	MangledShuffled = require("fengetheus.namegenerators.mangled_shuffled");
	Il = require("fengetheus.namegenerators.Il");
	Number = require("fengetheus.namegenerators.number");
	Confuse = require("fengetheus.namegenerators.confuse");
}
