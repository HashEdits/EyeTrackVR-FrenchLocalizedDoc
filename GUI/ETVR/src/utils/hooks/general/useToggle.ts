
import { useState } from 'react'

/**
 * Toggles a boolean value using React's useState hook.
 * @param {boolean} initialValue - The initial value of the toggle.
 * @returns {Array} value & toggleValue - The toggle value and the toggle function.
 */
const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = (value: boolean) => {
    setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue))
  }
  return [value, toggleValue]
}
export default useToggle


