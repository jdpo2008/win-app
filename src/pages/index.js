import React from "react";
import NavbarStyle from "@components/_App/NavbarStyle";
import Footer from "@components/_App/Footer";

import MainBanner from "@components/Home/MainBanner";
import PricingPlan from "@components/Home/PricingPlan";

export default function Home() {
  return (
    <>
      <NavbarStyle />

      <MainBanner />

      <PricingPlan />

      <Footer />
    </>
  );
}
