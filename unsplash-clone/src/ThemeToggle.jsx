import { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkMode } = useGlobalContext();
  return (
    <div className="toggle-container">
      <div className="toggle-icon" onClick={toggleDarkMode}>
        {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
      </div>
    </div>
  );
};
export default ThemeToggle;
