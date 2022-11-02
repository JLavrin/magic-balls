import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@mui/material'

import theme from 'src/application/common/theme'
import GlobalStyle from 'src/application/common/GlobalStyle'

const AppProvider: FunctionComponent<PropsWithChildren> = ({ children }) => (
 <StyledThemeProvider theme={theme}>
   <MaterialThemeProvider theme={theme}>
    {children}
   </MaterialThemeProvider>
 </StyledThemeProvider>
)

export default AppProvider
