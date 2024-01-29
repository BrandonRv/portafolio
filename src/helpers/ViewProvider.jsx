import { useLocation, useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from "react";

const ViewContext = createContext();

export const useViewContext = () => useContext(ViewContext); //management

export const ViewProvider = ({ children }) => {

  const [activeTheme, setActiveTheme] = useState(localStorage.getItem("themess") ? localStorage.getItem("themess") : './portafolio/theme-7.scss'); //themes ? themes :
  const [activeLinkId, setActiveLinkId] = useState(sessionStorage.getItem("dir") ? sessionStorage.getItem("dir") : "./portafolio");
  const navigate = useNavigate();
  const location = useLocation();

  const handleThemeClick = async (e) => {

     const newTheme = await e.target.getAttribute('data-style');
     //setActiveLinkId(sessionStorage.getItem("dir"));
     setActiveTheme(newTheme);
     localStorage.setItem("themess", newTheme)
 };

  const handleLinkClick = async (e) => {
    const linkId = await e.target.getAttribute("idde");
    setActiveLinkId(linkId);
    sessionStorage.setItem("dir", linkId);
    console.log(location.pathname);
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = activeTheme;
    document.head.appendChild(link);
    return () => {
        link.remove();
        setActiveLinkId(sessionStorage.getItem("dir"));
    };
}, [ activeTheme ]);

const contextValue = {
  handleLinkClick,
  activeLinkId,
  handleThemeClick,
};

return (
  <ViewContext.Provider value={contextValue}>
    {children}
  </ViewContext.Provider>
);
};
