import { Button } from '@components/Buttons'
import GeneralSettingsModal from '@components/Modals/GeneralSettingsModal'
import type { IgeneralSettings } from '@src/static/interfaces'

export interface IGeneralSectionProps {
  onClickScan: () => void
  onClickRequest: () => void
  onChange: () => void
  enabled: boolean
  GeneralSettings: IgeneralSettings[]
}

const GeneralSection = ({
  onClickScan,
  onClickRequest,
  onChange,
  enabled,
  GeneralSettings,
}: IGeneralSectionProps): JSX.Element => {
  return (
    <ul>
      <li>
        <div className="pl-[1rem]">
          <Button
            text="Test MDNS Scan"
            color="#6f4ca1"
            onClick={onClickScan}
            shadow="0 10px 20px -10px rgba(24, 90, 219, 0.6)"
          />
        </div>
        <div className="pl-[1rem]">
          <Button
            text="Test REST Client"
            color="#6f4ca1"
            onClick={onClickRequest}
            shadow="0 10px 20px -10px rgba(24, 90, 219, 0.6)"
          />
        </div>
      </li>
      {GeneralSettings.map((item, index) => (
        <GeneralSettingsModal key={index} item={item} onChange={onChange} enabled={enabled} />
      ))}
    </ul>
  )
}

export default GeneralSection
