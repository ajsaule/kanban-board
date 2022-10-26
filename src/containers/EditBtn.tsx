import Dropdown from "../components/Dropdown";
import { DropdownItem } from "../models/type";

type Props = { type: "task" | "board" };

const EditBtn = ({ type = "task" }: Props) => {
  const boardItems: DropdownItem[] = [
    { name: "Edit board", onClick: () => {} },
    { name: "Delete board", onClick: () => {}, color: "secondary" },
  ];

  const taskItems: DropdownItem[] = [
    { name: "Edit task", onClick: () => {} },
    { name: "Delete task", onClick: () => {}, color: "secondary" },
  ];

  if (type === "board") return <Dropdown items={boardItems} />;

  return <Dropdown items={taskItems} />;
};

export default EditBtn;
