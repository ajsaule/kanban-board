import { useContext, useState } from "react";

import Board from "../components/Board";
import BoardModalAdd from "../components/BoardModalAdd";
import ColumnModalAdd from "../components/ColumnModalAdd";
import Sidebar from "../components/SideBar";
import TaskModalAdd from "../components/TaskModalAdd";
import TaskModalView from "../components/TaskModalView";

import AddModalContext from "../store/add-modal";
import BoardContext from "../store/board";
import ViewModalContext from "../store/view-modal";

function HomePage() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const { isViewOpen } = useContext(ViewModalContext);
  const { isAddTaskOpen, isAddColOpen, isAddBoardOpen } =
    useContext(AddModalContext);

  return (
    <div className="board-container">
      {isViewOpen && <TaskModalView />}
      {isAddTaskOpen && <TaskModalAdd />}
      {isAddColOpen && <ColumnModalAdd />}
      {isAddBoardOpen && <BoardModalAdd />}
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
