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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

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
import "react-toastify/dist/ReactToastify.css";

import NotistackProvider from "@components/Common/NotistackProvider";
import { NextPageWithLayout } from "@interfaces/index";
import ThemeProvider from "../theme";
import { ToastContainer } from "react-toastify";

import dynamic from "next/dynamic";
import { MotionLazyContainer } from "@components/Common/animate";
const PrivateRoute = dynamic(
  () => import("@components/_App/Layouts/_private-routes"),
  {
    ssr: false,
  }
);

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);
  const authenticationRequired = Component.authorization ?? false;

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <NotistackProvider>
              <MotionLazyContainer>
                {getLayout(<Component {...pageProps} />)}
                {/* {authenticationRequired ? (
                <PrivateRoute>
                  {getLayout(<Component {...pageProps} />)}
                </PrivateRoute>
              ) : (
                getLayout(<Component {...pageProps} />)
              )} */}
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  draggable={false}
                  closeOnClick
                  pauseOnHover
                />
              </MotionLazyContainer>
            </NotistackProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
