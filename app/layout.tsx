import Providers from "@/app/providers";
import { leagueSpartan } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Invoicer",
    default: "Invoicer",
  },
  applicationName: "Invoicer",
  authors: {
    name: "Jakub Jirous",
    url: "https://www.jakubjirous.dev/",
  },
  keywords:
    "next14, react, typescript, prisma, tailwind, typescript-react, frontendmentor, vercel, frontendmentor-challenge, server-components, clerk-auth, supabase",
  description:
    "Optimize Your Finances with Invoicer - Empower Your Business with Seamless Invoice Management",
  metadataBase: new URL("https://invoice-app-jakubjirous.vercel.app/"),
  icons: {
    icon: [
      {
        url: "/assets/favicon-light.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#7C5DFA",
        },
      }}
    >
      <html lang="en">
        <Providers>
          <body
            className={`${leagueSpartan.className} bg-whisper text-vulcan antialiased dark:bg-steel dark:text-white`}
          >
            {children}
          </body>
        </Providers>
      </html>
    </ClerkProvider>
  );
}
