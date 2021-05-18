import styled, { css } from 'styled-components'

import { NavbarProps } from '.'

export const Wrapper = styled.div<NavbarProps>`
  ${({ theme, color }) => css`
    background: ${theme.colors[color!]};
    width: 100vw;
    height: 8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: min(1200px, 90vw);
    height: 100%;
    padding: 0 4rem;

    ul {
      height: 100%;

      li {
        display: inline-block;
        height: 100%;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;

          padding: 0 3rem;

          font-weight: bold;

          transition: ease 0.4s;

          &:hover {
            color: ${theme.colors.primary};
          }
        }
      }
    }
  `}
`
