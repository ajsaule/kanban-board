import { useContext, useState } from "react";

import Board from "../components/Board";
import CheckboxItem from "../components/CheckboxItem";
import DropDown from "../components/DropDown";
import Modal from "../components/Modal";
import Sidebar from "../components/SideBar";

import ToggleModalContext from "../store/toggle-modal";

import styles from "../styles/components/index.module.scss";

function HomePage() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const { isOpen, onClose } = useContext(ToggleModalContext);

  return (
    <div className="board-container">
      {isOpen && (
        <Modal className={styles["modal-wrapper"]} onClose={onClose}>
          <h1 className={styles["modal-wrapper__heading"]}>
            Research pricing points of various competitors and trial different
            business models
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
            <DropDown
              options={[
                { value: "todo", label: "Todo" },
                { value: "doing", label: "Doing" },
                { value: "done", label: "Done" },
              ]}
            />
          </div>
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
