import { FC } from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

type ProgressBarProps = {
  percentage: number
}

export const ProgressBar: FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <Progress percentage={percentage} />
    </ProgressBarContainer>
  )
}

const ProgressBarContainer = styled.div`
  width: inherit;
  height: 7.34px;
  background-color: ${COLORS.blue};
  border-radius: 999px;
  overflow: hidden;
`

const Progress = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: ${COLORS.white};
  transition: width 0.3s ease-in-out;
`
