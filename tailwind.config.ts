import type { Config } from "tailwindcss";
import { createFluidValue } from "./app/utils/create-fluid-value";

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

        oxford: "#373B53", // side panel bg
      },
      fontFamily: {
        spartan: ["var(--font-league-spartan)"],
      },
      fontSize: {
        "fluid-hero-heading": createFluidValue(40, 80),
        "fluid-h1": createFluidValue(28, 36),
        "fluid-h2": createFluidValue(18, 24),
        "fluid-h3": createFluidValue(15, 15),
        "fluid-h4": createFluidValue(15, 15),
        "fluid-body1": createFluidValue(13, 18),
        "fluid-body2": createFluidValue(13, 15),
      },
      borderRadius: {
        "3xl": "1.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
