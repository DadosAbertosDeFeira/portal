import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Montserrat, Roboto } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import { useAnalytics } from "@/hooks/useAnalytics";

const roboto = Roboto({
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useAnalytics();

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <div className={`${roboto.variable} ${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}

// eslint-disable-next-line import/no-default-export
export default MyApp;
