import React from "react";
import LogoDark from "./svgs/LogoDark";
import LogoLight from "./svgs/LogoLight";
import ThemeToggler from "./ThemeToggler";
import HideNavbarIcon from "./svgs/HideNavbarIcon";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Nav from "./Nav";
import styles from "../styles/components/SideBar.module.scss";

const SideBar = ({
  isSidebarHidden,
  setIsSidebarHidden,
}: {
  isSidebarHidden: boolean;
  setIsSidebarHidden: (func: (state: boolean) => boolean) => void;
}) => {
  return (
    <aside
      className={`${styles["side-bar"]} ${isSidebarHidden && styles["hide"]}`}
    >
      {/* {isDarkTheme ? (
        <LogoLight className={styles["logo"]} />
      ) : (
        <LogoDark className={styles["logo"]} />
      )} */}
      <Logo className={styles["side-bar__logo"]}>kanban</Logo>

      <h2 className={`h-s ${styles["side-bar__heading"]}`}>All Boards (3)</h2>

      <Nav />

      <footer className={styles["sidebar__footer"]}>
        <ThemeToggler />

        <NavItem
          className={styles["side-bar__hide-icon"]}
          onClick={() => setIsSidebarHidden((prev) => !prev)}
        >
          <HideNavbarIcon />
          Hide Sidebar
        </NavItem>
      </footer>
    </aside>
  );
};

export default SideBar;
