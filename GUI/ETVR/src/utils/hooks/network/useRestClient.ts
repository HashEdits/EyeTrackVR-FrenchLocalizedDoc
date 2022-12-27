import { invoke } from '@tauri-apps/api/tauri'

export const getRestClient = async (endpoint: string, deviceName: string): Promise<string> => {
  try {
    const response = (await invoke('do_rest_request', {
      endpoint,
      deviceName,
      methodName: 'GET',
    })) as string

    return JSON.parse(response)
  } catch (err) {
    console.log(err)
    return ''
  }
}
