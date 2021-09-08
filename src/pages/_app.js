import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';
import '../styles/globals.scss';

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
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
