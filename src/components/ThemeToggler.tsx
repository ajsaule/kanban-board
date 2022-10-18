/* eslint-disable no-unused-vars */
import DarkThemeIcon from "./svgs/DarkThemeIcon";
import LightThemeIcon from "./svgs/LightThemeIcon";
import { useContext } from "react";
import ThemeContext from "../store/theme";
import styles from "../styles/components/ThemeToggler.module.scss";

const ThemeToggler = () => {
  const { isDark, toggleTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <div className={styles["toggle-menu"]}>
      <div className={styles["page-theme-container"]}>
        <LightThemeIcon onClick={() => setIsDarkTheme(false)} />
        <label className={styles["switch"]}>
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => toggleTheme()}
          />
          <span className={`${styles["slider"]} ${styles["round"]}`}></span>
        </label>
        <DarkThemeIcon onClick={() => setIsDarkTheme(true)} />
      </div>
    </div>
  );
};

export default ThemeToggler;
