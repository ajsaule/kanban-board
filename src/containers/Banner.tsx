import React, { useContext } from "react";

import Button from "../components/Button";
import EditBtn from "./EditBtn";

import AddModalContext from "../store/add-modal";
import BoardContext from "../store/board";
import Logo from "../components/Logo";

import styles from "../styles/components/Banner.module.scss";

const Banner = ({ isSidebarHidden }: { isSidebarHidden: boolean }) => {
  const { toggleAddTaskModal } = useContext(AddModalContext);
  const { setSelectedColumn, selectedBoard } = useContext(BoardContext);

  return (
    <header className={styles["banner__container"]}>
      <Logo
        className={`${styles["banner__logo"]} ${
          isSidebarHidden ? styles["border-bottom"] : ""
        }`}
      >
        kanban
      </Logo>
      <div className={styles["banner"]}>
        <h1 className={`h-xl ${styles["banner__heading"]}`}>
          {selectedBoard.board}
        </h1>
        <div className={styles["button-wrapper"]}>
          <Button
            onClick={() => {
              setSelectedColumn({ column: "", idx: -1, colAddButton: false });
              toggleAddTaskModal();
            }}
            size="large"
          >
            + Add New Task
          </Button>
          <EditBtn type="board" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
