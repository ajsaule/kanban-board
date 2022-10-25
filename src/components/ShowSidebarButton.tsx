import ShowNavbarIcon from "./svgs/ShowNavbarIcon";
import styles from "../styles/components/ShowSidebarButton.module.scss";

type Props = {
  showSidebar: () => void;
};

const ShowSidebarButton = ({ showSidebar }: Props) => {
  return (
    <div onClick={() => showSidebar()} className={styles["btn"]}>
      <ShowNavbarIcon />
    </div>
  );
};

export default ShowSidebarButton;
