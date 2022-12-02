import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'

export const useMDNSScanner = () => {
  const [res, setRes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const scan = (serviceType: string, scanTime: number) => {
    console.log('Scanning for ' + serviceType)
    setLoading(true)
    invoke('run_mdns_query', {
      serviceType,
      scanTime,
    })
      .then((response) => {
        if (typeof response === 'string') {
          const parsedResponse = JSON.parse(response)
          setRes(parsedResponse)
          console.log(parsedResponse)
        } else {
          setRes(null)
          console.log(response)
        }
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { res, loading, error, scan }
}
