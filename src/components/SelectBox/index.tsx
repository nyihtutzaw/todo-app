import React, { useState } from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import { Stack, Text } from '..'
import ArrowDown from '../../assets/arrow-down.png'

type Option = {
  value: string
  label: string
}

type SelectBoxProps = {
  options: Option[]
  defaultValue?: string
  onChange: (value: string) => void
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.value === defaultValue) as Option
  )
  const [isOptionsVisible, setOptionsVisible] = useState(false)

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option)
    setOptionsVisible(false)
    onChange(option.value)
  }

  return (
    <SelectBoxWrapper>
      <SelectBoxButton onClick={() => setOptionsVisible(!isOptionsVisible)}>
        <Stack direction='row' justifycontent='space-between'>
          <Text fontSize={13}>
            {selectedOption ? selectedOption.label : 'Select an option'}
          </Text>
          <img src={ArrowDown} />
        </Stack>
      </SelectBoxButton>

      {isOptionsVisible && (
        <OptionsList>
          <Wrapper>
            {options.map((option) => (
              <OptionItem
                key={option.value}
                onClick={() => handleSelectOption(option)}
                selected={selectedOption === option}
              >
                <Text
                  fontSize={14}
                  color={
                    selectedOption === option ? COLORS.white : COLORS.textColor
                  }
                >
                  {option.label}
                </Text>
              </OptionItem>
            ))}
          </Wrapper>
        </OptionsList>
      )}
    </SelectBoxWrapper>
  )
}

const SelectBoxWrapper = styled.div`
  position: relative;
  width: inherit;
`

const SelectBoxButton = styled.button`
  background-color: ${COLORS.white};
  color: ${COLORS.textColor};
  padding: 7px 10px;
  cursor: pointer;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  transition:
    background-color 0.3s,
    color 0.3s;
`

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 5px 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: ${COLORS.white};
`

const Wrapper = styled.div`
  margin: 5px 10px;
`

const OptionItem = styled.li<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? COLORS.cyan : COLORS.white)};
  color: ${(props) => (props.selected ? COLORS.white : COLORS.textColor)};
  padding: 6px;
  cursor: pointer;
  border-radius: 10px;
  transition:
    background-color 0.3s,
    color 0.3s;
  color: black !important;
`
