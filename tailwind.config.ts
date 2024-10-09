import type { Config } from "tailwindcss";

const config = {
  content: ["./common/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        elevated: "1",
        header: "2",
        modal: "50",
        popover: "51",
        tooltip: "52",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
