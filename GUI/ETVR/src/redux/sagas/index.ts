import { all, spawn } from 'redux-saga/effects'
import { loadUser } from './exampleSaga'
import { mdnsSagaMennager } from './mdnsSaga'

export function* index(): Generator {
  yield all([loadUser, mdnsSagaMennager].map(spawn))
}

export default index
