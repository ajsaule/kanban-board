import React, { useState } from "react";
import SubtaskIcon from "./svgs/SubtaskIcon";
import styles from "../styles/components/TextBox.module.scss";

type PropsType = {
  placeholder?: string;
  variant?: "title" | "description" | "subtask";
};

const TextBox = ({ placeholder = "", variant = "title" }: PropsType) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubtask] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubtaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtask(e.target.value);
  };

  if (variant === "title") {
    return (
      <input
        value={title}
        type="text"
        className={styles["input-field"]}
        placeholder={placeholder}
        onChange={handleTitleChange}
      />
    );
  }

  if (variant === "description") {
    return (
      <textarea
        value={description}
        className={`${styles["input-field"]} ${styles["input-field__description"]}`}
        placeholder={placeholder}
        onChange={handleDescriptionChange}
      />
    );
  }

  if (variant === "subtask") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={subtask}
          className={`${styles["input-field"]} ${styles["input-field__subtask"]}`}
          placeholder={placeholder}
          onChange={handleSubtaskChange}
        />
        <SubtaskIcon
          className={styles["input-field__subtask__icon"]}
          onClick={() => console.log("remove task")}
        />
      </div>
    );
  }
};

export default TextBox;
