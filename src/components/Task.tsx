import React, { useContext, DragEvent } from "react";
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
  onDragOver: (e: DragEvent) => void;
  onDragLeave: (e: DragEvent) => void;
};

const Task = ({
  task,
  index,
  idx,
  colName,
  completedSubtasks,
  ...props
}: Props) => {
  const { toggleViewModal } = useContext(ViewModalContext);
  const { setSelectedTask, setSelectedColumn } = useContext(BoardContext);

  const dragStartHandler = (e: DragEvent) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ colIndex: idx, taskId: task.id })
    );

    const el = e.target as HTMLDivElement;
    setTimeout(() => {
      el.classList.add(styles["transparent"]);
    }, 0);
  };

  const dragEndHandler = (e: DragEvent) => {
    const el = e.target as HTMLDivElement;
    el.classList.remove(styles["transparent"]);
  };

  const clickHandler = () => {
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
  };

  return (
    <div
      draggable
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      className={styles["task"]}
      onClick={clickHandler}
      {...props}
    >
      <h4>{task.title}</h4>
      <h3>
        {completedSubtasks} of {task.subtasks.length} subtasks
      </h3>
    </div>
  );
};

export default Task;
