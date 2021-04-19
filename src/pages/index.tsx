import { Layout } from "../components/common/Layout";
import { Card } from "../components/common/Card";

export default function Home() {
  return (
    <Layout>
      <div className="container p-2 mx-auto sm:py-4 sm:px-4 max-w-7xl">
        <div className="w-full rounded-lg shadow ">
          <img className="w-full h-24 sm:h-auto " src="/images/home/AD.png" />
        </div>
        <div className="mt-8 space-y-4 lg:space-y-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
}
