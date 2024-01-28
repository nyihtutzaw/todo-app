import { render, screen, fireEvent } from '@testing-library/react'

import { Checkbox } from '../../components/Checkbox'

describe('Checkbox component', () => {
  it('renders unchecked', () => {
    render(<Checkbox ischecked={false} onChange={() => {}} />)
  })

  it('calls onChange when clicked', () => {
    const onChangeMock = jest.fn()
    render(<Checkbox ischecked={false} onChange={onChangeMock} />)

    const checkbox = screen.getByRole('checkbox')

    fireEvent.click(checkbox)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })
})
