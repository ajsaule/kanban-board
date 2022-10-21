import React, { useContext, useState } from "react";
import VerticalEllipsis from "./svgs/VerticalEllipsis";
import Button from "./Button";
import styles from "../styles/components/Banner.module.scss";
import Modal from "./Modal";
import EditModalContext from "../store/edit-modal";
import AddModalContext from "../store/add-modal";

const Banner = () => {
  const { toggleEditModal } = useContext(EditModalContext);
  const { toggleAddModal } = useContext(AddModalContext);

  return (
    <div className={styles["banner"]}>
      <h1 className={`h-xl ${styles["banner__heading"]}`}>Platform Launch</h1>
      <div className={styles["button-wrapper"]}>
        <Button onClick={toggleAddModal} size="large">
          + Add New Task
        </Button>
        <VerticalEllipsis
          onClick={toggleEditModal}
          className={styles["vertical-ellipsis"]}
        />
      </div>
    </div>
  );
};

export default Banner;
