import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Stack, Text, ListItem, SelectBox, TextBox } from '..'
import { TASK_STATUSES } from '../../constants'
import { Todo } from '../../types'

type Props = {
  todos: Todo[]
  onStatusChange: (value: string) => void
  onAddTodoList: (value: string) => void
  onDeleteToDoList: (todo: Todo) => void
  onToggleToDoList: (completed: boolean, id: string) => void
  onEditToDoList: (id: string, todo: Todo) => void
}

export const TaskList: FC<Props> = ({
  todos,
  onStatusChange,
  onAddTodoList,
  onDeleteToDoList,
  onToggleToDoList,
  onEditToDoList,
}) => {
  const toDoListContainerRef = useRef<HTMLDivElement>(null)

  const [prevTodosLength, setPrevTodosLength] = useState(todos.length)

  useEffect(() => {
    if (toDoListContainerRef.current && todos.length !== prevTodosLength) {
      toDoListContainerRef.current.scrollTop =
        toDoListContainerRef.current.scrollHeight
      setPrevTodosLength(todos.length)
    }
  }, [todos, prevTodosLength])

  return (
    <Stack spacing={16}>
      <Stack direction='row' justifycontent='space-between'>
        <Text fontSize={24} fontWeight={500}>
          Tasks
        </Text>
        <SelectBoxContainer>
          <SelectBox
            options={TASK_STATUSES}
            defaultValue={'all'}
            onChange={onStatusChange}
          />
        </SelectBoxContainer>
      </Stack>
      <Stack spacing={2}>
        <ToDoListContainer ref={toDoListContainerRef}>
          <Stack spacing={16}>
            {todos.map((todo, index) => (
              <ListItem
                key={`todo-list-${index}`}
                data={todo}
                onDelete={() => onDeleteToDoList(todo)}
                onEdit={onEditToDoList}
                onToggle={(completed) => onToggleToDoList(completed, todo.id)}
              />
            ))}
          </Stack>
        </ToDoListContainer>
        <TextBox onSave={onAddTodoList} />
      </Stack>
    </Stack>
  )
}

const SelectBoxContainer = styled.div`
  min-width: 110px;
  padding-bottom: 20px;
`
const ToDoListContainer = styled.div`
  max-height: 40vh;
  overflow-y: auto;
  padding-bottom: 40px;
`
