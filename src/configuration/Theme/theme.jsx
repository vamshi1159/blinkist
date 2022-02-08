import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: {
      white: "#DFE8F6",
    },
    primary: {
      main: "#22C870",
      // light: "#2CE080",
      // dark: "#20BA68",
    },
    secondary: {
      main: "#DFE8F6",
      dark: "#0365F2",
    },
    info: {
      main: "#DFE8F6",
    },
  },

  typography: {
    allVariants: {
      color: "#03314B",
      fontFamily: "raleway",
      fontWeight: "400",
    },

    h1: {
      fontFamily: "raleway",
      fontSize: "36px",
      lineHeight: "45px",
    },
    subtitle1: {
      fontFamily: "raleway",
      fontSize: "24px",
      color: '#0365F2'
      // lineHeight: "32px",
    },
    subtitle2: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "700",
    },
    body1: {
      fontFamily: 'raleway',
      fontStyle: 'normal',

      fontSize: '16px',
      lineHeight: '24px',
      color: '#353430'
    },
    body2: {
      fontFamily: 'raleway',
      fontSize: "16px",
      lineHeight: "24px",
      fontStyle:'normal',
      color:' #737270',
      fontWeight:' normal',

      letterSpacing:' 0.015em',
      
    },
    caption: {
      fontFamily:'raleway',
      fontWeight:'normal',
      fontSize: "14px",
      lineHeight: "22px",
      fontStyle:'normal',
      color:' #737270',
    },
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,

        // disableElevation: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        allVariants: {
          root: {
            fontFamily: "raleway",
            fontSize: "16px",
            disableRipple: true,
            disableElevation: true,

            textDecoration: "none",
          },
        },
        containedPrimary: {
          textTransform: "none",
          border: "none",
          color: "##2CE080",
          fontFamily: "raleway",
          fontSize: "16px",
          "&:hover": {
            backgroundColor: "#00C263",
          },
        },

        text: {
          fontSize: "16px",
          fontWeight: "600",
          minHeight: "8px",
          fontFamily: "raleway",
          color: "#03314B",
          textTransform: "none",
          borderBottom: "2px solid transparent",
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "inherit",
            borderBottom: "2px solid #00C263",
          },
        },

        outlinedSecondary: {
          border: "none",
          outline: "none",
          textTransform: "none",
          fontFamily: "raleway",
          fontSize: "16px",
          borderRadius:0,
          color: "#0365F2",
          "&:hover": {
            backgroundColor: "#0365F2",
            color: "white",
          },
        },

        outlinedPrimary: {
          textTransform: "none",
          borderColor: "#03314B",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#03314B",
    
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          Width: "100%",
          root: {
            backgroundColor: "#FFFFFF",
            color: "#03314B",
            textTransform: "none",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          disableRipple: true,
          fontColor: "#03314B",
          fontSize: 18,
          fontWeight: 500,
          lineHeight: "20.11px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          boxShadow: "0 0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 0",
          fontColor: "#03314B",

          width: "286px",
          height: "504px",
        },
      },
    },
    


   
  },
});
export default theme;