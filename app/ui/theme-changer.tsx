"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ThemeChanger({
  btnStyle,
  iconStyle,
}: {
  btnStyle?: string;
  iconStyle?: string;
}) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          aria-label="auto"
          aria-live="polite"
          className={twMerge(
            clsx(
              "rounded-full p-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-ship/50",
              btnStyle,
            ),
          )}
        >
          <SunIcon className={twMerge(clsx("w-6 stroke-ship", iconStyle))} />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          aria-label="auto"
          aria-live="polite"
          className={twMerge(
            clsx(
              "rounded-full p-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-ship/50",
              btnStyle,
            ),
          )}
        >
          <MoonIcon className={twMerge(clsx("w-6 stroke-ship", iconStyle))} />
        </button>
      )}
    </>
  );
}
