import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageID, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageID, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppProvider;

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
