// todo: @andrej fix TS errors in this file
import React, { useCallback, useContext, useState } from "react";
import Dropdown from "../MySelect";
import Modal from ".";
import TextBox from "../TextBox";
import Button from "../Button";
import EditModalContext from "../../store/edit-modal";

import styles from "../../styles/components/TaskModalAdd.module.scss";
import BoardContext from "../../store/board";

const EditTaskModal = () => {
  const { addTask, selectedColumn, columns, selectedTask } =
    useContext(BoardContext);
  const { onEditClose } = useContext(EditModalContext);

  console.log("task123", selectedTask.task.subtasks);

  const [title, setTitle] = useState(selectedTask.task.title);
  const [description, setDescription] = useState(selectedTask.task.description);
  const [subtasks, setSubtasks] = useState<string[] | {}[]>(["1"]);
  const [status, setStatus] = useState("");
  // ? Not sure if we should be use forceUpdate, might not be considered the react way of doing things? Not pure..
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const handleSubtasksChange = (subtaskTitle, idx) => {
    const arr = subtasks;
    arr[idx] = {
      title: subtaskTitle,
      isCompleted: false,
    };
    setSubtasks(arr);
    forceUpdate(); // ? This is hacky but for some reason the setState above is not enough to rerender
  };
  const handleStatusChange = (columnName: string) => setStatus(columnName);

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
    addTask({
      description: description,
      status: selectedColumn.colAddButton ? selectedColumn.column : status,
      subtasks: subtasks,
      title: title,
    });
  };

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onEditClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Edit Task</h1>

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
        {selectedTask.task.subtasks.map((subtask, idx) => {
          console.log(subtask.title);

          return (
            <TextBox
              key={idx}
              subtaskIdx={idx}
              value={subtask.title}
              placeholder="e.g. Make coffee"
              variant="subtask"
              onChange={handleSubtasksChange}
              removeSubtask={() => removeSubtask(idx)}
            />
          );
        })}

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
            options={columns?.map((column) => {
              return { value: column.name.toLowerCase(), label: column.name };
            })}
          />
        </div>
      )}
      <Button
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

export default EditTaskModal;
