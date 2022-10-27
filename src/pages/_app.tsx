import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../store/theme";
import { ViewModalProvider } from "../store/view-modal";
import { AddModalProvider } from "../store/add-modal";
import { BoardProvider } from "../store/board";
import { SidebarProvider } from "../store/sidebar";
import { DeleteModalProvider } from "../store/delete-modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ViewModalProvider>
        <AddModalProvider>
          <DeleteModalProvider>
            <BoardProvider>
              <SidebarProvider>
                <Component {...pageProps} />
              </SidebarProvider>
            </BoardProvider>
          </DeleteModalProvider>
        </AddModalProvider>
      </ViewModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
