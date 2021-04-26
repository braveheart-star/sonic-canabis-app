import { useEffect } from "react";
import { useRouter } from "next/router";
import UserAPI from "../../lib/user";
import Swal from "sweetalert2";

export default function callback() {
  const router = useRouter();
  const { query } = router;

  async function activateUser(email: any, confirmCode: any) {
    const { data, status } = await UserAPI.activate(email, confirmCode);

    if (status !== 200 || data?.error) {
      Swal.fire("Error", data.message, "error");
      return;
    }
    Swal.fire("Success", "Redirecting to homepage", "success");
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
