import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { motion } from "framer-motion";
import { SWRConfig } from "swr";
import "../styles/globals.css";

const fetcher = (...args: any) => fetch({ ...args }).then((res) => res.json());

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <SWRConfig value={{ fetcher }}>
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
      </SWRConfig>
    </div>
  );
}
