import { useState } from "react";

import Nav from "./components/Nav";
import Board from "./components/Board";

import "./App.scss";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleTheme = (theme: string): void => {
    if (theme === "dark") {
      setIsDarkTheme(true);
    } else if (theme === "light") {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme((prev) => !prev);
    }
  };

  return (
    <div className={`board-container ${isDarkTheme ? "dark" : "light"}`}>
      <Nav
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        isSidebarHidden={isSidebarHidden}
        setIsSidebarHidden={setIsSidebarHidden}
      />
      <Board
        isSidebarHidden={isSidebarHidden}
        setIsSidebarHidden={setIsSidebarHidden}
      />
    </div>
  );
};

export default App;