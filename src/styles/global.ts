import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/sora-v3-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/sora-v3-latin-700.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --purple: #6C63FF;
    --pink: #E961FF;
    --white: #FFFFFF;
    --gray: #9A9A9A;
    --dark-gray: #3D3D3D;
    --very-dark-gray: #2F3034;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      overflow-x: hidden;
    }

    ul,
    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.white};
    }

    h1,
    h2,
    h3 {
      margin-bottom: 1rem;
    }
  `}

`

export default GlobalStyles
