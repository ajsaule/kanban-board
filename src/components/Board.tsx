import React from "react";
import Banner from "./Banner";
import ShowNavbarIcon from "./svgs/ShowNavbarIcon";
import styles from "../styles/components/Board.module.scss";

const Board = ({
  isSidebarHidden,
  setIsSidebarHidden,
}: {
  isSidebarHidden: boolean;
  setIsSidebarHidden: (prev: boolean) => void;
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <div className={styles["board"]}>
        {isSidebarHidden && (
          <div
            onClick={() => setIsSidebarHidden((prev) => !prev)}
            className={styles["hide-navbar-tab"]}
          >
            <ShowNavbarIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
