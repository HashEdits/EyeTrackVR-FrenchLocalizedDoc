import { useCallback, useEffect, useRef } from 'react'

/**
 * @description
 * # UseTimeOut
 * The return type of the useTimeOut hook.
 * @typedef {Object} UseTimeOut
 * @property {Function} reset - The function that can be used to reset the timeout.
 * @property {Function} clear - The function that can be used to clear the timeout.
 */
export type UseTimeOut = {
  clear: () => void
  reset: () => void
}

/**
 * @description
 * # useTimeOut
 * A hook that returns a function that can be used to set a timeout.
 * @param {Function} callback - The callback function to be called after the timeout.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} - The function that can be used to set a timeout.
 * @example
 * ```tsx
 * const [value, toggleValue] = useToggle(false)
 * const { clear, reset } = useTimeOut(toggleValue, props.delay);
 * return (
 *  <div>
 *     <div>{value}</div>
 *     <button onClick={reset}>Reset</button>
 *     <button onClick={clear}>Clear</button>
 *  </div>
 * )
 * ```
 */
const useTimeOut = (callback: () => void, delay: number): UseTimeOut => {
  const savedCallback = useRef<() => void>()
  const timeout = useRef<NodeJS.Timeout>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set a timeout.
  const set = useCallback(() => {
    if (savedCallback.current !== undefined) {
      const saved = savedCallback.current
      timeout.current = setTimeout(() => saved(), delay)
    }
  }, [delay])

  // Clear a timeout.
  const clear = useCallback(() => {
    timeout.current && clearTimeout(timeout.current)
  }, [])

  // Clear timeout if the delay changes.
  useEffect(() => {
    set()
    return clear
  }, [delay, clear, set])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}

export default useTimeOut
