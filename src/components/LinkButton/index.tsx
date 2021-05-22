import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
}

const Button = ({ children, color = 'primary' }: ButtonProps) => {
  return <S.Container color={color}>{children}</S.Container>
}

export default Button
