import React from "react";
import Banner from "../components/Banner";

import HideNavbarIcon from "./svgs/HideNavbarIcon";

import "../styles/components/Board.scss";

const Board = ({
  isSidebarHidden,
  setIsSidebarHidden,
}: {
  isSidebarHidden: boolean;
  setIsSidebarHidden: () => void;
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <div className="board">
        {isSidebarHidden && (
          <div
            onClick={() => setIsSidebarHidden((prev) => !prev)}
            className="hide-navbar-tab"
          >
            <HideNavbarIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
