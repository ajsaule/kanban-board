// @ts-nocheck
// todo: @andrej fix TS errors in this file
import React, { useCallback, useContext, useEffect, useState } from "react";
import Dropdown from "../MySelect";
import Modal from ".";
import TextBox from "../TextBox";
import Button from "../Button";
import EditModalContext from "../../store/edit-modal";

import BoardContext from "../../store/board";
import useInput from "../../hooks/use-input";
import { getId } from "../../utils/helper";

import styles from "../../styles/components/TaskModalAdd.module.scss";
import ViewModalContext from "../../store/view-modal";

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

const EditTaskModal = () => {
  const { updateTask, selectedColumn, columns, selectedTask, setSelectedTask } =
    useContext(BoardContext);
  const { onViewClose } = useContext(ViewModalContext);
  const { onEditClose } = useContext(EditModalContext);

  const [subtasks, setSubtasks] = useState<Subtask[]>([
    ...selectedTask.task.subtasks,
    new Subtask(),
  ]);
  const [status, setStatus] = useState(selectedTask.task.status);

  const {
    value: title,
    error: titleError,
    isValid: isTitleValid,
    changeHandler: titleChangeHandler,
    blurHandler: titleBlurHandler,
    onSubmit: titleSubmit,
  } = useInput({
    required: "Can't be empty",
    initialValue: selectedTask.task.title,
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
    initialValue: selectedTask.task.description,
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
    setSelectedTask((prev) => ({
      ...prev,
      task: {
        description: description,
        status: status,
        subtasks: validSubtasks,
        title: title,
      },
    }));
    updateTask({
      description: description,
      status: status,
      subtasks: validSubtasks,
      title: title,
    });
  };

  console.log("task1234", selectedTask);

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onEditClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Edit Task</h1>

      <div>
        <h4>Title</h4>
        <TextBox
          variant="title"
          onChange={titleChangeHandler}
          value={title}
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
          onChange={descriptionChangeHandler}
          value={description}
          onBlur={descriptionBlurHandler}
          error={descriptionError}
        />
      </div>

      <div className={styles["modal-wrapper__subtasks"]}>
        <h4>Subtasks</h4>
        {subtasks.map((subtask, idx) => {
          return (
            <TextBox
              key={idx}
              subtaskIdx={idx}
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
          );
        })}

        <div className={styles["modal-wrapper__button-wrapper"]}>
          <Button
            color="secondary"
            fullWidth={true}
            className={styles["secondary-button"]}
            onClick={() => {
              addSubtask();
            }}
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
            defaultValue={status}
            options={columns.map((column) => {
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
          isFormValid && onEditClose();
          isFormValid && onViewClose();
        }}
      >
        <span>Save Changes</span>
      </Button>
    </Modal>
  );
};

export default EditTaskModal;
