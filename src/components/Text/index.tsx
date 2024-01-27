import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

type TextProps = {
  fontWeight?: number
  fontSize?: number
  children: React.ReactNode
  color?: string
}

export const Text: React.FC<TextProps> = ({
  fontWeight,
  fontSize,
  color,
  children,
}) => {
  return (
    <StyledText fontWeight={fontWeight} fontSize={fontSize} color={color}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.span<TextProps>`
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || 16}px;
  color: ${(props) => props.color || COLORS.textColor};
`
