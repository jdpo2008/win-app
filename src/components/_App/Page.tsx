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
        title={`${title} | WIN-APP`}
        description={description}
        canonical={DOMAIN}
        openGraph={{
          url: `https://cambiateawin.pe${url}`,
          title: `${title}`,
          description: `${description}`,
          siteName: "WIN-APP",
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
