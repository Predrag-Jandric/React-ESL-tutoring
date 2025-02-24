/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textStroke: {
        1: "1px",
        2: "2px",
      },
      textStrokeColor: {
        black: "#000",
      },
      colors: {
        // solid colors
        pureWhite: "#ffffff",
        pureBlack: "#000000",

        // solid color variables
        white: "#f1f1f1",
        grayText: "#575b60",
        dark: "#2d3142",

        // primary colors
        primary: "#33C2FF",
        primaryHover: "#0AB6FF",
      },

      // "Comic Sans MS" for testing
      fontFamily: {
        headings: ["Work Sans", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      fontSize: {
        headings: "1.5rem",
        body: "1.05rem",
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
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "text-shadow": `
            -1px -1px 0 #475569,  
            1px -1px 0 #475569,
            -1px 1px 0 #475569,
            1px 1px 0 #475569
          `,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
