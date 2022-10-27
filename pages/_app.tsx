import "../styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import globalTheme from "@/styles/GlobalTheme";
import Header from "src/Fixed/Header";
import Footer from "src/Fixed/Footer";
import Cursor from "src/Handler/Cursor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <Header />
        {/* <Cursor /> */}
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
