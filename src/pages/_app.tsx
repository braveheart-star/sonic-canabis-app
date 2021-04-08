import React from "react";
import { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import store from "../store";
import "../styles/globals.css";
import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
