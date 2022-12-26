import { useState } from 'react'

interface SliderProps {
  min: number
  max: number
  step: number
  value: number
  id: string
}

export default function Slider(props: SliderProps) {
  const [range, setValue] = useState(props.value)

  return (
    <div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={range}
        id={props.id}
        step={props.step}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  )
}
