import { useState, useLayoutEffect, useEffect } from 'react'
// tauri-store docs: https://github.com/tauri-apps/tauri-plugin-store/blob/dev/webview-src/index.ts
import { Store } from 'tauri-plugin-store-api'
import { RUNNING_IN_TAURI } from '../../Helpers/utils'
import useLocalStorage from '../misc/useLocalForage'
import useDebounce from './useDebounce'

export interface IElement<T> {
  key: string
  initialValue: T
  storeName: string
}

const stores = {}
const SAVE_DELAY = 1000

const getTauriStore = (fileName: string) => {
  if (!(fileName in stores)) stores[fileName] = new Store(fileName)
  return stores[fileName]
}

const setStore = <T>({ key, initialValue, storeName = 'data.dat' }: IElement<T>) => {
  const store = getTauriStore(storeName)
  store.set(key, initialValue).then(() => {
    useDebounce({ callback: () => store.save(), delay: SAVE_DELAY, dependancies: [] })
  })
}

const useTauriStore = <T>({ key, initialValue, storeName = 'data.dat' }: IElement<T>) => {
  const [value, setValue] = useState<T>(initialValue)
  const [loading, setLoading] = useState(true)
  const store = getTauriStore(storeName)
  /**
   * ! Store name is a path that is relative to AppData is not absolute
   **/
  useLayoutEffect(() => {
    let allow = true
    store
      .get(key)
      .then((val: T) => {
        if (value === null) throw new Error('No value')
        if (allow) setValue(val)
      })
      .catch(() => {
        setStore<T>({ key, initialValue, storeName })
      })
      .then(() => {
        if (allow) setLoading(false)
      })
    return () => {
      allow = false
    }
  }, [key, initialValue, store, value, storeName])

  useEffect(() => {
    if (!loading) {
      setStore<T>({ key, initialValue, storeName })
    }
  }, [key, value, store, loading, storeName, initialValue])
  return [value, setValue, loading]
}

export const useStorage = RUNNING_IN_TAURI ? useTauriStore : useLocalStorage

export default useStorage
