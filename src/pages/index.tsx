import Link from "next/link";
import { Layout } from "../components/common/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container px-4 mx-auto ">
        <Link href="/auth/login">
          <button className="items-center px-2 py-1 mr-4 text-sm text-gray-300 underline ">
            Home
          </button>
        </Link>
      </div>
    </Layout>
  );
}
