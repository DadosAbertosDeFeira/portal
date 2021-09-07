/* eslint-disable react/jsx-props-no-spreading */
import { ToastContainer } from 'react-toastify';
import '../styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
