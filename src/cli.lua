--
-- cli.lua
--
-- This Script contains the Code for the Fengetheus CLI.

-- Configure package.path for requiring Fengetheus.
local function script_path()
	local source = debug.getinfo(2, "S").source
	if type(source) == "string" and source:sub(1, 1) == "@" then
		local path = source:sub(2):match("(.*[/%\\])")
		if path then
			return path
		end
	end

	-- LuaNode-VM deliberately runs scripts from a buffer. Some host builds do
	-- not preserve that buffer's chunk name in debug.getinfo, so fall back to
	-- the PUC-Rio-compatible arg[0] supplied by the CLI runner.
	local invoked = type(arg) == "table" and arg[0]
	if type(invoked) == "string" then
		return invoked:match("(.*[/%\\])")
	end
end
-- script_path() returns nil when the CLI is invoked without a directory
-- component in its own path (e.g. `lua cli.lua ...` from inside the same
-- directory, which is how a locally-cloned checkout is normally run, and
-- also how the test harness in this repo invokes it). Falling through to
-- `nil .. "?.lua;"` crashes before a single argument is even parsed. Guard
-- it exactly like fengetheus.lua already does for the same pattern.
local resolvedScriptPath = script_path()
if resolvedScriptPath then
	package.path = resolvedScriptPath .. "?.lua;" .. package.path
end

local INSTALL_SCRIPT_URL = "https://raw.githubusercontent.com/prometheus-lua/Prometheus/master/install.sh"

local function run_shell(command)
	local ok = os.execute(command)
	if type(ok) == "number" then
		return ok == 0
	end
	if type(ok) == "boolean" then
		return ok
	end
	return false
end

local function get_version()
	local version = os.getenv("FENGETHEUS_LUA_VERSION")
	if version and version ~= "" then
		return version
	end
	return "dev"
end

local function print_help()
	print("Fengetheus Lua CLI")
	print("Usage: fengetheus [command] [options] <input.lua>")
	print("")
	print("Commands:")
	print("  update                 Install latest release via installer script")
	print("  --version, -v          Print CLI version")
	print("")
	print("Obfuscation options:")
	print("  --preset, --p <name>   Use preset (e.g. Minify, Balanced, Medium, Strong)")
	print("  --config, --c <file>   Use custom config Lua file")
	print("  --out, --o <file>      Set output path")
	print("  --Lua51                Force Lua 5.1 target")
	print("  --LuaU                 Force LuaU target")
	print("  --pretty               Pretty print output")
	print("  --nocolors             Disable colored logs")
	print("  --saveerrors           Persist parser errors to file")
end

local function run_update()
	local command
	if run_shell("command -v curl >/dev/null 2>&1") then
		command = string.format("curl -fsSL '%s' | sh", INSTALL_SCRIPT_URL)
	elseif run_shell("command -v wget >/dev/null 2>&1") then
		command = string.format("wget -qO- '%s' | sh", INSTALL_SCRIPT_URL)
	else
		io.stderr:write("Neither curl nor wget was found. Please install one of them and retry.\n")
		os.exit(1)
	end

	print("Updating Fengetheus using the official Prometheus installer")
	if not run_shell(command) then
		io.stderr:write("Update failed\n")
		os.exit(1)
	end

	print("Update completed")
end

if arg[1] == "update" then
	run_update()
	os.exit(0)
end

if arg[1] == "--version" or arg[1] == "-v" then
	print(get_version())
	os.exit(0)
end

if arg[1] == "--help" or arg[1] == "-h" or arg[1] == "help" then
	print_help()
	os.exit(0)
end

---@diagnostic disable-next-line: different-requires
local Fengetheus = require("fengetheus")
Fengetheus.Logger.logLevel = Fengetheus.Logger.LogLevel.Info
Fengetheus.Logger.errorCallback = function(...)
	local args = { ... }
	local message = table.concat(args, " ")
	io.stderr:write(Fengetheus.colors(Fengetheus.Config.NameUpper .. ": " .. message, "red") .. "\n")
	os.exit(1)
end

-- Check if the file exists
local function file_exists(file)
	local f = io.open(file, "rb")
	if f then
		f:close()
	end
	return f ~= nil
end

