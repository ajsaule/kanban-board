import React, { useState } from "react";
import VerticalEllipsis from "./svgs/VerticalEllipsis";
import Button from "./Button";
import styles from "../styles/components/Banner.module.scss";
import Modal from "./Modal";

const Banner = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className={styles["banner"]}>
      <h1 className={`h-xl ${styles["banner__heading"]}`}>Platform Launch</h1>
      <div className={styles["button-wrapper"]}>
        <Button onClick={() => setShowAddTask(true)} size="large">
          + Add New Task
        </Button>
        <VerticalEllipsis className={styles["vertical-ellipsis"]} />
      </div>
      {showAddTask && (
        <Modal onClose={setShowAddTask.bind(null, false)}>ADD NEW TASK</Modal>
      )}
    </div>
  );
};

export default Banner;
