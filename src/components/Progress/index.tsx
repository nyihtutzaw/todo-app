import { FC } from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import { ProgressBar } from '../ProgressBar'
import { Stack, Text } from '..'

export const Progress: FC = () => {
  return (
    <Container>
      <Stack spacing={12}>
        <Text fontSize={28} fontWeight={500} color={COLORS.white}>
          Progress
        </Text>
        <ProgressBar percentage={50} />
        <Text color={COLORS.textColorLight}>12 completed</Text>
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
