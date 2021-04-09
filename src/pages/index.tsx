import Link from "next/link";

export default function Home() {
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
