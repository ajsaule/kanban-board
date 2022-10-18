import { getId } from "../utils/helper";
import NavItem from "./NavItem";
import IconBoard from "./svgs/IconBoard";
import styles from "../styles/components/Nav.module.scss";

const Nav = () => {
  const boards = ["platform launch", "marketing plan", "roadmap"];

  return (
    <ul className={styles["nav"]}>
      {boards.map((board) => (
        <NavItem key={getId()} onClick={() => {}}>
          <IconBoard />
          {board}
        </NavItem>
      ))}

      <NavItem active variant="purple" onClick={() => {}}>
        <IconBoard />+ Create New Board
      </NavItem>
    </ul>
  );
};

export default Nav;
