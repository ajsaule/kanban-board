import { createContext, useCallback, useEffect, useState } from "react";

type ViewModalType = {
  isViewOpen: boolean;
  toggleViewModal: () => void;
  onViewClose: () => void;
  selectedTask: {};
  setSelectedTask: (task: { task: {}; completedSubtasks: number }) => void;
};

const ViewModalContext = createContext<ViewModalType>({
  isViewOpen: false,
  toggleViewModal: () => {},
  onViewClose: () => {},
  selectedTask: {},
  setSelectedTask: () => {},
});

type PropsType = { children: React.ReactNode };

export const ViewModalProvider = ({ children }: PropsType) => {
  const [isViewOpen, setEditIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  const toggleViewModal = (): void => setEditIsOpen((prev) => !prev);

  const onViewClose = (): void => setEditIsOpen(false);

  return (
    <ViewModalContext.Provider
      value={{
        isViewOpen,
        toggleViewModal,
        onViewClose,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </ViewModalContext.Provider>
  );
};

export default ViewModalContext;
