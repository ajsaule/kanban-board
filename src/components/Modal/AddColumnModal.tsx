import React, { useContext, useState } from "react";

import Modal from ".";
import TextBox from "../TextBox";
import Button from "../Button";

import AddModalContext from "../../store/add-modal";
import BoardContext from "../../store/board";

import styles from "../../styles/components/TaskModalAdd.module.scss";
import useInput from "../../hooks/use-input";

const ColumnModalAdd = () => {
  const { onAddColClose } = useContext(AddModalContext);
  const { addColumn } = useContext(BoardContext);
  const {
    value: colName,
    error: colError,
    blurHandler: colBlurHandler,
    changeHandler: colChangeHandler,
    isValid: colIsValid,
  } = useInput({
    required: "Can't be empty!",
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!colIsValid) {
      colBlurHandler();
      return;
    }
    addColumn(colName);
    onAddColClose();
  };

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onAddColClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Add New Column</h1>
      <form onSubmit={submitHandler}>
        <h4>Column Name</h4>
        <TextBox
          variant="title"
          onChange={colChangeHandler}
          onBlur={colBlurHandler}
          error={colError}
          value={colName}
        />
        <Button className={styles["form-btn"]} fullWidth>
          Add Column
        </Button>
      </form>
    </Modal>
  );
};

export default ColumnModalAdd;
