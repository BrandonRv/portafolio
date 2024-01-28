import { React, useRef, useState } from "react";
import { NavLink } from "react-router-dom"; // useNavigate
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Links from "../../db/links.json";
import Ekey from "../../db/emailkey.json";
import { useViewContext } from "../../helpers/ViewProvider";
const { links } = Links;
const { emailkey } = Ekey;

export function ContactPage() {
  document.title = "Brandon Rivera - Contact";
  const form = useRef();
  const [disable, setDisable] = useState(false);
  const { handleLinkClick } = useViewContext();

  const sendEmail = (e) => {
    e.preventDefault();

    setDisable(false);

    emailjs
      .sendForm(
        emailkey.USER_ID,
        emailkey.TEMPLATE_ID,
        form.current,
        emailkey.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          Swal.fire(
            "¡Mensaje enviado exitosamente!",
            "Muchas gracias por contactarme. Estaré respondiendo tu mensaje lo antes posible."
          );
          e.target.reset();
        },
        (error) => {
          console.log(error);
          Swal.fire({
            title: "¡Error al enviar mensaje!",
            text:
              "Se produjo un error al enviar el mensaje, por favor contácteme por correo electrónico : " +
              links.email,
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Contact</h2>
          <div className="intro">
            <p>
              ¿Estás interesado en contratarme para tu proyecto, deseas asesoría
              o quieres conocer más de lo que hago? Puedes completar el
              formulario de contacto y enviarme tu duda al correo electrónico.{" "}
              <a
                className="text-link"
                href="mailto:#"
                target="_blank"
                rel="noreferrer"
              >
                {links.email}
              </a>
            </p>
            <p>
              ¿Deseas conectarte? Sígueme en los canales sociales a
              continuación.
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mb-3">
                <a
                  className="linkedin"
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a
                  className="github"
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github-alt fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="instagram"
                  href={links.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a
                  className="stack-overflow"
                  href={links.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter-x fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a
                  className="codepen"
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp fa-fw fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-section px-3 py-5 p-md-5">
        <div className="container">
          <form
            ref={form}
            id="contact-form"
            className="contact-form col-lg-8 mx-lg-auto"
            onSubmit={sendEmail}
            action=""
          >
            <h3 className="text-center mb-3">Ponerse En Contacto.</h3>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <input
                  autoComplete="false"
                  type="text"
                  className="form-control"
                  id="cname"
                  name="Nombre"
                  placeholder="Nombre ..."
                  minLength="2"
                  required={true}
                  aria-required={true}
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  autoComplete="false"
                  type="email"
                  className="form-control"
                  id="cemail"
                  name="email"
                  placeholder="Email ..."
                  required={true}
                  aria-required={true}
                />
              </div>
              <div className="col-12">
                <input
                  autoComplete="false"
                  type="text"
                  required={true}
                  className="form-control"
                  id="csubject"
                  name="Asunto"
                  placeholder="Asunto ..."
                  minLength="2"
                  aria-required={true}
                />
                <div className="mt-2">
                  <small className="form-text text-muted pt-1">
                    <i className="fas fa-info-circle me-2 text-primary"></i>
                    ¿Quieres saber más sobre mí? Consulta la{" "}
                    <NavLink
                      idde="btn-about"
                      className="text-link"
                      to="/portfolio"
                      onClick={handleLinkClick}
                      //target="_blank"
                    >
                      página principal.
                    </NavLink>{" "}
                  </small>
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  id="cmessage"
                  name="message"
                  placeholder="Ingrese su mensaje ..."
                  rows="10"
                  required={true}
                  aria-required={true}
                ></textarea>
              </div>
              <div className="form-group col-12">
                <button
                  type="submit"
                  disabled={disable}
                  className="btn btn-block btn-primary py-2"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
