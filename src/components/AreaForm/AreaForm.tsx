import { useLocation } from 'react-router-dom'
import { openAreaTab } from '../../reducers/UiSlice'
import { Select } from '@mantine/core'
import styles from './AreaForm.module.scss'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux/redux'
import { AreaTabs } from '../AreaTabs/AreaTabs'
import { City } from '../../types'

export const AreaForm = () => {
  const dispatch = useTypedDispatch()
  const tabsIsActive = useTypedSelector((state) => state.ui.showAreaTabs)

  const location = useLocation()
  const pathParts = location.pathname.split('/')

  const currentArea = pathParts[2] || 'all'

  return (
    <aside className={styles.area}>
      <Select
        className={styles.select}
        w={317}
        placeholder={City[currentArea as keyof typeof City] || 'Все города'}
        autoSelectOnBlur
        searchable
        readOnly
        styles={{
          input: { color: 'var(--mantine-color-blackCustom-4)' },
        }}
        onFocus={() => dispatch(openAreaTab())}
      />
      {tabsIsActive && <AreaTabs />}
    </aside>
  )
}
