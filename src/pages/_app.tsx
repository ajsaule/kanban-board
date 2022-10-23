import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../store/theme";
import { ViewModalProvider } from "../store/view-modal";
import { AddModalProvider } from "../store/add-modal";
import { BoardProvider } from "../store/board";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ViewModalProvider>
        <AddModalProvider>
          <BoardProvider>
            <Component {...pageProps} />
          </BoardProvider>
        </AddModalProvider>
      </ViewModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
