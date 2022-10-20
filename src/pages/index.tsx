import { useState } from "react";
import Board from "../components/Board";
import Modal from "../components/Modal";
import Sidebar from "../components/SideBar";

// import HideNavbarIcon from "../components/svgs/HideNavbarIcon";

function HomePage() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  return (
    <div className="board-container">
      <Modal isHidden={false}>
        <h1>Hello world</h1>
      </Modal>
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
