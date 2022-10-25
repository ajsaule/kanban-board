import { useContext } from "react";

import Banner from "../components/Banner";
import BoardModalAdd from "../components/BoardModalAdd";
import ColumnModalAdd from "../components/ColumnModalAdd";
import ShowSidebarButton from "../components/ShowSidebarButton";
import TaskModalAdd from "../components/TaskModalAdd";
import TaskModalView from "../components/TaskModalView";
import Dashboard from "../containers/Dashboard";

import AddModalContext from "../store/add-modal";
import SidebarContext from "../store/sidebar";
import ViewModalContext from "../store/view-modal";

function HomePage() {
  const { isHidden, showSidebar } = useContext(SidebarContext);
  const { isViewOpen } = useContext(ViewModalContext);
  const { isAddTaskOpen, isAddColOpen, isAddBoardOpen } =
    useContext(AddModalContext);

  return (
    <>
      {isViewOpen && <TaskModalView />}
      {isAddTaskOpen && <TaskModalAdd />}
      {isAddColOpen && <ColumnModalAdd />}
      {isAddBoardOpen && <BoardModalAdd />}
      <div className="app">
        <Banner isSidebarHidden={isHidden} />
        <Dashboard />
      </div>
      {isHidden && <ShowSidebarButton showSidebar={showSidebar} />}
    </>
  );
}

export default HomePage;
