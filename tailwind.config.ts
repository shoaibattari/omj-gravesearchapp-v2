import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        secondary: "#14b8a6",
        accent: "#f97316",
        dark: "#1e293b",
        light: "#f1f5f9",
      },
    },
  },
  plugins: [],
};
export default config;
