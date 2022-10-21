import { createContext, useCallback, useEffect, useState } from "react";

type EditModalType = {
  isEditOpen: boolean;
  toggleEditModal: () => void;
  onEditClose: () => void;
};

const EditModalContext = createContext<EditModalType>({
  isEditOpen: false,
  toggleEditModal: () => {},
  onEditClose: () => {},
});

type PropsType = { children: React.ReactNode };

export const EditModalProvider = ({ children }: PropsType) => {
  const [isEditOpen, setEditIsOpen] = useState(false);

  const toggleEditModal = (): void => setEditIsOpen((prev) => !prev);

  const onEditClose = (): void => setEditIsOpen(false);

  return (
    <EditModalContext.Provider
      value={{
        isEditOpen,
        toggleEditModal,
        onEditClose,
      }}
    >
      {children}
    </EditModalContext.Provider>
  );
};

export default EditModalContext;
