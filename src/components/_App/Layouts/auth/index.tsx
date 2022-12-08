import React from "react";
import Preloader from "../../../Common/Preloader";

const AuthLayout = ({ children }: React.PropsWithChildren<{}>) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      {children}

      {loader ? <Preloader /> : null}
    </>
  );
};

export default AuthLayout;
