-- Realistic Roblox-style GUI script with animations.
-- Uses tables, closures, string manipulation, math, coroutines (simulated),
-- varargs, and nested functions -- exercises every obfuscation path.

-- Tweening engine (mimics Roblox TweenService)
local TweenService = {}
TweenService.__index = TweenService

local function easeInOutQuad(t)
	return t < 0.5 and (2 * t * t) or (-1 + (4 - 2 * t) * t)
end

local function easeOutCubic(t)
	local p = t - 1
	return p * p * p + 1
end

local EasingStyles = {
	Quad = easeInOutQuad,
	Cubic = easeOutCubic,
	Linear = function(t) return t end,
}

function TweenService.new(object, goalInfo)
	local self = setmetatable({}, TweenService)
	self.object = object
	self.goalInfo = goalInfo or {}
	self.duration = goalInfo.Duration or 1
	self.easingStyle = goalInfo.EasingStyle or "Quad"
	self.startTime = nil
	self.completed = false
	return self
end

function TweenService:play(currentTime)
	local ease = EasingStyles[self.easingStyle] or EasingStyles.Linear
	local props = self.goalInfo.Goal or {}
	local startValues = {}
	for key, _ in pairs(props) do
		startValues[key] = self.object[key] or 0
	end
	local function step(now)
		if self.startTime == nil then self.startTime = now end
		local elapsed = now - self.startTime
		local t = math.min(elapsed / self.duration, 1)
		local easedT = ease(t)
		for key, target in pairs(props) do
			local start = startValues[key]
			if type(start) == "number" and type(target) == "number" then
				self.object[key] = start + (target - start) * easedT
			elseif type(start) == "table" and type(target) == "table" then
				local result = {}
				for j = 1, math.max(#start, #target) do
					local sv = start[j] or 0
					local tv = target[j] or sv
					result[j] = sv + (tv - sv) * easedT
				end
				self.object[key] = result
			else
				self.object[key] = target
			end
		end
		if t >= 1 then
			self.completed = true
		end
		return not self.completed
	end
	return step
end

-- Build a fake GUI hierarchy
local function createFrame(name, parent, props)
	local frame = {
		Name = name,
		Parent = parent,
		Visible = props.Visible or false,
		Position = props.Position or {0, 0},
		Size = props.Size or {100, 100},
		Transparency = props.Transparency or 0,
		BackgroundColor3 = props.BackgroundColor3 or "White",
		children = {},
	}
	if parent then
		table.insert(parent.children, frame)
	end
	return frame
end

local function createLabel(text, parent)
	local label = createFrame("Label_" .. #parent.children, parent, {
		Size = {200, 30},
		Transparency = 1,
	})
	label.Text = text
	label.TextColor3 = "Black"
	return label
end

-- Main GUI
local ScreenGui = createFrame("MainGui", nil, {Size = {1920, 1080}, Visible = true})
local Background = createFrame("Background", ScreenGui, {
	Size = {400, 300},
	Position = {760, 390},
	Transparency = 0.5,
	BackgroundColor3 = "DarkGray",
})
local TitleLabel = createLabel("Welcome to the Game!", Background)
local Button = createFrame("PlayButton", Background, {
	Size = {150, 40},
	Position = {125, 200},
	BackgroundColor3 = "Blue",
	Transparency = 0,
})

-- Animate the GUI in
local animStates = {}

local function animateIn(currentTime)
	local bgTween = TweenService.new(Background, {
		Duration = 0.8,
		EasingStyle = "Cubic",
		Goal = { Transparency = 0.15, Size = {420, 320} },
	})
	local btnTween = TweenService.new(Button, {
		Duration = 1.2,
		EasingStyle = "Quad",
		Goal = { Transparency = 0.1, Size = {180, 50} },
	})

	local bgStep = bgTween:play(currentTime)
	local btnStep = btnTween:play(currentTime)

	local steps = 0
	while bgStep(currentTime + steps * 0.1) or btnStep(currentTime + steps * 0.1) do
		steps = steps + 1
		if steps > 15 then break end
	end

	animStates.background = { transp = Background.Transparency, size = Background.Size }
	animStates.button = { transp = Button.Transparency, size = Button.Size }
	animStates.steps = steps
end

-- Notification system with string formatting
local NotificationStack = {}
local function pushNotification(message, ...)
	local args = {...}
	local fullMessage = message
	for i = 1, #args do
		fullMessage = string.gsub(fullMessage, "{" .. i .. "}", tostring(args[i]))
	end
	local notif = createFrame("Notif_" .. #NotificationStack + 1, ScreenGui, {
		Size = {250, 40},
		Position = {1620, 100 + #NotificationStack * 50},
		Transparency = 0.2,
		BackgroundColor3 = "Green",
	})
	notif.Text = fullMessage
	table.insert(NotificationStack, notif)
	return #NotificationStack
end

-- Run everything
animateIn(0)

pushNotification("Loaded {1} frames in {2}ms", #ScreenGui.children, 42)
pushNotification("Button size: {1}x{2}", Button.Size[1], Button.Size[2])
pushNotification("Easing styles available: {1}", table.concat({"Linear","Quad","Cubic"}, ", "))

-- Report
print("=== GUI Animation Report ===")
print("ScreenGui children: " .. #ScreenGui.children)
print("Background Transparency: " .. string.format("%.4f", Background.Transparency))
print("Background Size: " .. Background.Size[1] .. "x" .. Background.Size[2])
print("Button Transparency: " .. string.format("%.4f", Button.Transparency))
print("Button Size: " .. Button.Size[1] .. "x" .. Button.Size[2])
print("Animation steps: " .. animStates.steps)
print("Notifications: " .. #NotificationStack)
print("Notif1: " .. NotificationStack[1].Text)
print("Notif2: " .. NotificationStack[2].Text)
print("Notif3: " .. NotificationStack[3].Text)

local totalSize = Background.Size[1] + Background.Size[2] + Button.Size[1] + Button.Size[2]
print("Total element size sum: " .. totalSize)
return totalSize, #NotificationStack, animStates.steps
