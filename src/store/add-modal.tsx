import { createContext, useCallback, useEffect, useState } from "react";

type AddModalType = {
  isAddOpen: boolean;
  isAddColOpen: boolean;
  toggleAddModal: () => void;
  onAddClose: () => void;
};

const AddModalContext = createContext<AddModalType>({
  isAddOpen: false,
  isAddColOpen: false,
  toggleAddColModal: () => {},
  toggleAddModal: () => {},
  onAddClose: () => {},
});

type PropsType = { children: React.ReactNode };

export const AddModalProvider = ({ children }: PropsType) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isAddColOpen, setIsAddColOpen] = useState(false);

  const toggleAddModal = (): void => setIsAddOpen((prev) => !prev);
  const toggleAddColModal = (): void => setIsAddColOpen((prev) => !prev);

  const onAddClose = (): void => setIsAddOpen(false);
  const onAddColClose = (): void => setIsAddColOpen(false);

  return (
    <AddModalContext.Provider
      value={{
        isAddOpen,
        isAddColOpen,
        toggleAddModal,
        toggleAddColModal,
        onAddClose,
        onAddColClose,
      }}
    >
      {children}
    </AddModalContext.Provider>
  );
};

export default AddModalContext;
