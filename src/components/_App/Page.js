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
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Win Internet 100% Fibra - Win Internet 100% Fibra Óptica"
      />
      <meta
        property="og:description"
        content="Pídelos aquí Previous Next Pídelos aquí Previous Next Ahora contamos con cobertura en Chiclayo, Piura, Trujillo, Chimbote. Contratando solo internet ¡Durante todo el mes de Noviembre, cámbiate a Win y disfruta de la velocidad de tu internet! * La promo win duplica solo aplica desde el plan de 50Mbps hasta 300Mbps. x2 Internet Fibra WIN &hellip; Win Internet 100% Fibra Read More &raquo;"
      />
      <meta property="og:url" content="https://cambiateawin.pe/" />
      <meta property="og:site_name" content="Win Internet 100% Fibra Óptica" />
      <meta
        property="article:modified_time"
        content="2022-11-21T20:52:44+00:00"
      />
      <meta
        name="keywords"
        content="nextjs, win, internet, react, kit, application, cambiateawin.pe cambiate a win, fibraoptica"
      />
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
