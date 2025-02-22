import { createTheme } from "@mui/material/styles";

/**
 * 最大横幅
 */
export const MaxWidth = 992;

/**
 * ここを変えるとテーマとか変えれます
 */
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: MaxWidth,
      lg: 1025,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#4FADB7",
      light: "#72BDC5",
      dark: "#377980",
      contrastText: "#F3F3F3",
    },
    secondary: {
      main: "#E87B43",
      dark: "#A2562E",
      light: "#EC9568",
      contrastText: "#F3F3F3",
    },
    error: {
      main: "#D32F2F",
      dark: "#C62828",
      light: "#EF5350",
      contrastText: "#F3F3F3",
    },
    background: {
      paper: "#FFFFF",
      default: "#FFFFFB",
      // default: "#F3F4FF",
    },
    text: {
      primary: "#262323",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.4);",
    },
  },
  typography: {
    caption: {
      color: "#00000",
      opacity: "50%",
      // fontSize: "14px",
      fontSize: "0.875em",
    },
    body2: {
      color: "#00000",
      opacity: "70%",
      // fontSize: "16px",
      fontSize: "1em",
    },
    subtitle1: {
      color: "#00000",
      opacity: "90%",
      // fontSize: "24px",
      fontSize: "1.125em",
    },
    subtitle2: {
      color: "#00000",
      opacity: "75%",
      // fontSize: "18px",
      fontSize: "1.125em",
    },
    h6: {
      color: "#00000",
      fontWeight: "bolder",
      opacity: "70%",
      // fontSize: "24px",
      fontSize: "1.5em",
    },
    body1: {
      // fontSize: "22px",
      fontSize: "1.125em",
      // mobil時とそうでない時でかえる
      color: "#494e52",
    },
    h1: {
      fontSize: "1.563em",
      fontWeight: "bold",
      color: "#08080",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4FF",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "& .Mui-selected:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "rgba(0,0,0,0.6)",
          textDecorationColor: "rgba(0,0,0,0.6)",
        },
      },
    },
  },
});

export default theme;
