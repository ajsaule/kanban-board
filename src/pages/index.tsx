import { useContext, useState } from "react";

import Board from "../components/Board";
import CheckboxItem from "../components/CheckboxItem";
import DropDown from "../components/DropDown";
import Modal from "../components/Modal";
import Sidebar from "../components/SideBar";

import ToggleModalContext from "../store/toggle-modal";

function HomePage() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const { isOpen, onClose } = useContext(ToggleModalContext);

  return (
    <div className="board-container">
      {isOpen && (
        <Modal onClose={onClose}>
          <h1>Hello world</h1>
          <h4>Subtasks (2 of 3)</h4>
          <CheckboxItem text="Research competitor pricing and business models" />
          <CheckboxItem text="Outline a business model that works for our solution" />
          <CheckboxItem text="Talk to potential customers about our proposed solution and ask for fair price expectancy" />
          <h4>Current Status</h4>
          <DropDown
            options={[
              { value: "todo", label: "Todo" },
              { value: "doing", label: "Doing" },
              { value: "done", label: "Done" },
            ]}
          />
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
