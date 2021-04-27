import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";

import { NotifyStatus, registerPayload } from "../../utils/type";
import { validateEmail, notify, validatePassword } from "../../utils/function";
import { SocialAuth } from "../../components/auth/SocialAuth";
import UserAPI from "../../lib/userApi";

export default function register() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [registerPayload, setRegisterPayload] = useState<registerPayload>({
    email: "",
    password: "",
  });

  function handleFormValidation() {
    if (!(check1 && check2)) {
      notify("Please check our requirements", NotifyStatus.error);
      return false;
    }
    if (!validateEmail(registerPayload.email)) {
      setEmailValid(false);
      return false;
    } else setEmailValid(true);
    if (!validatePassword(registerPayload.password)) {
      setPasswordValid(false);
      return false;
    } else setPasswordValid(true);
    return true;
  }

  async function handleRegister() {
    if (!handleFormValidation()) return;

    try {
      const { data, status } = await UserAPI.register(
        registerPayload.email,
        registerPayload.password
      );
      if (status !== 200 || data?.error) {
        Swal.fire("Error", data.error, "error");
      }
      if (data?.user) {
        Swal.fire("Info", "Please check your email", "info");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleOnSetValue(event: any) {
    setRegisterPayload({
      ...registerPayload,
      [event.target.name]: event.target.value.trim(),
    });
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
                Welcome to Cannabis Map
              </p>
              <p className="mt-2 text-gray-400">
                Already have an account?
                <Link href="./login">
                  <span className="mx-2 font-semibold text-green-500 cursor-pointer hover:underline">
                    Log in
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

                <div className="px-4 mt-4 text-gray-500">
                  <div className="flex items-baseline text-sm ">
                    <input
                      type="checkBox"
                      onChange={(e) => setCheck1(e.target.checked)}
                    />
                    <p className="ml-2">
                      Send me emails about new products, recommendations and
                      features on CannabisMap
                    </p>
                  </div>
                  <div className="flex items-baseline mt-3 text-sm ">
                    <input
                      type="checkBox"
                      onChange={(e) => setCheck2(e.target.checked)}
                    />
                    <p className="ml-2">
                      I agree to receive offers and emails promotion
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleRegister}
                  className="w-full py-2 text-base font-bold text-white bg-green-500 rounded"
                >
                  Register
                </button>
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

      <ToastContainer
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
      />
    </div>
  );
}
