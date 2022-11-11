import React, { useContext } from "react";
import { Task as TaskType } from "../models";
import BoardContext from "../store/board";
import ViewModalContext from "../store/view-modal";
import styles from "../styles/components/Task.module.scss";

type Props = {
  task: TaskType;
  colName: string;
  index: number;
  completedSubtasks: number;
  idx: number;
};

const Task = ({ task, index, idx, colName, completedSubtasks }: Props) => {
  const { toggleViewModal } = useContext(ViewModalContext);
  const { setSelectedTask, setSelectedColumn } = useContext(BoardContext);

  return (
    <div
      className={styles["task"]}
      onClick={() => {
        setSelectedTask({
          task: task,
          completedSubtasks: completedSubtasks,
          idx: index,
        });
        setSelectedColumn({
          column: colName,
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
};

export default Task;
