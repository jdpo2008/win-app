import { forwardRef } from "react";
import PropTypes from "prop-types";
// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <Head>
      <meta
        name="description"
        content="cambiateawin.pe pagina win para reevendedores"
      />
      <meta
        property="og:title"
        content="Add a Shopping Cart to Any Website in Minutes - cambiateawin"
      />
      <meta
        property="og:description"
        content="cambiateawin.pe pagina win para reevendedores"
      />
      <meta property="og:url" content="http://www.cambiateawin.pe/" />
      <meta property="og:type" content="website" />
      <title>{`${title} | WIN-APP`}</title>

      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
