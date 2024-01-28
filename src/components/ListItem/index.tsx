import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Checkbox, Stack, Text, TextBox } from '..'
import { COLORS } from '../../constants'
import MoreIcon from '../../assets/dots.png'
import { Todo } from '../../types'

type Props = {
  data: Todo
  onDelete: () => void
  onEdit: (id: string, todo: Todo) => void
  onToggle: (completed: boolean) => void
}

export const ListItem: FC<Props> = ({ data, onDelete, onEdit, onToggle }) => {
  const [ischecked, setIsChecked] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [showmenu, setshowmenu] = useState<boolean>(false)

  const handleCheckboxChange = () => {
    setIsChecked(!ischecked)
    onToggle(!ischecked)
  }

  const handleMoreIconClick = () => {
    setshowmenu(!showmenu)
  }

  useEffect(() => {
    setIsChecked(data.completed)
  }, [data])

  if (isEdit) {
    return (
      <TextBox
        onSave={(value) => {
          onEdit(data.id, {
            ...data,
            title: value,
          })
          setIsEdit(false)
        }}
        editData={data}
      />
    )
  }

  return (
    <Container>
      <Checkbox ischecked={ischecked} onChange={handleCheckboxChange} />
      <TextContent ischecked={ischecked}>
        <Text color={ischecked ? COLORS.disabledTextColor : COLORS.textColor}>
          {data.title}
        </Text>
      </TextContent>
      <div onClick={handleMoreIconClick}>
        <img src={MoreIcon} alt='More Icon' />
      </div>
      <AnchorMenu showmenu={showmenu}>
        <Stack spacing={16}>
          <LinkButton
            onClick={() => {
              setshowmenu(false)
              setIsEdit(true)
            }}
          >
            <Text fontSize={14} color={COLORS.textColor}>
              Edit
            </Text>
          </LinkButton>
          <LinkButton
            onClick={() => {
              setshowmenu(false)
              onDelete()
            }}
          >
            <Text fontSize={14} color={COLORS.red}>
              Delete
            </Text>
          </LinkButton>
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
  border-radius: 9999px;
`

const LinkButton = styled('button')`
  border: none;
  box-shadow: none;
  background-color: ${COLORS.white};
  padding: 0px;
  cursor: pointer;
  text-align: left;
`

const TextContent = styled.div<{ ischecked: boolean }>`
  flex: 1;
  text-decoration: ${(props) => (props.ischecked ? 'line-through' : 'none')};
`

const AnchorMenu = styled.div<{ showmenu: boolean }>`
  z-index: 1;
  display: ${(props) => (props.showmenu ? 'block' : 'none')};
  position: absolute;
  top: 28px;
  right: 0;
  background-color: ${COLORS.white};
  border-radius: 10px;
  padding: 17px 22px;

  div {
    margin-bottom: 10px;
    cursor: pointer;
  }
`
