import { createGlobalStyle } from 'styled-components'

import theme from 'src/application/common/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    height: 100%;
    width: 100%;
    
    background-color: ${theme.colors.blue100};
    font-size: 40px;
  }
`
export default GlobalStyle
