import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useAppContext } from "./context";

const Sidebar = () => {
  let { showSidebar, setShowSidebar } = useAppContext();

  return (
    <aside className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" />
        <button
          className="close-btn"
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
