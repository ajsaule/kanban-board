import React, { useContext, useState } from "react";
import Dropdown from "../MySelect";
import Modal from ".";
import TextBox from "../TextBox";
import Button from "../Button";
import AddModalContext from "../../store/add-modal";

import styles from "../../styles/components/TaskModalAdd.module.scss";
import BoardContext from "../../store/board";
import useInput from "../../hooks/use-input";
import { Subtask, Task } from "../../models";

const TaskModalAdd = () => {
  // const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState<Subtask[] | []>([new Subtask()]);
  const [status, setStatus] = useState("");
  const { addTask, selectedColumn, columns } = useContext(BoardContext);
  const { onAddClose } = useContext(AddModalContext);

  const {
    value: title,
    error: titleError,
    isValid: isTitleValid,
    changeHandler: titleChangeHandler,
    blurHandler: titleBlurHandler,
  } = useInput({
    required: "Can't be empty",
  });

  const {
    value: description,
    error: descriptionError,
    isValid: isDescriptionValid,
    changeHandler: descriptionChangeHandler,
    blurHandler: descriptionBlurHandler,
  } = useInput({
    required: "Can't be empty",
  });

  const saveTask = () => {
    // check if subtasks title is empty, if empty, remove it
    const validSubtasks = subtasks.filter(
      (subtask) => subtask.title.trim().length > 0
    );

    addTask(new Task(title, description, selectedColumn.column, validSubtasks));
  };

  const handleStatusChange = (column: string) => setStatus(column);

  const addSubtask = () => {
    setSubtasks((tasks) => [...tasks, new Subtask()]);
  };

  const removeSubtask = (id: string) => {
    setSubtasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  const submitHandler = () => {
    if (!isTitleValid || !isDescriptionValid) {
      titleBlurHandler();
      descriptionBlurHandler();
      return;
    }

    saveTask();
    onAddClose();
  };

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onAddClose}>
      <h1 className="h-l">
        Add New Task
        {selectedColumn.column
          ? " to " + selectedColumn.column + " column"
          : ""}
      </h1>

      <div>
        <h4>Title</h4>
        <TextBox
          value={title}
          variant="title"
          error={titleError}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
      </div>

      <div>
        <h4>Description</h4>
        <TextBox
          variant="description"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
          value={description}
          onChange={descriptionChangeHandler}
          onBlur={descriptionBlurHandler}
          error={descriptionError}
        />
      </div>

      <div className={styles["modal-wrapper__subtasks"]}>
        <h4>Subtasks</h4>
        {subtasks.map((subtask) => (
          <TextBox
            key={subtask.id}
            value={subtask.title}
            placeholder="e.g. Make coffee"
            variant="subtask"
            onChange={(e) => {
              setSubtasks((tasks) => {
                const task = tasks.find((t) => t.id === subtask.id);
                if (task) task.title = e.target.value;
                return [...tasks];
              });
            }}
            removeSubtask={() => removeSubtask(subtask.id)}
          />
        ))}

        <div className={styles["modal-wrapper__button-wrapper"]}>
          <Button
            color="secondary"
            className={styles["secondary-button"]}
            fullWidth
            onClick={addSubtask}
          >
            <span>+ Add New Subtask</span>
          </Button>
        </div>
      </div>

      {!selectedColumn.colAddButton && (
        <div>
          <h4 className={styles["modal-wrapper__status"]}>Status</h4>
          <Dropdown
            onChange={handleStatusChange}
            defaultValue={selectedColumn.column}
            options={columns?.map((column) => {
              return { value: column.name.toLowerCase(), label: column.name };
            })}
          />
        </div>
      )}
      <Button onClick={submitHandler}>
        <span>Save Changes</span>
      </Button>
    </Modal>
  );
};

export default TaskModalAdd;
