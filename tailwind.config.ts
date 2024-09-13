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
        DEFAULT: colors.purple[600],
        50: colors.purple[50],
        100: colors.purple[100],
        200: colors.purple[200],
        300: colors.purple[300],
        400: colors.purple[400],
        500: colors.purple[500],
        600: colors.purple[600],
        700: colors.purple[700],
        800: colors.purple[800],
        900: colors.purple[900],
      },
      secondary: colors.zinc,
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
        // **  shadow animations
        shadowMove: {
          "0%, 100%": { boxShadow: "0 0 10px 5px rgba(128, 0, 128, 0.6)" },
          "50%": { boxShadow: "0 0 5px 5px rgba(128, 0, 128, 1)" },
        },
        // ** typing animations
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },

      // **  menu animations
      animation: {
        "menu-open": "menu-open 0.2s ease-out",
        "menu-close": "menu-close 0.2s ease-out",
        fade: "fade 0.2s ease-out",
        // **  shadow animations
        shadowLoop: "shadowMove 2s infinite",
        // ** typing
        typing: "typing 3s steps(30, end), blink 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
