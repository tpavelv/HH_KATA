import { useEffect } from 'react'
import { VacancyList } from '../module/VacancyList/VacancyList'
import { AreaForm } from '../components/AreaForm/AreaForm'

import { useTypedSelector, useTypedDispatch } from '../hooks/redux/redux'
import styles from './VacancyPage.module.scss'
import { getData } from '../reducers/GetVacanciesThunk'
import { HeaderVacancyPage } from '../module/HeaderVacancyPage/HeaderVacancyPage'

export const VacancyPage = () => {
  const state = useTypedSelector((state) => state.requestData)
  const { page, area, text } = state
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch, page, area, text])

  return (
    <main className={styles.page}>
      <HeaderVacancyPage />
      <AreaForm />
      <VacancyList />
    </main>
  )
}
