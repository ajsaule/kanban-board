import React, { useContext } from "react";
import Select, { StylesConfig, GroupBase, OptionsOrGroups } from "react-select";
import { OptionType } from "../models/type";
import ThemeContext from "../store/theme";

type PropTypes = {
  defaultValue?: string;
  options: OptionType[];
};

const Dropdown = ({ defaultValue, options }: PropTypes) => {
  const { isDark } = useContext(ThemeContext);

  const colorStyles:
    | StylesConfig<string, false, GroupBase<string>>
    | undefined = {
    control: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      width: "100%",
      borderRadius: "5px",
      backgroundColor: isDark ? "#2B2C37" : "white",
      boxShadow: "none",
      borderColor: isFocused ? "#635FC7" : "rgba(130, 143, 163, 0.25)",
      "&:hover": {
        borderColor: "#635FC7",
        cursor: "pointer",
      },
    }),
    option: (baseStyles, { isSelected }) => ({
      color: isDark ? "white" : "black",
      padding: "8px 12px",
      background: isSelected ? "#635FC7" : "",
      "&:hover": {
        background: "#625fc73d",
        cursor: "pointer",
      },
    }),
    menu: () => ({
      position: "absolute",
      top: "45px",
      width: "100%",
      background: isDark ? "#20212C" : "white",
      boxShadow: "0px 10px 20px rgba(54, 78, 126, 0.25)",
      borderRadius: "5px",
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: isDark ? "white" : "black",
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
    }),
    dropdownIndicator: () => ({
      display: "flex",
      padding: "8px",
      color: "#635FC7 !important",
    }),
  };

  return (
    <Select
      isSearchable={false}
      // defaultValue={defaultValue}
      onChange={(option) => {
        console.log(option);
      }}
      options={options}
      styles={colorStyles}
    />
  );
};

export default Dropdown;
