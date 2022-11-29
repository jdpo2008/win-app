import React from "react";
import Preloader from "../../../Common/Preloader";

import Cliengo from "../main/Cliengo";

const AuthLayout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      {children}

      {loader ? <Preloader /> : null}

      {/* <Cliengo /> */}
    </>
  );
};

export default AuthLayout;
