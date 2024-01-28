import { FC } from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

type Props = {
  ischecked: boolean
  onChange: () => void
}

export const Checkbox: FC<Props> = ({ ischecked, onChange }) => {
  return (
    <StyledCheckbox type='checkbox' checked={ischecked} onChange={onChange} />
  )
}

const StyledCheckbox = styled.input`
  margin-right: 19px;
  cursor: pointer;
  width: 22px;
  height: 22px;
  position: relative;
  appearance: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${COLORS.cyan};
    border-radius: 6px;
    background-color: ${(props) =>
      props.checked ? COLORS.cyan : COLORS.white};
  }

  &:checked::before {
    background-color: ${COLORS.cyan};
  }

  &:not(:checked) {
    border: none;
    outline: none;
  }

  &::after {
    content: '${(props) => (props.checked ? '\u2713' : '')}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
      ${(props) => (props.checked ? 'rotate(30deg)' : '')};
    font-size: 18px;
    color: ${COLORS.white};
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`
