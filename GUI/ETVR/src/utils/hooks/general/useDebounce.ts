import { useEffect } from 'react'
import useTimeOut from './useTimeOut'

export type UseDebounce = {
  callback: () => void
  delay: number
  dependancies: []
}

/**
 * @description
 * # useDebounce
 * Run a callback function after a delay.
 * @param {Function} props.callback - The callback function to be called after the delay.
 * @param {number} props.delay - The delay in milliseconds.
 * @param {Array} props.dependancies - The dependancies of the callback function.
 * @example
 * ```tsx
 * const [count, setValue] = useState(0)
 * useDebounce(() => alert(count), 1000,[count])
 * return (
 *  <div>
 *      <div>{count}</div>
 *      <button onClick={() => setValue(c => c + 1)}>Increment</button>
 *  </div>
 * )
 * ```
 */
const useDebounce = (props: UseDebounce) => {
  const { clear, reset } = useTimeOut(props.callback, props.delay)
  useEffect(reset, [...props.dependancies, reset])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(clear, [])
}

export default useDebounce
