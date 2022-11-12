import React, { useContext, useState } from "react";

import Modal from "./";
import TextBox from "../TextBox";
import Button from "../Button";

import AddModalContext from "../../store/add-modal";
import BoardContext from "../../store/board";

import styles from "../../styles/components/TaskModalAdd.module.scss";
import useInput from "../../hooks/use-input";

const BoardModalAdd = () => {
  const { onAddBoardClose } = useContext(AddModalContext);
  const { addBoard } = useContext(BoardContext);
  const {
    value: boardName,
    error: boardError,
    changeHandler: boardChangeHandler,
    blurHandler: boardBlurHandler,
    isValid: boardNameIsValid,
  } = useInput({
    required: "Can't be empty",
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!boardNameIsValid) {
      boardBlurHandler();
      return;
    }
    addBoard(boardName);
    onAddBoardClose();
  };

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onAddBoardClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Add New Board</h1>
      <form onSubmit={submitHandler}>
        <h4>Board Name</h4>
        <TextBox
          variant="title"
          onChange={boardChangeHandler}
          onBlur={boardBlurHandler}
          error={boardError}
          value={boardName}
        />
        <Button className={styles["form-btn"]} fullWidth>
          Add Board
        </Button>
      </form>
    </Modal>
  );
};

export default BoardModalAdd;
