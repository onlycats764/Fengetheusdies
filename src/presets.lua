-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- presets.lua
--
-- This Script provides the predefined obfuscation presets for Prometheus
--
-- Fengetheus preset tuning notes:
--   The Weak/Medium/Strong presets were strengthened by activating features
--   that Prometheus ships but the upstream presets left unused:
--     * Shuffle + Rotate on every ConstantArray pass (randomised index order
--       + per-call rotation of the decrypted array).
--     * LocalWrapperCount / LocalWrapperArgCount on ConstantArray (emits junk
--       wrapper functions with bogus arguments around the array decoder,
--       adding dead code and extra indirection that a reverser must untangle).
--     * SplitStrings (splits string literals into shuffled chunks reassembled
--       via custom local/global functions) on Medium and Strong.
--   The double-Vmify (bytecode-in-bytecode) was tested and is technically
--   correct thanks to a fix in compiler/upvalue.lua's createUpvaluesProxyFunc
--   __len metamethod (wrong scope parenting), but it was removed from the
--   Strong preset because it is too slow for real-world scripts (>5 minutes
--   for a 186-line GUI script). SplitStrings + LocalWrappers provide
--   comparable indirection at a fraction of the cost.
--   All configurations were verified to produce output that executes
--   identically to the original (same printed output AND return values) across
--   every test case and multiple seeds, in LuaNode-VM.

return {
	-- Minifies your code. Does not obfuscate it. No performance loss.
	["Minify"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {},
	},

	-- Weak obfuscation. Very readable, low performance loss.
	-- Strengthened: ConstantArray now shuffles and rotates its index array,
	-- making the constant lookup less trivially reversible at no correctness
	-- cost.
	["Weak"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0,
				},
			},
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- This is here for the tests.lua file.
	-- It helps isolate any problems with the Vmify step.
	-- It is not recommended to use this preset for obfuscation.
	-- Use the Weak, Medium, or Strong for obfuscation instead.
	["Vmify"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
		},
	},

	-- Medium obfuscation. Moderate obfuscation, moderate performance loss.
	-- Strengthened with SplitStrings (string chunking) and LocalWrapperCount
	-- (junk wrapper functions around the constant-array decoder). The
	-- reassembly helper is local: global helper injection is observable by
	-- Roblox scripts and can also introduce an extra global into Vmify input.
	["Medium"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "EncryptStrings", Settings = {} },
			{
				Name = "SplitStrings",
				Settings = {
					Threshold = 0.5,
					MinLength = 2,
					MaxLength = 6,
					ConcatenationType = "custom",
					CustomFunctionType = "local",
					CustomLocalFunctionsCount = 1,
				},
			},
			{
				Name = "AntiTamper",
				Settings = {
					UseDebug = false,
				},
			},
			{ Name = "Vmify", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 1,
					LocalWrapperCount = 3,
					LocalWrapperArgCount = 8,
				},
			},
			{ Name = "NumbersToExpressions", Settings = {} },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- Strong obfuscation, high performance loss.
	-- Maximum layering WITHOUT double-Vmify: a single Vmify pass (bytecode VM
	-- -- the hardest single layer to reverse), EncryptStrings, SplitStrings
	-- with local reassembly functions, AntiTamper, ProxifyLocals (wraps every
	-- local in a proxy with metamethods), two ConstantArray passes (full +
	-- strings-only) with shuffle/rotate, NumbersToExpressions with representation
	-- mutation, and WrapInFunction.
	--
	-- Do not enable ConstantArray local wrappers here. This pass runs after
	-- Vmify and ProxifyLocals, where the AST already contains the generated VM
	-- runtime and many function scopes. Decorating every such scope multiplies
	-- the generated AST and makes Strong take minutes even for tiny inputs. The
	-- non-wrapper ConstantArray path retains array indirection, shuffled/rotated
	-- lookup layout and string encoding while keeping completion bounded.
	--
	-- Double-Vmify (bytecode-in-bytecode) was tested and is technically
	-- correct thanks to the upvalue.lua fix, but it is too slow for real-world
	-- scripts (a 186-line GUI script takes >5 minutes to obfuscate). It has
	-- been removed in favour of SplitStrings + LocalWrappers which add
	-- comparable indirection at a fraction of the cost. See CHANGELOG.md.
	["Strong"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
			{ Name = "EncryptStrings", Settings = {} },
			{
				Name = "SplitStrings",
				Settings = {
					Threshold = 0.7,
					MinLength = 2,
					MaxLength = 8,
					ConcatenationType = "custom",
					CustomFunctionType = "local",
					CustomLocalFunctionsCount = 2,
				},
			},
			{
				Name = "AntiTamper",
				Settings = {
					UseDebug = false,
				},
			},
			{ Name = "ProxifyLocals", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = false,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0,
				},
			},
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0,
				},
			},
			{
				Name = "NumbersToExpressions",
				Settings = {
					NumberRepresentationMutation = true,
				},
			},
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- StrongScalable is used by the CLI for very large scripts whose generated
	-- Strong output would exceed Lua's per-function local-variable or nesting
	-- limits. It retains string encryption, anti-tamper, a shuffled/rotated
	-- constant array, numeric expression mutation, and function wrapping while
	-- avoiding the VM, local proxification, split-string helpers, and second
	-- ConstantArray pass that can make a large result unloadable.
	["StrongScalable"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "EncryptStrings", Settings = {} },
			{
				Name = "AntiTamper",
				Settings = {
					UseDebug = false,
				},
			},
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = false,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0,
				},
			},
			{
				Name = "NumbersToExpressions",
				Settings = {
					NumberRepresentationMutation = true,
				},
			},
			{ Name = "WrapInFunction", Settings = {} },
		},
	},
}
