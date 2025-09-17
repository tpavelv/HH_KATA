import { useSearchParams } from 'react-router-dom'

import { Select } from '@mantine/core'
import styles from './AreaForm.module.scss'

export const AreaForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSubmit = (value: string | null) => {
    const param = new URLSearchParams(searchParams)
    if (value && value !== 'all') {
      param.set('area', value)
    } else {
      param.delete('area')
    }
    param.set('page', '1')
    setSearchParams(param)
  }

  const currentArea = searchParams.get('area') || 'all'
  return (
    <aside className={styles.area}>
      <Select
        className={styles.select}
        w={317}
        placeholder="Все города"
        autoSelectOnBlur
        data={[
          { value: 'moscow', label: 'Москва' },
          { value: 'spb', label: 'Санкт-Петербург' },
          { value: 'all', label: 'Все города' },
        ]}
        onChange={handleSubmit}
        searchable
        value={currentArea}
        readOnly
        styles={{
          input: { color: 'var(--mantine-color-blackCustom-4)' },
        }}
        // onFocus={console.log('focus')}
      />
    </aside>
  )
}
