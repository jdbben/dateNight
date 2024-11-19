"use client";
import { cn } from "../lib/utils";

type Botto = {
  className?: string;
  backgroundcolor?: string;
  Name?: string;
  OnClick?: () => void;
  loading?: boolean;
};

const Botton = ({
  className,
  backgroundcolor,
  Name,
  OnClick,
  loading,
}: Botto) => {
  return (
    <button
      className={cn(
        `h-fit w-fit p-3 pr-11 pl-11 bg-[#333333] text-white hover:scale-110 dark:bg-[#FFFFFF] dark:text-black rounded-xl`,
        className
      )}
      onClick={OnClick}
    >
      {loading ? "Loading ..." : Name || "Click here"}
    </button>
  );
};

export default Botton;
