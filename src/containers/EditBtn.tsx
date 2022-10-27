import { useContext } from "react";
import Dropdown from "../components/Dropdown";
import { DropdownItem, EditOptionsType } from "../models/type";
import DeleteModalContext from "../store/delete-modal";

const EditBtn = ({ type = "task" }: { type: EditOptionsType }) => {
  const { open } = useContext(DeleteModalContext);

  const boardItems: DropdownItem[] = [
    { name: "Edit board", onClick: () => {} },
    {
      name: "Delete board",
      onClick: open.bind(null, "board"),
      color: "secondary",
    },
  ];

  const taskItems: DropdownItem[] = [
    { name: "Edit task", onClick: () => {} },
    {
      name: "Delete task",
      onClick: open.bind(null, "task"),
      color: "secondary",
    },
  ];

  if (type === "board") return <Dropdown items={boardItems} />;

  return <Dropdown items={taskItems} />;
};

export default EditBtn;
