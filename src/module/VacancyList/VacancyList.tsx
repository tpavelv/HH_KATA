import { VacancyListView } from './VacancyListView'
import { Group, Pagination } from '@mantine/core'
import styles from './VacancyList.module.scss'
import { useLoaderData, useSearchParams } from 'react-router-dom'

export const VacancyList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page') ?? 1)

  const newData = useLoaderData()
  const { items, pages } = newData

  return (
    <section className={styles.vacancy_list}>
      {items.length ? (
        <VacancyListView vacancies={items} />
      ) : (
        <div className={styles.not_found}>Вакансии не найдены</div>
      )}

      {pages && Number(pages) > 1 && (
        <Group justify="center">
          <Pagination
            total={Number(pages) - 1}
            value={currentPage}
            onChange={(page) => {
              searchParams.set('page', String(page))
              setSearchParams(searchParams)
            }}
          />
        </Group>
      )}
    </section>
  )
}

import type { LoaderFunctionArgs } from 'react-router-dom'

export const vacanciesLoader =
  (area?: string) =>
  async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page') ?? '1'

    const text = url.searchParams.get('text') ?? ''

    const apiUrl = new URL('https://api.hh.ru/vacancies')

    apiUrl.searchParams.set('search_field', 'name')
    apiUrl.searchParams.append('search_field', 'company_name')
    apiUrl.searchParams.set('industry', '7')
    apiUrl.searchParams.set('professional_role', '96')
    apiUrl.searchParams.set('page', page)

    if (text) apiUrl.searchParams.set('text', text)
    if (area) {
      apiUrl.searchParams.set('area', area)
    }

    const res = await fetch(apiUrl)

    if (!res.ok) {
      throw new Response('Ошибка загрузки вакансий', { status: res.status })
    }

    return res.json()
  }
