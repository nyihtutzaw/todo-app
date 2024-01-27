import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  spacing?: number
  direction?: 'row' | 'column'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  children: ReactNode
}

export const Stack: FC<Props> = ({
  spacing = 4,
  direction = 'column',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
}) => {
  return (
    <StyledStack
      spacing={spacing}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </StyledStack>
  )
}

const StyledStack = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => `${props.spacing}px`};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`
