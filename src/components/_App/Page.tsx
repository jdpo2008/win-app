import { forwardRef, FC, ReactElement } from "react";
import PropTypes from "prop-types";
// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";
import { NextSeo, NextSeoProps } from "next-seo";

interface Props {
  children: ReactElement;
  title?: string;
  description?: string;
  url?: string;
  meta?: any;
  other?: any;
}

const DOMAIN = "https://cambiateawin.pe";
const DEFAULT_OG_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiodquYhjFQBcRvJSCGlj4d5fLlcCN2Km7LNA7QwzWa7r37B2vsXglKQm95hu38JLoaSs&usqp=CAU";

// ----------------------------------------------------------------------

const Page: FC<Props> = forwardRef(
  (
    { children, title = "", description = "", url = "", meta, ...other },
    ref
  ) => (
    <>
      <NextSeo
        title={`${title} | Win Internet 100% Fibra Optica`}
        description={description}
        canonical={DOMAIN}
        openGraph={{
          url: `https://cambiateawin.pe${url}`,
          title: `${title}`,
          description:
            "Pídelos aquí Previous Next Ahora contamos con cobertura en Chiclayo, Piura, Trujillo, Chimbote. Contratando solo internet ¡Durante todo el mes de Noviembre, cámbiate a Win y disfruta de la velocidad de tu internet! * La promo win duplica solo aplica desde el plan de 50Mbps hasta 300Mbps. x2 Internet Fibra WIN &hellip; Win Internet 100% Fibra Read More &raquo;",
          siteName: "cambiateawin.pe",
          images: [
            {
              url: DEFAULT_OG_IMAGE,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
        robotsProps={{
          notranslate: true,
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "José Daniel Pérez Ochoa - innovacionesjp.com",
          },
          {
            name: "application-name",
            content: "cambiateawin",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
          {
            name: "keywords",
            content:
              "cambiateawin.pe, cambiate a win, 100% fibra optica, internet, win, television digital, planes gamers, mesh, tv box ",
          },
          {
            name: "author",
            content: "innovacionesjd.com",
          },
        ]}

        // twitter={{
        //   handle: "@handle",
        //   site: "@site",
        //   cardType: "summary_large_image",
        // }}
        // facebook={{}}
      />

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

export default Page;
