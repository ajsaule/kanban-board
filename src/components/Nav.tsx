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
<<<<<<< HEAD
  // const boards = ["platform launch", "marketing plan", "roadmap"];
=======
  const { toggleAddBoardModal } = useContext(AddModalContext);
>>>>>>> f1c5c2cf8f167982d936e722d7fbdeb8b8457d44

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
