import React from "react";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "@routes/paths";
// hooks
import useSettings from "@hooks/useSettings";
// layouts
import Layout from "@components/_App/layouts";
// components
import Page from "@components/_App/Page";
// import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
// sections
import { UserNewEditForm } from "@components/users";

import PageBanner from "@components/Common/PageBanner";

// ----------------------------------------------------------------------

UserCreate.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Crear Usuario">
      <PageBanner
        pageTitle="Crear Usuario"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Usuarios"
      />
      <Container maxWidth={themeStretch ? false : "lg"} className="pt-50 pb-50">
        {/* <HeaderBreadcrumbs
          heading="Create a new user"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "User", href: PATH_DASHBOARD.user.list },
            { name: "New user" },
          ]} 
        />*/}
        <UserNewEditForm />
      </Container>
    </Page>
  );
}
