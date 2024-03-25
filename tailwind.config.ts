import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        DEFAULT: "2px 2px 8px rgba(43, 46, 74, 0.5)",
      },
    },

    screens: {
      sm: { max: "479px" },
      md: { min: "480px", max: "767px" },
      lg: { min: "768px", max: "1023px" },
      xl: { min: "1024px" },
    },

    colors: {
      transparent: "transparent",
      primary: "#30C97A",
      secondary: "#303640",
      tertiary: "#fa4c3d",
      white: "#FFF",
      black: "#333",
      mono1: "#9E9E9E",
      mono2: "#3e4042",
      border: "#dee2e6",
      success: "#4CAF50",
      error: "#B00020",
    },
  },
  plugins: [],
};
export default config;
