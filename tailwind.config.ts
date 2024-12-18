import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#151718",
        cinza: "#2F3335",
        cyan: {
          "100": "#58D2B5",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
