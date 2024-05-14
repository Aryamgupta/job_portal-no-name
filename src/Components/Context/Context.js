
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const location = useLocation();

  const [headerTheme, setHeaderTheme] = useState("home");
  const [currentPage, setCurrentPage] = useState("Home");


  useEffect(() => {
    if(location.pathname == "/"){
      setHeaderTheme("home")
    }
    else{
      setHeaderTheme("other")
    }
  }, [location])

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
