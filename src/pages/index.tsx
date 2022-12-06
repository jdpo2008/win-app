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

interface Props {}

const Home: NextPageWithLayout = () => {
  const [isLoadding, setIsLoadding] = React.useState(false);
  const [departamentos, setDepartamentos] = React.useState([]);
  const [provincias, setProvincias] = React.useState({});
  const [distritos, setDistritos] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const [services, setServices] = React.useState([]);

  const { data } = useProducts();

  React.useEffect(() => {
    setIsLoadding(true);
    const getData = async () => {
      const depart = axios.get("http://cambiateawin.pe//api/v1/departamentos");

      const provin = axios.get("http://cambiateawin.pe/api/v1/provincias");

      const distri = axios.get("http://cambiateawin.pe/api/v1/distritos");

      const prod = axios.get("http://cambiateawin.pe/api/v1/products");

      const serv = axios.get("http://cambiateawin.pe/api/v1/services");

      axios
        .all([depart, provin, distri, prod, serv])
        .then((result) => {
          setDepartamentos(result[0].data);
          setProvincias(result[1].data);
          setDistritos(result[2].data);
          setProducts(result[3].data);
          setServices(result[4].data);
        })
        .finally(() => {
          setIsLoadding(false);
        });
    };

    getData();

    //setIsLoadding(false);
  }, []);

  return isLoadding ? (
    <Preloader />
  ) : (
    <Page
      title="Home"
      description="Home page cambiateawin.pe servicios, informacion, planes y mas"
      url="/"
    >
      <>
        <AppScreenshots />

        <CharacteristicsPlan />

        <ProductServices products={products} services={services} />

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
  return <Layout variant="main">{page}</Layout>;
};

export default Home;
