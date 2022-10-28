import React from "react";

import NavbarStyle from "@components/_App/NavbarStyle";
import Footer from "@components/_App/Footer";

import AppScreenshots from "@components/Home/AppScreenshots";
import CharacteristicsPlan from "@components/Home/CharacteristicsPlan";
import ProductServices from "@components/Home/ProductServices";
import ContactForm from "@components/Home/ContactForm";
import Information from "@components/Home/Information";
import RegionsParts from "@components/Home/RegionsParts";

export default function Home() {
  return (
    <>
      <AppScreenshots />

      <CharacteristicsPlan />

      <ProductServices />

      <ContactForm />

      <Information />

      <RegionsParts />
    </>
  );
}
