"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { text } from "@/app/lib/const";
import { cn } from "../lib/utils";
import Button from "./Button";

const Discreption = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const func = () => {
    setLoading(true);

    try {
      signIn(undefined, { callbackUrl: "/configure/gameSetup" });
    } catch (err) {
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
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
          <Button
            Name="Loading..."
            OnClick={() => {
              func;
              return loading;
            }}
            disabled={loading}
          />
        </>
      ) : (
        <>
          <Button Name="Start playing" OnClick={func} />
        </>
      )}
    </div>
  );
};

export default Discreption;
