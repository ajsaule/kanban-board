import { getId } from "../utils/helper";
import NavItem from "./SidebarItem";
import IconBoard from "./svgs/IconBoard";
import styles from "../styles/components/Nav.module.scss";

const Nav = () => {
  const boards = ["platform launch", "marketing plan", "roadmap"];

  return (
    <ul className={styles["nav"]}>
      {boards.map((board) => (
        <li key={getId()}>
          <NavItem onClick={() => {}}>
            <IconBoard />
            {board}
          </NavItem>
        </li>
      ))}

      <li>
        <NavItem active variant="purple" onClick={() => {}}>
          <IconBoard />+ Create New Board
        </NavItem>
      </li>
    </ul>
  );
};

export default Nav;
