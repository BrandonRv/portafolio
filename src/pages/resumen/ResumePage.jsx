import React from "react";
import datos from "../../db/resume.json";
import resumeprofile from "../../assets/images/resume-profile.png";

const { tel, mail, page, dir, pdf } = datos.datos;
export function ResumePage() {
  document.title = "Brandon Rivera - Resumen";
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading mb-3">Online Resume</h2>
          <a className="btn btn-primary" href={pdf} target="_blank">
            <i className="fas fa-file-pdf me-2"></i> Descargar la versión PDF
          </a>
        </div>
      </section>

      <div className="container resume-container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <div className="resume-header">
            <div className="row align-items-center">
              <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 className="resume-name mb-0 text-uppercase">
                  Brandon Rivera
                </h2>
                <div className="resume-tagline mb-3 mb-md-0">
                  Full-Stack Developer / Computer and Phone Electronics Technician
                </div>
              </div>
              <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="fas fa-phone-square fa-fw fa-lg me-2 "></i>
                    <a className="resume-link" href="tel:#">
                      {tel}
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-envelope-square fa-fw fa-lg me-2"></i>
                    <a className="resume-link" href="mailto:#">
                      {mail}
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-globe fa-fw fa-lg me-2"></i>
                    <a className="resume-link" href="#">
                      {page}
                    </a>
                  </li>
                  <li className="mb-0">
                    <i className="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>
                    {dir}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-intro py-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-3 col-xl-2 text-center">
                <img
                  className="resume-profile-image bg-white rounded-circle p-1 mb-3 mb-md-0 me-md-5 ms-md-0 rounded mx-auto"
                  src={resumeprofile}
                  alt="image"
                />
              </div>
              <div className="col text-start">
                <p className="mb-0">
                  Soy un desarrollador web. Estoy familiarizado con los
                  lenguajes de programación C, C++, JavaScript y PHP. Tengo
                  habilidades sólidas en React, NextJs, Laravel, Bootstrap,
                  TailwindCSS, Material UI, HTML, CSS3 y metodologías ágiles como
                  Scrum, etc. También me he destacado en la reparación,
                  mantenimiento y diagnóstico de dispositivos electrónicos,
                  acumulando 7 años de experiencia. Poseo un sólido conocimiento
                  en HVAC/R y una especialización técnica en mecatrónica
                  automotriz. Mi enfoque se centra en la resolución eficaz de
                  desafíos técnicos y la aplicación de soluciones eficientes en
                  estas áreas.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
                <section className="work-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Work Experiences
                  </h3>
                  <br />
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Tecnico en Mantenimientos Mecatronico
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        Mayagüez S.A. | 2022 - 2023
                      </div>
                    </div>
                    <div className="item-content">
                      <ul className="resume-list">
                        <li>
                          Realicé mantenimientos de sistemas eléctricos y
                          electrónicos de vehículos. Realicé mantenimientos
                          preventivos, predictivos y correctivos. Diagnostiqué y
                          reparé sistemas con componentes eléctricos,
                          electrónicos y sistemas de comunicación en los
                          vehículos automotores.
                        </li>
                        <li>
                          Implementé instrumentos de medición y diagnóstico
                          tambien realicé mantenimiento en sistemas de aire
                          acondicionado automotriz.
                        </li>
                        <li>
                          Ayudé a la producción de la industria con mi dedicado
                          trabajo en la solución de fallas en el campo de
                          maquinaria agrícola y de agricultura de precisión.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Autónomo - XOR Centro de Reparación Electrónica
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        XOR Centro de Reparación Electrónica | 2017 - Present
                      </div>
                    </div>
                    <div className="item-content">
                      <ul className="resume-list">
                        <li>
                          Implementé instrumentación electrónica para
                          diagnósticos precisos en dispositivos portátiles y
                          celulares, utilizando osciloscopios, analizadores
                          lógicos y generadores de señales.
                        </li>
                        <li>
                          Recuperé datos en dispositivos móviles mediante
                          conexiones ISP y JTAG, aplicando técnicas de
                          extracción avanzadas y análisis forense digital.
                        </li>
                        <li>
                          Diagnosticé protocolos de comunicación como I2C, RFFE
                          y RF, utilizando herramientas como osciloscopios y
                          analizadores de espectro para identificar anomalías.
                        </li>
                        <li>
                          Dominé la técnica de microsoldadura para montaje
                          superficial (BGA) y reballing, realizando reparaciones
                          precisas en componentes electrónicos a nivel
                          microscópico, asegurando la integridad y funcionalidad
                          de los dispositivos.
                        </li>
                        <li>
                          Diseñé y construí circuitos electrónicos
                          personalizados basados en Arduino, PIC, STM32 e Intel
                          Galileo, cumpliendo con especificaciones detalladas y
                          requerimientos de los clientes, garantizando su
                          funcionalidad y rendimiento óptimo.
                        </li>
                      </ul>
                      <p>
                        <b>Tech Stack : </b> Assembly, C, C++. Arduino IDE,
                        MPLAB, STM32CubeIDE, MikroC IDE.
                      </p>
                    </div>
                  </div>
                </section>
                <section className="project-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Proyectos
                  </h3>

                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Weather App
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        Web App - 2023
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        URL Deploy :{" "}
                        <a
                          href="https://brandonrv.github.io/Proyecto-Final-N2A/"
                          target="_blank"
                        >
                          GitHub Pages
                        </a>
                        <br />
                        <b>Tech Stack : </b> React, HTML, CSS, JavaScript.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Calculator App
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        Web App - 2023
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        URL Deploy :{" "}
                        <a
                          href="https://symphonious-puffpuff-f1e569.netlify.app/"
                          target="_blank"
                        >
                          Netlify
                        </a>
                        <br />
                        <b>Tech Stack :</b> HTML, CSS, JavaScript.{" "}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Idiomas
                  </h3>
                  <ul className="list-unstyled resume-lang-list">
                    <li className="mb-2">
                      English <span className="text-muted">(B1)</span>
                    </li>
                    <li>
                      Spanish <span className="text-muted">(Nativo)</span>
                    </li>
                  </ul>
                </section>
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Skills
                  </h3>
                  <div className="item">
                    <h4 className="item-title">Técnico</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                      React, NextJs, HTML, CSS, JavaScrip, MySQL, PHP, C, C++.
                    </div>
                  </div>
                  <div className="item">
                    <h4 className="item-title">Frameworks and Tools</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                      Laravel, PHP MVC, APIRESTful, Boostrap5, Json, Xml, Git,
                      GitHub, AWS, Apache, Xamp.
                    </div>
                  </div>

                  <div className="item">
                    <h4 className="item-title">Data Base</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                      MySql.
                    </div>
                  </div>

                  <div className="item">
                    <h4 className="item-title">Metodologías</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                      Scrum, Agil.
                    </div>
                  </div>
                </section>

                <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Education
                  </h3>
                  <ul className="list-unstyled resume-education-list">
                    <li className="mb-3">
                      <div className="resume-degree font-weight-bold">
                        Técnico en Desarrollo Web Full Stack
                      </div>
                      <div className="resume-degree-org text-muted">
                        Funval - Internacional.
                      </div>
                      <div className="resume-degree-time text-muted">
                        2023 - 2024
                      </div>
                    </li>
                    <li>
                      <div className="resume-degree font-weight-bold">
                        Técnico en Mecatrónica
                      </div>
                      <div className="resume-degree-org text-muted">
                        {"Servicio Nacional de Apredizaje (SENA)"}
                      </div>
                      <div className="resume-degree-time text-muted">
                        2022 - 2023
                      </div>
                    </li>
                    <li>
                      <div className="resume-degree font-weight-bold">
                        Técnico HVAC/R
                      </div>
                      <div className="resume-degree-org text-muted">
                        {`FUNDET - "Fundación de Desarrollo Técnico Industrial y Social"`}
                      </div>
                      <div className="resume-degree-time text-muted">
                        2018 - 2018
                      </div>
                    </li>
                    <li>
                      <div className="resume-degree font-weight-bold">
                        Ingeniería Electrónica
                      </div>
                      <div className="resume-degree-org text-muted">
                        {`Instituto Universitario Politécnico - "Santiago Mariño"`}
                      </div>
                      <div className="resume-degree-time text-muted">
                        2015 - (Estudent)
                      </div>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>
          </div>
          <hr />
          <div className="resume-footer text-center">
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
              <li className="list-inline-item mb-lg-0 me-3">
                <a className="resume-link" href="https://github.com/BrandonRv">
                  <i
                    className="fab fa-github-square fa-2x me-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    &#160;&#160;github.com/BrandonRv
                  </span>
                </a>
              </li>
              <li className="list-inline-item mb-lg-0 me-3">
                <a
                  className="resume-link"
                  href="https://www.linkedin.com/in/brandon-rivera-179a2bb6/"
                >
                  <i
                    className="fab fa-linkedin fa-2x me-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    &#160;&#160;linkedin.com/in/brandon-rivera-179a2bb6/
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

export default ResumePage;
