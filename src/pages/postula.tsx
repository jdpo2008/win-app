import * as React from "react";
import * as Yup from "yup";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Card,
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  FilledInput,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller } from "react-hook-form";
import AddIcon from "@mui/icons-material/AttachFile";

import { yupResolver } from "@hookform/resolvers/yup";

import PageBanner from "@components/Common/PageBanner";
import {
  FormProvider,
  RHFTextField,
  RHFSelect,
} from "@components/Common/hook-form";
import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const TIPO_DOCUMENTOS_OPTIONS = [
  {
    nIdTipoDocumento: 1,
    cDescripcion: "DNI",
  },
  {
    nIdTipoDocumento: 2,
    cDescripcion: "Pasaporte",
  },
  {
    nIdTipoDocumento: 3,
    cDescripcion: "Carnet Extranjeria",
  },
];

const EXPERIENCIA_OPTIONS = [
  {
    nIdExperiencia: 1,
    cDescripcion: "SI",
  },
  {
    nIdExperiencia: 2,
    cDescripcion: "NO",
  },
];

const PUESTOS_OPTIONS = [
  {
    nIdPuesto: 1,
    cDescripcion: "COMUNITY MANAGER",
  },
  {
    nIdPuesto: 2,
    cDescripcion: "GESTOR COMERCIAL",
  },
  {
    nIdPuesto: 3,
    cDescripcion: "EJECUTIVO DE VENTAS",
  },
  {
    nIdPuesto: 4,
    cDescripcion: "SUPERVISOR(a) DE VENTAS",
  },
];

