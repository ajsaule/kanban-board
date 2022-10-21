import { createContext, useCallback, useEffect, useState } from "react";

type AddModalType = {
  isAddOpen: boolean;
  toggleAddModal: () => void;
  onAddClose: () => void;
};

const AddModalContext = createContext<AddModalType>({
  isAddOpen: false,
  toggleAddModal: () => {},
  onAddClose: () => {},
});

type PropsType = { children: React.ReactNode };

export const AddModalProvider = ({ children }: PropsType) => {
  const [isAddOpen, setAddIsOpen] = useState(false);

  const toggleAddModal = (): void => setAddIsOpen((prev) => !prev);

  const onAddClose = (): void => setAddIsOpen(false);

  return (
    <AddModalContext.Provider
      value={{
        isAddOpen,
        toggleAddModal,
        onAddClose,
      }}
    >
      {children}
    </AddModalContext.Provider>
  );
};

export default AddModalContext;
