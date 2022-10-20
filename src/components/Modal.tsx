import styles from "../styles/components/Modal.module.scss";

type PropsType = { children: React.ReactNode };

const Modal = ({ children }: PropsType) => {
  return (
    <div className={styles["background"]}>
      <div className={styles["modal"]}>{children}</div>;
    </div>
  );
};

export default Modal;
