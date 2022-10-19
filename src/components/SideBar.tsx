import React from "react";
import DarkLogo from "./svgs/DarkLogo";
import LightLogo from "./svgs/LightLogo";
import ThemeToggler from "./ThemeToggler";
import HideNavbarIcon from "./svgs/HideNavbarIcon";
import NavItem from "./SidebarItem";
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
        <LightLogo className={styles["logo"]} />
      ) : (
        <DarkLogo className={styles["logo"]} />
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
