import FeedButton from '../FeedButton'
import Logo from '../Logo'

import * as S from './styles'

export type NavbarProps = {
  color?: 'darkGray' | 'secondary'
}

const Navbar = ({ color = 'darkGray' }: NavbarProps) => {
  return (
    <S.Wrapper color={color}>
      <S.Container>
        <Logo />
        <ul>
          <li>
            <a href="#">Vagas para devs</a>
          </li>
          <li>
            <a href="#">Materiais gratuitos</a>
          </li>
        </ul>
        <FeedButton />
      </S.Container>
    </S.Wrapper>
  )
}

export default Navbar
