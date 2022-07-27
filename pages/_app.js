import { Provider } from "react-redux";
import Head from "next/head";

import "../styles/globals.css";

import Layout from "../components/Layout.js";
import store from "../data/store.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>어쩔코스</title>
      </Head>
      
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
