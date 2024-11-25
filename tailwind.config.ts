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
        blue: "#2176ff",
        light: "#d4d4dc",
        darkGray: "#212529",
        mediumGray: "#393f4d",
        customBlack : '#030504',
      },
    },
  },
  plugins: [],
} satisfies Config;
