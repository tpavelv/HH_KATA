import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tabs } from '../types'

interface UiSlice {
  activeTab: Tabs
}

export const initialState: UiSlice = {
  activeTab: Tabs.find,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<Tabs>) {
      state.activeTab = action.payload
    },
  },
})

export const { changeTab } = uiSlice.actions
export default uiSlice.reducer
