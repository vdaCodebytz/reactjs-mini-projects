import React from "react";
import { FaBars } from "react-icons/fa";

import { useAppContext } from "./context";

const Home = () => {
  let context = useAppContext();
  let { setShowModal, setShowSidebar } = context;
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
