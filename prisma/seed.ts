import { Invoice, Item, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface InvoiceDetails
  extends Omit<Invoice, "id" | "createdAt" | "updatedAt" | "items"> {
  items: Omit<Item, "id" | "invoiceId">[];
}

async function generateInvoice(userId: string, invoiceDetails: InvoiceDetails) {
  return await prisma.invoice.create({
    data: {
      ...invoiceDetails,
      userId,
      items: {
        create: invoiceDetails.items,
      },
    },
    include: {
      items: true,
    },
  });
}

async function main() {
  const githubUserId = "user_2Yjdz2WE6P1HqIZx4KDI0bcNHrA";

  const invoices: InvoiceDetails[] = [
    {
      userId: githubUserId,
      fromStreetAddress: "19 Union Terrace",
      fromCity: "London",
      fromPostCode: "DE1 3EZ",
      fromCountry: "United Kingdom",
      toClientName: "Alex Grim",
      toClientEmail: "alexgrim@gmail.com",
      toStreetAddress: "84 Church Way",
      toCity: "Bradford",
      toPostCode: "BD1 9PB",
      toCountry: "United Kingdom",
      invoiceDate: new Date("2024-09-20"),
      paymentTerm: "NET_1_DAY",
      projectDescription: "Graphic Design",
      code: "XM9141",
      status: "DRAFT",
      amountDue: 468.0,
      items: [
        {
          name: "Banner Design",
          quantity: 1,
          price: 156.0,
          total: 156.0,
        },
        {
          name: "Email Design",
          quantity: 2,
          price: 156.0,
          total: 312,
        },
      ],
    },
    {
      userId: githubUserId,
      fromStreetAddress: "22 Park Street",
      fromCity: "Manchester",
      fromPostCode: "M2 4JG",
      fromCountry: "United Kingdom",
      toClientName: "Emily Johnson",
      toClientEmail: "emilyjohnson@gmail.com",
      toStreetAddress: "45 Green Lane",
      toCity: "Leeds",
      toPostCode: "LS1 6JS",
      toCountry: "United Kingdom",
      invoiceDate: new Date("2024-08-12"),
      paymentTerm: "NET_7_DAYS",
      projectDescription: "Web and Logo Design",
      code: "RT2080",
      status: "PENDING",
      amountDue: 560.0,
      items: [
        {
          name: "Web Design",
          quantity: 1,
          price: 200.0,
          total: 200.0,
        },
        {
          name: "Logo Design",
          quantity: 3,
          price: 120.0,
          total: 360.0,
        },
      ],
    },
    {
      userId: githubUserId,
      fromStreetAddress: "31 High Street",
      fromCity: "Birmingham",
      fromPostCode: "B4 7SL",
      fromCountry: "United Kingdom",
      toClientName: "John Smith",
      toClientEmail: "johnsmith@gmail.com",
      toStreetAddress: "15 Oak Avenue",
      toCity: "Sheffield",
      toPostCode: "S1 2AA",
      toCountry: "United Kingdom",
      invoiceDate: new Date("2024-01-01"),
      paymentTerm: "NET_14_DAYS",
      projectDescription: "Graphic Design Services",
      code: "AA1449",
      status: "PENDING",
      amountDue: 350.0,
      items: [
        {
          name: "Social Media Graphics",
          quantity: 2,
          price: 75.0,
          total: 150.0,
        },
        {
          name: "Print Design",
          quantity: 1,
          price: 200.0,
          total: 200.0,
        },
      ],
    },
    {
      userId: githubUserId,
      fromStreetAddress: "10 Market Square",
      fromCity: "Liverpool",
      fromPostCode: "L1 6DP",
      fromCountry: "United Kingdom",
      toClientName: "Sarah Thompson",
      toClientEmail: "sarahthompson@gmail.com",
      toStreetAddress: "28 Elm Street",
      toCity: "Newcastle",
      toPostCode: "NE1 3JJ",
      toCountry: "United Kingdom",
      invoiceDate: new Date("2024-05-22"),
      paymentTerm: "NET_30_DAYS",
      projectDescription: "Marketing and Design Services",
      code: "TY9141",
      status: "PENDING",
      amountDue: 550.0,
      items: [
        {
          name: "Brochure Design",
          quantity: 1,
          price: 250.0,
          total: 250.0,
        },
        {
          name: "Social Media Marketing",
          quantity: 3,
          price: 100.0,
          total: 300.0,
        },
      ],
    },
  ];

  for (let i = 0; i < invoices.length; i++) {
    const invoice = await generateInvoice(githubUserId, invoices[i]);
    console.log(`invoice${i + 1}`, invoice);
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
