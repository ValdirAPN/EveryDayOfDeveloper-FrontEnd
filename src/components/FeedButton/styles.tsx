import styled, { css } from 'styled-components'

export const Button = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    padding: 1.7rem 3.2rem;
    border-radius: 5rem;
    cursor: pointer;
    transition: ease-in-out 0.4s;

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.darkGray};
    }
  `}
`
