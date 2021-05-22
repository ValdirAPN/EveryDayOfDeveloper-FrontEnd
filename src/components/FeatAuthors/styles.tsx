import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `}
`

export const Container = styled.div`
  width: min(1366px, 92vw);
  margin: 0 auto;
  padding: 4rem 0;

  text-align: center;

  p {
    max-width: 40rem;
    margin: 0 auto;
  }
`
