import AlgoSettingsModal from '@components/Modals/AlgoSettingsModal'
import type { IalgoSettings } from '@src/static/interfaces'

export interface IAlgoSection {
  AlgoSettings: IalgoSettings[]
}

const AlgoSection = ({ AlgoSettings }: IAlgoSection) => {
  return (
    <ul>
      {AlgoSettings.map((item, index) => (
        <AlgoSettingsModal item={item} key={index} />
      ))}
    </ul>
  )
}

export default AlgoSection
