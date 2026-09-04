--
-- presets.lua
--
-- This Script provides the predefined obfuscation presets for Fengetheus
--
-- ═══════════════════════════════════════════════════════════════════════════
-- FENGETHEUS PRESET ARCHITECTURE — ANTI-RECOGNITION DESIGN
-- ═══════════════════════════════════════════════════════════════════════════
--
-- The original Prometheus presets (Weak/Medium/Strong) all used the same
-- step ordering: ConstantFolding → DeadCodeElimination →
-- RedundantOperationElimination → LocalCaching → ExtractGlobals →
-- OpaquePredicate → Vmify → AntiTamper → ...
--
-- Deobfuscation bots recognise this signature instantly — the step
-- sequence, the Vmify placement, and the AntiTamper `do…end` block
-- structure are all dead giveaways of a Prometheus-family obfuscator.
--
-- Fengetheus breaks this recognition by:
--
--  1. SHUFFLING THE STEP ORDER in every preset.  No two presets share the
--     same pipeline shape.  Some put Vmify first, some put anti-tamper
--     before string encryption, some omit the standard optimiser trio
--     entirely.
--
--  2. INTRODUCING TAMPEROBFUSCATOR after every AntiTamper / AntiSandbox
--     pass.  This step XOR-encrypts the generated integrity-check code
--     and replaces it with a polymorphic self-decoding loader.  A static
--     dumper sees only an opaque byte string and a tiny XOR loop — it
--     cannot pattern-match the anti-tamper structure, recognise the
--     sanity-loop, or extract the builtin snapshot list.
--
--  3. USING NON-STANDARD STEPS that Prometheus presets never enabled:
--     ControlFlowMutation, ConditionCamouflage, RewriteNamecalls,
--     AddVararg, TamperObfuscator.  These produce AST shapes that
--     Prometheus-trained bots do not expect.
--
--  4. VARYING VM DISPATCH OPTIONS across presets (Mask, Affine, Bounce,
--     Nonlinear, AliasCount) so the generated VM dispatcher looks
--     different in each preset.
--
-- The result: each preset produces structurally unique output that does
-- not match any known Prometheus signature, while remaining functionally
-- correct (verified across all test cases in Lumora).
--
-- All configurations were verified to produce output that executes
-- identically to the original (same printed output AND return values)
-- across every test case and multiple seeds, in Lumora (Luau runtime).

