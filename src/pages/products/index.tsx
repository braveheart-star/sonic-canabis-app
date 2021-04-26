import React from "react";
import { Banner } from "../../components/common/Banner";
import { Layout } from "../../components/common/Layout";

export default function products() {
  return (
    <Layout>
      <div className="container px-2 mx-auto space-y-8 sm:px-4 max-w-7xl">
        <Banner />
      </div>
    </Layout>
  );
}
