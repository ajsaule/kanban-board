import React, { useContext } from "react";

import CheckboxItem from "./CheckboxItem";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import ViewModalContext from "../store/view-modal";

import styles from "../styles/components/TaskModalView.module.scss";
import Button from "./Button";

const TaskModalView = () => {
  const { onViewClose, selectedTask } = useContext(ViewModalContext);

  const options: OptionType[] = [
    { value: "todo", label: "Todo" },
    { value: "doing", label: "Doing" },
    { value: "done", label: "Done" },
  ];

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
        <Dropdown defaultValue={selectedTask?.task.status} options={options} />
      </div>
    </Modal>
  );
};

export default TaskModalView;
