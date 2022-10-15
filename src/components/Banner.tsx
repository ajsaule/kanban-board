import React from "react";
import styles from "../styles/components/Banner.module.scss";
import VerticalEllipsis from "./svgs/VerticalEllipsis";

const Banner = () => {
  return (
    <div className={styles["banner"]}>
      <h1>Plaform Launch</h1>
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
