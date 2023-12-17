import InvoiceItem from "@/app/ui/invoice-item";
import { Invoice } from "@prisma/client";

export default function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  return invoices?.length ? (
    <section className="flex flex-col gap-4">
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </section>
  ) : (
    <section
      id="empty"
      className="flex h-full w-full flex-col items-center justify-center gap-11"
    >
      <img
        src="/assets/no-invoices.svg"
        alt="No invoices found"
        aria-label="No invoices found art"
      />
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="h2">There is nothing here</h2>
        <p className="body2 max-w-[15rem]" style={{ textWrap: "balance" }}>
          Create an invoice by clicking the{" "}
          <strong>
            New <span className="hidden md:inline-flex">Invoice</span>
          </strong>{" "}
          button and get started
        </p>
      </div>
    </section>
  );
}
