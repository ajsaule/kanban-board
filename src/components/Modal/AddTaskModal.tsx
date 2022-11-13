// @ts-nocheck
// todo: @andrej fix TS errors in this file
import React, { useContext, useState } from "react";
import Dropdown from "../MySelect";
import Modal from ".";
import TextBox from "../TextBox";
import Button from "../Button";
import AddModalContext from "../../store/add-modal";

import BoardContext from "../../store/board";
import useInput from "../../hooks/use-input";
import { getId } from "../../utils/helper";

import styles from "../../styles/components/TaskModalAdd.module.scss";

class Subtask {
  public readonly id: string = getId();
  public title: string = "";
  public isCompleted: boolean = false;

  setTitle(title: string) {
    this.title = title;
  }

  complete() {
    this.isCompleted = true;
  }

  inComplete() {
    this.isCompleted = false;
  }
}

const TaskModalAdd = () => {
  const [subtasks, setSubtasks] = useState<Subtask[]>([new Subtask()]);
  const [status, setStatus] = useState("");
  const { addTask, selectedColumn, columns } = useContext(BoardContext);
  const { onAddClose } = useContext(AddModalContext);

  const {
    value: title,
    error: titleError,
    isValid: isTitleValid,
    changeHandler: titleChangeHandler,
    blurHandler: titleBlurHandler,
    onSubmit: titleSubmit,
  } = useInput({
    required: "Can't be empty",
  });

  const {
    value: description,
    error: descriptionError,
    isValid: isDescriptionValid,
    changeHandler: descriptionChangeHandler,
    blurHandler: descriptionBlurHandler,
    onSubmit: descriptionSubmit,
  } = useInput({
    required: "Can't be empty",
  });

  const isFormValid = isTitleValid && isDescriptionValid;

  const handleStatusChange = (column) => setStatus(column);

  const addSubtask = () => {
    setSubtasks((tasks) => [...tasks, new Subtask()]);
  };

  const removeSubtask = (id) => {
    setSubtasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  const saveTask = () => {
    // check if subtasks title is empty, if empty, remove it
    const validSubtasks = subtasks.filter(
      (subtask) => subtask.title.trim().length > 0
    );
    addTask({
      description: description,
      status: selectedColumn.colAddButton ? selectedColumn.column : status,
      subtasks: validSubtasks,
      title: title,
    });
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
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
          error={titleError}
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
            id={subtask.id}
            value={subtask.title}
            placeholder="e.g. Make coffee"
            variant="subtask"
            onChange={(e) => {
              setSubtasks((tasks) => {
                const task = tasks.find((t) => t.id === subtask.id);
                task.setTitle(e.target.value);
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
      <Button
        onClick={() => {
          titleSubmit();
          descriptionSubmit();
          isFormValid && saveTask();
          isFormValid && onAddClose();
        }}
      >
        <span>Save Changes</span>
      </Button>
    </Modal>
  );
};

export default TaskModalAdd;
