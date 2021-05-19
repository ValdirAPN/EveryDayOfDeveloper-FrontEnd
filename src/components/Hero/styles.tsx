import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    color: ${theme.colors.white};

    width: 100vw;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: min(1366px, 92vw);
    margin: 0 auto;

    font-weight: ${theme.font.bold};
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 4rem;

    h1 {
      font-size: 3.6rem;
      width: min(36rem, 90vw);
      span {
        color: ${theme.colors.primary};
      }
    }

    div {
      width: 90vw;
    }

    ${media.greaterThan('medium')`
      flex-direction: row;
      justify-content: space-between;
      text-align: left;

      padding: 0;

      div {
        width: min(70rem, 50vw);
      }
    `}/* ${media.greaterThan('large')`
      h1 {
        font-size: ${theme.font.sizes.xxlarge};
        width: 44rem;
      }
    `} */
  `}
`
