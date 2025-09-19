import { Tabs } from '@mantine/core'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './AreaTabs.module.scss'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux/redux'
import { closeAreaTab } from '../../reducers/UiSlice'

import { useClickOutside } from '@mantine/hooks'

const routes = [
  { value: 'moscow', label: 'Москва', path: '/vacancies/moscow' },
  { value: 'petersburg', label: 'Санкт-Петербург', path: '/vacancies/petersburg' },
  { value: '/', label: 'Все города', path: '/vacancies' },
]

export function AreaTabs() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useTypedDispatch()
  const ref = useClickOutside(() => dispatch(closeAreaTab()))

  const handleTabChange = (val: string | null) => {
    const route = routes.find((r) => r.value === val)
    if (route) {
      const params = new URLSearchParams()
      const text = new URLSearchParams(location.search).get('text')
      if (text) {
        params.set('text', text)
      }

      navigate({
        pathname: route.path,
        search: params.toString(),
      })
      dispatch(closeAreaTab())
    }
  }

  return (
    <Tabs ref={ref} className={styles.tabs} onChange={(val) => handleTabChange(val)}>
      <Tabs.List className={styles.tab_list}>
        {routes.map((tab) => (
          <Tabs.Tab className={styles.tab} key={tab.value || 'empty'} value={tab.value}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}
