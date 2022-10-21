import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../store/theme";
import { EditModalProvider } from "../store/edit-modal";
import { BoardProvider } from "../store/board";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <EditModalProvider>
        <BoardProvider>
          <Component {...pageProps} />
        </BoardProvider>
      </EditModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
