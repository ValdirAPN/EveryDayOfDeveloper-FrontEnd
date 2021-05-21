import styled, { css } from 'styled-components'

import { TechCardProps } from '.'

export const Container = styled.div<TechCardProps>`
  ${({ theme, color }) => css`
    background-color: ${theme.colors[color!]};

    padding: 2rem;
    margin-top: 1rem;

    p {
      width: min(50rem, 80vw);
    }
  `}
`
