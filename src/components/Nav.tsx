import React from "react";
import LogoDark from "./svgs/LogoDark";
import LogoLight from "./svgs/LogoLight";
import DarkThemeIcon from "./svgs/DarkThemeIcon";
import LightThemeIcon from "./svgs/LightThemeIcon";
import IconBoard from "./svgs/IconBoard";

import styles from "../styles/components/Nav.module.scss";
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
          <LogoLight className={styles["logo"]} />
        ) : (
          <LogoDark className={styles["logo"]} />
        )}
        <div className={styles["menu"]}>
          <h4>All Boards (3)</h4>
        </div>
        <ul className={styles["items"]}>
          <li>
            <IconBoard className={styles["board-icon"]} />
            Platform Launch
          </li>
          <li>
            <IconBoard className={styles["board-icon"]} />
            Marketing Plan
          </li>
          <li>
            <IconBoard className={styles["board-icon"]} />
            Roadmap
          </li>
          <li>
            <IconBoard className={styles["board-icon"]} />+ Create New Board
          </li>
        </ul>
      </div>
      <div className={styles["toggle-menu"]}>
        <div className={styles["page-theme-container"]}>
          <LightThemeIcon onClick={() => toggleTheme("light")} />
          <label className={styles["switch"]}>
            <input
              type="checkbox"
              checked={isDarkTheme}
              onClick={() => toggleTheme("")}
            />
            <span className={`${styles["slider"]} ${styles["round"]}`}></span>
          </label>
          <DarkThemeIcon onClick={() => toggleTheme("dark")} />
        </div>
        {/*         <h4 onClick={() => setIsSidebarHidden((prev) => !prev)}>
          <HideNavbarIcon className={styles["hide-navbar-icon"]} />
          Hide Sidebar
        </h4> */}
      </div>
    </aside>
  );
};

export default Nav;
