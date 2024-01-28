import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store'
import {
  addTodo,
  deleteTodo,
  editTodo,
  getTodos,
  guidGenerator,
  toggleTodo,
} from '../services'
import {
  setTodos,
  addTodo as addTodoReducer,
  deleteTodo as deleteToDoReducer,
  toggleTodo as toggleTodoReducer,
  editTodo as editTodoReducer,
} from '../store/reducer/todo'
import { Todo } from '../types'

const useToDoList = () => {
  const todos = useSelector((state: RootState) => state.todos)

  const dispatch = useDispatch()

  const fetchData = useCallback(async () => {
    const data = await getTodos()
    dispatch(setTodos(data.data))
  }, [dispatch])

  useEffect(() => {
    fetchData()
  }, [dispatch, fetchData])

  const handleStatusChange = useCallback(
    async (status: string) => {
      if (status === 'all') {
        await fetchData()
        return
      }
      if (status === 'done') {
        const data = await getTodos()
        dispatch(setTodos(data.data.filter((eachData) => eachData.completed)))
        return
      }
      if (status === 'undone') {
        const data = await getTodos()
        dispatch(setTodos(data.data.filter((eachData) => !eachData.completed)))
        return
      }
    },
    [dispatch, fetchData]
  )

  const handleAddTodoList = useCallback(
    async (text: string) => {
      const data = {
        id: guidGenerator(),
        title: text,
        completed: false,
      }
      await addTodo(data)
      dispatch(addTodoReducer(data))
    },
    [dispatch]
  )

  const handleDeleteTodoList = useCallback(
    async (todo: Todo) => {
      await deleteTodo(todo.id)
      dispatch(deleteToDoReducer(todo.id))
    },
    [dispatch]
  )

  const handleToggleToDoList = useCallback(
    async (completed: boolean, id: string) => {
      await toggleTodo(completed, id)
      dispatch(toggleTodoReducer({ completed, id }))
    },
    [dispatch]
  )

  const handleEditToDoList = useCallback(
    async (id: string, todo: Todo) => {
      await editTodo(id, todo)
      dispatch(editTodoReducer(todo))
    },
    [dispatch]
  )

  const completedList = useMemo(() => {
    return todos.filter((todo) => todo.completed)
  }, [todos])

  const completeProgress = useMemo(() => {
    if (todos.length === 0) return 0
    return (completedList.length / todos.length) * 100
  }, [completedList.length, todos.length])

  return {
    todos,
    completeProgress,
    completedList,
    handleStatusChange,
    handleDeleteTodoList,
    handleAddTodoList,
    handleToggleToDoList,
    handleEditToDoList,
  }
}

export default useToDoList
