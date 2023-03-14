import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContext.Provider value={{ openSidebar, isOpen }}>
      {children}
    </AppContext.Provider>
  );
};

const useGolbalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGolbalContext };
