import style from './App.module.scss'

import { VacancyPage } from '../pages/VacancyPage'
import { Header } from '../module/Header/Header'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <VacancyPage />
    </div>
  )
}

export default App
