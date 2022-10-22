import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import TextBox from "./TextBox";
import Button from "./Button";
import AddModalContext from "../store/add-modal";

import styles from "../styles/components/TaskModalAdd.module.scss";

const TaskModalAdd = () => {
  const { isAddOpen, onAddClose } = useContext(AddModalContext);

  return (
    <>
      {isAddOpen && (
        <Modal className={styles["modal-wrapper"]} onClose={onAddClose}>
          <h1 className={styles["modal-wrapper__heading"]}>Add New Task</h1>
          <div>
            <h4>Title</h4>
            <TextBox variant="title" />
          </div>
          <div>
            <h4>Description</h4>
            <TextBox
              variant="description"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
              recharge the batteries a little."
            />
          </div>
          <div>
            <h4>Subtasks</h4>
            <TextBox placeholder="e.g. Make coffee" variant="subtask" />
            <TextBox placeholder="e.g. Make coffee" variant="subtask" />
            <Button
              color="secondary"
              fullWidth={true}
              className={styles["secondary-button"]}
            >
              <span>+ Add New Subtask</span>
            </Button>
          </div>
          <div>
            <h4 className={styles["modal-wrapper__status"]}>Status</h4>
            <Dropdown
              options={[
                { value: "todo", label: "Todo" },
                { value: "doing", label: "Doing" },
                { value: "done", label: "Done" },
              ]}
            />
          </div>
          <Button color="primary" onClick={() => {}}>
            <span>Save Changes</span>
          </Button>
        </Modal>
      )}
    </>
  );
};

export default TaskModalAdd;
