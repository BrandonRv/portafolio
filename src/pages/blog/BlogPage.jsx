import React from "react";
import Swal from "sweetalert2";
import BlogsData from "../../db/blogs.json"; ///db/blogs.json
import { BlogItem } from "./BlogItem";
const { blogs } = BlogsData;

export function BlogPage() {
  document.title = "Brandon Rivera - Blog";

  const [disable, setDisable] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire(
      "¡Mensaje enviado!",
      "Muchas gracias por suscribirte a mi blog. Pronto recibirás notificaciones de nuevas publicaciones.",
      "Éxito"
    );

    setDisable(true);
  };

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center">
          <h2 className="heading">Un Blog De Electrónica Y Desarrollo Web.</h2>
          <div className="intro">
            Suscríbete y recibe la última publicación de mi blog en tu bandeja
            de entrada.
          </div>
          <div className="single-form-max-width pt-3 mx-auto">
            <form
              className="signup-form row g-2 g-lg-2 align-items-center"
              onSubmit={sendEmail}
            >
              <div className="col-12 col-md-9">
                <label className="sr-only" htmlFor="semail">
                  Your email
                </label>
                <input
                  type="email"
                  required={true}
                  id="semail"
                  name="semail1"
                  disabled={disable}
                  className="form-control me-md-1 semail"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-12 col-md-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={disable}
                >
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="row">
            {blogs.length > 0 ? (
              <div className="project-cards row isotope">
                {blogs.map((project, index) => (
                  <BlogItem key={index} datos={project} />
                ))}
              </div>
            ) : (
              <h2 className="text-center">
                Agregaré esta sección próximamente ... <br /> <br /> <br />{" "}
                <br /> <br /> <br />
              </h2>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
