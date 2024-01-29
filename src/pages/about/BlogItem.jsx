import React from "react";
import { NavLink } from "react-router-dom";
import { useViewContext } from "../../helpers/ViewProvider";
import moment from "moment";

export function BlogItem({ datos }) {
  const { title, desc, url, image, date, inter, preview } = datos;
  const myMomentObject = moment(date, "MM-DD-YYYY");
  const dateTimeAgo = myMomentObject.fromNow();
  const { handleLinkClick } = useViewContext();

  return (
    <div className="col-md-6 mb-5">
      <div className="card blog-post-card">
        <iframe
          height="315"
          src={preview}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* </div> */}
        <div className="card-body">
          <h5 className="card-title">
            <NavLink className="theme-link" to={url} target="_blank">
              {title}
            </NavLink>
          </h5>
          <p className="card-text">{desc}</p>
          <p className="mb-0">
            <NavLink idde="/portfolio/contact" className="text-link" to="/portfolio/contact" onClick={handleLinkClick}>
              {inter} &rarr;
            </NavLink>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Publicado {dateTimeAgo}</small>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
