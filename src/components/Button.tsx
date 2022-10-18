import React, { ButtonHTMLAttributes } from "react";
import styles from "../styles/components/Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
  size?: "large";
  centered?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  className,
  onClick,
  size,
  color = "primary",
  type = "button",
  centered = false,
  fullWidth = false,
  ...props
}: Props) {
  const classes = `${styles.button} ${className}  ${
    centered ? styles["centered"] : ""
  } ${fullWidth ? styles["full-width"] : ""} ${styles[color]} ${
    size ? styles[size] : ""
  }`;

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
