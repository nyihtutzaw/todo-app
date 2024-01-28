import { render, screen } from '@testing-library/react'

import { TextBox } from './../../components'

describe('TextBox', () => {
  test('renders TextBox', () => {
    const onSaveMock = jest.fn()

    render(<TextBox onSave={onSaveMock} />)

    const textBox = screen.getByPlaceholderText('Type something...')
    expect(textBox).toBeTruthy()

    const saveButton = screen.queryByText('Save')
    expect(saveButton).not.toBeTruthy()
  })

  test('renders TextBox with initial editData', () => {
    const onSaveMock = jest.fn()

    const editData = { id: '1', title: 'Initial Data', completed: false }

    render(<TextBox editData={editData} onSave={onSaveMock} />)
  })
})
