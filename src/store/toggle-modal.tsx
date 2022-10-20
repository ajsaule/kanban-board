import { createContext, useCallback, useEffect, useState } from "react";

type ToggleModalType = {
  isOpen: boolean;
  toggleModal: () => void;
  onClose: () => void;
};

const ToggleModalContext = createContext<ToggleModalType>({
  isOpen: false,
  toggleModal: () => {},
  onClose: () => {},
});

type PropsType = { children: React.ReactNode };

export const ToggleModalProvider = ({ children }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const onClose = () => setIsOpen(false);

  return (
    <ToggleModalContext.Provider
      value={{
        isOpen,
        toggleModal,
        onClose,
      }}
    >
      {children}
    </ToggleModalContext.Provider>
  );
};

export default ToggleModalContext;
