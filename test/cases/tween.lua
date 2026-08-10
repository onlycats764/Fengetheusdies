-- tween.lua: a minimal easing/tween simulation like the Roblox scripts
-- mentioned in upstream bug reports. Computes eased positions over time.
local function lerp(a, b, t)
    return a + (b - a) * t
end
local function easeOutQuad(t)
    return t * (2 - t)
end
local function easeInOutCubic(t)
    if t < 0.5 then
        return 4 * t * t * t
    end
    return 1 - (-2 * t + 2) ^ 3 / 2
end

local function tween(duration, goal, easeFn)
    local frames = {}
    local steps = 10
    for i = 0, steps do
        local t = i / steps
        frames[i + 1] = easeFn(t) * goal
    end
    return frames
end

local f1 = tween(1, 100, easeOutQuad)
local f2 = tween(1, 100, easeInOutCubic)
print("linearMid=" .. f1[6])
print("quadLast=" .. string.sub(tostring(f1[11]), 1, 8))
print("cubicLast=" .. string.sub(tostring(f2[11]), 1, 8))

-- keyframe sequence with string labels
local keyframes = {
    {t = 0,    label = "start",  value = 0},
    {t = 0.25, label = "quarter", value = 25},
    {t = 0.5,  label = "mid",    value = 50},
    {t = 0.75, label = "threequarters", value = 75},
    {t = 1,    label = "end",    value = 100},
}
for _, kf in ipairs(keyframes) do
    print(kf.label .. "=" .. kf.value)
end

-- animated counter state
local state = {pos = 0, vel = 0}
for i = 1, 20 do
    state.vel = lerp(state.vel, 10, 0.1)
    state.pos = state.pos + state.vel
end
print("finalPos=" .. string.sub(tostring(state.pos), 1, 10))
return f1[11], f2[11], state.pos
