import styles from './HeaderVacancyPage.module.scss'
import { SearchForm } from '../../components/SearchForm/SearchForm'

export const HeaderVacancyPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrap}>
        <div className={styles.header__title_wrap}>
          <h2 className={styles.title}>Список вакансий</h2>
          <p className={styles.subtitle}>по профессии Frontend-разработчик</p>
        </div>
        <SearchForm />
      </div>
    </header>
  )
}
