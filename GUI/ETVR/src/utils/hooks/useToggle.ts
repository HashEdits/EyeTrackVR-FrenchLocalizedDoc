import { useState } from 'react'
const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = (value: boolean) => {
    setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue))
  }
  return [value, toggleValue]
}
export default useToggle
