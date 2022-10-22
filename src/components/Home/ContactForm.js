import React, { memo } from "react";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form-area bg-gradient-color pb-75">
        <div className="contact-form-cards">
          <div className="contact-form-bg">
            <div className="pt-25 contact-form-cards-container">
              <div className="contact-form">
                <h2>¡CAMBIATE A WIN!</h2>
                <form id="contactForm">
                  <h3 style={{ color: "#fff" }}>Completa tus Datos</h3>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                          id="firstname"
                          required
                          placeholder="First name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          id="lastname"
                          required
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          required
                          placeholder="Email address"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="celular"
                          className="form-control"
                          id="celular"
                          placeholder="celular"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="distrito"
                          className="form-control"
                          id="distrito"
                          placeholder="distrito"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 btn-container">
                      <button type="submit" className="btn-form">
                        <i className="bx bx-paper-plane"></i> Solicitar
                        Información
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
