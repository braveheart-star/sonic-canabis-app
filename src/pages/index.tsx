import Link from "next/link";
import { getAccessToken } from "../lib/auth";

export default function Home() {
  const data = getAccessToken();
  console.log("🚀 ~ file: index.tsx ~ line 6 ~ Home ~ data", data);

  return (
    <div className="text-green-400 ">
      <Link href="/auth/login">
        <button className="items-center px-2 py-1 mr-4 text-sm text-gray-300 underline ">
          Home
        </button>
      </Link>
    </div>
  );
}
