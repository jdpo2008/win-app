import React from "react";
import NavbarStyle from "@components/_App/NavbarStyle";
import Footer from "@components/_App/Footer";

import AppScreenshots from "@components/Home/AppScreenshots";
import MainBanner from "@components/Home/MainBanner";
import CharacteristicsPlan from "@components/Home/CharacteristicsPlan";
import ProductServices from "@components/Home/ProductServices";
import ContactForm from "@components/Home/ContactForm";

export default function Home() {
  return (
    <>
      <NavbarStyle />

      {/* <MainBanner /> */}

      <AppScreenshots />

      <CharacteristicsPlan />

      <ProductServices />

      {/* <PricingPlan /> */}

      <ContactForm />

      <Footer />
    </>
  );
}
