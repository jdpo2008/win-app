// 404 Error Page Style File Path: public/css/pages-and-components-css/error.scss

import React from "react";
import { m } from "framer-motion";
import NextLink from "next/link";
import { Box, Button, Typography, Container } from "@mui/material";
// @mui
import { styled } from "@mui/material/styles";

import { MotionContainer, varBounce } from "@components/Common/animate";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

// assets
import { PageNotFoundIllustration } from "../assets";

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

ErrorPage.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

export default function ErrorPage() {
  return (
    <Page title="404 Page Not Found" sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h4" paragraph>
                Lo sentimos, pagina no encontrada!
              </Typography>
            </m.div>
            <Typography sx={{ color: "text.secondary", marginTop: "10px" }}>
              Lo sentimos, no pudimos encontrar la página que estás buscando.
              ¿Quizás has escrito mal la URL? Asegúrese de revisar su
              ortografía.
            </Typography>
            <m.div variants={varBounce().in}>
              <PageNotFoundIllustration
                sx={{ height: 300, marginTop: "60px", marginBottom: "60px" }}
              />
            </m.div>
            <NextLink href="/" passHref>
              <Button size="large" variant="contained">
                Ir a Home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
