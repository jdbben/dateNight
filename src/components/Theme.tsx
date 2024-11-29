"use client";
import { day } from "@/app/lib/const";
import { cn } from "@/app/lib/utils";
import { useEffect, useState } from "react";
type Prop = {
  className?: string;
};

const Theme = ({ className }: Prop) => {
  const [d, setD] = useState<string | null>(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setD(day.night);
    } else {
      document.documentElement.classList.remove("dark");
      setD(day.sun);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setD(day.sun);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setD(day.night);
    }
  };

  return (
    <div>
      <label
        className={cn(
          `inline-flex items-center cursor-pointer absolute right-0 pt-2 pl-2  `,
          className
        )}
      >
        <input
          type="checkbox"
          value=""
          className="sr-only peer "
          onChange={toggleTheme}
        />
        <div
          className={cn(
            `bg-cover bg-center relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`,
            d
          )}
        />
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
      </label>
    </div>
  );
};

export default Theme;
