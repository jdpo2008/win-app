import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";

import NavbarStyle from "./NavbarStyle";
import Footer from "./Footer";
import Cliengo from "./Cliengo";

const MainLayout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      <NavbarStyle />

      {children}

      {loader ? <Preloader /> : null}

      {/* <GoTop scrollStepInPx="100" delayInMs="10.50" /> */}

      <Cliengo />

      <Footer />
    </>
  );
};

export default MainLayout;
