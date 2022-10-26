import React from "react";
import Button from "./Button";
import { DropdownItem } from "../models/type";
import { getId } from "../utils/helper";
import styles from "../styles/components/Dropdown.module.scss";

type Props = {
  items: DropdownItem[];
};

const Dropdown = ({ items }: Props) => {
  return (
    <div className={styles["dropdown"]}>
      <Button variant="dots" className={styles["dropdown__btn"]} />

      <div className={styles["dropdown__content"]}>
        <ul className={styles["dropdown__list"]}>
          {items?.map((item) => (
            <li key={getId()}>
              <button
                className={`${styles["dropdown__item"]} ${
                  item.color ? styles[item.color] : ""
                }`}
                onClick={item.onClick}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
