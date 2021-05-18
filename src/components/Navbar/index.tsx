import FeedButton from '../FeedButton'
import Logo from '../Logo'
import { Menu } from 'react-feather'

import * as S from './styles'
import { useState } from 'react'

export type NavbarProps = {
  color?: 'darkGray' | 'secondary'
}

const Navbar = ({ color = 'darkGray' }: NavbarProps) => {
  const [active, setActive] = useState(false)

  return (
    <S.Wrapper color={color}>
      <S.Container>
        <Logo />
        <ul className={active ? 'active' : ''}>
          <li>
            <a href="#">Vagas para devs</a>
          </li>
          <li>
            <a href="#">Materiais gratuitos</a>
          </li>
        </ul>
        <div>
          <FeedButton />
          <Menu
            className="menu"
            color="white"
            onClick={() => setActive(!active)}
          />
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default Navbar
