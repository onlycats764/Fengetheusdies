--
-- ir.lua
--
-- Small, explicit intermediate representation for the semantic VM compiler.
-- The emitter still receives the original AST-backed block objects, but the
-- IR boundary gives later opcode mutation/serialization passes one validated
-- contract instead of reaching into compiler internals blindly.

local IR = {}

local function fail(message)
	 error("Fengetheus VM IR: " .. message, 0)
end

function IR.fromCompiler(compiler)
	local blocks = {}
	local ids = {}
	local startId = compiler.startBlockId

	for index, block in ipairs(compiler.blocks or {}) do
		if type(block) ~= "table" then fail("block " .. index .. " is not a table") end
		if type(block.id) ~= "number" or block.id ~= math.floor(block.id) then
			fail("block " .. index .. " has an invalid integer id")
		end
		if ids[block.id] then
			fail("duplicate block id " .. tostring(block.id))
		end
		ids[block.id] = true
		if type(block.statements) ~= "table" then
			fail("block " .. tostring(block.id) .. " has no statement list")
		end

		local instructions = {}
		for statementIndex, entry in ipairs(block.statements) do
			if type(entry) ~= "table" then
				fail("block " .. tostring(block.id) .. " instruction " .. statementIndex .. " is malformed")
			end
			-- copyRegisters() intentionally returns nil when no copy is needed;
			-- addStatement still records the metadata wrapper, and the legacy
			-- emitter drops that no-op later. Normalize it here so future IR
			-- consumers never have to handle phantom instructions.
			if entry.statement ~= nil then
				instructions[#instructions + 1] = {
				statement = entry.statement,
				reads = entry.reads or {},
				writes = entry.writes or {},
				usesUpvals = entry.usesUpvals == true,
				}
			end
		end

		blocks[index] = {
			id = block.id,
			scope = block.scope,
			instructions = instructions,
			advanceToNextBlock = block.advanceToNextBlock ~= false,
			-- Keep the source object for a lossless emitter transition.
			source = block,
		}
	end

	if startId ~= nil and not ids[startId] then
		fail("start block id " .. tostring(startId) .. " is not present")
	end

	return {
		blocks = blocks,
		ids = ids,
		startId = startId,
		instructionCount = (function()
			local count = 0
			for _, block in ipairs(blocks) do count = count + #block.instructions end
			return count
		end)(),
	}
end

return IR
