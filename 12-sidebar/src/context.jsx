import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        closeSidebar,
        openSidebar,
        closeModal,
        openModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
