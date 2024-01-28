import { render } from '@testing-library/react'

import { SelectBox } from './../../components/SelectBox'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
]

describe('SelectBox component', () => {
  it('renders with default value', () => {
    render(<SelectBox options={options} defaultValue='1' />)
  })
})
