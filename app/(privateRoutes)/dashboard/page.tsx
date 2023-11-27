import { auth, SignedIn, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not logged in
  const { userId } = auth();

  if (userId) {
    // Query DB for user specific information or display assets only to logged in users
  }

  return (
    <>
      Dashboard
      <hr />
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <hr />
      <pre>{JSON.stringify(userId, null, 2)}</pre>
    </>
  );
}
