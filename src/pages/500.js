import { m } from "framer-motion";
// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

import { MotionContainer, varBounce } from "@components/Common/animate";

// assets
import { SeverErrorIllustration } from "../assets";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

Page500.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <Page title="500 Internal Server Error" sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h4" paragraph>
                500 Internal Server Error
              </Typography>
            </m.div>
            <Typography sx={{ color: "text.secondary" }}>
              Hubo un error, inténtalo de nuevo más tarde.
            </Typography>
            <m.div variants={varBounce().in}>
              <SeverErrorIllustration
                sx={{ height: 300, marginTop: "60px", marginBottom: "60px" }}
              />
            </m.div>
            <NextLink href="/" passHref>
              <Button size="large" variant="contained">
                Go to Home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
