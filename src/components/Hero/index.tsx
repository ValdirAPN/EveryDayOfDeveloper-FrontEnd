import * as S from './styles'
import Image from 'next/image'

const Hero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>
          Dicas de programação e carreira para <span>Devs</span>
        </h1>
        <div>
          <Image
            src="/img/programmer.png"
            alt="Ilustração em 3d de pessoa usando computador"
            width={1908}
            height={1590}
            layout="responsive"
            className="programmer-img"
          />
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default Hero
