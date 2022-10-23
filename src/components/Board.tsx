import React, { useContext } from "react";

import Banner from "./Banner";
import Button from "./Button";
import ShowNavbarIcon from "./svgs/ShowNavbarIcon";
import BoardContext from "../store/board";

import styles from "../styles/components/Board.module.scss";
import ViewModalContext from "../store/view-modal";

const Board = ({
  isSidebarHidden,
  setIsSidebarHidden,
}: {
  isSidebarHidden: boolean;
  setIsSidebarHidden: (prev: boolean) => void;
}) => {
  const { toggleViewModal } = useContext(ViewModalContext);
  const { hasColumns, columns } = useContext(BoardContext);

  const classes = `${styles["board"]} ${styles["board__no-columns"]}`;

  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <div className={hasColumns ? styles["board"] : styles["no-columns"]}>
        {columns?.map((column, idx) => {
          return (
            <div key={idx} className={styles["column"]}>
              <span>{column.name}</span>
              {column.tasks?.map((task, index) => {
                const subtaskCompletion = task.subtasks.map(
                  (subtask) => subtask.isCompleted
                );
                let sum = 0;
                subtaskCompletion.forEach((completion) =>
                  completion ? sum++ : null
                );

                return (
                  <div
                    key={index}
                    className={styles["task"]}
                    onClick={() => toggleViewModal()}
                  >
                    <h4>{task.title}</h4>
                    <h4>
                      {sum} of {task.subtasks.length}
                    </h4>
                  </div>
                );
              })}
            </div>
          );
        })}

        {hasColumns && (
          <div className={styles["new-column"]}>
            <h1>+ New Column</h1>
          </div>
        )}

        {!hasColumns && (
          <div className={styles["no-columns-message"]}>
            <h4>This board is empty. Create a new column to get started.</h4>
            <Button color="primary" className={styles["button"]}>
              <span>+ Add New Column</span>
            </Button>
          </div>
        )}

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
