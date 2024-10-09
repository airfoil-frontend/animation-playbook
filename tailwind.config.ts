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
      backgroundImage: {
        "gradient-header":
          "linear-gradient(270deg, rgba(255, 128, 5, 0.4) 3.28%, rgba(255, 0, 128, 0.4) 91.55%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
