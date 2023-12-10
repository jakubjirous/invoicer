-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PENDING', 'PAID');

-- CreateEnum
CREATE TYPE "PaymentTerm" AS ENUM ('NET_1_DAY', 'NET_7_DAYS', 'NET_14_DAYS', 'NET_30_DAYS');

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "fromStreetAddress" TEXT NOT NULL,
    "fromCity" TEXT NOT NULL,
    "fromPostCode" TEXT NOT NULL,
    "fromCountry" TEXT NOT NULL,
    "toClientName" TEXT NOT NULL,
    "toClientEmail" TEXT NOT NULL,
    "toStreetAddress" TEXT NOT NULL,
    "toCity" TEXT NOT NULL,
    "toPostCode" TEXT NOT NULL,
    "toCountry" TEXT NOT NULL,
    "invoiceDate" TIMESTAMP(3) NOT NULL,
    "paymentTerm" "PaymentTerm" NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "amountDue" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "invoiceId" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
