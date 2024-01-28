import { render } from '@testing-library/react'

import { Progress } from '../../components/Progress'

describe('Progress component', () => {
  it('renders component correctly', () => {
    render(<Progress completed={5} progress={3} />)
  })
})
