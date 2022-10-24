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

  const handleColNameChange = (e) => setColName(e.target.value);

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onAddColClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Add New Column</h1>
      <div>
        <h4>Column Name</h4>
        <TextBox // todo: need to add validation to the input field to stop from submitting empty col name
          variant="title"
          onChange={handleColNameChange}
          value={colName}
        />
      </div>
      <Button // todo: need to add onEnter functionality to submit the button when enter key is pressed
        variant="primary"
        onClick={() => {
          addColumn(colName);
          onAddColClose();
        }}
      >
        <span>Add Column</span>
      </Button>
    </Modal>
  );
};

export default ColumnModalAdd;
