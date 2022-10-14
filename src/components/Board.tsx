import React from "react";
import Banner from "../components/Banner";
import "../styles/components/Board.scss";

const Board = () => {
  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <div className="board">Board</div>
    </div>
  );
};

export default Board;
