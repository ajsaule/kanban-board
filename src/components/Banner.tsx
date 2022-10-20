import React, { useContext, useState } from "react";
import VerticalEllipsis from "./svgs/VerticalEllipsis";
import Button from "./Button";
import styles from "../styles/components/Banner.module.scss";
import Modal from "./Modal";
import ToggleModalContext from "../store/toggle-modal";

const Banner = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const { toggleModal } = useContext(ToggleModalContext);

  return (
    <div className={styles["banner"]}>
      <h1 className={`h-xl ${styles["banner__heading"]}`}>Platform Launch</h1>
      <div className={styles["button-wrapper"]}>
        <Button onClick={() => setShowAddTask(true)} size="large">
          + Add New Task
        </Button>
        <VerticalEllipsis
          onClick={toggleModal}
          className={styles["vertical-ellipsis"]}
        />
      </div>
      {showAddTask && (
        <Modal onClose={setShowAddTask.bind(null, false)}>ADD NEW TASK</Modal>
      )}
    </div>
  );
};

export default Banner;
