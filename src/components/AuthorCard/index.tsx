import { mdiLanguageJavascript, mdiNodejs, mdiReact } from '@mdi/js'
import Icon from '@mdi/react'
import theme from '../../styles/theme'
import Button from '../LinkButton'

import * as S from './styles'

type AuthorCardProps = {
  imgSource: string
  name: string
}

const AuthorCard = ({ imgSource, name }: AuthorCardProps) => {
  return (
    <S.Wrapper>
      <span>Nível 40</span>
      <img src={imgSource} alt="" />
      <p className="name">{name}</p>
      <p className="position">
        Software Developer | Everyday
        <br /> Campinas, SP, Brasil
      </p>
      <div className="techs">
        <Icon
          path={mdiLanguageJavascript}
          color={theme.colors.primary}
          size={2}
        />
        <Icon path={mdiNodejs} color={theme.colors.primary} size={2} />
        <Icon path={mdiReact} color={theme.colors.primary} size={2} />
      </div>
      <Button color="secondary">Visitar perfil</Button>
    </S.Wrapper>
  )
}

export default AuthorCard
