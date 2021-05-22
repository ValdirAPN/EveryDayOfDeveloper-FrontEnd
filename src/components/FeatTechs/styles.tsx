import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    background-color: ${theme.colors.gray};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: min(1366px, 92vw);
    margin: 0 auto;
    padding: 4rem 0;

    color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .text-area {
      text-align: center;

      p {
        width: min(50rem, 80vw);
        margin-bottom: 3rem;
      }
    }

    ${media.greaterThan('large')`
      flex-direction: row;
      .text-area {
        text-align: left;
      }
    `}
  `}
`
