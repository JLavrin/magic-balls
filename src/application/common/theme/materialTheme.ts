import { createTheme } from '@mui/material/styles'
import colors from './colors'

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '2.3rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 400
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 500
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.5
    },
    caption: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: 1.3
    }
  },
  breakpoints: {
    values: {
      xs: 600,
      sm: 1300,
      md: 1500,
      lg: 1700,
      xl: 2000
    }
  },
  palette: {
    mode: 'light',
    primary: {
      light: colors.blue600,
      main: colors.blue600,
      dark: colors.blue600
    },
    secondary: {
      light: colors.yellow400,
      main: colors.yellow600,
      dark: colors.yellow800
    },
    text: {
      primary: colors.gray800,
      secondary: colors.gray600
    }

  },
  spacing: 8,
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          contained: {
            boxShadow: 'none',
            backgroundColor: colors.yellow600,
            '&:hover': {
              backgroundColor: colors.yellow400
            }
          }
        },
        containedPrimary: {
          boxShadow: 'none',
          backgroundColor: colors.yellow600,
          '&:hover': {
            backgroundColor: colors.yellow400
          }
        },
        containedSecondary: {
          boxShadow: 'none',
          backgroundColor: colors.gray400,
          '&:hover': {
            backgroundColor: colors.gray500
          }
        },
        containedInherit: {
          boxShadow: 'none',
          backgroundColor: colors.gray400,
          '&:hover': {
            backgroundColor: colors.gray500
          },
          borderRadius: '0'
        }

      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0
        }
      }
    }
  }
})

export default theme
