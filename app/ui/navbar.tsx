"use client";

import ClerkUserButton from "@/app/ui/clerk-user-button";
import ThemeChanger from "@/app/ui/theme-changer";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="md:min-h-20 flex min-h-[4.5rem] items-stretch justify-between bg-oxford lg:h-screen lg:min-w-[4.5rem] lg:flex-col lg:rounded-tr-3xl">
      <Link
        href="/invoices"
        className="rounded-r-3xl transition duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cornflower/50"
      >
        <img
          src="/assets/logo.svg"
          className="h-[4.5rem] md:h-20"
          alt="Invoicer Logo"
        />
      </Link>
      <div className="flex items-center gap-6 pr-6 md:gap-8 md:pr-8 lg:flex-col lg:justify-center lg:gap-6 lg:pb-6 lg:pr-0">
        <ThemeChanger />
        <div className="bg-fiord h-full w-px lg:h-px lg:w-full"></div>
        <SignedIn>
          <ClerkUserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
