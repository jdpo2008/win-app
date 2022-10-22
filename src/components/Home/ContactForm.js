import React, { memo } from "react";
import { useForm } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import { ErrorMessage } from "@hookform/error-message";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="contact-form-area bg-gradient-color pb-75">
        <div className="contact-form-cards">
          <div className="contact-form-bg">
            <div className="pt-25 contact-form-cards-container">
              <div className="contact-form">
                <h2>¡CAMBIATE A WIN!</h2>
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                  <h3 style={{ color: "#fff" }}>Completa tus Datos</h3>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          {...register("firstName", {
                            required: true,
                          })}
                          aria-invalid={errors.firstName ? "true" : "false"}
                          aria-describedby="component-error-text"
                        />
                        {errors.firstName?.type === "required" && (
                          <FormHelperText id="component-error-text">
                            El nombre es requerido
                          </FormHelperText>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          {...register("lastName", { required: true })}
                          aria-invalid={errors.lastName ? "true" : "false"}
                        />
                        {errors.lastName?.type === "required" && (
                          <FormHelperText id="component-error-text">
                            El apellido es requerido
                          </FormHelperText>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address"
                          {...register("email", { required: true })}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email?.type === "required" && (
                          <FormHelperText id="component-error-text">
                            El email es requerido
                          </FormHelperText>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="celular"
                          {...register("celular", { required: true })}
                          aria-invalid={errors.celular ? "true" : "false"}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="distrito"
                          {...register("distrito")}
                          aria-invalid={errors.distrito ? "true" : "false"}
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
