import { useEffect, useRef } from 'react'

export type UseUpdateEffect = {
  callback: () => void
  dependancies: []
}

/**
 * @description
 * # useUpdateEffect
 * A hook that runs a callback function after every update, except the first render.
 * @param {Function} props.callback - The callback function to be called after the first render.
 * @param {Array} props.dependancies - The dependancies of the callback function.
 * @example
 * ```tsx
 * const [count, setValue] = useState(0)
 * useUpdateEffect(() => alert(count), [count])
 * return (
 * <div>
 *    <div>{count}</div>
 *   <button onClick={() => setValue(c => c + 1)}>Increment</button>
 * </div>
 * )
 * ```
 */
const useUpdateEffect = ({ callback, dependancies }: UseUpdateEffect) => {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    return callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependancies)
}

export default useUpdateEffect
