import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Button from '.'

describe('<Button />', () => {
  it('should render medium button', () => {
    renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })
  it('should render small button', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
  it('should render large button', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })
})

// const { container } = render(<Button />)

// expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

// expect(container.firstChild).toMatchSnapshot()
