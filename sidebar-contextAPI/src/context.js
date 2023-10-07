import React, { useState, useContext, createContext } from "react";

let AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  let [showModal, setShowModal] = useState(false);
  let [showSidebar, setShowSidebar] = useState(false);
  return (
    <AppContext.Provider
      value={{ showModal, setShowModal, showSidebar, setShowSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
