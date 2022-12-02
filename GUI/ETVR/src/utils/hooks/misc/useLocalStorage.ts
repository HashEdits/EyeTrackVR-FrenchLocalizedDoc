import { useEffect, useState } from 'react'

/**
 * @description
 * # LocalStorage Hook
 * This custom hook stores a value in local storage. <br />
 * If the value is not present in local storage, it will be set.
 * @param keyName - The name of the key to be stored in localStorage.
 * @param defaultValue - The default value of the key.
 * @returns value & setValue - The value of the key and the function to set the value.
 */
const getStorageData = (keyName: string, defaultValue: unknown) => {
  const savedItem = localStorage.getItem(keyName)
  if (typeof savedItem === 'string') {
    const parsedItem = JSON.parse(savedItem) // ok
    return parsedItem
  }
  return defaultValue
}

export const useLocalStorage = (keyName: string, initialValue: unknown) => {
  const [value, setValue] = useState(() => {
    return getStorageData(keyName, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value))
  }, [keyName, value])

  return [value, setValue]
}
