import React, { createContext, useState } from "react";

type SidebarType = {
  isHidden: boolean;
  showSidebar: () => void;
  hideSidebar: () => void;
};

const initialState: SidebarType = {
  isHidden: false,
  showSidebar: () => {},
  hideSidebar: () => {},
};

const SidebarContext = createContext<SidebarType>(initialState);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const showSidebar = () => setIsHidden(false);
  const hideSidebar = () => setIsHidden(true);

  return (
    <SidebarContext.Provider value={{ isHidden, showSidebar, hideSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
