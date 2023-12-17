import InvoiceStatus, { Status } from "@/app/ui/invoice-status";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Invoice } from "@prisma/client";
import Link from "next/link";

export default function InvoiceItem({ invoice }: { invoice: Invoice }) {
  const formattedInvoiceDate = invoice.invoiceDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedAmountDue = invoice.amountDue.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return (
    <Link
      href={`/invoice/${invoice.id}`}
      className="grid-cols-invoice-item grid-rows-invoice-item md:grid-cols-invoice-item-md grid rounded-lg border border-transparent bg-white p-6 text-vulcan transition duration-500 hover:border-cornflower focus:border-transparent focus:outline-none focus-visible:rounded-lg focus-visible:ring-4 focus-visible:ring-cornflower/50 dark:bg-mirage dark:text-white md:grid-rows-1 md:items-center md:justify-between md:gap-x-2"
    >
      <div className="h4 col-start-1 pb-6 font-bold md:col-start-1 md:pb-0">
        <span className="text-ship">#</span>
        {invoice.code}
      </div>
      <div className="body2 col-start-2 flex items-end justify-end text-bali dark:text-selago md:col-start-3 md:items-center md:justify-start">
        {invoice.toClientName}
      </div>
      <div className="body2 col-start-1 row-start-2 flex pb-2 text-bali dark:text-selago md:col-start-2 md:row-start-1 md:justify-start md:pb-0">
        Due {formattedInvoiceDate}
      </div>
      <div className="h4 col-start-1 row-start-3 flex font-bold text-vulcan dark:text-white md:col-start-4 md:row-start-1 md:items-center md:justify-end">
        {formattedAmountDue}
      </div>
      <div className="row-span-2 flex items-end justify-end md:col-start-5 md:row-start-auto">
        <InvoiceStatus variant={invoice.status.toLowerCase() as Status}>
          {invoice.status.toLowerCase()}
        </InvoiceStatus>
      </div>
      <div className="hidden md:col-start-6 md:inline-flex md:items-center md:justify-center md:pl-2">
        <ChevronRightIcon className="h-4 fill-cornflower" />
      </div>
    </Link>
  );
}
