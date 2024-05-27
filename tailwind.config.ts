import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans KR", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        DEFAULT: "2px 2px 8px rgba(43, 46, 74, 0.5)",
      },
      animation: {
        bar1: "barAnimation1 2s ease-in-out infinite",
        bar2: "barAnimation2 2.5s ease-in-out infinite",
        bar3: "barAnimation3 3s ease-in-out infinite",
      },
      keyframes: {
        barAnimation1: {
          "0%, 100%": { transform: "translateX(0) scaleX(1)" },
          "50%": { transform: "translateX(50%) scaleX(0.5)" },
        },
        barAnimation2: {
          "0%, 100%": { transform: "translateX(0) scaleX(1)" },
          "50%": { transform: "translateX(50%) scaleX(0.5)" },
        },
        barAnimation3: {
          "0%, 100%": { transform: "translateX(0) scaleX(1)" },
          "50%": { transform: "translateX(50%) scaleX(0.5)" },
        },
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
      xs: ["12px", "16.8px"],
    },

    spacing: {
      "0": "0px",
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
      xl: { min: "1025px" },
    },

    colors: {
      transparent: "transparent",
      primary: "#F2994A",
      secondary: "#003366",
      black1: "#000000",
      black2: "#1C1C1C",
      black3: "#333333",
      white: "#FFFFFF",
      gray1: "#828282",
      gray2: "#BDBDBD",
      border: "#EBEBEB",
      orange: "#F2994A",
      currentMonthChart: "#F46036",
      previosMonthChart1: "#775DD0",
      previosMonthChart2: "#FF4560",
      previosMonthChart3: "#FEB019",
      previosMonthChart4: "#00E396",
      previosMonthChart5: "#008FFB",
    },
  },
};
export default config;
