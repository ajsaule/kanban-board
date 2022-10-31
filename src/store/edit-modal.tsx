import { createContext, useState } from "react";

type EditModalType = {
  isEditTaskOpen: boolean;
  isEditColOpen: boolean;
  isEditBoardOpen: boolean;
  toggleEditBoardModal: () => void;
  toggleEditColModal: () => void;
  toggleEditTaskModal: () => void;
  onEditClose: () => void;
  onEditColClose: () => void;
  onEditBoardClose: () => void;
};

const EditModalContext = createContext<EditModalType>({
  isEditTaskOpen: false,
  isEditColOpen: false,
  isEditBoardOpen: false,
  toggleEditBoardModal: () => {},
  toggleEditColModal: () => {},
  toggleEditTaskModal: () => {},
  onEditClose: () => {},
  onEditColClose: () => {},
  onEditBoardClose: () => {},
});

type PropsType = { children: React.ReactNode };

export const EditModalProvider = ({ children }: PropsType) => {
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [isEditColOpen, setIsEditColOpen] = useState(false);
  const [isEditBoardOpen, setIsEditBoardOpen] = useState(false);

  const toggleEditTaskModal = (): void => setIsEditTaskOpen((prev) => !prev);
  const toggleEditColModal = (): void => setIsEditColOpen((prev) => !prev);
  const toggleEditBoardModal = (): void => setIsEditBoardOpen((prev) => !prev);

  const onEditClose = (): void => setIsEditTaskOpen(false);
  const onEditColClose = (): void => setIsEditColOpen(false);
  const onEditBoardClose = (): void => setIsEditBoardOpen(false);

  return (
    <EditModalContext.Provider
      value={{
        isEditTaskOpen,
        isEditColOpen,
        toggleEditTaskModal,
        toggleEditColModal,
        onEditClose,
        onEditColClose,
        toggleEditBoardModal,
        onEditBoardClose,
        isEditBoardOpen,
      }}
    >
      {children}
    </EditModalContext.Provider>
  );
};

export default EditModalContext;
