import { React, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ScrollToTop from "../helpers/ScrollToTop";
import { ViewProvider } from "../helpers/ViewProvider";
//import "../styles/theme-7.scss";
import "animate.css";
import {
  PortfolioPage,
  ResumePage,
  BlogPage,
  ContactPage,
  AboutPage,
  Navbar,
  Footer,
  ProjectPage,
  Themes,
} from "../pages";

export function AppRouter() {
  
  return (
    <BrowserRouter>
      <ViewProvider>
        <Navbar />
        <div className="main-wrapper">
          <ScrollToTop />
          <Routes>
            <Route path={"/portafolio/project"} element={<PortfolioPage />} />
            <Route path="/portafolio/project/:pageId" element={<ProjectPage />} />
            <Route path={"/portafolio/resume"} element={<ResumePage />} />
            <Route path={"/portafolio/blog"} element={<BlogPage />} />
            <Route path={"/portafolio/contact"} element={<ContactPage />} />
            <Route path={"/portafolio"} element={<AboutPage />} />
            <Route path="*" element={<Navigate to={"/portafolio"} replace />} />
          </Routes>
          <Footer />
          <Themes />
        </div>
      </ViewProvider>
    </BrowserRouter>
  );
}
export default AppRouter;
