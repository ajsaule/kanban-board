import React, { useContext, useState } from "react";

import Modal from "./Modal";
import TextBox from "./TextBox";
import Button from "./Button";

import AddModalContext from "../store/add-modal";
import BoardContext from "../store/board";

import styles from "../styles/components/TaskModalAdd.module.scss";

const ColumnModalAdd = () => {
  const [colName, setColName] = useState("");
  const { onAddColClose } = useContext(AddModalContext);
  const { addColumn } = useContext(BoardContext);

  const handleColNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColName(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addColumn(colName);
    onAddColClose();
  };

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onAddColClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Add New Column</h1>
      <form onSubmit={submitHandler}>
        <h4>Column Name</h4>
        <TextBox // todo: need to add validation to the input field to stop from submitting empty col name
          variant="title"
          onChange={handleColNameChange}
          value={colName}
        />
      </form>
      <Button>Add Column</Button>
    </Modal>
  );
};

export default ColumnModalAdd;
