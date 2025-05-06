/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // solid colors
        pureWhite: "#ffffff",
        pureBlack: "#000000",

        // variables
        white: "#f1f1f1",
        grayText: "#575b60",
        dark: "#292D3D",
        // dark: "#FF0000",

        bgcolor: "#2F4575", // bg color for certain sections, this same color is used in https://patternico.com/#meM0W5EUKUjVsnNY to create a hero pattern

        // primary colors
        primary: "#ffc654",
        primaryHover: "#FFD685",
      },
      // Nunito
      // "Comic Sans MS" for testing
      fontFamily: {
        headings: ["Work Sans", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      fontSize: {
        headings: "1.5rem",
        body: "1.07rem",
      },
      borderRadius: {
        custom: "5px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    backgroundSize: {
      bigzoom: "180%",
      normalzoom: "140%",
    },
  },
  plugins: [],
};
