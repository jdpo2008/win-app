// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";
//
import { MaintenanceIllustration } from "../assets";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

Maintenance.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Maintenance() {
  return (
    <Page title="Maintenance" sx={{ height: 1 }}>
      <RootStyle>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h3" paragraph>
            Website currently under maintenance
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            We are currently working hard on this page!
          </Typography>

          <MaintenanceIllustration sx={{ my: 10, height: 240 }} />

          <NextLink href="/" passHref>
            <Button size="large" variant="contained">
              Go to Home
            </Button>
          </NextLink>
        </Container>
      </RootStyle>
    </Page>
  );
}
