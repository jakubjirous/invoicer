import { RequiredVariantProps } from "@/app/lib/definitions.ts";
import { cva } from "class-variance-authority";
import React from "react";

export type Status = "draft" | "pending" | "paid";

const statusVariants = cva(
  [
    "inline-flex flex-row items-center justify-center text-[0.938rem] font-spartan font-bold leading-[100%] tracking-[-0.016rem] rounded-md h-10 min-w-[6.5rem] capitalize",
  ],
  {
    variants: {
      variant: {
        draft: ["text-oxford bg-oxford/5 dark:text-selago dark:bg-selago/5"],
        pending: ["text-pizazz bg-pizazz/5"],
        paid: ["text-shamrock bg-shamrock/5"],
      },
    },
    defaultVariants: {
      variant: "draft",
    },
  },
);

const dotVariants = cva(["mr-2 h-2 w-2 rounded-full"], {
  variants: {
    variant: {
      draft: ["bg-oxford dark:bg-selago"],
      pending: ["bg-pizazz"],
      paid: ["bg-shamrock"],
    },
  },
  defaultVariants: {
    variant: "draft",
  },
});

type StatusVariants = RequiredVariantProps<typeof statusVariants>;

type StatusProps = Partial<StatusVariants> &
  React.HTMLAttributes<HTMLDivElement>;

export default function InvoiceStatus({
  variant,
  className,
  children,
  ...props
}: StatusProps) {
  return (
    <div className={statusVariants({ className, variant })} {...props}>
      <div className={dotVariants({ className, variant })}></div>
      {children}
    </div>
  );
}
