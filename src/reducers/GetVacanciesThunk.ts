import { createAsyncThunk } from '@reduxjs/toolkit'
import { Card } from '../types'
import ky from 'ky'

const BASE_URL =
  'https://api.hh.ru/vacancies?search_field=name&search_field=company_name&industry=7&professional_role=96'

const buildUrl = (url: string, params: Record<string, string>) => {
  const mapAreaParams: Record<string, string> = {
    moscow: '1',
    spb: '2',
  }

  return Object.entries(params).reduce((acc, [key, value]) => {
    if (!value) return acc

    if (key === 'area' && value === 'all') return acc

    const paramValue = key === 'area' && mapAreaParams[value] ? mapAreaParams[value] : value

    const prefix = acc.includes('?') ? '&' : '?'
    return acc + `${prefix}${key}=${encodeURIComponent(paramValue)}`
  }, url)
}

export const getData = createAsyncThunk<{ items: Card[]; pages: string }, URLSearchParams, { rejectValue: string }>(
  'vacancies/getData',
  async (searchParams, { rejectWithValue }) => {
    const paramsObj = Object.fromEntries(searchParams.entries())

    const url = buildUrl(BASE_URL, paramsObj)
    console.log('url', url)

    try {
      return await ky.get(url).json<{ items: Card[]; pages: string }>()
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)
