import React, { useContext } from "react";

import CheckboxItem from "../CheckboxItem";
import Dropdown from "../MySelect";
import Modal from ".";
import ViewModalContext from "../../store/view-modal";

import EditBtn from "../../containers/EditBtn";
import BoardContext from "../../store/board";
import styles from "../../styles/components/TaskModalView.module.scss";

const TaskModalView = () => {
  const { onViewClose } = useContext(ViewModalContext);
  const { updateTaskStatus, selectedTask, columns } = useContext(BoardContext);

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onViewClose}>
      <h1 className={styles["modal-wrapper__heading"]}>
        {selectedTask.task.title}
        <EditBtn type="task" />
      </h1>
      <p className={styles["modal-wrapper__body"]}>
        {selectedTask.task.description}
      </p>
      <div>
        <h4 className={styles["modal-wrapper__subtasks"]}>
          Subtasks ({selectedTask.completedSubtasks} of{" "}
          {selectedTask.task.subtasks.length})
        </h4>
        {selectedTask.task.subtasks.map((subtask, idx) => {
          return <CheckboxItem key={idx} text={subtask.title} />;
        })}
      </div>
      <div>
        <h4 className={styles["modal-wrapper__status"]}>Current Status</h4>
        <Dropdown
          onChange={updateTaskStatus}
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
