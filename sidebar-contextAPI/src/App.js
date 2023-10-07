import React, { createContext, useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { AppContextProvider } from "./context";

function App() {
  return (
    <AppContextProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppContextProvider>
  );
}

export default App;
