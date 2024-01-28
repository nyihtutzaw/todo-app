import { FC } from 'react'
import styled from 'styled-components'

import { Stack, Text, ListItem, SelectBox } from '..'
import { TASK_STATUSES } from '../../constants'

export const TaskList: FC = () => {
  return (
    <Stack spacing={16}>
      <Stack direction='row' justifyContent='space-between'>
        <Text fontSize={24} fontWeight={500}>
          Tasks
        </Text>
        <SelectBoxContainer>
          <SelectBox options={TASK_STATUSES} defaultValue={'all'} />
        </SelectBoxContainer>
      </Stack>
      <Stack spacing={16}>
        <ListItem />
        <ListItem />
      </Stack>
    </Stack>
  )
}

const SelectBoxContainer = styled.div`
  min-width: 110px;
`
