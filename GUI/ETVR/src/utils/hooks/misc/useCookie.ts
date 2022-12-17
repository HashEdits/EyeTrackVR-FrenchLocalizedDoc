import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

export const useCookie = (
  key: string,
  initialValue: string,
  { expires = 365000, sameSite = 'lax' as const, path = '/' } = {}
) => {
  // cookie expires in a millenia
  // sameSite != 'strict' because the cookie is not read for sensitive actions
  // synchronous
  const cookieValue = Cookies.get(key)
  const [state, setState] = useState(cookieValue || initialValue)
  useEffect(() => {
    Cookies.set(key, state, { expires, sameSite, path })
  }, [state, key, expires, sameSite, path])
  return [state, setState]
}
