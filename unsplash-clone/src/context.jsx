import { createContext, useContext, useState } from "react";
import customFetch from "./customFetch";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target[0].value);
    setFormSubmit(!formSubmit);
  };

  const toggleDarkMode = () => {
    let body = document.querySelector("body");

    setIsDarkTheme(!isDarkTheme);
    body.classList.toggle("dark-theme");
  };

  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        toggleDarkMode,
        searchTerm,
        setSearchTerm,
        handleSubmit,
        formSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
