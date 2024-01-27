import { FC } from 'react'
import styled from 'styled-components'

import { Stack, Text } from '..'
import SelectBox from '../SelectBox'

export const TaskList: FC = () => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'done', label: 'Done' },
    { value: 'undone', label: 'Undone' },
  ]

  return (
    <Stack spacing={16}>
      <Stack direction='row' justifyContent='space-between'>
        <Text fontSize={24} fontWeight={500}>
          Tasks
        </Text>
        <SelectBoxContainer>
          <SelectBox options={options} defaultValue={'all'} />
        </SelectBoxContainer>
      </Stack>
    </Stack>
  )
}

const SelectBoxContainer = styled.div`
  min-width: 110px;
`
