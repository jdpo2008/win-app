import React from "react";
import NavbarStyle from "@components/_App/NavbarStyle";
import Footer from "@components/_App/Footer";

import AppScreenshots from "@components/Home/AppScreenshots";
import MainBanner from "@components/Home/MainBanner";
import PricingPlan from "@components/Home/PricingPlan";

export default function Home() {
  return (
    <>
      <NavbarStyle />

      {/* <MainBanner /> */}

      <AppScreenshots />

      <PricingPlan />

      <Footer />
    </>
  );
}
