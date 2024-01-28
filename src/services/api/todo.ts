import { AxiosResponse } from 'axios'

import { Todo } from '../../types'
import { api } from './api'

export const getTodos = (): Promise<AxiosResponse<Todo[]>> => api.get('/todos')
export const addTodo = (todo: Todo): Promise<AxiosResponse<Todo>> =>
  api.post('/todos', todo)
export const editTodo = (
  id: string,
  todo: Todo
): Promise<AxiosResponse<Todo>> => api.put(`/todos/${id}`, todo)
export const deleteTodo = (id: string): Promise<AxiosResponse<void>> =>
  api.delete(`/todos/${id}`)
export const toggleTodo = (
  completed: boolean,
  id: string
): Promise<AxiosResponse<Todo>> => api.patch(`/todos/${id}`, { completed })

export default api
