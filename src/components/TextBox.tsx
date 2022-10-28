import React, { useEffect, useState } from "react";
import SubtaskIcon from "./svgs/SubtaskIcon";
import styles from "../styles/components/TextBox.module.scss";

type PropsType = {
  placeholder?: string;
  variant?: "title" | "description" | "subtask";
  onChange?: (e: any, ...rest: any) => void;
  value: string;
  removeSubtask?: () => void;
  subtaskIdx?: number;
};

const TextBox = ({
  placeholder = "",
  variant = "title",
  onChange = () => {},
  value = "",
  removeSubtask,
  subtaskIdx = -1,
}: PropsType) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubtask] = useState("");

  useEffect(() => {
    if (subtaskIdx > -1) onChange(subtask, subtaskIdx);
  }, [subtask]);

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
        value={value || title}
        type="text"
        className={styles["input-field"]}
        placeholder={placeholder}
        onChange={onChange || handleTitleChange}
      />
    );
  }

  if (variant === "description") {
    return (
      <textarea
        value={value || description}
        className={`${styles["input-field"]} ${styles["input-field__description"]}`}
        placeholder={placeholder}
        onChange={onChange || handleDescriptionChange}
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
          onClick={removeSubtask}
        />
      </div>
    );
  }

  return <></>;
};

export default TextBox;
