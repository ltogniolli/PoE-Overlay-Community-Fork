--print(arg[0])
local _, _, scriptPath = string.find(arg[0], '(.+[/\\]).-')
package.path = package.path .. ';' .. scriptPath .. '?.lua'
package.path = package.path .. ';' .. [[./lua/?.lua]]
require('HeadlessWrapper')

local function readFile(path)
    local fileHandle = io.open(path, 'r')
    if not fileHandle then return nil end
    local fileText = fileHandle:read('*a')
    fileHandle:close()
    return fileText
end

FakeTooltip = {
	text = ''
}

function FakeTooltip:new()
	o = {}
	setmetatable(o, self)
	self.__index = self
	return o
end

function FakeTooltip:AddLine(_, text)
	self.text = self.text .. text .. '\n'
end

function FakeTooltip:AddSeparator()
    self.text = self.text .. '\n'
end

function printObj(obj, indent)
    for key,value in pairs(obj) do
        print(indent .. key .. ":" .. tostring(value));
        if (type(value) == "table")  then
        -- (string.len(indent) < 2) and
            if (key == "modList") or (key == "1") or (key == "2") or (key == "3") or (key == "4") or (key == "5") or (key == "6") then
            --or (key == "affixes") or (key == "suffixes") then
                printObj(value, indent .. "==")
            else
                print (indent .. "...")
            end
        end
    end
end

-- our loop

io.write('ready ::end::')
io.flush()

while true do
    local input = io.read()
    local _, _, cmd = input:find('<(%w+)>')
    local _, _, value = input:find('<%w+> (.*)')
--    if cmd then
--        print('running command: ' .. cmd)
--    end
--    if value then
--        print('with value: ' .. value)
--    end
    if cmd == 'exit' then
        os.exit()
    elseif cmd == 'build' then
        loadBuildFromXML(readFile(value))
        calcs = LoadModule("Modules/Calcs", build.targetVersion)
    elseif cmd == 'item' then
        local itemText = value:gsub([[\n]], "\n")
        local item = new('Item', build.targetVersion, itemText)
        item:BuildModList()
        local tooltip = FakeTooltip:new()
        build.itemsTab:AddItemTooltip(tooltip, item)
        io.write(tooltip.text .. '::end::')
        io.flush()
    elseif cmd == 'mod' then
        local amuletItemId = nil
        for slotName, slot in pairs(build.itemsTab.slots) do
            if (slotName == "Amulet") then
                amuletItemId = slot.selItemId
            end
        end
        selItem = build.itemsTab.items[amuletItemId]
        newItem = new('Item', build.targetVersion, selItem.raw .. "\n" .. value)
        newItem:BuildModList() 
        local calcFunc, calcBase =  calcs.getMiscCalculator(build)
        local output = calcFunc({ repSlotName = "Amulet", repItem = newItem })
        local tooltip = FakeTooltip:new()
        build:AddStatComparesToTooltip(tooltip, calcBase, output, "")
        io.write(tooltip.text .. '::end::')
        io.flush()
    end
end
