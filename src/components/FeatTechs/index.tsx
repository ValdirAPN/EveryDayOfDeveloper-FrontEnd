import TechCard from '../TechCard'
import * as S from './styles'

const FeatTechs = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <div className="text-area">
          <h2>Top 3 Techs</h2>
          <p>
            Não perca tempo! Conheça as tecnologias mais usadas e faladas aqui
            no blog. Clique em um card e venha aprender com a nossa comunidade!
          </p>
        </div>
        <div>
          <TechCard
            color={'secondary'}
            title={'JavaScript'}
            description={
              'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Integer risus libero, luctus a erat vitae, sodales fermentum.'
            }
          />
          <TechCard
            title={'NodeJS'}
            description={
              'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Integer risus libero, luctus a erat vitae, sodales fermentum.'
            }
          />
          <TechCard
            title={'ReactJS'}
            description={
              'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Integer risus libero, luctus a erat vitae, sodales fermentum.'
            }
          />
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default FeatTechs
