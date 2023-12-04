import { leagueSpartan } from "@/app/ui/fonts";

export default function InvoicerLogo({ className }: { className: string }) {
  return (
    <div
      className={`${className} ${leagueSpartan.className} flex flex-row items-center gap-3 leading-none text-white`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 65 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9714 0.000188009L32.5 31.0574L48.0286 0.00018819C58.1393 5.50976 65 16.2324 65 28.5574C65 46.5066 50.4493 61.0574 32.5 61.0574C14.5507 61.0574 0 46.5066 0 28.5574C0 16.2324 6.86068 5.50976 16.9714 0.000188009Z"
        />
      </svg>
      <p className="h1">Invoicer</p>
    </div>
  );
}
