import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const location = useLocation();

  const [headerTheme, setHeaderTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <AppContext.Provider
      value={{ currentPage, setCurrentPage, headerTheme, setHeaderTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;
