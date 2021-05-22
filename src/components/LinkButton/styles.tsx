import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

export const Container = styled.button<ButtonProps>`
  ${({ theme, color }) => css`
    width: 28rem;
    height: 6.4rem;

    border-radius: 5px;
    background-color: ${theme.colors[color!]};
    color: ${theme.colors.white};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};

    margin-top: 2rem;

    transition: ease 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  `}
`
