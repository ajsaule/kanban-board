import React, { useContext } from "react";

import CheckboxItem from "./CheckboxItem";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import ViewModalContext from "../store/view-modal";

import styles from "../styles/components/TaskModalView.module.scss";
import Button from "./Button";
import BoardContext from "../store/board";

const TaskModalView = () => {
  const { onViewClose } = useContext(ViewModalContext);
  const { updateTask, selectedTask, columns } = useContext(BoardContext);

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onViewClose}>
      <h1 className={styles["modal-wrapper__heading"]}>
        {selectedTask?.task.title}
        <Button variant="dots" />
      </h1>
      <p className={styles["modal-wrapper__body"]}>
        {selectedTask?.task.description}
      </p>
      <div>
        <h4 className={styles["modal-wrapper__subtasks"]}>
          Subtasks ({selectedTask.completedSubtasks} of{" "}
          {selectedTask.task.subtasks.length})
        </h4>
        {selectedTask?.task.subtasks.map((subtask, idx) => {
          return <CheckboxItem key={idx} text={subtask.title} />;
        })}
      </div>
      <div>
        <h4 className={styles["modal-wrapper__status"]}>Current Status</h4>
        <Dropdown
          onChange={updateTask}
          defaultValue={selectedTask.task.status}
          options={columns.map((column) => {
            return { value: column.name.toLowerCase(), label: column.name };
          })}
        />
      </div>
    </Modal>
  );
};

export default TaskModalView;
