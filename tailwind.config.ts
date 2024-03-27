import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        DEFAULT: "2px 2px 8px rgba(43, 46, 74, 0.5)",
      },
    },

    fontSize: {
      h1: ["56px", "61.6px"],
      h2: ["48px", "52.8px"],
      h3: ["40px", "44px"],
      h4: ["32px", "35.2px"],
      h5: ["24px", "26.4px"],
      h6: ["20px", "22px"],
      large: ["20px", "28px"],
      medium: ["18px", "25.2px"],
      normal: ["16px", "22.4px"],
      small: ["14px", "19.6px"],
    },

    spacing: {
      "2": "8px",
      "4": "16px",
      "6": "24px",
      "8": "32px",
      "10": "40px",
      "14": "56px",
      "18": "72px",
      "20": "80px",
      "24": "96px",
      "30": "120px",
    },

    screens: {
      sm: { max: "320px" },
      md: { min: "321px", max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "1440px" },
    },

    colors: {
      transparent: "transparent",
      primary: "#F2994A",
      secondary: "#092C4C",
      info: "#2F80ED",
      success: "#27AE60",
      warning: "#E2B93B",
      error: "#EB5757",
      black1: "#000000",
      black2: "#1C1C1C",
      black3: "#333333",
      white: "#FFFFFF",
      gray1: "#828282",
      gray2: "#BDBDBD",
      gray3: "#E0E0E0",
    },
  },
};
export default config;
