import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Invoice App",
    default: "Invoice App",
  },
  description: "Full-Stack Invoicing Application.",
  metadataBase: new URL("https://invoice-app-jakubjirous.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
