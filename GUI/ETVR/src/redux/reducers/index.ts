import { combineReducers } from '@reduxjs/toolkit'
import { reducer as uiSliceManager } from './example'
import { reducer as mdnsManager } from './mdns'

const combinedReducers = combineReducers({
  ui: uiSliceManager,
  mdns: mdnsManager,
})

export default combinedReducers
