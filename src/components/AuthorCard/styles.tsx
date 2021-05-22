import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: min(40rem, 90vw);
    text-align: center;

    padding-bottom: 4rem;

    span {
      display: block;
      background-color: ${theme.colors.primary};
      color: white;

      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};

      padding: 2rem;
    }

    img {
      width: 12rem;
      border-radius: 50%;
      margin: 2.4rem 0 1.4rem 0;
    }

    p.name {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
    }

    p.position {
      color: ${theme.colors.lightGray};
      font-size: ${theme.font.sizes.small};
      margin-bottom: 2rem;
    }
  `}
`
