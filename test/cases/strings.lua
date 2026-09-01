-- strings.lua: heavy string usage — ConstantArray StringsOnly extracts
-- mostly strings, the exact material the upstream bug can hoist wrongly.
local words = {
    "hello", "world", "lua", "obfuscator", "bytecode",
    "interpreter", "upvalue", "closure", "scope", "chain",
}
local out = {}
for i = 1, #words do
    table.insert(out, string.upper(words[i]))
end
print("upper=" .. table.concat(out, "|"))

local s = "The quick brown fox jumps over the lazy dog"
print("len=" .. string.len(s))
print("sub=" .. string.sub(s, 10, 19))
print("find=" .. tostring(select(2, string.find(s, "fox"))))
print("gsub=" .. string.gsub(s, "o", "0"))
print("format=" .. string.format("%04d-%s", 42, "ok"))
print("rep=" .. string.rep("ab", 5))
print("reverse=" .. string.reverse("hello"))

-- string building with concatenation in a loop (optimizer target)
local big = ""
for i = 1, 200 do
    big = big .. "x"
end
print("biglen=" .. string.len(big))

-- byte/char round-trip
local bytes = {}
for i = 1, string.len(s) do
    bytes[i] = string.byte(s, i)
end
-- Lua 5.1 (el runtime target del obfuscador) expone unpack como global,
-- no como table.unpack (que llego en 5.2). Usar unpack mantiene el caso
-- valido en el runtime de test sin cambiar lo que el obfuscador ejercita.
local rebuild = string.char(unpack(bytes))
print("roundtrip=" .. tostring(rebuild == s))
return table.concat(out, "|"), string.len(big), rebuild == s
