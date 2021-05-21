import * as S from './styles'

export type TechCardProps = {
  color?: 'darkGray' | 'secondary'
  title?: string
  description?: string
}

const TechCard = ({
  color = 'darkGray',
  title = 'Title',
  description = 'Description'
}: TechCardProps) => {
  return (
    <S.Container color={color}>
      <h3>{title}</h3>
      <p>{description}</p>
    </S.Container>
  )
}

export default TechCard
