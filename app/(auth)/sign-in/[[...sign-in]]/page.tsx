import ClerkSignIn from "@/app/ui/clerk-sign-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Page() {
  return (
    <>
      <ClerkSignIn />
    </>
  );
}
