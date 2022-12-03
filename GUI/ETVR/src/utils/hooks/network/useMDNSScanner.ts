import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'

/**
 * @description
 * # MDNS Scanner Hook
 * This custom hook scans for mDNS services. <br />
 * It uses the Tauri API to run the scan.
 * @returns res - The response from the scan.
 * @returns error - The error from the scan.
 * @returns loading - Whether the scan is loading.
 * @returns scan - The function to run the scan.
 */
export const useMDNSScanner = () => {
  const [res, setRes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  /**
   * @description
   * # Scan
   * This function runs the scan.
   * @param {string} serviceType - The service to scan for.
   * @param {number} scanTime - The timeout for the scan.
   */
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
