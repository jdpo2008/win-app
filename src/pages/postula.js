import * as React from "react";
import PageBanner from "@components/Common/PageBanner";

export default function Postula() {
  return (
    <>
      <PageBanner
        pageTitle="Oportunidades de Empleo"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Postula"
      />

      <div className="postula-area bg-gradient-color pb-25 pt-25">
        <div className="postula-area-container">
          <div className="postula-area-image">
            <div
              className="col-md-12 text-left"
              style={{ paddingLeft: "40px" }}
            >
              <h4 className="postula-area-image-text">Forma Parte de</h4>
              <h3 className="postula-area-image-text">Nuestro Equipo</h3>
            </div>
          </div>

          <div className="postula-area-empleos">
            <h3> Siempre estamos en la busqueda de los siguientes perfiles:</h3>
            <div className="postula-area-empleos-card text-center pt-50 pb-50">
              <div className="postula-area-empleos-content col-md-3">
                <img
                  src="/images/postula/Community_manager.png"
                  alt="Community Manager"
                />
                <h6 style={{ marginLeft: "-20px" }}>Comunity Manager</h6>
              </div>
              <div className="postula-area-empleos-content col-md-3">
                <img
                  src="/images/postula/Gestor_comercial.png"
                  alt="Community Manager"
                />
                <h6 style={{ marginLeft: "-40px" }}>Gestor Comercial</h6>
              </div>
              <div className="postula-area-empleos-content col-md-3">
                <img
                  src="/images/postula/Ejecutivo_de_ventas.png"
                  alt="Community Manager"
                />
                <h6 style={{ marginLeft: "10px" }}>Ejecutivos de Ventas</h6>
              </div>
              <div className="postula-area-empleos-content col-md-3">
                <img
                  src="/images/postula/Supervisor(a)_de_ventas.png"
                  alt="Community Manager"
                />
                <h6>Supervisor(a) de Ventas</h6>
              </div>
            </div>
          </div>

          <div className="postula-area-ventajas pt-50">
            <h5>
              ¿Por qué <span>Trabajar</span> con nosotros?
            </h5>
            <div className="postula-area-ventajas-container container pt-50 pb-25">
              <div className="postula-area-ventajas-container-card">
                <div className="postula-area-ventajas-container-card-bg">
                  <img
                    src="/images/postula/Sueldo_variable.png"
                    alt="Sueldo_variable"
                    srcset=""
                  />
                </div>
                <p>Sueldo variable + comisiones</p>
              </div>
              <div className="postula-area-ventajas-container-card">
                <div className="postula-area-ventajas-container-card-bg">
                  <img
                    src="/images/postula/Línea_de_carrera.png"
                    alt="Sueldo_variable"
                    srcset=""
                  />
                </div>
                <p>Linea de carrera</p>
              </div>
              <div className="postula-area-ventajas-container-card">
                <div className="postula-area-ventajas-container-card-bg">
                  <img
                    src="/images/postula/Ambiente.png"
                    alt="Sueldo_variable"
                    srcset=""
                  />
                </div>
                <p>Ambiente laboral agradable</p>
              </div>
              <div className="postula-area-ventajas-container-card">
                <div className="postula-area-ventajas-container-card-bg">
                  <img
                    src="/images/postula/Capacitación.png"
                    alt="Sueldo_variable"
                    srcset=""
                  />
                </div>
                <p>Capacitacion constante</p>
              </div>
            </div>
          </div>

          <div className="postula-area-testimonio pt-50">
            <h5>
              Conoce los testimonios de <span>nuestro equipo WIN </span>
            </h5>
          </div>
          <div className="team-area pt-50 pb-50">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team-member">
                    <div className="image">
                      <img src="/images/team/team2.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p style={{ paddingTop: "5px", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod temporibus excepturi magni animi fugiat quis porro
                        eligendi quasi itaque, debitis eaque eveniet.
                      </p>
                      <h3>Daniel Villegas</h3>
                      <span>Gestor Comercial</span>
                    </div>
                    <ul className="social-links">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team-member">
                    <div className="image">
                      <img src="/images/team/team1.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p style={{ paddingTop: "5px", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod temporibus excepturi magni animi fugiat quis porro
                        eligendi quasi itaque, debitis eaque eveniet.
                      </p>
                      <h3>Anabel Mejías</h3>
                      <span>Ejecutivo de Ventas</span>
                    </div>
                    <ul className="social-links">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team-member">
                    <div className="image">
                      <img src="/images/team/team3.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p style={{ paddingTop: "5px", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod temporibus excepturi magni animi fugiat quis porro
                        eligendi quasi itaque, debitis eaque eveniet.
                      </p>
                      <h3>Sarah Taylor</h3>
                      <span>Web Designer</span>
                    </div>
                    <ul className="social-links">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team-member">
                    <div className="image">
                      <img src="/images/team/team4.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p style={{ paddingTop: "5px", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod temporibus excepturi magni animi fugiat quis porro
                        eligendi quasi itaque, debitis eaque eveniet.
                      </p>
                      <h3>Alina Aly</h3>
                      <span>SEO Consultant</span>
                    </div>
                    <ul className="social-links">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
