
--
-- Vmify.lua
--
-- This Script provides a Complex Obfuscation Step that will compile the entire Script to  a fully custom bytecode that does not share it's instructions
-- with lua, making it much harder to crack than other lua obfuscators

local Step = require("fengetheus.step");
local Compiler = require("fengetheus.compiler.compiler");

local Vmify = Step:extend();
Vmify.Description = "This Step will Compile your script into a fully-custom (not a half custom like other lua obfuscators) Bytecode Format and emit a vm for executing it.";
Vmify.Name = "Vmify";

Vmify.SettingsDescriptor = {
	DispatchMask = {
		type = "boolean",
		default = false,
	},
	DispatchAffine = {
		type = "boolean",
		default = false,
	},
	DispatchBounce = {
		type = "boolean",
		default = false,
	},
	DispatchNonlinear = {
		type = "boolean",
		default = false,
	},
	DispatchAliasCount = {
		type = "number",
		default = 1,
		min = 1,
		max = 4,
	},
	InstructionVM = {
		type = "boolean",
		default = false,
	},
    DispatchMaskMagnitude = {
        type = "number",
        default = 4096,
        min = 1,
        max = 1000000,
    },
	DispatchNoiseMagnitude = {
		type = "number",
		default = 7,
		min = 1,
		max = 1024,
	},
}

function Vmify:init()
    -- Step:new() assigns validated settings before calling init() and does not
    -- pass the settings table a second time. Preserve those values here.
	self.DispatchMask = self.DispatchMask == true
	self.DispatchAffine = self.DispatchAffine == true
	self.DispatchBounce = self.DispatchBounce == true
	self.DispatchNonlinear = self.DispatchNonlinear == true
	self.DispatchAliasCount = self.DispatchAliasCount or 1
	self.InstructionVM = self.InstructionVM == true
	self.DispatchMaskMagnitude = self.DispatchMaskMagnitude or 4096
	self.DispatchNoiseMagnitude = self.DispatchNoiseMagnitude or 7
end

function Vmify:apply(ast)
    -- Create Compiler
	local compiler = Compiler:new({
        DispatchMask = self.DispatchMask,
        DispatchAffine = self.DispatchAffine,
		DispatchBounce = self.DispatchBounce,
        DispatchNonlinear = self.DispatchNonlinear,
		DispatchAliasCount = self.DispatchAliasCount,
        InstructionVM = self.InstructionVM,
        DispatchMaskMagnitude = self.DispatchMaskMagnitude,
		DispatchNoiseMagnitude = self.DispatchNoiseMagnitude,
    });

    -- Compile the Script into a bytecode vm
    return compiler:compile(ast);
end

return Vmify;
