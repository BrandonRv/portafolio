import { React } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ScrollToTop from "../helpers/ScrollToTop";
import { ViewProvider } from "../helpers/ViewProvider";
import "animate.css";
import {
  PortfolioPage,
  ResumePage,
  BlogPage,
  ContactPage,
  AboutPage,
  Navbar,
  Footer,
  //ProjectPage,
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
            <Route path={"/portfolio/project"} element={<PortfolioPage />} />
            {/* <Route path="portfolio/project/:pageId" element={<ProjectPage />} /> */}
            <Route path={"/portfolio/resume"} element={<ResumePage />} />
            <Route path={"/portfolio/blog"} element={<BlogPage />} />
            <Route path={"/portfolio/contact"} element={<ContactPage />} />
            <Route path={"/portfolio"} element={<AboutPage />} />
            <Route path="*" element={<Navigate to={"/portfolio"} replace />} />
          </Routes>
          <Footer />
        </div>
        <Themes />
      </ViewProvider>
    </BrowserRouter>
  );
}
export default AppRouter;
