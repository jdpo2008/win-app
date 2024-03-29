import React, { memo } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import FormHelperText from "@mui/material/FormHelperText";
import { LoadingButton } from "@mui/lab";

import toast from "@components/Common/Toast";
import client from "@data/client";

const ContactForm = ({ departamentos, provincias, distritos }) => {
  const defaultValues = {
    nombres: "",
    apellidos: "",
    email: "",
    celular: "",
    departamento: "",
    provincia: "",
    distrito: "",
    direccion: "",
  };

  const FormSchema = Yup.object().shape({
    nombres: Yup.string().required("Los nombres son requeridos"),
    apellidos: Yup.string().required("Los apellidos son requeridos"),
    email: Yup.string().required("El correo electronico es requerido"),
    celular: Yup.string().required("El celular es requerido"),
    departamento: Yup.string().required("EL departamento es requerido"),
    provincia: Yup.string().required("La Provincia es requerida"),
    distrito: Yup.string().required("EL distrito es requerido"),
    direccion: Yup.string().required("La direccion es requerida"),
  });

  const methods = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = methods;

  const values = watch();

  const [distFilter, setDistFilter] = React.useState([]);
  const [provFilter, setProvFilter] = React.useState([]);

  const { mutate } = useMutation(client.informacion.create, {
    mutationFn: (body) => {
      const request = {
        ...body,
        departamento: departamentos.find(
          (d) => d.id_ubigeo === body.departamento
        ).nombre_ubigeo,
        provincia: provincias[body.departamento].find(
          (p) => p.id_ubigeo === body.provincia
        ).nombre_ubigeo,
        distrito: distritos[body.provincia].find(
          (d) => d.id_ubigeo === body.distrito
        ).nombre_ubigeo,
      };
      console.log(request);
      //return axios.post("/api", body);
    },
    onSuccess: (res) => {
      reset();

      notify("success", "Registro Exitoso. Pronto sera contactado");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = () => {
    mutate(values);
  };

  const handleChangeDepartamento = (event) => {
    setProvFilter(provincias[event.target.value]);
    setDistFilter([]);
  };

  const handleChangeProvincia = (event) => {
    setDistFilter(distritos[event.target.value]);
  };

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const dismiss = React.useCallback(() => {
    toast.dismiss();
  }, []);

  return (
    <>
      <div className="contact-form-area bg-gradient-color pb-25">
        <div className="contact-form-cards">
          <div className="contact-form-bg">
            <div className="contact-form-cards-container">
              <div className="contact-form">
                <h2>¡CAMBIATE A WIN!</h2>
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                  <h3 style={{ color: "#fff" }}>Completa tus Datos</h3>
                  <div className="row" style={{ marginTop: "0px" }}>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          {...register("nombres", {
                            required: true,
                          })}
                          aria-invalid={errors.nombres ? "true" : "false"}
                          aria-describedby="component-error-text"
                        />
                        {errors.nombres?.type === "required" && (
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
                          {...register("apellidos", { required: true })}
                          aria-invalid={errors.apellidos ? "true" : "false"}
                        />
                        {errors.apellidos?.type === "required" && (
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
                        <select
                          className="form-control"
                          placeholder="Deparatamento"
                          {...register("departamento", { required: true })}
                          aria-invalid={errors.departamento ? "true" : "false"}
                          onChange={handleChangeDepartamento}
                        >
                          {departamentos &&
                            departamentos.map((d) => (
                              <option key={d.id_ubigeo} value={d.id_ubigeo}>
                                {d.nombre_ubigeo}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          placeholder="Provincia"
                          {...register("provincia", { required: true })}
                          aria-invalid={errors.provincia ? "true" : "false"}
                          onChange={handleChangeProvincia}
                        >
                          {provFilter?.length > 0 &&
                            provFilter?.map((d) => (
                              <option key={d.id_ubigeo} value={d.id_ubigeo}>
                                {d.nombre_ubigeo}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          placeholder="Distrito"
                          {...register("distrito", { required: true })}
                          aria-invalid={errors.distrito ? "true" : "false"}
                        >
                          {distFilter?.length > 0 &&
                            distFilter?.map((d) => (
                              <option key={d.id_ubigeo} value={d.id_ubigeo}>
                                {d.nombre_ubigeo}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Direccion"
                          {...register("direccion", { required: true })}
                          aria-invalid={errors.direccion ? "true" : "false"}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 btn-container">
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                        sx={{
                          width: "50%",
                          backgroundColor: "rgb(0, 100, 250)",
                          ":hover": {
                            backgroundColor: "rgba(0, 100, 250, 0.7)",
                          },
                        }}
                        disabled={Object.keys(errors).length > 0}
                      >
                        <i className="bx bx-paper-plane"></i> Solicitar
                        Información
                      </LoadingButton>
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

ContactForm.propTypes = {
  departamentos: PropTypes.array.isRequired,
  provincias: PropTypes.object.isRequired,
  distritos: PropTypes.object.isRequired,
};

export default ContactForm;
