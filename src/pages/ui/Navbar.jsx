import { NavLink, useNavigate } from "react-router-dom";
import Links from "../../db/links.json";
import foto from "../../assets/images/profile.png";
import { React, useEffect, useState } from "react";
import { useViewContext } from "../../helpers/ViewProvider";
//import { Themes } from "./Themes";
const { links } = Links;

export function Navbar() {
  const documentBody = document.getElementsByTagName("body")[0];
  const dMode = JSON.parse(localStorage.getItem("dark-mode")) === true;
  const [darkMode, setDarkMode] = useState(!dMode);

  const { handleLinkClick, activeLinkId } = useViewContext();
  const navigate = useNavigate();

  const handleDarkMode = () => {
    console.log("se activa")
    setDarkMode(!darkMode);
    localStorage.setItem("dark-mode", darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      documentBody.classList.add("dark-mode");
    } else {
      documentBody.classList.remove("dark-mode");
    }
  }, [darkMode, activeLinkId]);

  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <NavLink idde="/portafolio" className="no-text-decoration" to="/portafolio" onClick={handleLinkClick}>
            Brandon Rivera
          </NavLink>
        </h1>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div idde="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <div className="dark-mode-toggle rounded-circle mb-4">
                <img
                  className="profile-image mb-3 p-2 bg-white rounded-circle mx-auto"
                  src={foto}
                  alt="foto"
                />
                {/* className="fas fa-paper-plane me-2" */}
              </div>
              <div className="bio mb-3">
                Hola, mi nombre es Brandon Rivera <br /> Soy microelectrónico y
                trabajo como Desarrollador Web.
                <br /> ¡Bienvenido a mi sitio web personal!
              </div>
              <ul className="social-list list-inline py-2 mx-auto">
                <li className="list-inline-item">
                  <a href={links.linkedin} target="_blank">
                    <i className="fab fa-linkedin-in fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={links.github} target="_blank">
                    <i className="fab fa-github-alt fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={links.instagram} target="_blank">
                    <i className="fab fa-instagram fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={links.twitter} target="_blank">
                    <i className="fab fa-twitter-x fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={links.whatsapp} target="_blank">
                    <i className="fab fa-whatsapp fa-fw"></i>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
            <ul className="navbar-nav flex-column text-left">
              <li className="nav-item">
                <NavLink
                  idde="/portafolio"
                  className={activeLinkId && activeLinkId && sessionStorage.getItem("dir") && sessionStorage.getItem("dir") == "/portafolio" ? "" : "nav-link active"}
                  //color="gray"
                  onClick={handleLinkClick}
                  to="/portafolio"
                >
                  <i className="fas fa-user fa-fw me-2"></i> About Me
                  <span className="sr-only">(current)</span> 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  idde="/portafolio/project"
                  className={activeLinkId && activeLinkId && sessionStorage.getItem("dir") && sessionStorage.getItem("dir") == "/portafolio/project" ? "" : "nav-link active"}
                  onClick={handleLinkClick}
                  to="/portafolio/project"
                >
                  <i className="fas fa-laptop-code fa-fw me-2"></i> Project
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  idde="/portafolio/resume"
                  className={activeLinkId && activeLinkId && sessionStorage.getItem("dir") && sessionStorage.getItem("dir") == "/portafolio/resume" ? "" : "nav-link active"}
                  onClick={handleLinkClick}
                  to="/portafolio/resume"
                >
                  <i className="fas fa-file-alt fa-fw me-2"></i> Resumen CV
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  idde="/portafolio/blog"
                  style={{ padding: "5px", margin: "6px" }}
                  className={activeLinkId && activeLinkId && sessionStorage.getItem("dir") && sessionStorage.getItem("dir") == "/portafolio/blog" ? "" : "nav-link active"}
                  onClick={handleLinkClick}
                  to="/portafolio/blog"
                >
                  <i className="fas fa-blog fa-fw me-2"></i> Blog
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  idde="/portafolio/contact"
                  className={activeLinkId && activeLinkId && sessionStorage.getItem("dir") && sessionStorage.getItem("dir") == "/portafolio/contact" ? "" : "nav-link active"}
                  to="/portafolio/contact"
                  onClick={handleLinkClick}
                >
                  <i className="fas fa-envelope-open-text fa-fw me-2"></i>{" "}
                  Contact
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
            <div className="my-2 mt-4">
              <a
                idde="/portafolio/contact"
                className="btn btn-primary"
                onClick={(e) => { handleLinkClick(e); navigate("/portafolio/contact"); }}
                //target="_blank"
              >
                <i className="fas fa-paper-plane me-2"></i> Escribir
              </a>
            </div>

            <div className="dark-mode-toggle text-center w-100">
              <hr className="mb-4" />
              <h4 className="toggle-name mb-3 ">
                <i className="fas fa-adjust me-1"></i>Dark Mode
              </h4>

              <input
                className="toggle"
                id="darkmode"
                type="checkbox"
                checked={darkMode}
                onChange={handleDarkMode}
              />
              <label
                className="toggle-btn mx-auto mb-0"
                htmlFor="darkmode"
              ></label>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
