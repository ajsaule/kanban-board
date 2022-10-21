import { createContext, useCallback, useEffect, useState } from "react";

type ModalType = {
  isOpen: boolean;
  toggleModal: () => void;
  onClose: () => void;
};

const ModalContext = createContext<ModalType>({
  isOpen: false,
  toggleModal: () => {},
  onClose: () => {},
});

type PropsType = { children: React.ReactNode };

export const ModalProvider = ({ children }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const onClose = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        toggleModal,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
