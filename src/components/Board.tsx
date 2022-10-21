import React from "react";

import Banner from "./Banner";
import Button from "./Button";
import ShowNavbarIcon from "./svgs/ShowNavbarIcon";

import styles from "../styles/components/Board.module.scss";

const Board = ({
  isSidebarHidden,
  setIsSidebarHidden,
}: {
  isSidebarHidden: boolean;
  setIsSidebarHidden: (prev: boolean) => void;
}) => {

  const showSidebarTab = () => isSidebarHidden && (
    <div
      onClick={() => setIsSidebarHidden((prev) => !prev)}
      className={styles["hide-navbar-tab"]}
    >
      <ShowNavbarIcon />
    </div>
  )

  const classes = `${styles["board"]} ${styles["board__no-columns"]}`

  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <div className={styles["board"]}>
      <div className={styles["no-columns-message"]}>
        <h4>This board is empty. Create a new project to get started.</h4>
        <Button color="primary">
          <span>+ Add New Column</span>
        </Button>
      </div>
      {showSidebarTab()}
      </div>
    </div>
  );
};

export default Board;
