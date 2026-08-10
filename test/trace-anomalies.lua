-- trace-anomalies.lua
-- Test-only instrumentation: monkey-patches Scope:addReferenceToHigherScope
-- to log calls that start from a scope NOT lexically contained in the
-- defining scope's ancestors (i.e. calls ConstantArray makes from inside
-- a structurally-anomalous compiler-generated closure).
-- Returns a table that collects the anomalies; call flush() to print.
local Scope = require("prometheus.scope");
local ScopeMod = require("prometheus.scope");

local oldAdd = Scope.addReferenceToHigherScope;
local anomalies = {};

function Scope:addReferenceToHigherScope(scope, id, startReferenceCount)
	if scope and not scope.isGlobal then
		local cur = self;
		local found = false;
		while cur do
			if cur == scope then
				found = true;
				break;
			end
			cur = cur.parentScope;
		end
		if not found then
			anomalies[#anomalies + 1] = string.format(
				"addReferenceToHigherScope from %s (level %s) to %s (level %s, id=%d); defining scope is NOT an ancestor of caller",
				self.name, tostring(self.level), scope.name, tostring(scope.level), id
			);
		end
	end
	return oldAdd(self, scope, id, startReferenceCount);
end

local function flush()
	if #anomalies == 0 then
		print("[trace] 0 anomalous addReferenceToHigherScope calls");
	else
		for i, a in ipairs(anomalies) do
			print("[trace] ANOMALY: " .. a);
		end
	end
	return #anomalies;
end

return { flush = flush };
