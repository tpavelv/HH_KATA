import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, vi, beforeEach, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MantineProvider, createTheme } from '@mantine/core'
import { setupStore } from '../../store/store'
import { VacancyPage } from '../VacancyPage'
import * as thunkModule from '../../reducers/GetVacanciesThunk'
import { mockCards } from '../../mocks/mockCards'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import { Card } from '../../types'
import { RootState } from '../../store/store'
vi.spyOn(thunkModule, 'getData').mockImplementation(() => {
  return {
    type: 'vacancies/getData/fulfilled',
    payload: {
      items: mockCards,
      page: '1',
      pages: '2',
    },
  } as unknown as AsyncThunkAction<{ items: Card[]; page: string; pages: string }, void, { state: RootState }>
})

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  headings: { fontFamily: 'Open Sans, sans-serif' },
  colors: {
    primary: [
      '#f0f3ff',
      '#dce2ff',
      '#b3c1ff',
      '#8ba1ff',
      '#6280f7',
      '#4263eb',
      '#364fc7',
      '#2c3f9e',
      '#223077',
      '#192150',
    ] as const,
    blackCustom: [
      '#ffffff',
      '#f6f6f7',
      '#e6e6e6',
      '#cccccc',
      '#b3b3b3',
      '#999999',
      '#707070',
      '#4a4a4a',
      '#262626',
      '#0f0f10',
    ] as const,
  },
  primaryColor: 'primary',
})

const renderWithProviders = (ui: React.ReactNode) => {
  const store = setupStore()
  return render(
    <Provider store={store}>
      <MantineProvider theme={theme}>{ui}</MantineProvider>
    </Provider>
  )
}

describe('VacancyPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('рендерит заголовок и подзаголовок', () => {
    renderWithProviders(<VacancyPage />)
    expect(screen.getByText(/Список вакансий/i)).toBeInTheDocument()
    expect(screen.getByText(/по профессии Frontend-разработчик/i)).toBeInTheDocument()
  })

  it('вызывает getData при маунте и отображает карточки', async () => {
    renderWithProviders(<VacancyPage />)

    await waitFor(() => {
      expect(thunkModule.getData).toHaveBeenCalledTimes(1)
    })

    const cards = await screen.findAllByText(/Frontend Developer/i)
    expect(cards).toHaveLength(9)
  })

  it('вызывает getData после поиска', async () => {
    renderWithProviders(<VacancyPage />)
    const input = screen.getByPlaceholderText(/Должность или название компании/i)
    await userEvent.type(input, 'React')
    const button = screen.getByRole('button', { name: /Найти/i })
    await userEvent.click(button)

    await waitFor(() => {
      expect(thunkModule.getData).toHaveBeenCalledTimes(2)
    })
  })

  it('корректно отображает содержимое первой карточки', async () => {
    renderWithProviders(<VacancyPage />)

    const firstCardTitle = await screen.findByText('Frontend Developer 1')
    expect(firstCardTitle).toBeInTheDocument()

    const salaryElement = screen.getByText(
      (content) => content.includes('100 000') && content.includes('150 000') && content.includes('₽')
    )
    expect(salaryElement).toBeInTheDocument()

    expect(screen.getByText('Company A')).toBeInTheDocument()
    expect(screen.getByText('Moscow')).toBeInTheDocument()

    const workFormats = screen.getAllByText(/МОЖНО УДАЛЕННО/i)
    expect(workFormats.length).toBeGreaterThan(0)
  })
})
