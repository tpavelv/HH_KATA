import { useTypedSelector, useTypedDispatch } from '../../hooks/redux/redux'
import { changePage } from '../../reducers/RequestDataSlice'
import { VacancyListView } from './VacancyListView'
import { Pagination, Group } from '@mantine/core'
import styles from './VacancyList.module.scss'

export const VacancyList = () => {
  const dispatch = useTypedDispatch()
  const { data, loading, page, pages } = useTypedSelector((state) => state.requestData)
  if (loading) {
    return <h2 className={styles.vacancy_loader}>Loading...</h2>
  }
  return (
    <section className={styles.vacancy_list}>
      {data.length ? <VacancyListView vacancies={data} /> : <div className={styles.not_found}>Вакансии не найдены</div>}

      {pages && Number(pages) > 1 && (
        <Group justify="center">
          <Pagination total={Number(pages)} value={Number(page)} onChange={(id) => dispatch(changePage(id))} />
        </Group>
      )}
    </section>
  )
}
