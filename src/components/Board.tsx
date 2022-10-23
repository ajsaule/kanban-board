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
  const { toggleViewModal, setSelectedTask } = useContext(ViewModalContext);
  const { hasColumns, columns } = useContext(BoardContext);

  const classes = `${styles["board"]} ${styles["board__no-columns"]}`;

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
    <div className={styles["board-banner-container"]}>
      <Banner />
      <div className={hasColumns ? styles["board"] : styles["no-columns"]}>
        {columns?.map((column, idx) => {
          return (
            <div key={idx} className={styles["column"]}>
              <span className={styles["column-heading"]}>
                <div
                  style={{ backgroundColor: `${dotColors[idx]}` }}
                  className={styles["dot"]}
                ></div>
                {column.name} ({column.tasks.length})
              </span>

              {column.tasks?.map((task, index) => {
                const subtaskCompletion = task.subtasks.map(
                  (subtask) => subtask.isCompleted
                );
                let completedSubtasks = 0;
                subtaskCompletion.forEach((completion) =>
                  completion ? completedSubtasks++ : null
                );

                return (
                  <div
                    key={index}
                    className={styles["task"]}
                    onClick={() => {
                      setSelectedTask({
                        task: task,
                        completedSubtasks: completedSubtasks,
                      });
                      toggleViewModal();
                    }}
                  >
                    <h4>{task.title}</h4>
                    <h3>
                      {completedSubtasks} of {task.subtasks.length} subtasks
                    </h3>
                  </div>
                );
              })}
            </div>
          );
        })}

        {hasColumns && (
          <div className={styles["new-column"]}>
            <span>+ New Column</span>
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

// todo: connect View modal so that JSON data comes in instead of the hard coded values :D
// ? On click for the task
