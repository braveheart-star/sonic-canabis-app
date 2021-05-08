import { Layout } from "../../components/common/Layout";
// window open in sever side render
import dynamic from "next/dynamic";

const MapDisplay = dynamic(
  () => import("../../components/dispensary/MapDisplay"),
  { ssr: false }
);

export default function dispensary() {
  return (
    <Layout>
      <div className="container w-full p-4 mx-auto space-y-4 text-gray-700 bg-white max-w-7xl">
        <MapDisplay />
      </div>
    </Layout>
  );
}
