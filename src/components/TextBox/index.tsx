import styled from 'styled-components'
import { FC, useCallback, KeyboardEvent, useState, useEffect } from 'react'

import { COLORS } from '../../constants'
import { Todo } from '../../types'

type Prop = {
  onSave: (value: string) => void
  editData?: Todo
}

export const TextBox: FC<Prop> = ({ editData, onSave }) => {
  const [value, setValue] = useState('')

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSave(value)
        setValue('')
      }
    },
    [onSave, value]
  )

  useEffect(() => {
    if (!editData) return
    setValue(editData.title)
  }, [editData])

  return (
    <StyledTextBoxContainer>
      <StyledTextBox
        type='text'
        value={value}
        placeholder='Type something...'
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={50}
      />
      {value.length > 0 && (
        <SaveButton
          onClick={() => {
            onSave(value)
            setValue('')
          }}
        >
          Save
        </SaveButton>
      )}
    </StyledTextBoxContainer>
  )
}

const StyledTextBoxContainer = styled.div`
  position: relative;
  width: 100%;
`

const StyledTextBox = styled.input`
  width: calc(100% - 30px); /* Adjust the width as needed */
  padding: 14px 20px;
  border: none;
  border-radius: 9999px;
  background-color: ${COLORS.white};
  outline: none;
  font-size: 18px;
  color: ${COLORS.textColor};

  &::placeholder {
    color: ${COLORS.placeholderTextColor};
  }
`

const SaveButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: ${COLORS.cyan};
  color: ${COLORS.white};
  border: none;
  border-radius: 999px;
  padding: 10px;
  cursor: pointer;
`
