import { useEffect } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";
import useSWR from "swr";
import { SERVER_BASE_URL } from "../../utils/constant";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function callback() {
  const router = useRouter();
  const location = useRouter().asPath;

  const parsedQuery = queryString.parse(location.substring(1)); // returns the query object

  const { data } = useSWR(
    parsedQuery.email
      ? `${SERVER_BASE_URL}/user/active?email=${parsedQuery.email}&confirmCode=${parsedQuery.verificationCode}`
      : null,
    fetcher
  );

  useEffect(() => {
    if (data) {
      // setAccessToken(data.access_token);
      router.push("/");
    }
  }, [data]);

  return null;
}
