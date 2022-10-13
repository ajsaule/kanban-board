import React from "react";
import "../styles/components/Nav.scss";

const Nav = () => {
  return (
    <aside>
      <div>
        <h1>Kanban</h1>
        <h4>All Boards (8)</h4>
        <ul>
          <li>Platform Launch</li>
          <li>Marketing Plan</li>
          <li>Roadmap</li>
          <li>+ Create New Board</li>
        </ul>
      </div>
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <h4>Hide Sidebar</h4>
      </div>
    </aside>
  );
};

export default Nav;
