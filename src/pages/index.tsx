import { useContext, useState } from "react";

import Board from "../components/Board";
import Button from "../components/Button";
import CheckboxItem from "../components/CheckboxItem";
import Dropdown from "../components/Dropdown";
import Modal from "../components/Modal";
import Sidebar from "../components/SideBar";
import VerticalEllipsis from "../components/svgs/VerticalEllipsis";
import TextBox from "../components/TextBox";

import AddModalContext from "../store/add-modal";
import EditModalContext from "../store/edit-modal";

import styles from "../styles/components/index.module.scss";

function HomePage() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const { isEditOpen, onEditClose } = useContext(EditModalContext);
  const { isAddOpen, onAddClose } = useContext(AddModalContext);

  return (
    <div className="board-container">
      {isEditOpen && (
        <Modal className={styles["modal-wrapper"]} onClose={onEditClose}>
          <h1 className={styles["modal-wrapper__heading"]}>
            Research pricing points of various competitors and trial different
            business models
            <VerticalEllipsis />
          </h1>
          <p className={styles["modal-wrapper__body"]}>
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>
          <div>
            <h4 className={styles["modal-wrapper__subtasks"]}>
              Subtasks (2 of 3)
            </h4>
            <CheckboxItem text="Research competitor pricing and business models" />
            <CheckboxItem text="Outline a business model that works for our solution" />
            <CheckboxItem text="Talk to potential customers about our proposed solution and ask for fair price expectancy" />
          </div>
          <div>
            <h4 className={styles["modal-wrapper__status"]}>Current Status</h4>
            <Dropdown
              options={[
                { value: "todo", label: "Todo" },
                { value: "doing", label: "Doing" },
                { value: "done", label: "Done" },
              ]}
            />
          </div>
        </Modal>
      )}
      {isAddOpen && (
        <Modal className={styles["modal-wrapper"]} onClose={onAddClose}>
          <h1 className={styles["modal-wrapper__heading"]}>Add New Task</h1>
          <div>
            <h4>Title</h4>
            <TextBox variant="title"/>
          </div>
          <div>
            <h4>Description</h4>
            <TextBox variant="description" placeholder="e.g. It’s always good to take a break. This 15 minute break will 
              recharge the batteries a little."
            />
          </div>
          <div>
            <h4>Subtasks</h4>
            <TextBox placeholder="e.g. Make coffee" variant="subtask"/>
            <TextBox placeholder="e.g. Make coffee" variant="subtask"/>
            <Button color="secondary" fullWidth={true} className={styles["secondary-button"]}>
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
          <Button variant="primary">
              <span>Save Changes</span>
          </Button>
        </Modal>
      )}
      <Sidebar
        isSidebarHidden={isSidebarHidden}
        setIsSidebarHidden={setIsSidebarHidden}
      />
      <Board
        isSidebarHidden={isSidebarHidden}
        setIsSidebarHidden={setIsSidebarHidden}
      />
    </div>
  );
}

export default HomePage;