Postula.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Postula() {
  const FormSchema = Yup.object().shape({
    nombres: Yup.string().required("Los nombres son requeridos"),
    apellidos: Yup.string().required("Los apellidos son requeridos"),
    documento: Yup.string()
      .min(8)
      .required("EL documento de identidad es requerido"),
    email: Yup.string().required("El correo electronico es requerido"),
    celular: Yup.string().required("El celular es requerido"),
    adjuntar: Yup.string().required("El CV es requerido"),
  });

  const defaultValues = {
    nombres: "",
    apellidos: "",
    tipoDocumento: 1,
    documento: "",
    email: "",
    celular: "",
    experiencia: "",
    puesto: "",
    adjuntar: "",
  };

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const [filename, setFilename] = React.useState("");

  const handleFilesChange = ({ target }) => {
    console.log("Cambio....", target.files[0].name);
    setValue("adjuntar", "");
    if (target?.files[0] && target.files.length > 0) {
      setValue("adjuntar", target.files[0].name);
    }
  };

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page title="Postula">
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
                  />
                </div>
                <p>Sueldo variable + comisiones</p>
              </div>
              <div className="postula-area-ventajas-container-card">
                <div className="postula-area-ventajas-container-card-bg">
                  <img
                    src="/images/postula/Línea_de_carrera.png"
                    alt="Sueldo_variable"
                  />
                </div>
                <p>Linea de carrera</p>
              </div>
              <div className="postula-area-ventajas-container-card">
                <div className="postula-area-ventajas-container-card-bg">
                  <img
                    src="/images/postula/Ambiente.png"
                    alt="Sueldo_variable"
                  />
                </div>
                <p>Ambiente laboral agradable</p>
              </div>
              <div className="postula-area-ventajas-container-card">
                <div className="postula-area-ventajas-container-card-bg">
                  <img
                    src="/images/postula/Capacitación.png"
                    alt="Sueldo_variable"
                  />
                </div>
                <p>Capacitacion constante</p>
              </div>
            </div>
          </div>

          <div className="postula-area-formulario pt-50">
            <h5>
              ¿Comó trabjo con <span>WIN </span>?
            </h5>
            <p className="p">
              Es muy facil llena el formulario y te estaremos contactando a la
              brevedad
            </p>
            <div className="form pt-25">
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid
                  container
                  spacing={3}
                  direction={"row"}
                  justifyContent={"center"}
                >
                  <Grid item xs={12} md={8} lg={6}>
                    <Card sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "grid",
                          columnGap: 2,
                          rowGap: 3,
                          gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                          },
                        }}
                      >
                        <RHFTextField name="nombres" label="Nombres" />
                        <RHFTextField name="apellidos" label="Apellidos" />

                        <RHFSelect name="tipoDocumento" label="Tipo Documento">
                          {/* <option value="" /> */}
                          {TIPO_DOCUMENTOS_OPTIONS.map((option) => (
                            <option
                              key={option.nIdTipoDocumento}
                              value={option.nIdTipoDocumento}
                            >
                              {option.cDescripcion}
                            </option>
                          ))}
                        </RHFSelect>

                        <RHFTextField name="documento" label="Documento" />

                        <RHFTextField name="email" label="Email" />
                        <RHFTextField name="celular" label="Celular" />
                        <RHFSelect
                          name="experiencia"
                          label="Experiencia"
                          placeholder="Experiencia"
                        >
                          <option value="" />
                          {EXPERIENCIA_OPTIONS.map((option) => (
                            <option
                              key={option.nIdExperiencia}
                              value={option.nIdExperiencia}
                            >
                              {option.cDescripcion}
                            </option>
                          ))}
                        </RHFSelect>
                        <RHFSelect
                          name="puesto"
                          label="Puesto al que postula"
                          placeholder="Puesto al que postula"
                        >
                          <option value="" />
                          {PUESTOS_OPTIONS.map((option) => (
                            <option
                              key={option.nIdPuesto}
                              value={option.nIdPuesto}
                            >
                              {option.cDescripcion}
                            </option>
                          ))}
                        </RHFSelect>
                      </Box>
                      <Stack
                        justifyItems={"center"}
                        direction={"row"}
                        sx={{ mt: 3 }}
                      >
                        <RHFTextField name="adjuntar" label="Adjuntar CV" />
                        {/* <TextField
                          label="Adjuntar CV"
                          fullWidth
                          size="small"
                          value={filename}
                        /> */}
                        <Button
                          variant="contained"
                          component="label"
                          sx={{
                            backgroundColor: "rgba(241, 105, 13, 1)",
                            ":hover": {
                              backgroundColor: "rgba(241, 105, 13, 0.7)",
                            },
                            marginTop: "-1.5px",
                          }}
                        >
                          {" "}
                          <AddIcon />
                          <input
                            type="file"
                            hidden
                            onChange={handleFilesChange}
                          />
                        </Button>
                      </Stack>

                      <Stack alignItems="center" sx={{ mt: 3 }}>
                        <LoadingButton
                          type="submit"
                          variant="contained"
                          loading={isSubmitting}
                          sx={{
                            width: "30%",
                            backgroundColor: "rgb(241, 105, 13)",
                            ":hover": {
                              backgroundColor: "rgba(241, 105, 13, 0.7)",
                            },
                          }}
                        >
                          Enviar
                        </LoadingButton>
                      </Stack>
                    </Card>
                  </Grid>
                </Grid>
              </FormProvider>
            </div>
          </div>

          <div className="postula-area-testimonio pt-50">
            <h5>
              Conoce los testimonios de <span>nuestro equipo WIN </span>
            </h5>
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod temporibus excepturi magni animi fugiat
                          quis porro eligendi quasi itaque, debitis eaque
                          eveniet.
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod temporibus excepturi magni animi fugiat
                          quis porro eligendi quasi itaque, debitis eaque
                          eveniet.
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod temporibus excepturi magni animi fugiat
                          quis porro eligendi quasi itaque, debitis eaque
                          eveniet.
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod temporibus excepturi magni animi fugiat
                          quis porro eligendi quasi itaque, debitis eaque
                          eveniet.
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
      </div>
    </Page>
  );
}
