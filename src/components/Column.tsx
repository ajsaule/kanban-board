import React, { useContext } from "react";
import { Column as ColumnType } from "../models";
import AddModalContext from "../store/add-modal";
import BoardContext from "../store/board";
import styles from "../styles/components/Column.module.scss";
import { getId } from "../utils/helper";
import Task from "./Task";

type Props = {
  column: ColumnType;
  idx: number;
};

const Column = ({ column, idx }: Props) => {
  const { toggleAddTaskModal } = useContext(AddModalContext);
  const { setSelectedColumn } = useContext(BoardContext);

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
  console.log(column.tasks);

  return (
    <div className={styles["column"]}>
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
          <Task
            task={task}
            key={getId()}
            index={index}
            idx={idx}
            colName={column.name}
            completedSubtasks={completedSubtasks}
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
