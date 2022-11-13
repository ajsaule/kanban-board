import React, { DragEvent, useContext } from "react";
import { Column as ColumnType } from "../models";
import AddModalContext from "../store/add-modal";
import BoardContext from "../store/board";
import { getId } from "../utils/helper";
import Task from "./Task";
import styles from "../styles/components/Column.module.scss";

type Props = {
  column: ColumnType;
  idx: number;
};

const Column = ({ column, idx }: Props) => {
  const { toggleAddTaskModal } = useContext(AddModalContext);
  const { setSelectedColumn, moveTask } = useContext(BoardContext);

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

  const styleOnDrop = (el: HTMLElement, action: "add" | "remove") => {
    const colEl = el.closest(".column") as HTMLDivElement;
    action === "add"
      ? colEl.classList.add(styles["draggable"])
      : colEl.classList.remove(styles["draggable"]);
  };

  const dragOverHandler = (e: DragEvent) => {
    e.preventDefault();

    styleOnDrop(e.target as HTMLDivElement, "add");
  };

  const dragLeaveHandler = (e: DragEvent) => {
    styleOnDrop(e.target as HTMLDivElement, "remove");
  };

  const dropHandler = (e: DragEvent) => {
    styleOnDrop(e.target as HTMLDivElement, "remove");

    const res = e.dataTransfer.getData("text/plain");
    const { colIndex, taskId } = JSON.parse(res);
    moveTask(taskId, colIndex, idx);
  };

  return (
    <div
      className={`${styles["column"]} column`}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
    >
      <span className={styles["column__heading"]}>
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
          <Task
            task={task}
            key={getId()}
            index={index}
            idx={idx}
            colName={column.name}
            completedSubtasks={completedSubtasks}
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
          />
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
};

export default Column;
