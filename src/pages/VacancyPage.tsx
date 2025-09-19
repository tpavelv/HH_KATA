import { useTypedDispatch } from '../hooks/redux/redux'
import { useSearchParams, useOutlet } from 'react-router-dom'
import { HeaderVacancyPage } from '../module/HeaderVacancyPage/HeaderVacancyPage'
import { AreaForm } from '../components/AreaForm/AreaForm'
import { VacancyList } from '../module/VacancyList/VacancyList'
import styles from './VacancyPage.module.scss'

export const VacancyPage = () => {
  const dispatch = useTypedDispatch()

  const [searchParams] = useSearchParams()

  const outlet = useOutlet()
  return (
    <main className={styles.page}>
      <HeaderVacancyPage />
      <AreaForm />
      {outlet ?? <VacancyList />}
    </main>
  )
}