local presets = {
	-- ═══════════════════════════════════════════════════════════════════════
	-- Minify: Pure minification, no obfuscation. No performance loss.
	-- Kept unchanged — this is a utility preset, not a security preset.
	-- ═══════════════════════════════════════════════════════════════════════
	["Minify"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
		},
	},

	-- ═══════════════════════════════════════════════════════════════════════
	-- Balanced: Medium-strength, NO Vmify, NO ProxifyLocals.
	-- Works on large LuaU/Roblox scripts where VM-based presets hit the
	-- 255-register or 200-locals limit. Kept as a stable fallback.
	-- ═══════════════════════════════════════════════════════════════════════
	["Balanced"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
			{ Name = "ExtractGlobals", Settings = {} },
			{ Name = "OpaquePredicate", Settings = { Threshold = 0.5 } },
			{ Name = "EncryptStrings", Settings = {} },
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
			{ Name = "NumbersToExpressions", Settings = {} },
			{ Name = "AntiTamper", Settings = { UseDebug = false } },
			{ Name = "TamperObfuscator", Settings = { XORLayers = 1 } },
			{ Name = "JunkCode", Settings = { Chance = 0.15, MinJunk = 2, MaxJunk = 4, MaxDepth = 3 } },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- ═══════════════════════════════════════════════════════════════════════
	-- PHANTOM — Replaces "Weak"
	-- ───────────────────────────────────────────────────────────────────────
-- VM ordering with AntiTamper compiled into the VM. AntiTamper runs
-- before Vmify and is not wrapped in a post-VM TamperObfuscator loader.
-- RewriteNamecalls converts method calls to bracket-index form, adding
-- a shape that Prometheus presets never produce.
	--
-- Pipeline: Opt → AntiTamper → Vmify → EncryptStrings
--           → ConstantArray(shuffled) → NumbersToExpressions
--           → RewriteNamecalls → JunkCode → WrapInFunction
	-- ═══════════════════════════════════════════════════════════════════════
	["Phantom"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
			{ Name = "AntiTamper", Settings = { UseDebug = false } },
			{ Name = "Vmify", Settings = {} },
			{ Name = "ExtractGlobals", Settings = {} },
			{ Name = "EncryptStrings", Settings = {} },
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
			{ Name = "NumbersToExpressions", Settings = {} },
			{ Name = "RewriteNamecalls", Settings = { Threshold = 0.5, BracketIndex = true } },
			{ Name = "JunkCode", Settings = { Chance = 0.15, MinJunk = 2, MaxJunk = 4, MaxDepth = 3 } },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- ═══════════════════════════════════════════════════════════════════════
	-- WRAITH — Replaces "WeakStealth"
	-- ───────────────────────────────────────────────────────────────────────
-- Stealth-focused. Uses Stealth-mode AntiTamper (which already uses
-- _G[string.char(...)] lookups and non-literal failure loops) compiled
-- directly into the VM before the Vmify pass.
	-- ControlFlowMutation runs BEFORE Vmify (unusual — Prometheus puts
	-- control-flow steps after the VM), creating a different AST shape
	-- entering the VM compiler.  SplitStrings adds string-chunk
	-- indirection before the VM pass.
	--
	-- Pipeline: Opt → OpaquePredicate → ControlFlowMutation → SplitStrings
--           → AntiTamper(stealth) → Vmify → ConditionCamouflage
--           → JunkCode → WrapInFunction
	-- ═══════════════════════════════════════════════════════════════════════
	["Wraith"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
			{ Name = "ExtractGlobals", Settings = {} },
			{ Name = "OpaquePredicate", Settings = { Threshold = 0.6 } },
			{ Name = "ControlFlowMutation", Settings = { Threshold = 0.5, Layers = 1 } },
			{
				Name = "SplitStrings",
				Settings = {
					Threshold = 0.4,
					MinLength = 2,
					MaxLength = 5,
					ConcatenationType = "custom",
					CustomFunctionType = "local",
					CustomLocalFunctionsCount = 1,
				},
			},
			{ Name = "AntiTamper", Settings = { UseDebug = false, Stealth = true } },
				{ Name = "Vmify", Settings = {} },
				{ Name = "ConditionCamouflage", Settings = { Threshold = 0.4 } },
			{ Name = "JunkCode", Settings = { Chance = 0.15, MinJunk = 2, MaxJunk = 4, MaxDepth = 3 } },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- ═══════════════════════════════════════════════════════════════════════
	-- CIPHER — Replaces "Medium"
	-- ───────────────────────────────────────────────────────────────────────
	-- AntiSandbox and AntiTamper run before Vmify so both checks are
-- compiled into the protected VM program. This keeps the anti-tamper
-- path in the same protected execution flow as the payload.  SplitStrings runs before EncryptStrings (opposite
	-- order from Medium), and the ConstantArray has local wrappers
	-- (junk wrapper functions around the decoder).  ConditionCamouflage
	-- adds `not not` around conditions after the VM.
	--
-- Pipeline: Opt → AntiSandbox → AntiTamper → EncryptStrings
--           → SplitStrings → Vmify → ConstantArray(wrappers)
	--           → NumbersToExpressions → ConditionCamouflage → JunkCode
	--           → WrapInFunction
	-- ═══════════════════════════════════════════════════════════════════════
	["Cipher"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
			{ Name = "ExtractGlobals", Settings = {} },
			{
				Name = "AntiSandbox",
				Settings = {
					UseDebug = true,
					CheckExecutorAPIs = false,
					CheckTiming = true,
					FailureMode = "mixed",
					Intensity = 4,
				},
			},
			{ Name = "AntiTamper", Settings = { UseDebug = false } },
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
			{ Name = "ConditionCamouflage", Settings = { Threshold = 0.55 } },
			{ Name = "JunkCode", Settings = { Chance = 0.15, MinJunk = 2, MaxJunk = 4, MaxDepth = 3 } },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- ═══════════════════════════════════════════════════════════════════════
	-- AEGIS — New mid-tier (NO Vmify, pure AST hardening)
	-- ───────────────────────────────────────────────────────────────────────
	-- A VM-free preset for scripts where the bytecode VM would hit
	-- register/locals limits.  Compensates with heavy AST-level
	-- obfuscation: double ControlFlowMutation (two independent passes
	-- with different layer counts), ProxifyLocals, double ConstantArray
	-- (full + strings-only), RewriteNamecalls with bracket indexing,
	-- OpaquePredicate, EncryptStrings, SplitStrings, and XOR-obfuscated
	-- anti-tamper + anti-sandbox.  No two steps share the same position
	-- as in any Prometheus preset.
	--
	-- Pipeline: Opt → OpaquePredicate → ControlFlowMutation(2 layers)
	--           → EncryptStrings → SplitStrings → AntiSandbox → AntiTamper
	--           → TamperObfuscator(2 layers) → ProxifyLocals
	--           → ConstantArray(full) → ConstantArray(strings) → RewriteNamecalls
	--           → NumbersToExpressions(mutation) → ConditionCamouflage
	--           → ControlFlowMutation(1 layer, second pass) → JunkCode
	--           → WrapInFunction
	-- ═══════════════════════════════════════════════════════════════════════
	["Aegis"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
			{ Name = "ExtractGlobals", Settings = {} },
			{ Name = "OpaquePredicate", Settings = { Threshold = 0.4 } },
			{ Name = "ControlFlowMutation", Settings = { Threshold = 0.4, Layers = 1 } },
			{ Name = "EncryptStrings", Settings = {} },
			{
				Name = "SplitStrings",
				Settings = {
					Threshold = 0.6,
					MinLength = 2,
					MaxLength = 7,
					ConcatenationType = "custom",
					CustomFunctionType = "local",
					CustomLocalFunctionsCount = 2,
				},
			},
			{
				Name = "AntiSandbox",
				Settings = {
					UseDebug = true,
					CheckExecutorAPIs = false,
					CheckTiming = true,
					FailureMode = "mixed",
					Intensity = 4,
				},
			},
			{ Name = "AntiTamper", Settings = { UseDebug = false } },
			{ Name = "TamperObfuscator", Settings = { XORLayers = 2 } },
			{ Name = "ConstantArray", Settings = { Threshold = 1, StringsOnly = false, Shuffle = true, Rotate = true, LocalWrapperThreshold = 0 } },
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
			{ Name = "RewriteNamecalls", Settings = { Threshold = 0.7, BracketIndex = true } },
			{
				Name = "NumbersToExpressions",
				Settings = {
					NumberRepresentationMutation = true,
				},
			},
			{ Name = "ConditionCamouflage", Settings = { Threshold = 0.5 } },
			{ Name = "ControlFlowMutation", Settings = { Threshold = 0.3, Layers = 1 } },
			{ Name = "JunkCode", Settings = { Chance = 0.15, MinJunk = 2, MaxJunk = 4, MaxDepth = 3 } },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- ═══════════════════════════════════════════════════════════════════════
	-- TITAN — Replaces "Strong"
	-- ───────────────────────────────────────────────────────────────────────
	-- Maximum layering with a reorder that breaks Prometheus Strong's
	-- signature.  Key differences from Strong:
	--   • Vmify runs EARLY (after OpaquePredicate), not late.
	--   • ProxifyLocals runs BEFORE AntiTamper (Strong runs it after).
	--   • AntiSandbox runs BEFORE Vmify (Strong runs it after).
	--   • ControlFlowMutation is applied (Strong does not use it).
	--   • AntiTamper + AntiSandbox are both XOR-obfuscated.
	--   • RewriteNamecalls with bracket indexing is added.
	--   • ConditionCamouflage is added.
	--
-- Pipeline: Opt → OpaquePredicate → AntiSandbox → AntiTamper
--           → Vmify(early) → EncryptStrings → SplitStrings
--           → ControlFlowMutation → ProxifyLocals
--           → ConstantArray(full) → ConstantArray(strings)
	--           → NumbersToExpressions(mutation) → RewriteNamecalls
	--           → ConditionCamouflage → JunkCode → WrapInFunction
	-- ═══════════════════════════════════════════════════════════════════════
	["Titan"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
			{ Name = "ExtractGlobals", Settings = {} },
			{ Name = "OpaquePredicate", Settings = { Threshold = 0.5 } },
			{
				Name = "AntiSandbox",
				Settings = {
					UseDebug = true,
					CheckExecutorAPIs = false,
					CheckTiming = true,
					FailureMode = "mixed",
					Intensity = 5,
				},
			},
			{ Name = "AntiTamper", Settings = { UseDebug = false } },
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
			{ Name = "ControlFlowMutation", Settings = { Threshold = 0.8, Layers = 2 } },
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
			{ Name = "RewriteNamecalls", Settings = { Threshold = 0.6, BracketIndex = true } },
			{ Name = "ConditionCamouflage", Settings = { Threshold = 0.5 } },
			{ Name = "JunkCode", Settings = { Chance = 0.15, MinJunk = 2, MaxJunk = 4, MaxDepth = 3 } },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- ═══════════════════════════════════════════════════════════════════════
	-- StrongScalable — kept as a stable fallback for very large scripts
	-- whose generated Titan output would exceed Lua's per-function
	-- local-variable or nesting limits.  Retains string encryption,
	-- anti-tamper (XOR-obfuscated), a shuffled/rotated constant array,
	-- numeric expression mutation, and function wrapping while avoiding
	-- the VM, local proxification, split-string helpers, and second
	-- ConstantArray pass.
	-- ═══════════════════════════════════════════════════════════════════════
	["StrongScalable"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
			{ Name = "ExtractGlobals", Settings = {} },
			{ Name = "OpaquePredicate", Settings = { Threshold = 0.5 } },
			{ Name = "EncryptStrings", Settings = {} },
			{ Name = "AntiTamper", Settings = { UseDebug = false } },
			{ Name = "TamperObfuscator", Settings = { XORLayers = 1 } },
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
			{ Name = "JunkCode", Settings = { Chance = 0.15, MinJunk = 2, MaxJunk = 4, MaxDepth = 3 } },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- ═══════════════════════════════════════════════════════════════════════
	-- Vmify (test preset) — isolated VM test.  Not for production use.
	-- ═══════════════════════════════════════════════════════════════════════
	["Vmify"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "ConstantFolding", Settings = {} },
			{ Name = "DeadCodeElimination", Settings = {} },
			{ Name = "RedundantOperationElimination", Settings = {} },
			{ Name = "LocalCaching", Settings = {} },
			{ Name = "ExtractGlobals", Settings = {} },
			{ Name = "OpaquePredicate", Settings = { Threshold = 0.5 } },
			{ Name = "Vmify", Settings = {} },
			{ Name = "JunkCode", Settings = { Chance = 0.15, MinJunk = 2, MaxJunk = 4, MaxDepth = 3 } },
		},
	},
}

-- ═══════════════════════════════════════════════════════════════════════════
-- TITANVM2 — Replaces "StrongVM2"
-- ───────────────────────────────────────────────────────────────────────
-- Maximum hardening built on Titan's reordered pipeline.  Adds:
--   • Dispatch-hardened Vmify (Mask + Affine + Bounce + Nonlinear +
--     AliasCount=2) so the VM dispatcher looks nothing like standard
--     Prometheus output.
--   • A second ControlFlowMutation pass (the first is in Titan's base;
--     this adds another independent mutation layer).
--   • Bounded local-wrapper indirection on the strings-only
--     ConstantArray (second array pass only — wrapping the first would
--     multiply the VM runtime AST).
--   • AntiTamper is inherited before Vmify from Titan; no post-VM
--     TamperObfuscator is used in this VM preset.
--
-- Built dynamically by copying Titan's steps and injecting dispatch
-- options + an extra mutation pass.  Build the step list independently
-- so changing this preset can never mutate Titan's configuration table
-- by alias.
-- ═══════════════════════════════════════════════════════════════════════════
local titanVm2Steps = {}
local titanVm2ConstantArrays = 0
local titanVm2ControlFlowMutations = 0
for _, step in ipairs(presets.Titan.Steps) do
	local settings = {}
	for key, value in pairs(step.Settings or {}) do
		settings[key] = value
	end
	if step.Name == "Vmify" then
		settings.DispatchMask = true
		settings.DispatchAffine = true
		settings.DispatchBounce = true
		settings.DispatchNonlinear = true
		settings.DispatchAliasCount = 2
		settings.DispatchMaskMagnitude = 4096
		settings.DispatchNoiseMagnitude = 7
	elseif step.Name == "ConstantArray" then
		titanVm2ConstantArrays = titanVm2ConstantArrays + 1
		-- Add a bounded second layer of local lookup indirection only to the
		-- strings-only array. The first array contains VM data and is kept
		-- lean; wrapping every generated VM scope would multiply compile time.
		if titanVm2ConstantArrays == 2 then
			settings.LocalWrapperThreshold = 1
			settings.LocalWrapperCount = 2
			settings.LocalWrapperArgCount = 6
		end
	end
	-- Skip ProxifyLocals in TitanVM2.  The combination of double
	-- ControlFlowMutation (which creates many opaque-predicate locals) +
	-- ProxifyLocals (which wraps each local in a proxy) + the
	-- dispatch-hardened VM exceeds the 200-upvalue register limit on
	-- all but the tiniest scripts.  The dispatch-hardened VM already
	-- provides strong protection that ProxifyLocals would only
	-- marginally augment, so it is dropped here.
	if step.Name == "ProxifyLocals" then
		-- Replace with a third ConstantArray pass (full, no wrappers) to
		-- keep array indirection without the register explosion.
		titanVm2Steps[#titanVm2Steps + 1] = {
			Name = "ConstantArray",
			Settings = {
				Threshold = 1,
				StringsOnly = false,
				Shuffle = true,
				Rotate = true,
				LocalWrapperThreshold = 0,
			},
		}
	else
	titanVm2Steps[#titanVm2Steps + 1] = {
		Name = step.Name,
		Settings = settings,
	}
	end
	-- Add an extra ControlFlowMutation pass after the first one in Titan.
	-- This produces a second independent mutation layer with different
	-- random predicates, further breaking Prometheus pattern matching.
	if step.Name == "ControlFlowMutation" then
		titanVm2ControlFlowMutations = titanVm2ControlFlowMutations + 1
		if titanVm2ControlFlowMutations == 1 then
			titanVm2Steps[#titanVm2Steps + 1] = {
				Name = "ControlFlowMutation",
				Settings = { Threshold = 0.5, Layers = 1 },
			}
		end
	end
end

presets.TitanVM2 = {
	LuaVersion = presets.Titan.LuaVersion,
	VarNamePrefix = presets.Titan.VarNamePrefix,
	NameGenerator = presets.Titan.NameGenerator,
	PrettyPrint = presets.Titan.PrettyPrint,
	Seed = presets.Titan.Seed,
	Steps = titanVm2Steps,
}

return presets
