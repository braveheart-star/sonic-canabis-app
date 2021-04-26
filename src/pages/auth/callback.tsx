import { useEffect } from "react";
import { useRouter } from "next/router";
import UserAPI from "../../lib/user";
import Swal from "sweetalert2";
import { mutate } from "swr";

export default function callback() {
  const router = useRouter();
  const { query } = router;

  async function getUser(token: string) {
    const { data, status } = await UserAPI.updateSelf(token);
    if (status !== 200) {
      return;
    }
    window.localStorage.setItem("user", JSON.stringify(data));
    mutate("user", data);

    Swal.fire("Success", "Congrats! Successfully registered", "success");
    router.push("/");
  }

  async function activateUser(email: any, confirmCode: any) {
    const { data, status } = await UserAPI.activate(email, confirmCode);

    if (status !== 200 || data?.error) {
      Swal.fire("Error", data.message, "error");
      return;
    }
    if (!!data.access_token) {
      window.localStorage.setItem(
        "accessToken",
        JSON.stringify(data.access_token)
      );
      mutate("accessToken", data.access_token);
      getUser(data.access_token);
    }
  }

  useEffect(() => {
    if (!!query.email) {
      console.log("🚀 ~ file: callback.tsx ~ line 9 ~ callback ~ query", query);
      const { email, verificationCode } = query;
      activateUser(email, verificationCode);
    }
  }, [query]);
  return null;
}
