import { useContext, useState } from "react";

import Board from "../components/Board";
import ColumnModalAdd from "../components/ColumnModalAdd";
import Sidebar from "../components/SideBar";
import TaskModalAdd from "../components/TaskModalAdd";
import TaskModalView from "../components/TaskModalView";

import AddModalContext from "../store/add-modal";
import ViewModalContext from "../store/view-modal";

function HomePage() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const { isViewOpen } = useContext(ViewModalContext);
  const { isAddOpen, isAddColOpen } = useContext(AddModalContext);

  return (
    <div className="board-container">
      {isViewOpen && <TaskModalView />}
      {isAddOpen && <TaskModalAdd />}
      {isAddColOpen && <ColumnModalAdd />}
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
