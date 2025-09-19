import { VacancyCard } from '../VacancyCard/VacancyCard'
import { useLoaderData } from 'react-router-dom'
import { VacancyInfoPageView } from './VacancyInfoPageView'
import { LoaderFunctionArgs } from 'react-router-dom'
import { Card } from '../../types'
import styles from './VacancyInfoPage.module.scss'
export interface HHVacancy extends Card {
  description: string
}

export const VacancyInfoPage = () => {
  const vacancy = useLoaderData()
  return (
    <main className={styles.vacancy_page}>
      {vacancy && <VacancyCard vacancy={vacancy} isAbout />}
      <VacancyInfoPageView description={vacancy?.description} />
    </main>
  )
}

export const vacancyInfoLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id
  const res = await fetch(`https://api.hh.ru/vacancies/${id}`)

  if (!res.ok) {
    throw new Response('', { status: res.status, statusText: res.statusText })
  }

  return res.json()
}
