import React, { ReactElement, ReactNode, useState } from "react";
import type, { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "../store";

import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "@public/css/bootstrap.min.css";
import "@public/css/fontawesome.min.css";
import "@public/css/remixicon.css";
import "@public/css/animate.min.css";
import "../../node_modules/swiper/swiper.min.css";

import "../../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "react-tabs/style/react-tabs.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Global CSS
import "@public/css/styles.css";
import NotistackProvider from "@components/Common/NotistackProvider";
import { NextPageWithLayout } from "@interfaces/index";
import ThemeProvider from "../theme";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  //pageProps: { dehydratedState?: DehydratedState };
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <NotistackProvider>
            {getLayout(<Component {...pageProps} />)}
          </NotistackProvider>
        </ThemeProvider>
        {/* <Hydrate state={pageProps.dehydratedState}>
          
        </Hydrate> */}
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
