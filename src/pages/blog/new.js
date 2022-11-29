import * as React from "react";
import Container from "@mui/material/Container";

import useSettings from "@hooks/useSettings";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

import PageBanner from "@components/Common/PageBanner";
import BlogNewPostForm from "@components/Blog/BlogNewPostForm";

BlogNewPost.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BlogNewPost() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Blog: New Post">
      <PageBanner
        pageTitle="Tu Blog favorito de INTERNET"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />
      <Container maxWidth={themeStretch ? false : "lg"}>
        <BlogNewPostForm />
      </Container>
    </Page>
  );
}
