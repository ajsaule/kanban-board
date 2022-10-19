import { getId } from "../utils/helper";
import NavItem from "./NavItem";
import BoardIcon from "./svgs/BoardIcon";
import styles from "../styles/components/Nav.module.scss";

const Nav = () => {
  const boards = ["platform launch", "marketing plan", "roadmap"];

  return (
    <ul className={styles["nav"]}>
      {boards.map((board) => (
        <NavItem key={getId()} onClick={() => {}}>
          <BoardIcon />
          {board}
        </NavItem>
      ))}

      <NavItem active variant="purple" onClick={() => {}}>
        <BoardIcon />+ Create New Board
      </NavItem>
    </ul>
  );
};

export default Nav;
