import { forwardRef, FC, ReactElement } from "react";

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
        title={`${title} - Win Internet 100% Fibra Optica`}
        description={description}
        canonical={DOMAIN}
        openGraph={{
          type: "website",
          locale: "es_PE",
          siteName: "cambiateawin.pe",
          url: `https://cambiateawin.pe${url}`,
          title: `${title} - Win Internet 100% Fibra Optica`,
          description:
            "Pídelos aquí Previous Next Ahora contamos con cobertura en Chiclayo, Piura, Trujillo, Chimbote. Contratando solo internet ¡Durante todo el mes de Noviembre, cámbiate a Win y disfruta de la velocidad de tu internet! * La promo win duplica solo aplica desde el plan de 50Mbps hasta 300Mbps. x2 Internet Fibra WIN &hellip; Win Internet 100% Fibra Read More &raquo;",
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
            name: "viewport",
            content:
              "width=device-width, initial-scalewidth=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0",
          },
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
              "Win, Win Perú, Win Internet, Win Planes, Win Hogar, Win Planes Internet, Win Internet Hogar, Fibra Win, Win Fibra Óptica, Win Internet Inalámbrico, Win Wifi, Internet Satelital Win, Win Internet Precio, Internet Inalámbrico",
          },
          {
            name: "author",
            content: "innovacionesjd.com",
          },
          {
            name: "google-site-verification",
            content: "eTTGC4fZ-VuYVh4vGmyl6m9UfIEsLNbuRNarf988hcg",
          },
        ]}
        additionalLinkTags={[
          // {
          //   rel: "manifest",
          //   href: "/manifest.json",
          // },
          // {
          //   rel: "apple-touch-icon",
          //   sizes: "180x180",
          //   href: "/favicon/apple-touch-icon.png",
          // },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon/favicon-16x16.png",
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
