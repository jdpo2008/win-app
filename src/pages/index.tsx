import React, { FC } from "react";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

import axios from "axios";

import { useProducts } from "@hooks/useProducts";

import AppScreenshots from "@components/Home/AppScreenshots";
import CharacteristicsPlan from "@components/Home/CharacteristicsPlan";
import ProductServices from "@components/Home/ProductServices";
import ContactForm from "@components/Home/ContactForm";
import Information from "@components/Home/Information";
import RegionsParts from "@components/Home/RegionsParts";
import Preloader from "@components/Common/Preloader";
import { NextPageWithLayout } from "@interfaces/index";

import {
  departamentos,
  provincias,
  distritos,
  productos,
  servicios,
} from "@data/static";

interface Props {}

const Home: NextPageWithLayout = () => {
  return (
    <Page
      title="Home"
      description="Home page cambiate a win, cambiateawin.pe, 100% fibra optica, mayor velocidad, servicios, informacion, planes y mas"
      url="/"
    >
      <>
        <AppScreenshots />

        <CharacteristicsPlan />

        <div className="home-h2-container pb-25">
          <h2>
            ¡Durante todo el mes de Diciembre, cámbiate a Win y disfruta de la
            velocidad de tu internet!
          </h2>
        </div>

        <ProductServices products={productos} services={servicios} />

        <ContactForm
          departamentos={departamentos}
          provincias={provincias}
          distritos={distritos}
        />

        <Information />

        <RegionsParts />
      </>
    </Page>
  );
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout variant="main" isLoadding={false}>
      {page}
    </Layout>
  );
};

export default Home;
