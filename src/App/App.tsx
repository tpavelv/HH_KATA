import { VacancyPage } from '../pages/VacancyPage'
import { VacancyInfoPage } from '../components/VacancyInfoPage/VacancyInfoPage'

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
  RouterProvider,
} from 'react-router-dom'
import { NotFounded } from '../components/NotFounded/NotFounded'
import { Layout } from '../module/Layout/Layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/vacancy" replace />} />
        <Route path="/vacancies" element={<VacancyPage />} />
        <Route path="/vacancies/:id" element={<VacancyInfoPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />

    // <BrowserRouter>
    //   <div className={style.app}>
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/vacancy" replace />} />
    //       <Route path="/vacancies" element={<VacancyPage />} />
    //       <Route path="/vacancies/:id" element={<VacancyInfoPage />} />
    //       {/* <Route path="/notfounded" element={<NotFounded />} /> */}
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  )
}

export default App
