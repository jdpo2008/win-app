import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import FormHelperText from "@mui/material/FormHelperText";

function ContactForm() {
  const getDepartamentos = () => {
    return axios
      .get("http://localhost:3300/api/departamentos")
      .then((res) => res.data);
  };

  const getProvincias = () => {
    return axios
      .get("http://localhost:3300/api/provincias")
      .then((res) => res.data);
  };

  const getDistritos = () => {
    return axios
      .get("http://localhost:3300/api/distritos")
      .then((res) => res.data);
  };

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const departamentos = useQuery({
    initialData: [],
    queryKey: ["departamentos"],
    queryFn: getDepartamentos,
  });

  const provincias = useQuery({
    initialData: [],
    queryKey: ["provincias"],
    queryFn: getProvincias,
  });

  const distritos = useQuery({
    initialData: [],
    queryKey: ["distritos"],
    queryFn: getDistritos,
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    celular: "",
    departamento: "",
    provincia: "",
    distrito: "",
    direccion: "",
  };

  const FormSchema = Yup.object().shape({
    firstName: Yup.string().required("Los nombres son requeridos"),
    lastName: Yup.string().required("Los apellidos son requeridos"),
    email: Yup.string().required("El correo electronico es requerido"),
    celular: Yup.string().required("El celular es requerido"),
    departamento: Yup.string().required("EL departamento es requerido"),
    provincia: Yup.string().required("La Provincia es requerida"),
    distrito: Yup.string().required("EL distrito es requerido"),
    direccion: Yup.string().required("La direccion es requerida"),
  });

  const methods = useForm({
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

  const onSubmit = () => {
    mutation.mutate(values);
  };

  const mutation = useMutation({
    mutationFn: (body) => {
      const request = {
        ...body,
        departamento: departamentos.data.find(
          (d) => d.id_ubigeo === body.departamento
        ).nombre_ubigeo,
        provincia: provincias.data[body.departamento].find(
          (p) => p.id_ubigeo === body.provincia
        ).nombre_ubigeo,
        distrito: distritos.data[body.provincia].find(
          (d) => d.id_ubigeo === body.distrito
        ).nombre_ubigeo,
      };
      console.log(request);
      //return axios.post("/api", body);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["departamentos", "provincias", "distritos"],
      });
      reset();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleChangeDepartamento = (event) => {
    setProvFilter(provincias.data[event.target.value]);
    setDistFilter([]);
  };

  const handleChangeProvincia = (event) => {
    setDistFilter(distritos.data[event.target.value]);
  };

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
                        <select
                          className="form-control"
                          placeholder="Deparatamento"
                          {...register("departamento", { required: true })}
                          aria-invalid={errors.distrito ? "true" : "false"}
                          onChange={handleChangeDepartamento}
                        >
                          {departamentos.data &&
                            departamentos.data.map((d) => (
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
}

export default ContactForm;
