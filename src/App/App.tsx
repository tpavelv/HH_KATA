import { VacancyPage } from '../pages/VacancyPage'
import { VacancyInfoPage } from '../components/VacancyInfoPage/VacancyInfoPage'
import { vacanciesLoader, VacancyList } from '../module/VacancyList/VacancyList'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import { NotFounded } from '../components/NotFounded/NotFounded'
import { Layout } from '../module/Layout/Layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/vacancies" replace />} />
        <Route path="/vacancies" element={<VacancyPage />}>
          <Route index element={<VacancyList />} loader={vacanciesLoader()} />
          <Route path="moscow" element={<VacancyList />} loader={vacanciesLoader('1')} />
          <Route path="petersburg" element={<VacancyList />} loader={vacanciesLoader('2')} />
        </Route>
        <Route path="/vacancies/:id" element={<VacancyInfoPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
