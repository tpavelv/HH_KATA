import { Box, Button, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const form = useForm({
    initialValues: {
      search: searchParams.get('text') || '',
    },
  })

  useEffect(() => {
    form.setValues({ search: searchParams.get('text') || '' })
  }, [form, searchParams])

  const handleSubmit = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('text', value)
    } else {
      params.delete('text')
    }
    params.set('page', '1')
    setSearchParams(params)
  }

  return (
    <Box w={508}>
      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values.search)
        })}
      >
        <Group mt="md">
          <TextInput
            placeholder="Должность или название компании"
            {...form.getInputProps('search')}
            style={{ flex: '1' }}
          />
          <Button type="submit">Найти</Button>
        </Group>
      </form>
    </Box>
  )
}
