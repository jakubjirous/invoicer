import ClerkSignUp from "@/app/ui/clerk-sign-up";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <>
      <ClerkSignUp />
    </>
  );
}
