/* eslint-disable autofix/no-unused-vars */

import { useState } from 'react'

/**
 * @description
 * # UseToggle
 * The return type of the useToggle hook.
 * @typedef {Array} UseToggle
 * @property {boolean} value - The toggle value.
 * @property {Function} toggleValue - The toggle function.
 * @example
 * const [value, toggleValue] = useToggle(false)
 * toggleValue(true)
 * // value = true
 * toggleValue(false)
 * // value = false
 */
interface UseToggle extends Array<boolean | ((value: boolean) => void)> {
  0: boolean
  1: (value: boolean) => void
}

/**
 * @description
 * # useToggle
 * Toggles a boolean value using React's useState hook.
 * @param {boolean} initialValue - The initial value of the toggle.
 * @returns {Array} value & toggleValue - The toggle value and the toggle function.
 * @example
 * const [value, toggleValue] = useToggle(false)
 * // value = true
 * toggleValue(true)
 * // value = false
 * toggleValue(false)
 */
const useToggle = (initialValue: boolean): UseToggle => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = (value: boolean) => {
    setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue))
  }
  return [value, toggleValue]
}
export default useToggle
