import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tabs } from '../types'

interface UiSlice {
  activeTab: Tabs
  showAreaTabs: boolean
}

export const initialState: UiSlice = {
  activeTab: Tabs.find,
  showAreaTabs: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<Tabs>) {
      state.activeTab = action.payload
    },
    openAreaTab(state) {
      state.showAreaTabs = true
    },
    closeAreaTab(state) {
      state.showAreaTabs = false
    },
  },
})

export const { changeTab, openAreaTab, closeAreaTab } = uiSlice.actions
export default uiSlice.reducer
