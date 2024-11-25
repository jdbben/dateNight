"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { text } from "@/app/lib/const";
import { cn } from "../lib/utils";
import Botton from "./Botton";

const Discreption = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const func = () => {
    setLoading(true);

    signIn(undefined, { callbackUrl: "/configure/gameSetup" });

    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:gap-2 lg:h-screen items-center justify-center gap-4 pt-[15vh] pb-[5vh] lg:pb-[40%] ">
      <div>
        <p className="light:text-[#333333] text-3xl lg:text-7xl p-3 justify-center flex">
          {text.title}
        </p>
        <div
          className={cn(
            `h-fit w-fit rounded-2xl bg-[#4A5568] dark:bg-[#49919D] shadow-2xl text-sm lg:text-md p-2 lg:p-6 relative overflow-hidden`
          )}
        >
          <p className="text-white"> {text.features}</p>
        </div>
      </div>
      {loading ? (
        <>
          <button type="button" className="bg-indigo-500 ..." disabled>
            <svg
              className={`animate-spin h-5 w-5 mr-3 `}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Processing...
          </button>
        </>
      ) : (
        <>
          <Botton Name="Start playing" OnClick={func} />
        </>
      )}
    </div>
  );
};

export default Discreption;
