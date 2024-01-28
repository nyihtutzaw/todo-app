import React, { useState } from 'react'
import styled from 'styled-components'

import { Checkbox, Stack, Text } from '..'
import { COLORS } from '../../constants'
import MoreIcon from '../../assets/dots.png'

export const ListItem: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleMoreIconClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Container>
      <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
      <TextContent isChecked={isChecked}>
        <Text color={isChecked ? COLORS.disabledTextColor : COLORS.textColor}>
          Your Text Here
        </Text>
      </TextContent>
      <div onClick={handleMoreIconClick}>
        <img src={MoreIcon} alt='More Icon' />
      </div>
      <AnchorMenu showMenu={showMenu}>
        <Stack spacing={16}>
          <Text fontSize={14} color={COLORS.textColor}>
            Edit
          </Text>
          <Text fontSize={14} color={COLORS.red}>
            Delete
          </Text>
        </Stack>
      </AnchorMenu>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 14px 20px;
  background-color: ${COLORS.white};
  border-radius: 10px;
`

const TextContent = styled.div<{ isChecked: boolean }>`
  flex: 1;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`

const AnchorMenu = styled.div<{ showMenu: boolean }>`
  z-index: 1;
  display: ${(props) => (props.showMenu ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: ${COLORS.white};
  border-radius: 10px;
  padding: 17px 22px;

  div {
    margin-bottom: 10px;
    cursor: pointer;
  }
`
