import styles from './VacancyInfoPage.module.scss'

interface VacancyInfoPageViewProps {
  description?: string
}

export const VacancyInfoPageView = ({ description }: VacancyInfoPageViewProps) => {
  if (!description) return null
  return (
    <article className={styles.description}>
      <h2 className={styles.title}>Компания</h2>

      <div dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  )
}
