import React, { useContext, useState } from "react";

import Modal from "./Modal";
import TextBox from "./TextBox";
import Button from "./Button";

import AddModalContext from "../store/add-modal";
import BoardContext from "../store/board";

import styles from "../styles/components/TaskModalAdd.module.scss";

const BoardModalAdd = () => {
  const [boardName, setBoardName] = useState("");
  const { onAddBoardClose } = useContext(AddModalContext);
  const { addBoard } = useContext(BoardContext);

  const handleBoardNameChange = (e: any) => setBoardName(e.target.value);

  return (
    <Modal className={styles["modal-wrapper"]} onClose={onAddBoardClose}>
      <h1 className={styles["modal-wrapper__heading"]}>Add New Board</h1>
      <div>
        <h4>Board Name</h4>
        <TextBox // todo: need to add validation to the input field to stop from submitting empty board name
          variant="title"
          onChange={handleBoardNameChange}
          value={boardName}
        />
      </div>
      <Button // todo: need to add onEnter functionality to submit the button when enter key is pressed
        variant="primary"
        onClick={() => {
          addBoard(boardName);
          onAddBoardClose();
        }}
      >
        <span>Add Board</span>
      </Button>
    </Modal>
  );
};

export default BoardModalAdd;
