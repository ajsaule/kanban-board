import React from "react";
import VerticalEllipsis from "./svgs/VerticalEllipsis";
import styles from "../styles/components/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles["banner"]}>
      <h1 className={`h-xl ${styles["banner__heading"]}`}>Platform Launch</h1>
      <div className={styles["button-wrapper"]}>
        <button>+ Add New Task</button>
        <div>
          <VerticalEllipsis className={styles["vertical-ellipsis"]} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
