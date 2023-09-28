/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gray: "var(--color-gray)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
      },
      maxWidth: {
        "4xs": "14rem",
        "3xs": "16rem",
        "2xs": "18rem",
        xl: "40rem",
        "2xl": "48rem",
        "3xl": "56rem",
        "4xl": "64rem",
        "5xl": "72rem",
        "6xl": "80rem",
        "7xl": "90rem",
        "8xl": "96rem",
        "9xl": "104rem",
        "10xl": "128rem",
        "11xl": "140rem",
        "12xl": "152rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
