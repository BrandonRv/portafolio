import { NavLink, useNavigate } from "react-router-dom";
import Links from "../../db/links.json";
import foto from "../../assets/images/profile.png";
import { React } from "react";
import { useViewContext } from "../../helpers/ViewProvider";
const { links } = Links;

export function Navbar() {

  const { handleLinkClick, activeLinkId, handleDarkMode, darkMode } = useViewContext();
  const navigate = useNavigate();

  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <NavLink className="no-text-decoration" to="/portfolio">
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
          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <div className="dark-mode-toggle rounded-circle mb-4">
                <img
                  className="profile-image mb-3 p-2 bg-white rounded-circle mx-auto"
                  src={foto}
                  alt="foto"
                />
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
                  idde="/portfolio"
                  className={activeLinkId && activeLinkId == "/portfolio" ? "" : "nav-link"}
                  onClick={handleLinkClick}
                  to="/portfolio"
                >
                  <i className="fas fa-user fa-fw me-2"></i> About Me
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  idde="/portfolio/project"
                  className={activeLinkId && activeLinkId == "/portfolio/project" ? "" : "nav-link active"}
                  onClick={handleLinkClick}
                  to="/portfolio/project"
                >
                  <i className="fas fa-laptop-code fa-fw me-2"></i> Project
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  idde="/portfolio/resume"
                  className={activeLinkId && activeLinkId === "/portfolio/resume" ? "" : "nav-link active"}
                  onClick={handleLinkClick}
                  to="/portfolio/resume"
                >
                  <i className="fas fa-file-alt fa-fw me-2"></i> Resumen CV
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  idde="/portfolio/blog"
                  style={{ padding: "5px", margin: "6px" }}
                  className={activeLinkId && activeLinkId === "/portfolio/blog" ? "" : "nav-link active"}
                  onClick={handleLinkClick}
                  to="/portfolio/blog"
                >
                  <i className="fas fa-blog fa-fw me-2"></i> Blog
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  idde="/portfolio/contact"
                  className={activeLinkId && activeLinkId === "/portfolio/contact" ? "" : "nav-link active"}
                  to="/portfolio/contact"
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
                idde="/portfolio/contact"
                className="btn btn-primary"
                onClick={(e) => { handleLinkClick(e); navigate("/portfolio/contact"); }}
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
