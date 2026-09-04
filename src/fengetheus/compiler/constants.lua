
--
-- constants.lua
--
-- This Script contains the compiler constants shared across modules.

return {
    MAX_REGS = 100,
    -- Use randomized virtual-register allocation while the live register
    -- count is below the configured ceiling. This changes the register/data
    -- layout for every seed (making structural matching harder) without
    -- changing the spill representation used once the ceiling is reached.
    MAX_REGS_MUL = 1,
    -- Maximum number of distinct createClosure helper functions to generate.
    -- Each unique argument-count signature in the original script produces one
    -- createClosureVar, and every one of those becomes BOTH a parameter of the
    -- top-level VM function AND an entry in the giant parallel assignment that
    -- initialises all VM infrastructure. Luau limits a single function to 255
    -- registers/locals/parameters and Lua 5.1 to ~200, so an unbounded number
    -- of closure creators makes the generated code uncompilable for scripts
    -- that contain hundreds of functions with different arities (e.g. large
    -- Roblox UI scripts). When this cap is reached the compiler reuses an
    -- existing creator with a compatible (>=) arity instead of minting a new
    -- one, falling back to the vararg closure creator as a last resort.
    MAX_CLOSURE_CREATORS = 120,
}
