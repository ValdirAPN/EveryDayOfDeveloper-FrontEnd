import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --purple: #6C63FF;
    --pink: #E961FF;
    --white: #FFFFFF;
    --gray: #9A9A9A;
    --dark-gray: #3D3D3D;
    --very-dark-gray: #2F3034;
  }

  html {
    font-size: 62.5%
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
