import Router from "next/router";
import { mutate } from "swr";
import Swal from "sweetalert2";
import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import UserAPI from "../../lib/userApi";

export const SocialAuth = () => {
  async function handleResponse(res: any) {
    const { data, status } = await UserAPI.socialAuth(res);
    if (status !== 200 || data?.error) {
      Swal.fire("Error", data.message, "error");
    }

    if (!!data.access_token) {
      Swal.fire("Success", "Successfully logged in!", "success");
      window.localStorage.setItem(
        "accessToken",
        JSON.stringify(data.access_token)
      );
      mutate("accessToken", data.access_token);
      Router.push("/");
    }
  }

  const responseGoogle = (response: any) => {
    if (response.accessToken.length > 0) {
      handleResponse(response.profileObj.email);
    }
  };

  const responseFacebook = (response: any) => {
    if (response.accessToken.length > 0) {
      handleResponse(response.email);
    }
  };

  return (
    <div className="grid grid-cols-1 space-y-2 sm:space-y-0 sm:gap-x-4 sm:grid-cols-2">
      <FacebookLogin
        appId="3098043963776528"
        autoLoad
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps: any) => (
          // <button onClick={renderProps.onClick}>
          //   <p>Continue with Facebook</p>
          // </button>

          <button
            onClick={renderProps.onClick}
            className="flex items-center justify-center w-full h-10 mx-auto space-x-2 text-sm text-gray-600 border border-gray-400 rounded lg:h-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-blue-500 fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <p>Continue with Facebook</p>
          </button>
        )}
      />

      {/* <FacebookLogin
        appId="3098043963776528"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="text-white bg-blue-400 p-2 w-full border rounded"
      /> */}

      <GoogleLogin
        clientId={String(process.env.NEXT_PUBLIC_GOOGLE_ID)}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="flex items-center justify-center w-full h-10 mx-auto space-x-2 text-sm text-gray-600 border border-gray-400 rounded lg:h-12"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="w-8 h-8 fill-current"
            >
              <path fill="#fff" d="M0 0h40v40H0z" />
              <path
                d="M11.849 23.33l-1.045 3.898-3.816.08A14.933 14.933 0 015.2 20.2c0-2.487.605-4.833 1.677-6.898h.001l3.398.623 1.489 3.377a8.915 8.915 0 00-.482 2.898c0 1.101.2 2.156.566 3.13z"
                fill="#FBBB00"
              />
              <path
                d="M34.938 17.398c.172.907.262 1.844.262 2.802 0 1.074-.113 2.122-.328 3.132a14.997 14.997 0 01-5.281 8.566l-.001-.001-4.28-.218-.606-3.782a8.94 8.94 0 003.847-4.565H20.53v-5.934h14.408z"
                fill="#518EF8"
              />
              <path
                d="M29.59 31.897A14.937 14.937 0 0120.2 35.2c-5.712 0-10.679-3.193-13.212-7.891l4.86-3.98a8.919 8.919 0 0012.856 4.568l4.886 4z"
                fill="#28B446"
              />
              <path
                d="M29.774 8.653l-4.859 3.979a8.921 8.921 0 00-13.15 4.67l-4.887-4C9.373 8.489 14.402 5.2 20.2 5.2c3.64 0 6.977 1.297 9.575 3.453z"
                fill="#F14336"
              />
            </svg>
            <p>Continue with Google</p>
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        autoLoad={false}
      />
    </div>
  );
};
