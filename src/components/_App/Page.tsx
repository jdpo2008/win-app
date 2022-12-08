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
      <title key="title">{`${title} | WIN-APP`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="es_PE" />
      <meta key="og_site_name" property="og:site_name" content="WIN-APP" />
      <meta key="og_url" property="og:url" content={DOMAIN + `${url}`} />
      <meta key="og_site_name" property="og:site_name" content="WIN-APP" />
      <meta key="og_image" property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | WIN-APP`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={DOMAIN} />

      {/* <NextSeo
        title={`${title} | WIN-APP`}
        description={description}
        openGraph={{
          url: `httpa://cambiateawin.pe${url}`,
          title,
          description,
        }}
      /> */}

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

export default Page;
