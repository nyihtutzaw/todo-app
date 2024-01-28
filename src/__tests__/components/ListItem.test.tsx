import { render } from '@testing-library/react'

import { ListItem } from './../../components/ListItem'
import { Todo } from '../../types'

describe('ListItem component', () => {
  it('renders component correctly', () => {
    const mockTodo: Todo = {
      id: '1',
      title: 'a',
      completed: false,
    }
    render(
      <ListItem
        data={mockTodo}
        onDelete={() => {}}
        onEdit={() => {}}
        onToggle={() => {}}
      />
    )
  })
})
