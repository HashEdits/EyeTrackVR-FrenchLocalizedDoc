/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  connecting: string
  loader: { [key in loaderType]: boolean }
  restClient: string
}

export enum loaderType {
  MDNS_CONNECTING = 'MDNS_CONNECTING',
  REST_CLIENT = 'REST_CLIENT',
}

export const initialState: IInitialState = {
  connecting: '',
  loader: { [loaderType.MDNS_CONNECTING]: false, [loaderType.REST_CLIENT]: false },
  restClient: '',
}

const mdnsManager = createSlice({
  name: 'mdns',
  initialState,

  reducers: {
    connectToMDNS(state, _: PayloadAction<{ watcher: string; timestamp: number }>) {
      return state
    },
    getMDNSRestClient(state, _: PayloadAction<{ endpoint: string; deviceName: string }>) {
      return state
    },
    setConnecting(state, action: PayloadAction<{ connecting: string }>) {
      state.connecting = action.payload.connecting
      return state
    },
    setRestClient(state, action: PayloadAction<string>) {
      state.restClient = action.payload
      return state
    },
    setLoadingStatus(state, action: PayloadAction<{ flag: loaderType; status: boolean }>) {
      state.loader[action.payload.flag] = action.payload.status
      return state
    },
  },
})

export const actions = mdnsManager.actions
export const reducer = mdnsManager.reducer
