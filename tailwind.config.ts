import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "300px",
        sm: "480px",
        md: "720px",
        lg: "960px",
        xl: "1200px",
      },
    },
    colors: {
      // primary: {
      //   DEFAULT: "#009688",
      //   50: "#e0f2f1",
      //   100: "#b2dfdb",
      //   200: "#80cbc4",
      //   300: "#4db6ac",
      //   400: "#26a69a",
      //   500: "#009688",
      //   600: "#00897b",
      //   700: "#00796b",
      //   800: "#00695c",
      //   900: "#004d40",
      //   a100: "#a7ffeb",
      //   a200: "#64ffda",
      //   a400: "#1de9b6",
      //   a700: "#00bfa5",
      // },
      // primary: {
      //   DEFAULT: colors.amber[500],
      //   ...colors.amber,
      // },
      primary: {
        DEFAULT: "#00bcd4",
        50: "#e0f7fa",
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#00bcd4",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
        a100: "#84ffff",
        a200: "#18ffff",
        a400: "#00e5ff",
        a700: "#00b8d4",
      },
      secondary: colors.slate,
      red: {
        light: colors.red[400],
        dark: colors.red[600],
      },
    },
    extend: {
      boxShadow: {
        btn: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      },
      keyframes: {
        "menu-open": {
          from: {
            transform: "scaleY(70%)",
            transformOrigin: "top left",
            opacity: "0.75",
          },
          to: {
            transform: "scaleY(100%)",
            opacity: "1",
          },
        },
        "menu-close": {
          from: {
            transform: "scaleY(100%)",
            transformOrigin: "top left",
            opacity: "1",
          },
          to: {
            transform: "scaleY(70%)",
            opacity: "0",
          },
        },
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "menu-open": "menu-open 0.2s ease-out",
        "menu-close": "menu-close 0.2s ease-out",
        fade: "fade 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
