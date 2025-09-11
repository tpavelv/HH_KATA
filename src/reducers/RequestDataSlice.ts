import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { Card } from '../types'
import { getData } from './GetVacanciesThunk'

interface RequestDataSlice {
  data: Card[]
  loading: boolean
  error: string | SerializedError | null
  pages: string | null
}

export const initialState: RequestDataSlice = {
  data: [],
  loading: false,
  error: null,
  pages: null,
}

export const requestDataSlice = createSlice({
  name: 'requestData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getData.fulfilled, (state, action: PayloadAction<{ items: Card[]; pages: string }>) => {
      state.loading = false
      state.data = action.payload.items
      state.pages = action.payload.pages
    })
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message ?? 'Неизвестная ошибка'
    })
  },
})

export default requestDataSlice.reducer
