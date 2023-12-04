import Button from "@/app/ui/button";
import InvoicerLogo from "@/app/ui/invoicer-logo";
import ThemeChanger from "@/app/ui/theme-changer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-oxford p-4 pl-0 md:p-8 md:pl-0">
        <div className="relative flex h-20 flex-col items-center justify-center overflow-hidden rounded-r-3xl bg-cornflower md:h-40">
          <ThemeChanger
            btnStyle="absolute top-1 md:right-4 right-2 md:top-4 z-10 focus-visible:ring-white/50"
            iconStyle="stroke-white"
          />
          <InvoicerLogo className="z-10" />
          <div className="absolute z-0 h-10 w-full translate-y-[50%] rounded-br-3xl rounded-tl-3xl bg-heliotrope md:h-20"></div>
        </div>

        <div className="mt-4 flex grow flex-col gap-4 md:mt-8 md:flex-row md:gap-8">
          <div className="flex flex-col justify-center gap-6 rounded-r-3xl bg-whisper px-8 py-16 dark:bg-steel md:w-2/5 md:px-16">
            <h1 className="hero-heading">
              Optimize Your Finances with Invoicer
            </h1>
            <h2 className="h1">
              Empower Your Business with Seamless Invoice Management
            </h2>
            <div>
              <Button
                href="/sign-in"
                variant="secondary"
                className="focus-visible:ring-oxford dark:focus-visible:ring-white"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-whisper p-6 dark:bg-steel md:w-3/5 md:px-28 md:py-12">
            <Image
              src="/assets/hero-mobile-light.png"
              width={560}
              height={620}
              className="block dark:hidden md:hidden"
              alt="Screenshots of the app dashboard showing mobile version in light mode"
            />
            <Image
              src="/assets/hero-desktop-light.png"
              width={1000}
              height={760}
              className="hidden dark:hidden md:block"
              alt="Screenshots of the app dashboard showing desktop version in light mode"
            />
            <Image
              src="/assets/hero-mobile-dark.png"
              width={560}
              height={620}
              className="hidden dark:block dark:md:hidden"
              alt="Screenshots of the app dashboard showing mobile version in dark mode"
            />
            <Image
              src="/assets/hero-desktop-dark.png"
              width={1000}
              height={760}
              className="hidden dark:md:block"
              alt="Screenshots of the app dashboard showing desktop version in dark mode"
            />
          </div>
        </div>
      </main>

      <main className="container mx-auto">
        <ThemeChanger />

        <hr />

        <Button variant="primary" leadingIcon={PlusCircleIcon}>
          Primary
        </Button>
        <Button variant="primary" leadingIcon={PlusCircleIcon}>
          New Invoice
        </Button>

        <hr />

        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Mark as Paid</Button>

        <hr />

        <Button variant="edit">Edit</Button>

        <hr />

        <Button variant="draft">Save as Draft</Button>

        <hr />

        <Button variant="delete">Delete</Button>

        <hr />

        <Button variant="add">+ Add New Item</Button>

        <hr />

        <h1>Heading 1</h1>

        <hr />

        <h2>Heading 2</h2>

        <hr />

        <h3>Heading 3</h3>

        <hr />

        <h4>Heading 4</h4>

        <hr />

        <p className="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis
        </p>

        <hr />

        <p className="body2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis
        </p>

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

        <hr />
      </main>
    </>
  );
}
