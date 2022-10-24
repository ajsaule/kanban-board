import { createContext, useCallback, useEffect, useState } from "react";

type AddModalType = {
  isAddTaskOpen: boolean;
  isAddColOpen: boolean;
  isAddBoardOpen: boolean;
  toggleAddBoardModal: () => void;
  toggleAddColModal: () => void;
  toggleAddTaskModal: () => void;
  onAddClose: () => void;
  onAddColClose: () => void;
  onAddBoardClose: () => void;
};

const AddModalContext = createContext<AddModalType>({
  isAddTaskOpen: false,
  isAddColOpen: false,
  isAddBoardOpen: false,
  toggleAddBoardModal: () => {},
  toggleAddColModal: () => {},
  toggleAddTaskModal: () => {},
  onAddClose: () => {},
  onAddColClose: () => {},
  onAddBoardClose: () => {},
});

type PropsType = { children: React.ReactNode };

export const AddModalProvider = ({ children }: PropsType) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isAddColOpen, setIsAddColOpen] = useState(false);
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false);

  const toggleAddTaskModal = (): void => setIsAddTaskOpen((prev) => !prev);
  const toggleAddColModal = (): void => setIsAddColOpen((prev) => !prev);
  const toggleAddBoardModal = (): void => setIsAddBoardOpen((prev) => !prev);

  const onAddClose = (): void => setIsAddTaskOpen(false);
  const onAddColClose = (): void => setIsAddColOpen(false);
  const onAddBoardClose = (): void => setIsAddBoardOpen(false);

  return (
    <AddModalContext.Provider
      value={{
        isAddTaskOpen,
        isAddColOpen,
        toggleAddTaskModal,
        toggleAddColModal,
        onAddClose,
        onAddColClose,
        toggleAddBoardModal,
        onAddBoardClose,
        isAddBoardOpen,
      }}
    >
      {children}
    </AddModalContext.Provider>
  );
};

export default AddModalContext;
