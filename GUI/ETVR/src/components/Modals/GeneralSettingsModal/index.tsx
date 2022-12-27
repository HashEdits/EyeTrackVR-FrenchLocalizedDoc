import Tooltip from '@components/Tooltip'
import { Switch } from '@headlessui/react'
import type { IgeneralSettings } from '@src/static/interfaces'

export interface IGeneralSettingsModal {
  item: IgeneralSettings
  enabled: boolean
  onChange: () => void
}

const GeneralSettingsModal = ({ item, enabled, onChange }: IGeneralSettingsModal) => {
  return (
    <li>
      <div className="pl-[1rem] flex justify-start">
        <Switch.Group>
          <Switch.Label>
            <div className="flex flex-row grow items-center content-center justify-between rounded-[8px] pt-[.2rem] pb-[.2rem] pl-[1rem] pr-[1rem] ml-[4px] hover:bg-[#2525369d]">
              <div className="pr-4 pt-[.2rem]">
                <Switch
                  name={item.name}
                  checked={enabled}
                  onChange={onChange}
                  className="relative inline-flex h-4 w-8 items-center rounded-full ui-checked:bg-violet-800 ui-checked:text-white ui-not-checked:bg-[#2a2929] ui-not-checked:text-[#5f5f5f]">
                  <span
                    className={`${
                      enabled ? 'translate-x-5' : 'translate-x-0'
                    } inline-block h-4 w-4 rounded-full bg-white transform transition ease-in-out duration-200`}
                  />
                </Switch>
              </div>
              <Tooltip tooltip={item.tooltip}>
                <span>Test</span>
              </Tooltip>
            </div>
          </Switch.Label>
        </Switch.Group>
      </div>
    </li>
  )
}

export default GeneralSettingsModal
