import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#151718",
          text: "#f2f4f2",
        },
        light: {
          background: "#f2f2f2",
          text: "#151718",
        },

        cinza: "#2F3335",
        cyan: {
          "100": "#58D2B5",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
