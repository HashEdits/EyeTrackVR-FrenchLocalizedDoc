import logo from '/images/logo.png'
import { CameraStatusIndicator, ActiveStatus } from '@components/CameraStatus'
import { faArrowsRotate, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from '@headlessui/react'
import React from 'react'
import type { ICameraStatus } from '@components/CameraStatus'

// TODO: add tailwindcss media queries to make this responsive
// TODO: add camera feed status indicator and preview

interface ICameraProps {
  cameraType?: boolean
  cameraAddress?: string
  className?: string
  mDNSScan?: () => void
}

interface ICameraDetails extends ICameraProps {
  cameraLabel?: string
}

const CameraHeader = (props: ICameraDetails & ICameraStatus) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <CameraStatusIndicator activeStatus={props.activeStatus} />
      <span className="text-white"> {props.cameraLabel} </span>
      <div className="flex flex-col mr-2 pt-3 mb-1">
        <FontAwesomeIcon size="lg" color="white" className="pb-1" icon={faGear} />
        <FontAwesomeIcon
          onClick={props.mDNSScan}
          size="lg"
          color="white"
          className="pb-1"
          icon={faArrowsRotate}
        />
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
    <div className={`${props.className}`}>
      <Menu as="div" className="h-[100%]">
        <div className="h-[100%] flex-1 grow rounded-[20px] border-solid border border-black shadow-lg leading-5 font-sans font-medium">
          <div className="h-[100%] flex-1 overflow-auto grow rounded-[20px] bg-[#0f0f0f] text-[#ffffffc4]">
            <CameraHeader
              mDNSScan={props.mDNSScan}
              cameraLabel={props.cameraLabel}
              activeStatus={props.activeStatus}
            />
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
