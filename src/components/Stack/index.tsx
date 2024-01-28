import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  spacing?: number
  direction?: 'row' | 'column'
  justifycontent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignitems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  children: ReactNode
}

export const Stack: FC<Props> = ({
  spacing = 4,
  direction = 'column',
  justifycontent = 'flex-start',
  alignitems = 'stretch',
  children,
}) => {
  return (
    <StyledStack
      spacing={spacing}
      direction={direction}
      justifycontent={justifycontent}
      alignitems={alignitems}
    >
      {children}
    </StyledStack>
  )
}

const StyledStack = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => `${props.spacing}px`};
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
`
