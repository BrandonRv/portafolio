import React from "react";
import { NavLink } from "react-router-dom";
import { SkillItem } from "./SkillItem";
import { Projects } from "./Projects";
import { Blogs } from "./Blogs";
import profilelg from "../../assets/images/profilelg.jpeg"
import SkillsData from "../../db/skills.json";
import { useViewContext } from "../../helpers/ViewProvider";

const { skills } = SkillsData;

export function AboutPage() {

  document.title = "Brandon Rivera";
  const { handleLinkClick } = useViewContext();

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="about-me-section p-3 py-lg-5 px-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser row">
            <div className="col">
              <h2 className="name font-weight-bold mb-1">Brandon Rivera</h2>
              <div className="tagline mb-3">
                Junior Full-Stack / Computer and Phone Electronics Technician
              </div>
              <div className="bio mb-4">
                Soy un desarrollador web radicado en Palmira, Valle del Cauca. A
                lo largo de los años, me he especializado en distintas áreas
                técnicas en la reparación de telefonía, computadores y proyectos
                independientes. Después de siete años, me pasé a trabajar como
                desarrollador frontend y backend de aplicaciones web complejas y
                escalables. Siempre trato de estar a la vanguardia con las
                diferentes tecnologías, lenguajes y frameworks.
                <br />
              </div>
              <div className="mb-3">
                <NavLink idde="btn-project" className="btn btn-primary me-2 mb-3" onClick={handleLinkClick} to="/portfolio/project"
                >
                  <i className="fas fa-arrow-alt-circle-right me-2"></i>&#160;
                  &#160;
                  <span className="d-none d-md-inline">Ver</span> Portafolio
                </NavLink>
                &#160; &#160; &#160; &#160;
                <NavLink idde="btn-resume" className="btn btn-secondary mb-3" onClick={handleLinkClick} to="/portfolio/resume">
                  <i className="fas fa-file-alt me-2"></i>&#160; &#160;
                  <span className="d-none d-md-inline">Ver</span> Resumen CV
                </NavLink>
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <img
                style={{ width: "325px" }}
                className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                src={profilelg}
                alt="foto about"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="overview-section p-3 py-lg-4 px-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-3">Tecnologías & Frameworks</h2>
          <div className="row mt-5">
            {skills.map((skill, index) => (
              <SkillItem key={index} sk={skill} />
            ))}
          </div>
        </div>
      </section>
      <Projects />
      <Blogs />
    </div>
  );
}

export default AboutPage;
