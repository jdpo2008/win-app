import React from "react";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

import AppScreenshots from "@components/Home/AppScreenshots";
import CharacteristicsPlan from "@components/Home/CharacteristicsPlan";
import ProductServices from "@components/Home/ProductServices";
import ContactForm from "@components/Home/ContactForm";
import Information from "@components/Home/Information";
import RegionsParts from "@components/Home/RegionsParts";

Home.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Home() {
  return (
    <Page title="Home">
      <AppScreenshots />

      <CharacteristicsPlan />

      <ProductServices />

      <ContactForm />

      <Information />

      <RegionsParts />
    </Page>
  );
}
