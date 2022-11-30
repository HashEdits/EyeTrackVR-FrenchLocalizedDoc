import logo from '@assets/images/eyeTrackVrLogoGif.png'
import vector1 from '@assets/images/vector1.svg'
import { CameraStatusIndicator, ActiveStatus } from '@components/CameraStatus'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from '@headlessui/react'
import React from 'react'
import type { ICameraStatus } from '@components/CameraStatus'

// TODO: add tailwindcss media queries to make this responsive
interface ICameraProps {
  cameraType?: boolean
  cameraAddress?: string
}

interface ICameraDetails extends ICameraProps {
  cameraLabel?: string
}

const CameraHeader = (props: ICameraDetails & ICameraStatus) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <CameraStatusIndicator activeStatus={props.activeStatus} />
      <span className="text-white"> {props.cameraLabel} </span>
      <div className="mr-2 pt-3">
        <FontAwesomeIcon className="gear pb-1" icon={faGear} />
        <img className="mb-1" alt="" src={vector1} />
      </div>
    </div>
  )
}

const CameraDetails = (props: ICameraDetails & ICameraStatus) => {
  return (
    <div className="flex justify-around leading-6 text-sm pr-2 pt-2 pb-2">
      <div>
        <img src={logo} className="w-[100px] h-[100px] items-center justify-center" alt="" />
      </div>
      <div className="grow-[100px]">
        <div className="flex justify-between">
          Camera address: <span className="pl-2 text-white"> {props.cameraAddress} </span>
        </div>
        <div className="flex justify-between">
          Camera type:{' '}
          <span className="text-white"> {props.cameraType ? 'Wired' : 'Wireless'} </span>
        </div>
        <div className="flex justify-between">
          Status:
          <span className="" style={{ color: ActiveStatus(props.activeStatus) }}>
            {props.activeStatus}
          </span>
        </div>
      </div>
    </div>
  )
}

const CameraContainer = (props: ICameraDetails & ICameraStatus) => {
  return (
    <div className="pb-[5rem] h-[100%] xl:pb-[1rem] flex-row pt-6 py-6 px-8 max-w-md">
      <Menu as="div" className="h-[100%]">
        <div className="h-[100%] flex-1 grow rounded-[20px] border-solid border border-black shadow-lg leading-5 font-sans font-medium">
          <div className="h-[100%] flex-1 overflow-auto grow rounded-[20px] bg-[#0f0f0f] text-[#ffffffc4]">
            <CameraHeader cameraLabel={props.cameraLabel} activeStatus={props.activeStatus} />
            <CameraDetails
              activeStatus={props.activeStatus}
              cameraType={props.cameraType}
              cameraAddress={props.cameraAddress}
            />
          </div>
        </div>
      </Menu>
    </div>
  )
}

export default CameraContainer
