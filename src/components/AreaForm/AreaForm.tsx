import { useTypedDispatch } from '../../hooks/redux/redux'
import { changeArea } from '../../reducers/RequestDataSlice'

import { Select } from '@mantine/core'

export const AreaForm = () => {
  const dispatch = useTypedDispatch()

  const handleChange = (value: string | null) => {
    dispatch(changeArea(value === 'all' ? null : value))
  }

  return (
    <aside>
      <Select
        w={317}
        placeholder="Все города"
        autoSelectOnBlur
        data={[
          { value: '1', label: 'Москва' },
          { value: '2', label: 'Санкт-Петербург' },
          { value: 'all', label: 'Все города' },
        ]}
        onChange={handleChange}
        searchable
      />
    </aside>
  )
}
