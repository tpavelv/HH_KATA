import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { Card } from '../types'
import ky from 'ky'

const buildUrl = (
  url: string,
  params: Record<string, string | string[] | number | null | undefined>,
  arraySeparator = 'and'
) => {
  return Object.entries(params).reduce((acc, [key, value]) => {
    if (value == null || value === '' || (Array.isArray(value) && value.length === 0)) {
      return acc
    }
    const prefix = acc.includes('?') ? '&' : '?'
    const paramValue = Array.isArray(value) ? value.join(arraySeparator) : value.toString()
    return acc + `${prefix}${key}=${encodeURIComponent(paramValue)}`
  }, url)
}

export const getData = createAsyncThunk<
  { items: Card[]; page: string; pages: string },
  void,
  { state: RootState; rejectValue: string }
>('vacancies/getData', async (_, { getState, rejectWithValue }) => {
  const { initialURL, area, text, page, per_page } = getState().requestData

  const paramsStr = buildUrl(initialURL, { text, area, page, per_page })
  console.log(paramsStr)
  try {
    return await ky.get(paramsStr).json<{ items: Card[]; page: string; pages: string }>()
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})
