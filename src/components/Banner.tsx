import React, { useContext, useState } from "react";
import VerticalEllipsis from "./svgs/VerticalEllipsis";
import Button from "./Button";
import styles from "../styles/components/Banner.module.scss";
import Modal from "./Modal";
import EditModalContext from "../store/view-modal";
import AddModalContext from "../store/add-modal";

const Banner = () => {
  const { toggleAddModal } = useContext(AddModalContext);

  return (
    <div className={styles["banner"]}>
      <h1 className={`h-xl ${styles["banner__heading"]}`}>Platform Launch</h1>
      <div className={styles["button-wrapper"]}>
        <Button onClick={toggleAddModal} size="large">
          + Add New Task
        </Button>
        <VerticalEllipsis className={styles["vertical-ellipsis"]} />
      </div>
    </div>
  );
};

export default Banner;
