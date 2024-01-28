import { render, screen } from '@testing-library/react'

import { Stack } from '../../components/Stack'

describe('Stack component', () => {
  it('renders children correctly', () => {
    render(
      <Stack
        spacing={8}
        direction='column'
        justifycontent='center'
        alignitems='flex-start'
      >
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>
    )

    expect(screen.getByText('Child 1')).toBeTruthy()
    expect(screen.getByText('Child 2')).toBeTruthy()
    expect(screen.getByText('Child 3')).toBeTruthy()
  })
})
