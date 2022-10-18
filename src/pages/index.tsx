import { useState } from "react";
import Board from "../components/Board";
import Sidebar from "../components/Sidebar";

// import HideNavbarIcon from "../components/svgs/HideNavbarIcon";

function HomePage() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  return (
    <div className="board-container">
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
