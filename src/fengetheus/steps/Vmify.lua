
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
    DispatchMaskMagnitude = {
        type = "number",
        default = 4096,
        min = 1,
        max = 1000000,
    },
}

function Vmify:init(config)
    self.DispatchMask = config and config.DispatchMask == true or false
    self.DispatchMaskMagnitude = (config and config.DispatchMaskMagnitude) or 4096
end

function Vmify:apply(ast)
    -- Create Compiler
	local compiler = Compiler:new({
        DispatchMask = self.DispatchMask,
        DispatchMaskMagnitude = self.DispatchMaskMagnitude,
    });

    -- Compile the Script into a bytecode vm
    return compiler:compile(ast);
end

return Vmify;
