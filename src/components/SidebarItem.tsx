import styles from "../styles/components/SidebarItem.module.scss";

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
  const classes = `h-m ${styles["sidebar-item"]} ${
    active ? styles.active : ""
  } ${className ? className : ""}  ${variant ? styles[variant] : ""}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default NavItem;
