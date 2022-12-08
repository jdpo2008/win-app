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
        openGraph={{
          url: `httpa://cambiateawin.pe${url}`,
          title,
          description,
        }}
      />

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

export default Page;
