import { Box, Button, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useTypedDispatch } from '../../hooks/redux/redux'
import { changeSearchText } from '../../reducers/RequestDataSlice'

export const SearchForm = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      search: '',
      termsOfService: true,
    },
  })
  const dispatch = useTypedDispatch()
  const handleSubmit = (value: string) => {
    dispatch(changeSearchText(value))
  }
  return (
    <Box w={508}>
      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values.search)
          form.reset()
        })}
      >
        <Group mt="md">
          <TextInput
            placeholder="Должность или название компании"
            key={form.key('search')}
            {...form.getInputProps('search')}
            style={{ flex: '1' }}
          />

          <Button type="submit">Найти</Button>
        </Group>
      </form>
    </Box>
  )
}
