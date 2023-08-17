import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import { montserrat } from "@/assets/fonts/Montserrat";
import { roboto } from "@/assets/fonts/Roboto";
import { useAnalytics } from "@/hooks/useAnalytics";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useAnalytics();

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className={`${roboto.variable} ${montserrat.variable}`}>
      {getLayout(
        <div>
          <Component {...pageProps} />
          <ToastContainer />
        </div>
      )}
    </div>
  );
}

// eslint-disable-next-line import/no-default-export
export default MyApp;
