import React from "react";
import Board from "./Board";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <main className="board-container">
      <SideBar />
      <Board />
    </main>
  );
};

export default Dashboard;
