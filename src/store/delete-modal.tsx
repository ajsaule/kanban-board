import React, { createContext, useContext, useState } from "react";
import { EditOptionsType } from "../models/type";
import ViewModalContext from "./view-modal";

type DeleteType = {
  show: boolean;
  type: EditOptionsType;
  open: (type: EditOptionsType) => void;
  close: () => void;
};

const DeleteModalContext = createContext<DeleteType>({
  show: false,
  type: "task",
  open: () => {},
  close: () => {},
});

export const DeleteModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState<EditOptionsType>("task");
  const { onViewClose, toggleViewModal } = useContext(ViewModalContext);

  const open = (type: EditOptionsType) => {
    if (type === "task") onViewClose();
    setType(type);
    setShow(true);
  };

  const close = () => {
    if (type === "task") toggleViewModal();
    setShow(false);
  };

  return (
    <DeleteModalContext.Provider
      value={{
        show,
        type,
        open,
        close,
      }}
    >
      {children}
    </DeleteModalContext.Provider>
  );
};

export default DeleteModalContext;
