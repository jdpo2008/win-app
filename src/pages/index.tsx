import React, { FC } from "react";
import { GetStaticProps } from "next";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

import axios from "axios";

import { useProducts } from "@data/products";

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
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@data/client/endpoints";
import client from "@data/client";
import { PaginatorRequest } from "../types/index";

interface Props {}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  try {
    await Promise.all([
      queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.PRODUCTOS, {}],
        ({ queryKey }) => client.products.all(queryKey[1] as PaginatorRequest)
      ),
    ]);
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60, // In seconds
    };
  } catch (error) {
    //* if we get here, the product doesn't exist or something else went wrong
    return {
      notFound: true,
    };
  }
};

const Home: NextPageWithLayout = (props) => {
  const { products, loadMore, isLoadingMore, isLoading } = useProducts();

  console.log(products);

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

        <ProductServices products={products?.data} services={servicios} />

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

Home.authorization = false;
Home.getLayout = function getLayout(page) {
  return (
    <Layout variant="main" isLoadding={false}>
      {page}
    </Layout>
  );
};

export default Home;
