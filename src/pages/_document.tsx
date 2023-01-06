import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
// theme
import palette from "../theme/palette";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App: any) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component: any) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="es-PE">
        <Head>
          <meta name="theme-color" content={palette.light.primary.main} />
          {/* <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
