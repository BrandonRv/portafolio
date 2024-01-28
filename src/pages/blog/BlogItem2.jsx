import React from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';

export function BlogItem({ datos }) {
  const { title, desc, url , image, date} = datos;
  const myMomentObject = moment(date, 'MM-DD-YYYY');
  const dateTimeAgo = myMomentObject.fromNow();

  return (
    
    <div className="col-md-4 mb-3">
      <div className="card blog-post-card">
        <img
          className="card-img-top"
          src={image}
          alt="image"
        />
        <div className="card-body">
          <h5 className="card-title">
            <NavLink className="theme-link" 
            >
              {title}
            </NavLink>
          </h5>
          <p className="card-text">
            {desc}
          </p>
          <p className="mb-0">
            <NavLink className="text-link" 
            >
               &rarr;
            </NavLink>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">publicado {dateTimeAgo}</small>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
