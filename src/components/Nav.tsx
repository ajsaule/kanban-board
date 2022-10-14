import React from "react";
import LogoDark from "./svgs/LogoDark";
import LogoLight from "./svgs/LogoLight";
import DarkThemeIcon from "./svgs/DarkThemeIcon";
import LightThemeIcon from "./svgs/LightThemeIcon";
import IconBoard from "./svgs/IconBoard";

import "../styles/components/Nav.scss";
import HideNavbarIcon from "./svgs/HideNavbarIcon";

const Nav = ({
  isDarkTheme,
  toggleTheme,
  isSidebarHidden,
  setIsSidebarHidden,
}: {
  isDarkTheme: boolean;
  toggleTheme: (theme: string) => void;
  isSidebarHidden: boolean;
  setIsSidebarHidden: (state: boolean) => void;
}) => {
  return (
    <aside className={isSidebarHidden ? "hide" : ""}>
      <div>
        {isDarkTheme ? (
          <LogoLight className="logo" />
        ) : (
          <LogoDark className="logo" />
        )}
        <div className="menu">
          <h4>All Boards (3)</h4>
        </div>
        <ul className="items">
          <li>
            <IconBoard className="board-icon" />
            Platform Launch
          </li>
          <li>
            <IconBoard className="board-icon" />
            Marketing Plan
          </li>
          <li>
            <IconBoard className="board-icon" />
            Roadmap
          </li>
          <li>
            <IconBoard className="board-icon" />+ Create New Board
          </li>
        </ul>
      </div>
      <div className="toggle-menu">
        <div className="page-theme-container">
          <LightThemeIcon onClick={() => toggleTheme("light")} />
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkTheme}
              onClick={() => toggleTheme("")}
            />
            <span className="slider round"></span>
          </label>
          <DarkThemeIcon onClick={() => toggleTheme("dark")} />
        </div>
        <h4 onClick={() => setIsSidebarHidden((prev) => !prev)}>
          <HideNavbarIcon className="hide-navbar-icon" />
          Hide Sidebar
        </h4>
      </div>
    </aside>
  );
};

export default Nav;
