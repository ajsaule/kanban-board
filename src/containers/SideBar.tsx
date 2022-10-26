import React, { useContext } from "react";
import ThemeToggler from "../components/ThemeToggler";
import HideNavbarIcon from "../components/svgs/HideNavbarIcon";
import NavItem from "../components/SidebarItem";
import Nav from "./Nav";
import SidebarContext from "../store/sidebar";
import styles from "../styles/components/SideBar.module.scss";

const SideBar = ({}) => {
  const { isHidden: isSidebarHidden, hideSidebar } = useContext(SidebarContext);

  return !isSidebarHidden ? (
    <aside className={`${styles["sidebar"]}`}>
      <h2 className={`h-s ${styles["sidebar__heading"]}`}>All Boards (3)</h2>

      <Nav />

      <footer className={styles["sidebar__footer"]}>
        <ThemeToggler />

        <NavItem
          className={styles["sidebar__hide-icon"]}
          onClick={() => hideSidebar()}
        >
          <HideNavbarIcon />
          Hide Sidebar
        </NavItem>
      </footer>
    </aside>
  ) : (
    <></>
  );
};

export default SideBar;
