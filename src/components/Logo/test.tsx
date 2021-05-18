import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from './index'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise

    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Everyday of Developer/).parentElement
    ).toHaveStyle({ color: '#FFFFFF' })
  })

  it('should render a darkGray label when color is passed', () => {
    renderWithTheme(<Logo color="darkGray" />)
    expect(
      screen.getByLabelText(/Everyday of Developer/).parentElement
    ).toHaveStyle({ color: '#2F3034' })
  })
})
