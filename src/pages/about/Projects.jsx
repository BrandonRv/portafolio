import React from "react";
import { NavLink } from "react-router-dom";
import { ProjectItem } from "./ProjectItem";
import ProjectsData from "../../db/porfolio.json";
const { projects } = ProjectsData;
import { useViewContext } from "../../helpers/ViewProvider";

export function Projects() {

  const { handleLinkClick } = useViewContext();

  if (projects.length === 0) {
    return <></>;
  }

  return (
    <div>
      <div className="container">
        <hr />
      </div>
      <section className="featured-section p-3 py-lg-4 px-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">
            Proyectos Recientes
          </h2>
          <div className="row">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectItem key={index} datos={project} />
            ))}
          </div>
          <div className="text-center py-3">
            <NavLink idde="/portfolio/project" to="/portfolio/project" className="btn btn-primary" onClick={handleLinkClick} >
              <i className="fas fa-arrow-alt-circle-right me-2"></i>&#160;&#160;
              Ver Portafolio
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
