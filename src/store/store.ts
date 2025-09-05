import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uiReducer from '../reducers/UiSlice'
import requestDataReduces from '../reducers/RequestDataSlice'

export const rootReducer = combineReducers({
  ui: uiReducer,
  requestData: requestDataReduces,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
