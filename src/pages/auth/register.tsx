import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Grid, Box, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

import {
  FormProvider,
  RHFTextField,
  RHFSelect,
} from "@components/Common/hook-form";

SignUp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const PERFILES_OPTIONS = [
  {
    id: 1,
    nombre: "Administrador",
  },
  {
    id: 2,
    nombre: "Usuario",
  },
];

export default function SignUp() {
  const defaultValues = {
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
    confirmpassword: "",
    telefono: "",
    perfil: 1,
  };

  const FormSchema = Yup.object().shape({
    nombres: Yup.string().required("El campo es requerido"),
    apellidos: Yup.string().required("El campo es requerido"),
    email: Yup.string().required("El campo es requerido"),
    password: Yup.string().required("El campo es requerido"),
    confirmpassword: Yup.string().required("El campo es requerido"),
    telefono: Yup.string().required("El campo es requerido"),
    perfil: Yup.string().required("El campo es requerido"),
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

  const onSubmit = async () => {
    try {
      //await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(values);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page title="Register">
      <div className="profile-authentication-area">
        <div className="">
          <div className="logo">
            <Link href="/">
              <a className="d-inline-block">
                <img
                  src="/images/logo_blanco_letras.png"
                  alt="logo"
                  width="180"
                />
              </a>
            </Link>
          </div>
          <div className="">
            <div className="container">
              <div className="signup-form">
                <h2>Registrarse</h2>
                <FormProvider
                  methods={methods}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Grid
                    container
                    spacing={2}
                    direction={"row"}
                    justifyContent={"center"}
                  >
                    <Grid item xs={12} md={6} lg={6}>
                      <Box
                        sx={{
                          display: "column",
                        }}
                      >
                        <RHFTextField name="nombres" label="Nombres" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box
                        sx={{
                          display: "column",
                        }}
                      >
                        <RHFTextField name="apellidos" label="Apellidos" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <RHFTextField name="email" label="Email" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box
                        sx={{
                          display: "column",
                        }}
                      >
                        <RHFTextField name="password" label="Password" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box
                        sx={{
                          display: "column",
                        }}
                      >
                        <RHFTextField
                          name="confirmpassword"
                          label="Confirmar Password"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box
                        sx={{
                          display: "column",
                        }}
                      >
                        <RHFTextField name="telefono" label="Telefono" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box
                        sx={{
                          display: "column",
                        }}
                      >
                        <RHFSelect name="perfil" label="Perfil">
                          {PERFILES_OPTIONS.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.nombre}
                            </option>
                          ))}
                        </RHFSelect>
                      </Box>
                    </Grid>
                  </Grid>
                  <Stack alignItems="center">
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      loading={isSubmitting}
                      sx={{
                        width: "100%",
                        backgroundColor: "rgba(241, 105, 13, 1)",
                        ":hover": {
                          backgroundColor: "rgba(241, 105, 13, 0.7)",
                        },
                        marginTop: "20px",
                      }}
                    >
                      Registrarse
                    </LoadingButton>
                  </Stack>
                  <div
                    className="pt-25"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                    }}
                  >
                    <span className="">
                      Ya tienes una cuenta?{" "}
                      <Link href="/auth/login">
                        <a>Ingresar</a>
                      </Link>
                    </span>
                    <Link href="/">
                      <a style={{ fontWeight: "bolder" }}>Regresar</a>
                    </Link>
                  </div>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
