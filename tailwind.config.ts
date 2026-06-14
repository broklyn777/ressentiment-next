import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161616",
        paper: "#f6f7f1",
        chalk: "#fbfcf7",
        blood: "#8f1f2c",
        moss: "#4f6f52",
        zincLine: "#d7d9d1"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        calm: "0 18px 60px rgba(22, 22, 22, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
