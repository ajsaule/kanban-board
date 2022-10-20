import styles from "../styles/components/Modal.module.scss";

type PropsType = {
  children: React.ReactNode;
  isHidden: boolean;
  className?: string;
};

const Modal = ({ children, isHidden, className }: PropsType) => {
  const classNames = `${className} ${isHidden ? styles["hidden"] : ""}`;

  return (
    <div className={`${styles["background"]} ${classNames}`}>
      <div className={styles["modal"]}>{children}</div>;
    </div>
  );
};

export default Modal;
