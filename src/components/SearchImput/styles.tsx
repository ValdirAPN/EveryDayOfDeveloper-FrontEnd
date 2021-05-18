import styled, { css } from 'styled-components'

export const Search = styled.input`
  ${({ theme }) => css`
    padding: 1.7rem 3.2rem;
    border: 2px solid ${theme.colors.primary};
    border-radius: 5rem;
    margin-left: 2rem;
    background-color: ${theme.colors.darkGray};
    color: ${theme.colors.primary};

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};

    &::placeholder {
      color: ${theme.colors.primary};
    }
  `}
`
