import { VacancyCard } from '../../components/VacancyCard/VacancyCard'
import { Card } from '../../types'

interface VacancyListViewProps {
  vacancies: Card[]
}

export const VacancyListView = ({ vacancies }: VacancyListViewProps) => {
  return (
    <ul>
      {vacancies.map((el: Card) => (
        <li key={el.id}>
          <VacancyCard vacancy={el} />
        </li>
      ))}
    </ul>
  )
}
