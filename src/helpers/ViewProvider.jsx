import { useLocation } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from "react";

const ViewContext = createContext();

export const useViewContext = () => useContext(ViewContext); //management

export const ViewProvider = ({ children }) => {

  const themes = localStorage.getItem("themess");
  const [activeTheme, setActiveTheme] = useState(themes ? themes : '/assets/styles/theme-7.scss');
  const [activeLinkId, setActiveLinkId] = useState(sessionStorage.getItem("dir"));
  const documentBody = document.getElementsByTagName("body")[0];
  const dMode = JSON.parse(localStorage.getItem("dark-mode")) === true;
  const [darkMode, setDarkMode] = useState(!dMode);
  const location = useLocation();

  const handleThemeClick = async (e) => {
    const newTheme = await e.target.getAttribute('data-style');
    setActiveTheme(newTheme);
    localStorage.setItem("themess", newTheme)
  };

  const handleLinkClick = async (e) => {
    const linkId = await e.target.getAttribute("idde");
    setActiveLinkId(linkId);
    sessionStorage.setItem("dir", linkId);
    //console.log(location.pathname);
  };

  const handleDarkMode = () => {
    console.log("se activa")
    setDarkMode(!darkMode);
    localStorage.setItem("dark-mode", darkMode);
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = activeTheme;
    document.head.appendChild(link);
    return () => {
    link.remove();
    };
  }, [activeTheme]);

  useEffect(() => {
    if (darkMode) {
      documentBody.classList.add("dark-mode");
    } else {
      documentBody.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {

    const refresh = () => {
      setActiveLinkId(location.pathname)
    }
    refresh();
  }, [activeLinkId])


  const contextValue = {
    handleLinkClick,
    activeLinkId,
    handleThemeClick,
    darkMode,
    handleDarkMode,
  };

  return (
    <ViewContext.Provider value={contextValue}>
      {children}
    </ViewContext.Provider>
  );
};
