import React from 'react';

import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const MyApp = ({
  Component,
  pageProps
}: {
  Component: any;
  pageProps: any;
}) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
