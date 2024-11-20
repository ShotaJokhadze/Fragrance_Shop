import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "rgb(239 68 68)",
        light: "#d4d4dc",
        darkGray: "#1d1e22",
        mediumGray: "#393f4d",
      },
    },
  },
  plugins: [],
} satisfies Config;
