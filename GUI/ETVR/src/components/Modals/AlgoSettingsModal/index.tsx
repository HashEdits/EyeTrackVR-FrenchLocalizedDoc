import Slider from '@components/Slider'
import Tooltip from '@components/Tooltip'
import type { IalgoSettings } from '@src/static/interfaces'

export interface IAlgoSettingsModal {
  item: IalgoSettings
}

const AlgoSettingsModal = ({ item }: IAlgoSettingsModal) => {
  return (
    <li>
      <div className="pl-[1rem] flex justify-start">
        <div className="flex flex-row items-center content-center justify-start rounded-[8px] pt-[.2rem] pb-[.2rem] pl-[1rem] pr-[1rem] ml-[4px] hover:bg-[#2525369d]">
          <Tooltip tooltip={item.tooltip}>
            <div className="pr-4 pt-[.2rem]">
              <Slider
                id={item.id}
                min={item.min}
                max={item.max}
                value={item.value}
                step={item.step}
              />
            </div>
            <span> {item.name} </span>
          </Tooltip>
        </div>
      </div>
    </li>
  )
}

export default AlgoSettingsModal
