import { VacancyCard } from '../VacancyCard/VacancyCard'
import { useParams } from 'react-router-dom'
import { VacancyInfoPageView } from './VacancyInfoPageView'
import { useEffect, useState } from 'react'
import { Card } from '../../types'
import styles from './VacancyInfoPage.module.scss'
export interface HHVacancy extends Card {
  description: string
}

export const VacancyInfoPage = () => {
  const { id } = useParams<{ id: string }>()

  const [vacancy, setVacancy] = useState<HHVacancy | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://api.hh.ru/vacancies/${id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Ошибка запроса вакансии')
        }

        return resp.json()
      })
      .then((data) => {
        setVacancy(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [id])
  if (loading) return <p>Загрузка...</p>
  if (error) return <p>Вакансия не найдена</p>
  return (
    <main className={styles.vacancy_page}>
      {vacancy && <VacancyCard vacancy={vacancy} isAbout />}
      <VacancyInfoPageView description={vacancy?.description} />
    </main>
  )
}
