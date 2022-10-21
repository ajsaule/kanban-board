import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../store/theme";
import { EditModalProvider } from "../store/edit-modal";
import { AddModalProvider } from "../store/add-modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <EditModalProvider>
        <AddModalProvider>
          <Component {...pageProps} />
        </AddModalProvider>
      </EditModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
