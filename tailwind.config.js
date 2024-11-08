// tailwind.config.js
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Comic Neue"', "sans-serif"],
      },
      colors: {
        primary: "#305050",
        secondary: "#FF5E5B",
        terinary: "#EDC9AF",
        important_text: "#002147",
        highlight_background: "#F4F4F9",
      },
      width: {
        mainWidth: "80%",
        coverImage: "200px",
        ProblemStatement_md: "380px",
        ProblemStatement_xl: "510px",
        ProblemStatement_lg: "380px",
      },
      height: {
        coverImage: "300px",
      },
      minWidth: {
        coverImage: "200px",
      },
    },
    minheight: {
      articleBar: "450px",
    },
    boxShadow: {
      input_shadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)", // Custom inner shadow
      cta_button_shadow: "0px 4px 4px rgba(0, 0, 0, 0.15)", //button shadow
      text_area_shadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
      card_shadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    },
  },
  plugins: [scrollbarHide],
};
