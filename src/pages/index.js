import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

import axios from "axios";

import { loaddingOn, loaddingOff } from "../store/features/app/appSlice";

import AppScreenshots from "@components/Home/AppScreenshots";
import CharacteristicsPlan from "@components/Home/CharacteristicsPlan";
import ProductServices from "@components/Home/ProductServices";
import ContactForm from "@components/Home/ContactForm";
import Information from "@components/Home/Information";
import RegionsParts from "@components/Home/RegionsParts";

Home.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

Home.getInitialProps = async (ctx) => {
  // const products = await axios.get("http://localhost:3300/api/v1/products");
  // const services = await axios.get("http://localhost:3300/api/v1/services");

  const products = await axios.get("http://159.203.163.37/api/v1/products");
  const services = await axios.get("http://159.203.163.37/api/v1/services");

  return { products: products.data, services: services.data };
};

export default function Home({ products, services }) {
  const isLoadding = useSelector((state) => state.app.isLoadding);

  return (
    <Page title="Home">
      <AppScreenshots />

      <CharacteristicsPlan />

      <ProductServices products={products} services={services} />

      <ContactForm />

      <Information />

      <RegionsParts />
    </Page>
  );
}
