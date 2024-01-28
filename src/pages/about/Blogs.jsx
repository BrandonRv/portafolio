import React from "react";
import { NavLink } from "react-router-dom";
import { BlogItem } from "./BlogItem";
import { useViewContext } from "../../helpers/ViewProvider";
import BlogsData from "../../db/blogs.json";
const { blogs } = BlogsData;

export function Blogs() {

  const { handleLinkClick } = useViewContext();

  if (blogs.length === 0) {
    return <></>;
  }

  return (
    <div>
      <div className="container">
        <hr />
      </div>
      <section className="latest-blog-section p-3 py-lg-4 px-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">
            Última publicación
          </h2>
          <div className="row">
            {blogs.slice(0, 1).map((project, index) => (
              <BlogItem key={index} datos={project} />
            ))}
          </div>
          <div className="text-center py-3">
            <NavLink idde="/portafolio/blog" to="/portafolio/blog" className="btn btn-primary" onClick={handleLinkClick}>
              <i className="fas fa-arrow-alt-circle-right me-2"></i> Ver Blog
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
