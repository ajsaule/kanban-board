import React, { ButtonHTMLAttributes } from "react";
import VerticalEllipsis from "./svgs/Dots";
import styles from "../styles/components/Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | "transparent";
  variant?: "dots";
  size?: "large";
  centered?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  className,
  onClick,
  size,
  variant,
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
  } ${variant ? styles[variant] : ""}`;

  if (variant === "dots") {
    return (
      <button className={classes} onClick={onClick}>
        <VerticalEllipsis />
      </button>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
