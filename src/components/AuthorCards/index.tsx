import AuthorCard from '../AuthorCard'
import * as S from './styles'

const AuthorCards = () => {
  return (
    <S.Wrapper>
      <AuthorCard
        imgSource="https://github.com/ValdirAPN.png"
        name="Valdir Aires"
      />
      <AuthorCard
        imgSource="https://github.com/WelissonLuca.png"
        name="Welisson Luca"
      />
      <AuthorCard
        imgSource="https://github.com/WilliamJesusDev.png"
        name="William Jesus"
      />
    </S.Wrapper>
  )
}

export default AuthorCards
