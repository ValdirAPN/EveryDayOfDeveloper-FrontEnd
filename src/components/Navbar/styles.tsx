import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
    position: relative;

    min-width: min(1440px, 92vw);
    height: 100%;

    ul {
      background: ${theme.colors.primary};
      width: 92vw;
      position: absolute;
      top: 8rem;

      display: none;

      &.active {
        display: unset;
      }

      li {
        a {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;

          font-weight: bold;

          transition: ease 0.4s;

          &:hover {
            background: ${theme.colors.secondary};
          }
        }
      }
    }

    div {
      display: flex;
      align-items: center;

      .menu {
        cursor: pointer;
        margin-left: 2rem;
      }
    }

    ${media.greaterThan('medium')`
      ul {
        width: unset;
        height: 100%;
        background: none;
        position: unset;
        display: unset;

        li {
          display: inline-block;
          height: 100%;

          a {
            height: 100%;
            padding: 0 3rem;
            &:hover {
              color: ${theme.colors.primary};
              background: none;
            }
          }
        }
      }

      .menu {
        display: none;
      }
    `}
  `}
`
