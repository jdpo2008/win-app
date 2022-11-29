import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Grid, Box, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import {
  FormProvider,
  RHFTextField,
  RHFSelect,
} from "@components/Common/hook-form";
import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

SignIn.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function SignIn(props) {
  const defaultValues = {
    email: "",
    password: "",
  };

  const FormSchema = Yup.object().shape({
    email: Yup.string().required("El correo electronico es requerido"),
    password: Yup.string().required("El password es requerido"),
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
    <Page title="Login">
      <div className="profile-authentication-area">
        <div className="" style={{ textAlign: "center" }}>
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
          <div className="" style={{ marginTop: "15px" }}>
            <div className="container">
              <div className="signin-form">
                <h2>Ingresar</h2>
                <FormProvider
                  methods={methods}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Grid
                    container
                    spacing={3}
                    direction={"row"}
                    justifyContent={"center"}
                  >
                    <Grid item xs={12} md={12} lg={12}>
                      <Box
                        sx={{
                          display: "column",
                        }}
                      >
                        <RHFTextField name="email" label="Email" />
                        <RHFTextField
                          name="password"
                          label="Password"
                          style={{ marginTop: "10px" }}
                        />
                        <div
                          className="row"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                          }}
                        >
                          <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                            <p>
                              <input type="checkbox" id="test" />
                              <label htmlFor="test">Recordarme</label>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                            <Link href="/auth/forgot-password">
                              <a className="lost-your-password">
                                Olvidaste la contraseña?
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Box>
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
                          Ingresar
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
                        <span className="dont-account">
                          ¿No tienes una cuenta?{" "}
                          <Link href="/auth/register">
                            <a>Registrate</a>
                          </Link>
                        </span>
                        <Link href="/">
                          <a style={{ fontWeight: "bolder" }}>Regresar</a>
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
