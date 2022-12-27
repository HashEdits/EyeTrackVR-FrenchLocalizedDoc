/* eslint-disable */
import { actions, loaderType } from '@redux/reducers/mdns'
import { PayloadAction } from '@reduxjs/toolkit'
import { getMDNSConnection } from '@src/utils/hooks/network/useMDNSScanner'
import { getRestClient } from '@src/utils/hooks/network/useRestClient'
import { batch } from 'react-redux'
import { all, call, put, spawn, takeEvery } from 'typed-redux-saga'

export function* connectToMDNSHandler(
  action: PayloadAction<{ watcher: string; timestamp: number }>
): Generator {
  const { watcher, timestamp } = action.payload

  yield* put(actions.setLoadingStatus({ flag: loaderType.MDNS_CONNECTING, status: true }))

  const connecting = yield* call(getMDNSConnection, watcher, timestamp)

  batch(() => [
    actions.setConnecting({ connecting }),
    actions.setLoadingStatus({ flag: loaderType.MDNS_CONNECTING, status: false }),
  ])
}

export function* getMDNSRestClientHanlder(
  action: PayloadAction<{ endpoint: string; deviceName: string }>
): Generator {
  const { endpoint, deviceName } = action.payload

  yield* put(actions.setLoadingStatus({ flag: loaderType.MDNS_CONNECTING, status: true }))

  const restClient = yield* call(getRestClient, endpoint, deviceName)

  batch(() => [
    actions.setRestClient(restClient),
    actions.setLoadingStatus({ flag: loaderType.MDNS_CONNECTING, status: false }),
  ])
}

export function* connectToMDNSSaga(): Generator {
  yield takeEvery(actions.connectToMDNS, connectToMDNSHandler)
}

export function* getMDNSRestClientSaga(): Generator {
  yield takeEvery(actions.getMDNSRestClient, getMDNSRestClientHanlder)
}

export function* mdnsSagaMennager(): Generator {
  yield all([connectToMDNSSaga, getMDNSRestClientSaga].map(spawn))
}
