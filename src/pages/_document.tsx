import { Head, Html, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

function MyDocument() {
  return (
    <Html lang="pt">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
// eslint-disable-next-line import/no-default-export
export default MyDocument;
