import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Homepage</h1>

      <hr />

      <ul>
        <li>
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowRightIcon className="h-5 w-5 text-blue-500" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/sign-in" className="flex items-center gap-2">
            <ArrowRightIcon className="h-5 w-5 text-blue-500" />
            Login (SignIn)
          </Link>
        </li>
        <li>
          <Link href="/sign-up" className="flex items-center  gap-2">
            <ArrowRightIcon className="h-5 w-5 text-blue-500" /> Register
            (SignUp)
          </Link>
        </li>
      </ul>
    </main>
  );
}
