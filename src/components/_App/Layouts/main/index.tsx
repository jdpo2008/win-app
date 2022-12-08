import React from "react";

import NavbarStyle from "./NavbarStyle";
import Footer from "./Footer";
import Cliengo from "./Cliengo";
import Preloader from "@components/Common/Preloader";

const MainLayout = ({ children }: React.PropsWithChildren<{}>) => {
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
