import isotope from "isotope-layout";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProjectsData from "../../db/porfolio.json";
import { useViewContext } from "../../helpers/ViewProvider";
import { ProjectItem } from "./ProjectItem";
const { projects } = ProjectsData;

export function PortfolioPage() {
  document.title = "Brandon Rivera - Portafolio";
  const { handleLinkClick } = useViewContext();

  const imagesLoaded = () => {
    const isotopeContainer = document.querySelector(".isotope");
    const filterItems = document.querySelectorAll("#filters .type");

    var iso = new isotope(isotopeContainer, {
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
    });

    // filter items on click
    filterItems.forEach((filterItem) => {
      filterItem.addEventListener("click", (e) => {
        let filterValue = filterItem.getAttribute("data-filter");

        // arrange - https://isotope.metafizzy.co/methods.html
        iso.arrange({ filter: filterValue });

        //toggle active class
        for (let siblingFilterItem of filterItem.parentNode.children) {
          siblingFilterItem.classList.remove("active");
        }
        filterItem.classList.add("active");
      });
    });
  };

  useEffect(() => {
    imagesLoaded();
  });

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portafolio</h2>
          <div className="intro">
            <p>
              Bienvenido a mi portafolio en línea, donde podrás encontrar
              algunos de los proyectos que he realizado, los lenguajes y
              frameworks que utilizo, y algunas curiosidades.
            </p>
          </div>
          <NavLink
            idde="/portfolio/contact"
            className="btn btn-primary"
            to="/portfolio/contact"
            onClick={handleLinkClick}
            //target="_blank"
          >
            <i className="fas fa-paper-plane me-2"></i> Escribir
          </NavLink>
        </div>
      </section>

      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="text-center">
            <ul id="filters" className="filters mb-5 mx-auto   ps-0">
              <li className="type active mb-3 mb-lg-0" data-filter="*">
                All
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".electronic">
                Electronics
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".frontend">
                Frontend
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".backend">
                Backend
              </li>
            </ul>
          </div>
          {/* {projects.length > 0 ? ( */}
          <div className="project-cards row isotope">
            {projects.map((project, index) => (
              <ProjectItem key={index} datos={project} />
            ))}
          </div>
          {/* ) : (
            <h2 className="text-center">
              Agregaré alguna idea próximamente ... <br /><br /><br />{" "}
              <br /> <br /> <br />
            </h2>
          )} */}
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
