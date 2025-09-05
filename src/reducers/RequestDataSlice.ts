import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { Card } from '../types'
import { getData } from './GetVacanciesThunk'

interface RequestDataSlice {
  data: Card[]
  initialURL: string
  text: string | null
  area: string | null
  loading: boolean
  error: string | SerializedError | null
  page: string | null
  pages: string | null
  per_page: number
}

export const initialState: RequestDataSlice = {
  data: [],
  initialURL: 'https://api.hh.ru/vacancies?search_field=name&search_field=company_name&industry=7&professional_role=96',
  text: null,
  area: null,
  loading: false,
  error: null,
  page: '1',
  pages: null,
  per_page: 6,
}

export const requestDataSlice = createSlice({
  name: 'RequestData',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.page = String(action.payload)
    },
    changeArea(state, action: PayloadAction<string | null>) {
      state.area = action.payload ? String(action.payload) : action.payload
    },
    changeSearchText(state, action: PayloadAction<string | null>) {
      state.text = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<{ items: Card[]; page: string; pages: string }>) => {
        state.loading = false
        state.data = action.payload.items
        state.pages = action.payload.pages
        state.page = action.payload.page
      }
    )
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message ?? 'Неизвестная ошибка'
    })
  },
})

export const { changePage, changeArea, changeSearchText } = requestDataSlice.actions
export default requestDataSlice.reducer