-- get all lines from a file, returns an empty
-- list/table if the file does not exist
local function lines_from(file)
	if not file_exists(file) then
		return {}
	end
	local lines = {}
	for line in io.lines(file) do
		lines[#lines + 1] = line
	end
	return lines
end

local function load_chunk(content, chunkName, environment)
	if type(loadstring) == "function" then
		local func, err = loadstring(content, chunkName)
		if not func then
			return nil, err
		end
		if environment and type(setfenv) == "function" then
			setfenv(func, environment)
		elseif environment and type(load) == "function" then
			return load(content, chunkName, "t", environment)
		end
		return func
	end

	if type(load) ~= "function" then
		return nil, "No load function available"
	end

	return load(content, chunkName, "t", environment)
end

local function run_cli()
	-- CLI
	local config, sourceFile, outFile, luaVersion, prettyPrint, seed
	local selectedPresetName

	Fengetheus.colors.enabled = true

	-- Parse Arguments
	local i = 1
	while i <= #arg do
		local curr = arg[i]
		if curr:sub(1, 2) == "--" then
			if curr == "--preset" or curr == "--p" then
				if config then
					Fengetheus.Logger:warn("The config was set multiple times")
				end

				i = i + 1
				if not arg[i] or arg[i]:sub(1, 1) == "-" then
					Fengetheus.Logger:error("The preset option requires a name")
				end
				local preset = Fengetheus.Presets[arg[i]]
				if not preset then
					Fengetheus.Logger:error(string.format('A Preset with the name "%s" was not found!', tostring(arg[i])))
				end

				selectedPresetName = tostring(arg[i])
				config = preset
			elseif curr == "--config" or curr == "--c" then
				i = i + 1
				if not arg[i] or arg[i]:sub(1, 1) == "-" then
					Fengetheus.Logger:error("The config option requires a file path")
				end
				local filename = tostring(arg[i])
				if not file_exists(filename) then
					Fengetheus.Logger:error(string.format('The config file "%s" was not found!', filename))
				end

				local content = table.concat(lines_from(filename), "\n")
				-- Load Config from File
				local func, err = load_chunk(content, "@" .. filename, {})
				if not func then
					Fengetheus.Logger:error(string.format('Failed to parse config file "%s": %s', filename, tostring(err)))
				end
				config = func()
				selectedPresetName = nil
			elseif curr == "--out" or curr == "--o" then
				i = i + 1
				if not arg[i] or arg[i]:sub(1, 1) == "-" then
					Fengetheus.Logger:error("The output option requires a file path")
				end
				if outFile then
					Fengetheus.Logger:warn("The output file was specified multiple times!")
				end
				outFile = arg[i]
			elseif curr == "--nocolors" then
				Fengetheus.colors.enabled = false
			elseif curr == "--Lua51" then
				luaVersion = "Lua51"
			elseif curr == "--LuaU" then
				luaVersion = "LuaU"
			elseif curr == "--pretty" then
				prettyPrint = true
		elseif curr == "--seed" then
			i = i + 1
				local sval = tonumber(arg[i])
				-- 0 deliberately means non-deterministic entropy (the pipeline's
				-- documented default); positive integers select a reproducible build.
				if not sval or sval ~= math.floor(sval) or sval < 0 then
					Fengetheus.Logger:error(string.format('The seed "%s" is not a valid number', tostring(arg[i])))
				end
				seed = sval
			elseif curr == "--saveerrors" then
				-- Override error callback
				Fengetheus.Logger.errorCallback = function(...)
					local args = { ... }
					local message = table.concat(args, " ")
					io.stderr:write(Fengetheus.colors(Fengetheus.Config.NameUpper .. ": " .. message, "red") .. "\n")

					local fileName = sourceFile:sub(-4) == ".lua" and sourceFile:sub(0, -5) .. ".error.txt"
						or sourceFile .. ".error.txt"
					local handle = io.open(fileName, "w")
					handle:write(message)
					handle:close()

					os.exit(1)
				end
			else
				Fengetheus.Logger:warn(string.format('The option "%s" is not valid and therefore ignored', curr))
			end
		else
			if sourceFile then
				Fengetheus.Logger:error(string.format('Unexpected argument "%s"', arg[i]))
			end
			sourceFile = tostring(arg[i])
		end
		i = i + 1
	end

	if not sourceFile then
		Fengetheus.Logger:error("No input file was specified!")
	end

	if not config then
		Fengetheus.Logger:warn("No config was specified, falling back to Minify preset")
		config = Fengetheus.Presets.Minify
	end

	-- Copy the selected config before applying CLI overrides. Presets are shared
	-- tables; mutating one here makes embedded callers observe stale CLI state.
	local effectiveConfig = {}
	for key, value in pairs(config) do
		effectiveConfig[key] = value
	end
	config = effectiveConfig

	-- Add options to override Lua Version and formatting without mutating a preset.
	config.LuaVersion = luaVersion or config.LuaVersion
	config.PrettyPrint = prettyPrint ~= nil and prettyPrint or config.PrettyPrint
	if seed ~= nil then
		config.Seed = seed
	end

	if not file_exists(sourceFile) then
		Fengetheus.Logger:error(string.format('The File "%s" was not found!', sourceFile))
	end

	if not outFile then
		if sourceFile:sub(-4) == ".lua" then
			outFile = sourceFile:sub(0, -5) .. ".obfuscated.lua"
		else
			outFile = sourceFile .. ".obfuscated.lua"
		end
	end

	local source = table.concat(lines_from(sourceFile), "\n")

	local pipeline = Fengetheus.Pipeline:fromConfig(config)
	local out = pipeline:apply(source, sourceFile)
	Fengetheus.Logger:info(string.format('Writing output to "%s"', outFile))

	-- Write Output
	local handle, openError = io.open(outFile, "w")
	if not handle then
		Fengetheus.Logger:error(string.format('Could not open output file "%s": %s', outFile, tostring(openError)))
	end
	local writeOk, writeError = handle:write(out)
	handle:close()
	if not writeOk then
		Fengetheus.Logger:error(string.format('Could not write output file "%s": %s', outFile, tostring(writeError)))
	end
end

local ok, err = xpcall(run_cli, function(e)
	return tostring(e)
end)
if not ok then
	local message = tostring(err):gsub("^.-:%d+:%s*", "")
	io.stderr:write(Fengetheus.colors(Fengetheus.Config.NameUpper .. ": " .. message, "red") .. "\n")
	os.exit(1)
end
