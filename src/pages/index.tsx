import { useContext, useState } from "react";
import Board from "../components/Board";
import { DropDown } from "../components/DropDown";
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
