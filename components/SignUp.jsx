"use client";

import React from "react";
import { bungee_shade } from "@/constants/fonts";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

const SignUp = () => {
  return (
    <div className="w-[500px] mx-auto border border-black rounded-xl px-6 bg-white/70">
      <h2 className="py-4 text-center font-semibold border-b">Sign Up</h2>
      <form className="py-6 flex flex-col gap-6 border-b">
        <h1 className="text-xl font-semibold text-center">
          Welcome to{" "}
          <span className={`${bungee_shade.className} text-xl`}>Onyx</span>
        </h1>
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-semibold">First Name</h4>
          <input
            type="text"
            placeholder="Jon"
            className="border py-4 px-2 rounded-lg text-sm"
          />
          <h4 className="text-xs font-semibold mt-4">Last Name</h4>
          <input
            type="text"
            placeholder="Bon Jovi"
            className="border py-4 px-2 rounded-lg text-sm"
          />
          <h4 className="text-xs font-semibold mt-4">Email</h4>
          <input
            type="email"
            placeholder="jonbonjovi@email.com"
            className="border py-4 px-2 rounded-lg text-sm"
          />
        </div>
        <button
          onClick={() =>
            login({
              authUrlParams: {
                connection_id: "conn_018f4d2e89937c71afa7d7f8a05e5f86",
                login_hint: "dave@kinde.com",
              },
            })
          }
          className="bg-orange-600 py-3 rounded-xl text-white font-medium"
        >
          Continue
        </button>
      </form>

      <h3 className="text-center font-bold my-3">Or</h3>

      <div className="flex flex-col gap-4 mt-2 my-3">
        <button
          onClick={() =>
            login({
              authUrlParams: {
                connection_id: "conn_6a95dec504d34dc286dc80e8df9f6099",
              },
            })
          }
          className="bg-gray-200 hover:bg-gray-100 py-3 rounded-lg font-medium"
        >
          <div className="flex gap-3 justify-center">
            <img src="/google-icon.svg" className="w-6 h-6 inline-block" />
            <p>Sign up with Google</p>
          </div>
        </button>
        <button
          onClick={() =>
            login({
              authUrlParams: {
                connection_id: "conn_6a95dec504d34dc286dc80e8df9f6099",
              },
            })
          }
          className="bg-gray-200 hover:bg-gray-100 py-3 rounded-lg font-medium"
        >
          {/* <img src='/facebook.svg' className="w-6 h-6 inline-block mr-2"/>Sign up with Facebook */}
          <div className="flex gap-3 justify-center">
            <img src="/facebook.svg" className="w-6 h-6 inline-block" />
            <p>Sign up with Facebook</p>
          </div>
        </button>
      </div>

      <p className="py-5 text-center">
        Already have an account?{" "}
        <LoginLink className="text-blue-400">Sign in</LoginLink>
      </p>
    </div>
  );
};

export default SignUp;
