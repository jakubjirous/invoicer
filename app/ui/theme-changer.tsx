"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeChanger() {
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
          className="rounded-full p-1 focus:outline-none focus-visible:ring-2"
        >
          <SunIcon className="stroke-ship focus-visible:ring-ship w-6" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          aria-label="auto"
          aria-live="polite"
          className="rounded-full p-1 focus:outline-none focus-visible:ring-2"
        >
          <MoonIcon className="stroke-ship focus-visible:ring-ship w-6" />
        </button>
      )}
    </>
  );
}
