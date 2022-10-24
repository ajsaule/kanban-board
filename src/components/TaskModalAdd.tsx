import React, { useCallback, useContext, useState } from "react";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import TextBox from "./TextBox";
import Button from "./Button";
import AddModalContext from "../store/add-modal";

import styles from "../styles/components/TaskModalAdd.module.scss";
import BoardContext from "../store/board";

const TaskModalAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState<string[] | {}[]>(["1"]);
  const [status, setStatus] = useState("");
  // ? Not sure if we should be use forceUpdate, might not be considered the react way of doing things? Not pure..
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const { addTask, selectedColumn, columns } = useContext(BoardContext);
  const { onAddClose } = useContext(AddModalContext);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleSubtasksChange = (subtaskTitle, idx) => {
    const arr = subtasks;
    arr[idx] = {
      title: subtaskTitle,
      isCompleted: false,
    };
    setSubtasks(arr);
    forceUpdate();
  };
  const handleStatusChange = (column) => setStatus(column);

  const addSubtask = () => {
    const arr = subtasks;
    arr.push("1");
    setSubtasks(arr);
  };

  const removeSubtask = (idx) => {
    let arr = subtasks;
    arr = arr.filter((subtask, index) => index !== idx);
    setSubtasks(arr);
  };

  const saveTask = () => {
    // setSubtasks();
    addTask({
      description: description,
      status: status,
      subtasks: subtasks,
      title: title,
    });
  };

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onAddClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Add New Task</h1>
      <div>
        <h4>Title</h4>
        <TextBox variant="title" onChange={handleTitleChange} value={title} />
      </div>
      <div>
        <h4>Description</h4>
        <TextBox
          variant="description"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>
      <div className={styles["modal-wrapper__subtasks"]}>
        <h4>Subtasks</h4>
        {subtasks.map((subtask, idx) => (
          <TextBox
            key={idx}
            subtaskIdx={idx}
            value={subtask != 1 && subtask.title}
            placeholder="e.g. Make coffee"
            variant="subtask"
            onChange={handleSubtasksChange}
            removeSubtask={() => removeSubtask(idx)}
          />
        ))}
        <div className={styles["modal-wrapper__button-wrapper"]}>
          <Button
            color="secondary"
            fullWidth={true}
            className={styles["secondary-button"]}
            onClick={() => {
              forceUpdate();
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
            defaultValue={selectedColumn.column}
            options={columns.map((column) => {
              return { value: column.name.toLowerCase(), label: column.name };
            })}
          />
        </div>
      )}
      <Button
        variant="primary"
        onClick={() => {
          saveTask();
          onAddClose();
        }}
      >
        <span>Save Changes</span>
      </Button>
    </Modal>
  );
};

export default TaskModalAdd;
