import { invoke } from '@tauri-apps/api/tauri'

export const getMDNSConnection = async (watcher: string, timestamp: number): Promise<string> => {
  try {
    const response = (await invoke('run_mdns_query', {
      watcher,
      timestamp,
    })) as string

    return JSON.parse(response)
  } catch (err) {
    console.log(err)
    return ''
  }
}
