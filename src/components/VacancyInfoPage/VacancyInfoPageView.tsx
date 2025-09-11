import styles from './VacancyInfoPage.module.scss'

interface VacancyInfoPageViewProps {
  description?: string
}

export const VacancyInfoPageView = ({ description }: VacancyInfoPageViewProps) => {
  if (!description) return null
  return (
    <article className={styles.vacancy_page__description}>
      <h2>Компания</h2>

      <div dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  )
}
