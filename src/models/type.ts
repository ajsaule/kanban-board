export type OptionType = {
  value: string;
  label: string;
};

export type DropdownItem = {
  name: string;
  onClick: () => void;
  color?: "primary" | "secondary";
};

export type EditOptionsType = "task" | "board";
