import { FC } from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import { ProgressBar } from '../ProgressBar'
import { Stack, Text } from '..'

type Props = {
  completed: number
  progress: number
}

export const Progress: FC<Props> = ({ completed, progress }) => {
  return (
    <Container>
      <Stack spacing={12}>
        <Text fontSize={28} fontWeight={500} color={COLORS.white}>
          Progress
        </Text>
        <ProgressBar percentage={progress} />
        <Text color={COLORS.textColorLight}>{completed} completed</Text>
      </Stack>
    </Container>
  )
}

export const Container = styled.div`
  width: inherit;
  background-color: ${COLORS.red};
  border-radius: 20px;
  padding: 18px 19px;
`
