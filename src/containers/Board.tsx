import React, { useContext } from "react";

import Button from "../components/Button";
import BoardContext from "../store/board";

import AddModalContext from "../store/add-modal";
import styles from "../styles/components/Board.module.scss";
import SidebarContext from "../store/sidebar";
import Column from "../components/Column";
import { getId } from "../utils/helper";

const Board = () => {
  const { isHidden: isSidebarHidden } = useContext(SidebarContext);
  const { toggleAddColModal } = useContext(AddModalContext);
  const { columns, selectedBoard, selectedColumn } = useContext(BoardContext);

  const hasColumns = columns?.length > 0;
  // const classes = `${styles["board"]} ${styles["board__no-columns"]}`;

  const dotColors = [
    "#49C4E5",
    "#8471F2",
    "#67E2AE",
    "#49C4E5",
    "#8471F2",
    "#67E2AE",
    "#49C4E5",
    "#8471F2",
    "#67E2AE",
  ];
  
  return (
    <div
      className={`${styles["board__container"]} ${
        isSidebarHidden ? styles["full-width"] : ""
      }`}
    >
      <div className={hasColumns ? styles["board"] : styles["no-columns"]}>
        {columns?.map((column, idx) => {
          return <Column key={getId()} column={column} idx={idx} />;
        })}

        {hasColumns && (
          <div className={styles["new-column"]} onClick={toggleAddColModal}>
            <span>+ New Column</span>
          </div>
        )}

        {selectedBoard.board && !hasColumns && (
          <div className={styles["no-columns-message"]}>
            <h4>This board is empty. Create a new column to get started.</h4>
            <Button
              color="primary"
              className={styles["button"]}
              onClick={toggleAddColModal}
            >
              + Add New Column
            </Button>
          </div>
        )}

        {!selectedBoard.board && (
          <h4>No Selected Board, Create a new Board?</h4>
        )}
      </div>
    </div>
  );
};

export default Board;
