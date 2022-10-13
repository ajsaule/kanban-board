import React from "react";
import NavBanner from "../components/NavBanner";
import "../styles/components/Board.scss";

const Board = () => {
  return (
    <div style={{ width: "100%" }}>
      <NavBanner />
      <div className="board">Board</div>
    </div>
  );
};

export default Board;
