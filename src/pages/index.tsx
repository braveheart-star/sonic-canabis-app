import { Layout } from "../components/common/Layout";
import { Card } from "../components/common/Card";

export default function Home() {
  return (
    <Layout>
      <div className="container p-2 mx-auto sm:py-4 sm:px-4 max-w-7xl">
        <div className="relative w-full mt-4 rounded-lg shadow">
          <img className="w-full " src="/images/home/AD.svg" />
          <div className="absolute inset-0 ">
            <div className="flex h-full ">
              <div className="m-auto ">
                <span className="text-5xl font-extrabold text-transparent uppercase bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Canabis products
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 ">
          <button className=" text-cyan-500">Start selling</button>
        </div>
        <div className="mt-2 space-y-4 lg:mt-8 lg:space-y-12">
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
