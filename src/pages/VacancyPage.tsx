import { useEffect } from 'react'
import { VacancyList } from '../module/VacancyList/VacancyList'
import { AreaForm } from '../components/AreaForm/AreaForm'

import { useTypedDispatch } from '../hooks/redux/redux'
import styles from './VacancyPage.module.scss'
import { getData } from '../reducers/GetVacanciesThunk'
import { HeaderVacancyPage } from '../module/HeaderVacancyPage/HeaderVacancyPage'
import { useSearchParams } from 'react-router-dom'

export const VacancyPage = () => {
  const dispatch = useTypedDispatch()

  const [searchParams] = useSearchParams()
  const paramsObj = Object.fromEntries(searchParams.entries())

  useEffect(() => {
    dispatch(getData(searchParams))
  }, [dispatch, JSON.stringify(paramsObj)])

  return (
    <main className={styles.page}>
      <HeaderVacancyPage />
      <AreaForm />
      <VacancyList />
    </main>
  )
}
