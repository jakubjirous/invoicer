import { createFluidValue } from "@/app/utils/create-fluid-value";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cornflower: "#7C5DFA",
        heliotrope: "#9277FF",
        mirage: "#1E2139",
        ebony: "#252945",

        selago: "#DFE3FA",
        bali: "#888EB0",
        ship: "#7E88C3",
        vulcan: "#0C0E16",

        sienna: "#EC5757",
        mona: "#FF9797",
        whisper: "#F8F8FB",
        steel: "#141625",

        fiord: "#494E6E", // navbar border
        oxford: "#373B53", // side panel bg

        // status
        shamrock: "#33D69F", // paid
        pizazz: "#FF8F00", // pending
      },
      fontFamily: {
        spartan: ["var(--font-league-spartan)"],
      },
      fontSize: {
        "fluid-hero-heading": createFluidValue(40, 80),
        "fluid-h1": createFluidValue(24, 36),
        "fluid-h2": createFluidValue(18, 24),
        "fluid-h3": createFluidValue(15, 15),
        "fluid-h4": createFluidValue(15, 15),
        "fluid-body1": createFluidValue(13, 13),
        "fluid-body2": createFluidValue(13, 13),
      },
      borderRadius: {
        "3xl": "1.25rem",
      },
      gridTemplateColumns: {
        "invoice-item": "1fr minmax(min-content, 6.5rem)",
        "invoice-item-md":
          "repeat(5, minmax(min-content, 1fr)), repeat(1, minmax(min-content, max-content))",
      },
      gridTemplateRows: {
        "invoice-item":
          "minmax(min-content, 1.5rem) minmax(min-content, 1.5rem) minmax(min-content, 1.5rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
