import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white logo by default', () => {
    // render component
    renderWithTheme(<Logo />)

    // select element and analysis
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
