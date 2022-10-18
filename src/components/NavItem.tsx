import styles from "../styles/components/NavItem.module.scss";

type PropsType = {
  children: string | React.ReactNode;
  variant?: "purple";
  className?: string;
  active?: boolean;
  onClick: () => void;
};

const NavItem = ({
  children,
  variant,
  className,
  active = false,
  onClick,
}: PropsType) => {
  const classes = `h-m ${styles["nav-item"]} ${active ? styles.active : ""} ${
    className ? className : ""
  }  ${variant ? styles[variant] : ""}`;

  return (
    <li className={classes} onClick={onClick}>
      {children}
    </li>
  );
};

export default NavItem;
