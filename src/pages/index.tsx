import Image from "next/image";

import { Layout } from "../components/common/Layout";
import { Card } from "../components/common/Card";
import { regions } from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <div className="container p-2 mx-auto space-y-8 sm:py-4 sm:px-4 max-w-7xl">
        <div className="relative w-full mt-4 lg:mt-8">
          <div className="relative hidden w-full h-56 rounded shadow lg:flex">
            <Image
              src="/images/home/AD.svg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded " // just an example
            />
          </div>
          <div className="justify-around space-x-2 sm:flex">
            <div className="relative w-full h-32 rounded-lg shadow lg:hidden sm:w-80 sm:h-44">
              <Image
                src="/images/home/mobile_BG1.jpg"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded " // just an example
              />
            </div>
            <div className="relative hidden w-full h-32 rounded-lg shadow sm:flex lg:hidden sm:w-80 sm:h-44">
              <Image
                src="/images/home/mobile_BG2.jpg"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded " // just an example
              />
            </div>
          </div>
          <div className="absolute inset-0 hidden lg:block ">
            <div className="flex h-full ">
              <div className="m-auto ">
                <span className="text-5xl font-extrabold text-transparent uppercase bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500">
                  Canabis products
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:space-y-8 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full p-2 text-gray-700 bg-white rounded-md shadow sm:px-8 sm:p-4">
          <p className="p-4 text-lg font-bold tracking-wider">
            Dispensary Regions
          </p>
          <div className="grid grid-cols-2 p-4 text-sm text-gray-500 lg:text-base sm:grid-cols-3 lg:space-y-2 lg:grid-cols-5">
            {regions.map((item, idx) => {
              return (
                <div key={idx} className="space-y-2 ">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
