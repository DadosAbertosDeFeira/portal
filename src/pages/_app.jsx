import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as gtag from '../lib/gtag';
import '../styles/globals.css';
import Layout from '../layouts/Layout';

const handleRouteChange = (url) => {
  gtag.pageview(url);
};

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const { events } = useRouter();
  useEffect(() => {
    events.on('routeChangeComplete', handleRouteChange);
    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events]);
  return (
    <Layout>
      <div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </Layout>
  );
}

export default MyApp;
