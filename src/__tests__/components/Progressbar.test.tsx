import { render } from '@testing-library/react'

import { ProgressBar } from '../../components/ProgressBar'

describe('ProgressBar component', () => {
  it('renders ProgressBar component correctly', () => {
    const percentage = 50
    render(<ProgressBar percentage={percentage} />)
  })
})
