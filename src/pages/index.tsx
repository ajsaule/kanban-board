import { useContext } from "react";

import Banner from "../containers/Banner";
import BoardModalAdd from "../components/Modal/AddBoardModal";
import ColumnModalAdd from "../components/Modal/AddColumnModal";
import ShowSidebarButton from "../components/ShowSidebarButton";
import TaskModalAdd from "../components/Modal/AddTaskModal";
import TaskModalView from "../components/Modal/ViewTaskModal";
import Dashboard from "../containers/Dashboard";

import AddModalContext from "../store/add-modal";
import SidebarContext from "../store/sidebar";
import ViewModalContext from "../store/view-modal";
import DeleteModal from "../components/Modal/DeleteModal";

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
      <DeleteModal />
      <div className="app">
        <Banner isSidebarHidden={isHidden} />
        <Dashboard />
      </div>
      {isHidden && <ShowSidebarButton showSidebar={showSidebar} />}
    </>
  );
}

export default HomePage;
