import localforage from 'localforage'
import { useEffect, useLayoutEffect, useState } from 'react'
export { localforage }
/**
 * @description
 * # Localforage Hook
 * This custom hook stores a value in local forage. <br />
 * If the value is not present in local forage, it will be set.
 * @param keyName - The name of the key to be stored in localforage.
 * @param defaultValue - The default value of the key.
 * @returns value & setValue - The value of the key and the function to set the value.
 */
// https://reactjs.org/docs/hooks-custom.html
const useLocalStorage = (key: string, defaultValue: unknown) => {
  // only supports primitives, arrays, and {} objects
  const [state, setState] = useState(defaultValue)
  const [loading, setLoading] = useState(true)

  // useLayoutEffect will be called before DOM paintings and before useEffect
  useLayoutEffect(() => {
    let allow = true
    localforage
      .getItem(key)
      .then((value) => {
        if (value === null) throw new Error('No value found')
        if (allow) setState(value)
      })
      .catch(() => localforage.setItem(key, defaultValue))
      .then(() => {
        if (allow) setLoading(false)
      })
    return () => {
      allow = false
    }
  }, [key, defaultValue])
  // useLayoutEffect does not like Promise return values.
  useEffect(() => {
    // do not allow setState to be called before data has even been loaded!
    // this prevents overwriting
    if (!loading) localforage.setItem(key, state)
  }, [key, state, loading])
  return [state, setState, loading]
}

export default useLocalStorage
