import AuthorCards from '../AuthorCards'
import Button from '../LinkButton'

import * as S from './styles'

const FeatAuthors = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2>Top autores do mês!</h2>
        <p>
          Nesse ranking estão nossos principais autores desse mês! Eles são os
          que mais publicam e ajudam a comunidade!
        </p>
        <AuthorCards />
        <p>Você também pode se tornar um!</p>
        <h2>
          Crie sua conta e comece a <br /> ajudar a comunidade
        </h2>

        <Button>Cadastrar-se</Button>
      </S.Container>
    </S.Wrapper>
  )
}

export default FeatAuthors
