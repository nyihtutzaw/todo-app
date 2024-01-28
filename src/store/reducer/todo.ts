import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Todo } from '../../types'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex((task) => task.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload)
    },
    toggleTodo: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      const index = state.findIndex((task) => task.id === action.payload.id)
      if (index !== -1) {
        state[index].completed = action.payload.completed
      }
    },
    setTodos: (_state, action: PayloadAction<Todo[]>) => {
      return action.payload
    },
  },
})

export const { addTodo, editTodo, deleteTodo, toggleTodo, setTodos } =
  todosSlice.actions
export default todosSlice.reducer
