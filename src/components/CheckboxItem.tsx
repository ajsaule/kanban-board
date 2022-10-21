import React, { useState } from "react";
import styles from "../styles/components/CheckboxItem.module.scss";

type PropsType = {
  text: string;
};

const CheckboxItem = ({ text }: PropsType) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => setIsChecked((prev) => !prev);

  return (
    <div className={styles["checkbox-item"]} onClick={toggleChecked}>
      <input type="checkbox" checked={isChecked} />
      <p className={isChecked ? styles["text-checked"] : ""}>{text}</p>
    </div>
  );
};

export default CheckboxItem;
