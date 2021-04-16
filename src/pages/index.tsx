import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import queryString from "query-string";

export default function Home() {
  const location = useRouter().asPath;

  useEffect(() => {
    const parsedQuery = queryString.parse(location.substring(1)); // returns the query object
    console.log("parsedQuery", parsedQuery);
  });
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
