import { useState } from 'react'

export type UseArray = {
  defaultValue: unknown[]
}

export interface IElement<T> {
  element: T
}

export interface ICallback {
  callback: () => void
}

/**
 * @description
 * # useArray
 * A hook that returns an array and functions to manipulate it.
 * @param {Array} defaultValue - The initial value of the array.
 * @returns {Array} array & functions - The array and the functions to manipulate it.
 * @example
 * const [array, { push, remove, clear }] = useArray([])
 * push(1)
 * // array = [1]
 * remove(1)
 * // array = []
 * clear()
 * // array = []
 */
const useArray = ({ defaultValue }: UseArray) => {
  const [array, setArray] = useState(defaultValue)

  const push = <T>({ element }: IElement<T>) => {
    setArray((currentArray) => [...currentArray, element])
  }

  const filter = (callback: (value: unknown) => value is unknown) => {
    setArray((prev) => prev.filter(callback))
  }

  const update = (index: number, newValue: unknown) => {
    setArray((prev) => [
      ...prev.slice(0, index),
      newValue,
      ...prev.slice(index + 1, prev.length - 1),
    ])
  }

  const removeIndex = (index: number) => {
    setArray((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length - 1)])
  }

  const clear = () => {
    setArray([])
  }

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    removeIndex,
    clear,
  }
}

export default useArray
