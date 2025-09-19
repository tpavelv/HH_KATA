// import { useTypedSelector, useTypedDispatch } from '../../hooks/redux/redux'
// // import { changePage } from '../../reducers/RequestDataSlice'
// import { VacancyListView } from './VacancyListView'
// import { Pagination, Group } from '@mantine/core'
// import styles from './VacancyList.module.scss'
// import { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { getData } from '../../reducers/GetVacanciesThunk'

// export const VacancyList = () => {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const pages = useTypedSelector((state) => state.requestData.pages)
//   const dispatch = useTypedDispatch()

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams)
//     let changed = false

//     // area по дефолту
//     if (!params.get('area')) {
//       params.set('area', 'all')
//       changed = true
//     }

//     // page по дефолту, только если pages > 1
//     if (!params.get('page') && pages && pages !== '1') {
//       params.set('page', '1')
//       changed = true
//     }

//     if (changed) {
//       setSearchParams(params)
//       return
//     }

//     dispatch(getData(searchParams))
//   }, [searchParams, dispatch, setSearchParams, pages])

//   const { data, loading } = useTypedSelector((state) => state.requestData)
//   if (loading) {
//     return <h2 className={styles.vacancy_loader}>Loading...</h2>
//   }
//   return (
//     <section className={styles.vacancy_list}>
//       {data.length ? <VacancyListView vacancies={data} /> : <div className={styles.not_found}>Вакансии не найдены</div>}

//       {pages && Number(pages) > 1 && (
//         <Group justify="center">
//           {/* <Pagination total={Number(pages)} value={Number(page)} onChange={(id) => dispatch(changePage(id))} /> */}
//         </Group>
//       )}
//     </section>
//   )
// }
import { useTypedSelector } from '../../hooks/redux/redux'
import { VacancyListView } from './VacancyListView'
import { Group, Pagination } from '@mantine/core'
import styles from './VacancyList.module.scss'
import { useSearchParams } from 'react-router-dom'

export const VacancyList = () => {
  const { data, loading, pages } = useTypedSelector((state) => state.requestData)
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page') ?? 1)

  if (loading) {
    return <h2 className={styles.vacancy_loader}>Loading...</h2>
  }

  return (
    <section className={styles.vacancy_list}>
      {data.length ? <VacancyListView vacancies={data} /> : <div className={styles.not_found}>Вакансии не найдены</div>}

      {pages && Number(pages) > 1 && (
        <Group justify="center">
          <Pagination
            total={Number(pages)}
            value={currentPage}
            onChange={(page) => {
              const params = new URLSearchParams(searchParams)
              params.set('page', String(page))
              setSearchParams(params)
            }}
          />
        </Group>
      )}
    </section>
  )
}
