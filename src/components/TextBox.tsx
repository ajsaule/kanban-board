import React, { ReactElement, useState } from 'react'

import styles from "../styles/components/TextBox.module.scss"

import SubtaskIcon from './svgs/SubtaskIcon';

type PropsType = { 
  placeholder?: string;
  variant?: "title" | "description" | "subtask";
}

const TextBox = ({ placeholder = "", variant = "default"}): PropsType => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subtask, setSubtask] = useState('')

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleSubtaskChange = (e) => setSubtask(e.target.value)

  if (variant === "title") {
    return (
      <input 
        type="text" 
        className={styles["input-field"]} 
        placeholder={placeholder} 
        onChange={(e) => handleTitleChange(e)}
      />
    )
  } 
  
  if (variant === "description") {
    return (
      <textarea 
        type="text" 
        className={`${styles["input-field"]} ${styles["input-field__description"]}`} 
        placeholder={placeholder} 
        onChange={(e) => handleDescriptionChange(e)}
      />
    )
  } 
  
  if (variant === "subtask") {
    return (
      <div style={{display: "flex", alignItems: "center"}}>
        <input 
          type="text" 
          className={`${styles["input-field"]} ${styles["input-field__subtask"]}`} 
          placeholder={placeholder} 
          onChange={(e) => handleSubtaskChange(e)}
        />
        <SubtaskIcon className={styles["input-field__subtask__icon"]}/>
      </div>
    )
  }
}

export default TextBox