import React, { useContext } from "react";
import Button from "./Button";
import EditModalContext from "../store/view-modal";
import AddModalContext from "../store/add-modal";
import styles from "../styles/components/Banner.module.scss";

const Banner = () => {
  const { toggleViewModal } = useContext(EditModalContext);
  const { toggleAddModal } = useContext(AddModalContext);

  return (
    <div className={styles["banner"]}>
      <h1 className={`h-xl ${styles["banner__heading"]}`}>Platform Launch</h1>
      <div className={styles["button-wrapper"]}>
        <Button onClick={toggleAddModal} size="large">
          + Add New Task
        </Button>

        <Button variant="dots" onClick={toggleViewModal} />
      </div>
    </div>
  );
};

export default Banner;
