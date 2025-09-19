import { Card, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core'
import styles from './VacancyCard.module.scss'
import { WorkFormatName } from '../../types'
import { Link } from 'react-router-dom'
interface WorkFormatOption {
  id: string
  name: string
}

interface VacancyCardViewProps {
  title: string
  salary?: string
  experience: string
  company: string
  work_format: WorkFormatOption[]
  city: string
  url: string
  isAbout?: boolean
  id: string
  onShow: () => void
  onReply: () => void
}

export const VacancyCardView = ({
  title,
  salary,
  experience,
  company,
  work_format,
  city,
  url,
  isAbout,
  id,
  onShow,
  onReply,
}: VacancyCardViewProps) => {
  const theme = useMantineTheme()

  const badgeColors: Record<string, { bg: string; color: string }> = {
    ON_SITE: { bg: theme.colors.blackCustom[2], color: theme.colors.blackCustom[5] }, // Ultra Light / Gray
    REMOTE: { bg: theme.colors.primary[5], color: theme.colors.blackCustom[0] }, // Primary / White
    HYBRID: { bg: theme.colors.blackCustom[9], color: theme.colors.blackCustom[0] }, // Black1 / White
  }

  return (
    <Card className={styles.cardItem} p={24} radius="lg">
      <Text className={styles.title} mb={8}>
        {title}
      </Text>

      <Group mb={16}>
        {salary && <Text>{salary}</Text>}
        <Text className={styles.experience}>{experience}</Text>
      </Group>
      <Text className={styles.company} mb={8}>
        {company}
      </Text>

      <Group gap={8} mb={4}>
        {work_format.map((el) => {
          const colors = badgeColors[el.id] || { bg: theme.colors.gray[5], color: theme.colors.blackCustom[9] }
          return (
            <Badge key={el.id} variant="filled" style={{ backgroundColor: colors.bg, color: colors.color }} radius="sm">
              {WorkFormatName[el.id as keyof typeof WorkFormatName]}
            </Badge>
          )
        })}
      </Group>

      <Text mb={16}>{city}</Text>

      <Group className={styles['cardItem__button-group']}>
        {isAbout ? (
          <Button color="black" radius="sm" onClick={onReply}>
            Откликнуться на hh.ru
          </Button>
        ) : (
          <>
            <Link to={`/vacancies/${id}`} className={`${styles.link} ${styles.link_primary}`}>
              Смотреть вакансию
            </Link>
            <Link to={`/vacancies/${id}`} className={`${styles.link} ${styles.link_secondary}`}>
              Откликнуться
            </Link>
          </>
        )}
      </Group>
    </Card>
  )
}
