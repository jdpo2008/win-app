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
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./favicon/favicon-16x16.png"
          />

          <meta name="theme-color" content={palette.light.primary.main} />
          <link rel="manifest" href="./manifest.json" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Win Internet 100% Fibra - Win Internet 100% Fibra Óptica"
            key="title"
          />
          <meta
            property="og:description"
            content="Pídelos aquí Previous Next Pídelos aquí Previous Next Ahora contamos con cobertura en Chiclayo, Piura, Trujillo, Chimbote. Contratando solo internet ¡Durante todo el mes de Noviembre, cámbiate a Win y disfruta de la velocidad de tu internet! * La promo win duplica solo aplica desde el plan de 50Mbps hasta 300Mbps. x2 Internet Fibra WIN &hellip; Win Internet 100% Fibra Read More &raquo;"
            key="description"
          />
          <meta property="og:url" content="https://cambiateawin.pe/" />
          <meta
            property="og:site_name"
            content="Win Internet 100% Fibra Óptica"
          />
          <meta
            property="article:modified_time"
            content="2022-11-21T20:52:44+00:00"
          />
          <meta
            property="description"
            content="Pídelos aquí Previous Next Pídelos aquí Previous Next Ahora contamos con cobertura en Chiclayo, Piura, Trujillo, Chimbote. Contratando solo internet ¡Durante todo el mes de Noviembre, cámbiate a Win y disfruta de la velocidad de tu internet! * La promo win duplica solo aplica desde el plan de 50Mbps hasta 300Mbps. x2 Internet Fibra WIN &hellip; Win Internet 100% Fibra Read More &raquo;"
            key="description"
          />
          <meta
            name="keywords"
            content="nextjs,win,internet,react,kit,application,cambiateawin.pe,cambiateawin"
          />
          <meta name="author" content="innovacionesjd.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
