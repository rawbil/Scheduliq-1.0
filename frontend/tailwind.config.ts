import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#B0B0B0",
        vibrant: "#2D2D2D",
        green: "#48BB78",
        orange: "#F6E05E",
        red: "#F56565",
        purple: "#8A5CF6",
      },
      backgroundColor: {
        default: "#1e1e2f",
        alt: "#2e2e59"
      },
      screens: {
        "540px": "540px",
        "230px": "230px",
        "420px": "420px",
        "768px": "768px",
        "320px": "320px",
      }
    },
  },
  plugins: [],
};
export default config;
