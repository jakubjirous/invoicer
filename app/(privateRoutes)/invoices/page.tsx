import prisma from "@/app/lib/prisma";
import Button from "@/app/ui/button";
import InvoiceList from "@/app/ui/invoice-list";
import { auth } from "@clerk/nextjs";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Invoice } from "@prisma/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not logged in
  const { userId } = auth();

  let invoices: Pick<
    Invoice,
    "id" | "code" | "toClientName" | "invoiceDate" | "status" | "amountDue"
  >[] = [];

  if (!!userId) {
    invoices = await prisma.invoice
      .findMany({
        where: {
          userId: userId,
        },
        select: {
          id: true,
          code: true,
          toClientName: true,
          invoiceDate: true,
          status: true,
          amountDue: true,
        },
      })
      .finally(() => {
        prisma.$disconnect();
      });
  }

  return (
    <div className="flex w-full flex-1 flex-col gap-8 md:gap-14 lg:gap-16">
      <section className="flex items-center justify-between">
        <div>
          <h1>Invoices</h1>
          <p className="body2 md:hidden">7 invoices</p>
          <p className="body2 hidden md:inline-flex">
            There are 7 total invoices
          </p>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <div>Filter</div>
          <div>
            <Button href="new-invoice" leadingIcon={PlusCircleIcon}>
              New <span className="hidden md:inline-flex"> Invoice</span>
            </Button>
          </div>
        </div>
      </section>
      <InvoiceList invoices={invoices} />
    </div>
  );
}
