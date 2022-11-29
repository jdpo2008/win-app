import React from "react";
import type, { AppProps } from "next/app";
import Head from "next/head";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "../store";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import palette from "../theme/palette";

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
import ThemeProvider from "../theme";
import NotistackProvider from "@components/Common/NotistackProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  // Create a client
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />

        <meta name="theme-color" content={palette.light.primary.main} />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta
          name="description"
          content="The starting point for your next project with Win-App"
        />
        <meta
          name="keywords"
          content="nextjs,win,internet,react,kit,application"
        />
        <meta name="author" content="innovacionesjd.com" />
      </Head>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider>
              <NotistackProvider>
                {getLayout(<Component {...pageProps} />)}
              </NotistackProvider>{" "}
            </ThemeProvider>
          </Hydrate>
        </QueryClientProvider>
      </ReduxProvider>
    </>
  );
}
