import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../store/theme";
import { ToggleModalProvider } from "../store/toggle-modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ToggleModalProvider>
        <Component {...pageProps} />
      </ToggleModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
