import { useState } from "react";

import Board from "../components/Board";
import Sidebar from "../components/SideBar";
import TaskModalAdd from "../components/TaskModalAdd";
import TaskModalView from "../components/TaskModalView";

function HomePage() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  return (
    <div className="board-container">
      <TaskModalView />
      <TaskModalAdd />
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
