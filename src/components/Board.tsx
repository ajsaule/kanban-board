import React, { useContext, useEffect } from "react";

import Banner from "./Banner";
import Button from "./Button";
import ShowNavbarIcon from "./svgs/ShowNavbarIcon";
import BoardContext from "../store/board";

import ViewModalContext from "../store/view-modal";
import AddModalContext from "../store/add-modal";
import styles from "../styles/components/Board.module.scss";

const Board = ({
  isSidebarHidden,
  setIsSidebarHidden,
}: {
  isSidebarHidden: boolean;
  setIsSidebarHidden: (prev: boolean) => void;
}) => {
  const { toggleAddColModal, toggleAddTaskModal } = useContext(AddModalContext);
  const { toggleViewModal } = useContext(ViewModalContext);
  const {
    hasColumns,
    columns,
    selectedBoard,
    selectedColumn,
    setSelectedTask,
    setSelectedColumn,
  } = useContext(BoardContext);

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

  console.log(selectedColumn);

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
                        idx: index,
                      });
                      setSelectedColumn({
                        column: column.name,
                        idx: idx,
                        colAddButton: false,
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

              <div
                className={styles["new-task"]}
                onClick={() => {
                  setSelectedColumn({
                    column: column.name,
                    idx: idx,
                    colAddButton: true,
                  });
                  toggleAddTaskModal();
                }}
              >
                <span>+ New Task</span>
              </div>
            </div>
          );
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
              <span>+ Add New Column</span>
            </Button>
          </div>
        )}

        {!selectedBoard.board && (
          <h4>No Selected Board, Create a new Board?</h4>
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
