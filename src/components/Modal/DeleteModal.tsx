import React, { useContext } from "react";
import Modal from ".";
import DeleteModalContext from "../../store/delete-modal";
import Button from "../Button";

const DeleteModal = () => {
  const { type, show, close } = useContext(DeleteModalContext);

  return show ? (
    <Modal onClose={close}>
      <h1 className="h-l u-secondary">
        Delete this {type === "task" ? "task" : "board"}?
      </h1>
      <p>
        Are you sure you want to delete the &lsquo;
        {type === "task"
          ? "Build settings UI' task and its subtasks"
          : "Platform Launch' board"}
        ? This action will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="u-btn-group">
        <Button color="danger" fullWidth>
          Delete
        </Button>
        <Button color="secondary" fullWidth onClick={close}>
          Cancel
        </Button>
      </div>
    </Modal>
  ) : (
    <></>
  );
};

export default DeleteModal;
