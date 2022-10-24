import { useContext } from "react";

import { getId } from "../utils/helper";
import BoardIcon from "./svgs/BoardIcon";
import NavItem from "./SidebarItem";
import styles from "../styles/components/Nav.module.scss";

import BoardContext from "../store/board";
import AddModalContext from "../store/add-modal";

const Nav = () => {
  const { boardNames, selectedBoard, setSelectedBoard } =
    useContext(BoardContext);
  const { toggleAddBoardModal } = useContext(AddModalContext);

  return (
    <ul className={styles["nav"]}>
      {boardNames.map((board, idx) => (
        <NavItem
          key={getId()}
          active={selectedBoard.board === board}
          onClick={() => setSelectedBoard({ board: board, idx: idx })}
        >
          <BoardIcon />
          {board}
        </NavItem>
      ))}

      <NavItem active variant="purple" onClick={toggleAddBoardModal}>
        <BoardIcon />+ Create New Board
      </NavItem>
    </ul>
  );
};

export default Nav;
