import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { mutate } from "swr";

import { registerPayload } from "../../utils/type";
import { validateEmail, validatePassword } from "../../utils/function";
import { SocialAuth } from "../../components/auth/SocialAuth";
import UserAPI from "../../lib/userApi";

export default function login() {
  const router = useRouter();

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [loginPayload, setLoginPayload] = useState<registerPayload>({
    email: "",
    password: "",
  });

  function handleFormValidation() {
    if (!validateEmail(loginPayload.email)) {
      setEmailValid(false);
      return false;
    } else setEmailValid(true);
    if (!validatePassword(loginPayload.password)) {
      setPasswordValid(false);
      return false;
    } else setPasswordValid(true);
    return true;
  }

  function handleOnSetValue(event: any) {
    setLoginPayload({
      ...loginPayload,
      [event.target.name]: event.target.value.trim(),
    });
  }

  async function handleLogin() {
    if (!handleFormValidation()) return;

    const { data, status } = await UserAPI.login(
      loginPayload.email,
      loginPayload.password
    );

    if (status !== 200 || data?.error) {
      Swal.fire("Error", data.message, "error");
      return;
    }
    if (!!data.access_token) {
      Swal.fire("Success", "Successfully logged in!", "success");
      window.localStorage.setItem(
        "accessToken",
        JSON.stringify(data.access_token)
      );
      mutate("accessToken", data.access_token);
      router.push("/");
    }
  }

  return (
    <div className="container flex min-h-screen p-4 m-auto ">
      <div className="w-full max-w-6xl m-auto border">
        <div className="grid lg:grid-cols-3">
          <div className="w-full p-2 lg:col-span-2 sm:p-4 ">
            <Link href="/">
              <div className="flex-shrink-0 w-20 h-20 mx-auto cursor-pointer lg:w-24 lg:h-24">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={2000}
                  height={2000}
                />
              </div>
            </Link>
            <div className="w-full max-w-xl py-4 mx-auto lg:py-12">
              <p className="text-2xl font-bold text-green-700 sm:text-3xl lg:text-4xl">
                Welcome Back!
              </p>
              <p className="mt-2 text-gray-400">
                Don't have an account?
                <Link href="./register">
                  <span className="mx-2 font-semibold text-green-500 cursor-pointer hover:underline">
                    Register
                  </span>
                </Link>
              </p>

              <div className="mt-8 space-y-4 ">
                <div className="space-y-2 ">
                  {!emailValid && (
                    <label className="text-sm text-red-500 ">
                      Email should be valid format !
                    </label>
                  )}
                  <input
                    className="block w-full p-2 px-4 text-sm border rounded lg:text-base focus:border-green-300 focus:outline-none"
                    placeholder="Email"
                    name="email"
                    onChange={handleOnSetValue}
                  />
                </div>
                <div className="space-y-2 ">
                  {!passwordValid && (
                    <label className="text-sm text-red-500 ">
                      Password should be minimum eight characters, at least one
                      letter and one number !
                    </label>
                  )}
                  <input
                    className="block w-full p-2 px-4 text-sm border rounded lg:text-base focus:border-green-300 focus:outline-none"
                    placeholder="Password"
                    name="password"
                    onChange={handleOnSetValue}
                  />
                </div>

                <button
                  onClick={handleLogin}
                  className="w-full py-2 text-base font-bold text-white bg-green-500 rounded cursor-pointer"
                >
                  Log in
                </button>

                <Link href="./recover">
                  <p className="text-right text-green-500 cursor-pointer hover:underline ">
                    Forgot your password?
                  </p>
                </Link>
              </div>
              <div className="mt-8 ">
                <div className="relative border-b ">
                  <div className="absolute w-full -mt-3 text-center text-gray-400 ">
                    <p className="mx-auto text-center bg-white w-14">or</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 ">
                <SocialAuth />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src="/images/auth/authBack.png"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
            />
          </div>
        </div>
      </div>
    </div>
  );
}
