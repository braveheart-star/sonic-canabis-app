import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";

import { NotifyStatus, registerPayload } from "../../utils/type";
import { validateEmail, notify, validatePassword } from "../../utils/function";
import { AuthAPI } from "../../requests/AuthAPI";

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

  function handleRegister() {
    if (!handleFormValidation()) return;
    else {
      AuthAPI.register(registerPayload).then((res) => {
        if (res.data.error) {
          Swal.fire("Error", "Email already existed !", "error");
        } else
          Swal.fire(
            " Success",
            "Please check your email for validation",
            "success"
          );
      });
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
            <div className="flex-shrink-0 w-20 h-20 mx-auto lg:w-24 lg:h-24">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={2000}
                height={2000}
              />
            </div>
            <div className="w-full max-w-xl py-6 mx-auto lg:py-12">
              <p className="text-3xl font-bold text-green-700 lg:text-4xl">
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
                <div className="grid grid-cols-1 space-y-2 sm:space-y-0 sm:gap-x-4 sm:grid-cols-2">
                  <button className="flex items-center justify-center w-full h-10 mx-auto space-x-2 text-sm text-gray-600 border border-gray-400 rounded lg:h-12">
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
                  <button className="flex items-center justify-center w-full h-10 mx-auto space-x-2 text-sm text-gray-600 border border-gray-400 rounded lg:h-12">
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
                </div>
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
