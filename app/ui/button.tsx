import { RequiredVariantProps } from "@/app/lib/definitions.ts";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const buttonVariants = cva(
  [
    "inline-flex flex-row items-center justify-center text-[0.938rem] font-spartan font-bold leading-[0.9375rem] tracking-[-0.01563rem] rounded-[1.5rem] h-12 transition duration-500 focus-visible:rounded-3xl focus-visible:outline-none focus-visible:ring-4",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-white p-2 pr-4 bg-cornflower hover:bg-heliotrope focus-visible:ring-cornflower/50",
        ],
        secondary: [
          "text-white px-6 bg-cornflower hover:bg-heliotrope focus-visible:ring-cornflower/50",
        ],
        edit: [
          "px-6 text-ship bg-whisper hover:bg-selago dark:text-selago dark:bg-ebony dark:hover:bg-white dark:hover:text-ship focus-visible:ring-ship/50",
        ],
        draft: [
          "px-6 bg-oxford text-bali hover:bg-vulcan dark:text-selago dark:bg-oxford dark:hover:bg-mirage focus-visible:ring-bali/50 dark:focus-visible:ring-selago/50",
        ],
        delete: [
          "px-6 text-white bg-sienna hover:bg-mona focus-visible:ring-sienna/50",
        ],
        add: [
          "w-full text-ship bg-whisper hover:bg-selago focus-visible:ring-ship/50",
        ],
      },
      size: {
        default: [],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonVariants = RequiredVariantProps<typeof buttonVariants>;

type SVGComponent = React.ComponentType<React.SVGAttributes<SVGSVGElement>>;

type ButtonProps = Partial<ButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
    href?: string;
  } & (
    | { leadingIcon?: SVGComponent; trailingIcon?: never }
    | { leadingIcon?: never; trailingIcon?: SVGComponent }
  );

export default function Button({
  variant,
  size,
  className,
  children,
  href,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  ...props
}: ButtonProps) {
  const leadingIconTemplate = LeadingIcon ? (
    <LeadingIcon className="h-8 pr-2" aria-hidden="true" />
  ) : null;

  const trailingIconTemplate = TrailingIcon ? (
    <TrailingIcon className="h-8 pl-2" aria-hidden="true" />
  ) : null;

  return href ? (
    <Link
      href={href}
      className={buttonVariants({ className, variant, size })}
      {...props}
    >
      {leadingIconTemplate}
      <span className="mt-0.5">{children}</span>
      {trailingIconTemplate}
    </Link>
  ) : (
    <button className={buttonVariants({ className, variant, size })} {...props}>
      {leadingIconTemplate}
      <span className="mt-0.5">{children}</span>
      {trailingIconTemplate}
    </button>
  );
}
