import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/components/Modal.module.scss";

type PropsType = {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
};

const Modal = ({ onClose, children, className }: PropsType) => {
  const [isRendered, setIsRendered] = useState(false);
  const classes = `${className} ${styles["modal"]}`;

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <>
      {isRendered &&
        createPortal(
          <>
            <div className={styles["background"]} onClick={onClose}></div>
            <div className={classes}>{children}</div>
          </>,
          document.getElementById("modal")!
        )}
    </>
  );
};

export default Modal;
