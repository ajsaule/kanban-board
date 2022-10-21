import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../store/theme";
import { EditModalProvider } from "../store/edit-modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <EditModalProvider>
        <Component {...pageProps} />
      </EditModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
