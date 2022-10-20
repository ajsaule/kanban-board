import React from "react";
import Select, { StylesConfig, GroupBase, OptionsOrGroups } from "react-select";

type PropTypes = {
  defaultValue?: string;
  options:
    | OptionsOrGroups<string, GroupBase<string>>
    | undefined
    | [
        { value: string; label: string },
        { value: string; label: string },
        { value: string; label: string }
      ];
};

export const DropDown = ({ defaultValue, options }: PropTypes) => {
  const colorStyles:
    | StylesConfig<string, false, GroupBase<string>>
    | undefined = {
    // control: () => ({
    //   width: "100%",
    //   color: "white",
    //   borderRadius: "5px",
    //   backgroundColor: "#2B2C37",
    //   border: "1px solid #635FC7",
    // }),
    // option: (state) => ({
    //   backgroundColor: state.isSelected
    //     ? "#635FC7"
    //     : state.isHovered
    //     ? "#635FC7"
    //     : "",
    // }),
    menu: () => ({
      position: "absolute",
      top: "45px",
      width: "100%",
      background: "#20212C",
      boxShadow: "0px 10px 20px rgba(54, 78, 126, 0.25)",
      borderRadius: "8px",
    }),
    // input: () => ({ }),
    // placeholder: () => ({  }),
    // singleValue: () => ({ backgroundColor: "#635FC7" }),
  };

  return (
    <Select
      isSearchable={false}
      defaultValue={defaultValue}
      options={options}
      styles={colorStyles}
    />
  );
};
