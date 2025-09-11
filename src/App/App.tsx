import style from './App.module.scss'

import { VacancyPage } from '../pages/VacancyPage'
import { VacancyInfoPage } from '../components/VacancyInfoPage/VacancyInfoPage'
import { Header } from '../module/Header/Header'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { NotFounded } from '../components/NotFounded/NotFounded'
function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/vacancy" replace />} />
          <Route path="/vacancy" element={<VacancyPage />} />
          <Route path="/vacancy/:id" element={<VacancyInfoPage />} />
          {/* <Route path="/notfounded" element={<NotFounded />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
