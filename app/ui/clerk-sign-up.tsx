"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { useTheme } from "next-themes";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function ClerkSignUp() {
  const { theme } = useTheme();

  return (
    <SignUp
      afterSignUpUrl="/dashboard"
      appearance={{
        baseTheme: theme === "dark" ? dark : undefined,
        elements: {
          socialButtonsIconButton:
            "focus-visible:ring-4 focus-visible:ring-cornflower/50 duration-500",
          formFieldLabel:
            "text-ship font-spartan text-[0.8125rem] font-medium leading-[0.9375rem] tracking-[-0.00625rem]",
          formFieldInput:
            "px-[1.25rem] text-vulcan font-spartan font-bold leading-[0.9375rem] tracking-[-0.01563rem] rounded-[0.25rem] border-selago h-12 focus:border-heliotrope duration-500 dark:bg-mirage dark:text-white dark:border-ebony dark:focus:border-cornflower",
          formButtonPrimary:
            "capitalize inline-flex flex-row items-center justify-center text-[0.938rem] font-spartan font-bold leading-[0.9375rem] tracking-[-0.01563rem] rounded-[1.5rem] h-12 transition-[background,color] duration-500 focus-visible:rounded-3xl focus-visible:outline-none focus-visible:ring-4 text-white px-6 bg-cornflower hover:bg-heliotrope focus-visible:ring-cornflower/50",
          footerActionLink:
            "active:text-cornflower hover:no-underline focus:ring-0 focus:outline-none focus-visible:rounded-[0.625rem] focus-visible:ring-4 focus-visible:ring-cornflower/50 duration-500",
          formFieldErrorText__password: "text-sienna",
        },
      }}
    />
  );
}
