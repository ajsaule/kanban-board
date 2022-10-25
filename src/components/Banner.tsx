import React, { useContext } from "react";

import Button from "./Button";

import AddModalContext from "../store/add-modal";
import BoardContext from "../store/board";

import styles from "../styles/components/Banner.module.scss";

const Banner = () => {
  const { toggleAddTaskModal } = useContext(AddModalContext);
  const { setSelectedColumn, selectedBoard } = useContext(BoardContext);

  return (
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
        <Button variant="dots" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Banner;
