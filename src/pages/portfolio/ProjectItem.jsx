import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { NavLink, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

export function ProjectItem({ datos }) {
  const { title, desc, client, image, icons, filters, projectId } = datos;
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/portfolio/project");
  }, [image]);

  return (
    <div className={`isotope-item col-md-6 mb-5 ${filters}`}>
      <div className="card project-card">
        <div className="row">
          <div className="col-12 col-xl-12 pordebajoo">
            <Swiper
              spaceBetween={5}
              slidesPerView={1}
              allowTouchMove={false}
              autoplay={{ delay: 2000 }}
            >
              {image.map((imageSrc, index) => (
                <SwiperSlide key={index}>
                  <img src={imageSrc} className="card-img" alt="image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-12">
            <div className="card-body">
              <h5 className="card-title">
                <a
                  className="theme-link" //href="project.html"
                >
                  {title}
                </a>
              </h5>
              <p className="card-text">{desc}</p>

              <p
                className="card-text"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <small className="text-muted">Cliente: {client}</small>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {icons.map((icon, index) => (
                    <Icon
                      key={index}
                      className="mr-1"
                      icon={icon}
                      style={{ color: "violet" }}
                    />
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="link-mask porencimaa">
          <NavLink
            className="link-mask-link"
            to={`https://github.com/BrandonRv/${projectId}`}
            target="_blank"
          ></NavLink>
          <div className="link-mask-text porencimaa">
            <NavLink
              className="btn btn-secondary"
              to={`https://github.com/BrandonRv/${projectId}`}
              target="_blank"
            >
              <i className="fas fa-eye me-2"></i>&#160; Ver Repositorio
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
