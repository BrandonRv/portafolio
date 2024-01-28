import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ProjectsData from "../../db/porfolio.json";

export function ProjectPage() {
  document.title = "Brandon Rivera - Inicio";
  let params = useParams();

  try {
    //params.pageId
    const { projects } = ProjectsData;
    const project = projects.find((item) => item.projectId === params.pageId);

    const { title, desc, client, image } = project;

    const Data = require("../../db/projects/" + params.pageId);

    return (
      <div>
        <section className="cta-section theme-bg-light py-5">
          <div className="container single-col-max-width">
            <h2 className="heading text-center">Case Study: {client}</h2>
          </div>
        </section>

        <section className="project px-3 py-5 p-md-5">
          <div className="container">
            <div className="project-meta theme-bg-light p-4">
              <div className="row g-4 g-lg-5">
                <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                  <img
                    className="project-thumb img-fluid rounded"
                    src={`../${image}`}
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
                  <div className="client-info">
                    <h3 className="client-name font-weight-bold mb-4">
                      {title}
                    </h3>
                    <ul className="client-meta list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-industry fa-fw me-2"></i>
                        <strong>Industry:</strong> {Data.industry}
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-users fa-fw me-2"></i>
                        <strong>Size:</strong> {Data.size}
                      </li>
                      <li className="mb-2">
                        <strong>
                          <i className="fas fa-link fa-fw me-2"></i>Website:
                        </strong>{" "}
                        {Data.urls.map((data, index) => (
                          <a
                            key={index}
                            className="theme-link"
                            href={data.url}
                            target="_blank"
                          >
                            {data.title}{" "}
                          </a>
                        ))}
                      </li>
                    </ul>
                    <div className="client-bio mb-4">{desc}</div>
                    <h4 className="subheading mb-3">Project Requirements</h4>
                    <ul className="mb-0">
                      {Data.requirements.map((data, index) => (
                        <li key={index} className="mb-2">
                          {data}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-sections py-5">
              <div className="project-section mb-5">
                <h3 className="project-section-title mb-3">Project Overview</h3>
                <p>{Data.project_overview}</p>
              </div>

              <div className="project-section mb-5">
                <h3 className="project-section-title">The Challenge</h3>
                {Data.the_challenge.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>

              <div className="project-section mb-5">
                <h3 className="project-section-title">
                  The Approach &amp; Solution
                </h3>
                {Data.the_solution.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
                <ul className="mb-0">
                  {Data.technologies.map((data, index) => (
                    <li key={index} className="mb-2">
                      {data}
                    </li>
                  ))}
                </ul>
                <div className="row mt-5">
                  {Data.images.map((data, index) => (
                    <div className="col-12 col-lg-6 mb-5" key={index}>
                      <img
                        className="img-fluid rounded"
                        src={data}
                        alt="image"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-section mb-5">
                <h3 className="project-section-title mb-3">The Results</h3>

                <div className="metrics mb-4">
                  <div className="row">
                    {Data.results.map((data, index) => (
                      <div className="metric col-6 col-xl-3 mb-3" key={index}>
                        <div className="inner p-3 theme-bg-light">
                          <div className="metric-name">{data.title}</div>
                          <div className="metric-data mb-2">
                            {data.value}{" "}
                            <span className="unit">{data.note}</span>
                          </div>
                          <div className="metric-desc">{data.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p>{Data.result_note}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="promo-section theme-bg-light py-5 text-center">
          <div className="container single-col-max-width">
            <h2 className="title">Do you have any questions to ask me?</h2>
            <p>
              If you want to know more about me and my projects or you are
              interested in talking with me you can contact me through the
              following link
            </p>
            <div className="text-center">
              <a
                className="btn btn-primary"
                href="contact.html"
                target="_blank"
              >
                <i className="fas fa-paper-plane me-2"></i>Hire Me
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  } catch {
    return <Navigate to={"/portfolio"} replace />;
  }
};

export default ProjectPage;
