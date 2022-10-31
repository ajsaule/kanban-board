import React, { useEffect, useState } from "react";
import SubtaskIcon from "./svgs/SubtaskIcon";
import styles from "../styles/components/TextBox.module.scss";

type PropsType = {
  placeholder?: string;
  variant?: "title" | "description" | "subtask";
  onChange?: (e: any, ...rest: any) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  value: string;
  error?: string;
  removeSubtask?: () => void;
  subtaskIdx?: number;
};

const TextBox = ({
  placeholder = "",
  variant = "title",
  onChange,
  onBlur,
  error,
  value = "",
  removeSubtask,
}: PropsType) => {

  const classes = `${styles["input-field"]} ${error ? styles.invalid : ""}`;

  if (variant === "title") {
    return (
      <>
        <input
          value={value}
          type="text"
          onBlur={onBlur}
          className={classes}
          placeholder={placeholder}
          onChange={onChange}
        />
        {error && <p className={styles.error}>{error}</p>}
      </>
    );
  }

  if (variant === "description") {
    return (
      <>
        <textarea
          value={value}
          className={`${classes} ${styles["input-field__description"]}`}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
        />
        {error && <p className={styles.error}>{error}</p>}
      </>
    );
  }

  if (variant === "subtask") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={value}
          className={`${classes} ${styles["input-field__subtask"]}`}
          placeholder={placeholder}
          onChange={onChange}
        />
        <SubtaskIcon
          className={styles["input-field__subtask__icon"]}
          onClick={removeSubtask}
        />
      </div>
    );
  }

  return <></>;
};

export default TextBox;
