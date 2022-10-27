import React, { useContext, useState } from "react";

import Modal from "./";
import TextBox from "../TextBox";
import Button from "../Button";

import AddModalContext from "../../store/add-modal";
import BoardContext from "../../store/board";

import styles from "../../styles/components/TaskModalAdd.module.scss";

const BoardModalAdd = () => {
  const [boardName, setBoardName] = useState("");
  const { onAddBoardClose } = useContext(AddModalContext);
  const { addBoard } = useContext(BoardContext);

  const handleBoardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addBoard(boardName);
    onAddBoardClose();
  };

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onAddBoardClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Add New Board</h1>
      <form onSubmit={submitHandler}>
        <h4>Board Name</h4>
        <TextBox // todo: need to add validation to the input field to stop from submitting empty board name
          variant="title"
          onChange={handleBoardNameChange}
          value={boardName}
        />
      </form>
      <Button onClick={submitHandler} fullWidth>
        Add Board
      </Button>
    </Modal>
  );
};

export default BoardModalAdd;
