import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { StoreProvider } from "easy-peasy";
import { motion } from "framer-motion";
import store from "../store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StoreProvider store={store}>
      <Head>
        <title>Canabis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col w-full min-h-screen ">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.main>
      </div>
    </StoreProvider>
  );
}
