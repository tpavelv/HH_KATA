import { VacancyCardView } from './VacancyCardView'
import { Card } from '../../types'
import { useNavigate } from 'react-router-dom'

interface VacancyCardProps {
  vacancy: Card
  isAbout?: boolean
}

const currencyMap: Record<string, string> = {
  RUR: '₽',
  KZT: '₸',
  BYN: 'Br',
}

const experienceMap: Record<string, string> = {
  noExperience: 'Без опыта',
  between1And3: 'Опыт 1 - 3 года',
  between3And6: 'Опыт 3 - 6 лет',
  moreThan6: 'Опыт более 6 лет',
}

export const VacancyCard = ({ vacancy, isAbout }: VacancyCardProps) => {
  const { id, name, salary, experience, area, employer, work_format, alternate_url } = vacancy
  const navigate = useNavigate()
  const handleShow = (id: string) => {
    console.log(id)
    navigate(`/vacancy/${id}`)
  }
  const handleReply = (id: string) => console.log(id)

  const salaryText = salary
    ? salary.from && salary.to
      ? `${salary.from.toLocaleString('ru-RU')} - ${salary.to.toLocaleString('ru-RU')} ${currencyMap[salary.currency] ?? salary.currency}`
      : salary.from
        ? `от ${salary.from.toLocaleString('ru-RU')} ${currencyMap[salary.currency] ?? salary.currency}`
        : salary.to
          ? `до ${salary.to.toLocaleString('ru-RU')} ${currencyMap[salary.currency] ?? salary.currency}`
          : undefined
    : undefined

  const experienceText = experienceMap[experience.id] ?? experience.name

  return (
    <VacancyCardView
      title={name}
      salary={salaryText}
      experience={experienceText}
      company={employer.name}
      work_format={work_format}
      city={area.name}
      url={alternate_url}
      onShow={() => handleShow(id)}
      onReply={() => handleReply(id)}
      isAbout={isAbout}
    />
  )
}
