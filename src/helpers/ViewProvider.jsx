import { useLocation } from 'react-router-dom';
import React, { createContext, useContext, useState } from "react";

const ViewContext = createContext();

export const useViewContext = () => useContext(ViewContext); //management

export const ViewProvider = ({ children }) => {

  const [activeLinkId, setActiveLinkId] = useState(sessionStorage.getItem("dir"));
  const location = useLocation();

//   if (location.pathname) {
//   if (location.pathname === "/portfolio") {
//     setActiveLinkId("btn-about");
//   } else if(location.pathname === "/portfolio/project") {
//     setActiveLinkId("btn-project");
//   } else if (location.pathname === "/portfolio/resume") {
//     setActiveLinkId("btn-resume");
//   } else if (location.pathname === "/portfolio/blog") {
//     setActiveLinkId("btn-blog");
//   } else if (location.pathname === "/portfolio/contact") {
//     setActiveLinkId("btn-contact");
//   }
// }

  const handleLinkClick = async (e) => {
    const linkId = await e.target.getAttribute("idde");
    setActiveLinkId(linkId);
    sessionStorage.setItem("dir", linkId);
    console.log(location.pathname);
  };

const contextValue = {
  handleLinkClick,
  activeLinkId,
};

return (
  <ViewContext.Provider value={contextValue}>
    {children}
  </ViewContext.Provider>
);
};
