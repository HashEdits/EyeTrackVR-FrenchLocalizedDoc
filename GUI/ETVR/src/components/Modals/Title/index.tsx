import type { ReactNode } from 'react'

export interface ITitleProps {
  title: string
  children: ReactNode
}

const Title = ({ title, children }: ITitleProps) => {
  return (
    <>
      <div className="flex flex-col divide-y divide-gray-800">
        <span className="pb-1 pr-10"> {title} </span>
        <div className="pt-1 pb-2 ml-32 mr-32 drop-shadow-lg" />
      </div>
      <div className="flex-col justify-start">{children}</div>
    </>
  )
}

export default Title
