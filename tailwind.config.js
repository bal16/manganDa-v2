import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php", "./storage/framework/views/*.php", "./resources/views/**/*.blade.php", "./resources/js/**/*.tsx"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Figtree", ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        primary: {
          "50": "#eefff5",
          "100": "#d6ffe9",
          "200": "#b0ffd5",
          "300": "#73ffb5",
          "400": "#30f88d",
          "500": "#05e26c",
          "600": "#00bc56",
          "700": "#028b43",
          "800": "#08733c",
          "900": "#095e34",
          "950": "#00351a"
        },
        secondary: {
          "50": "#fcfee7",
          "100": "#f7fbcc",
          "200": "#edf79f",
          "300": "#ddef67",
          "400": "#cae239",
          "500": "#acc81a",
          "600": "#8faa11",
          "700": "#667a11",
          "800": "#516014",
          "900": "#445215",
          "950": "#232d06"
        },
        base: "#fff",
        neutral: "#000",
        danger: "#E3342F",
        success: "#48BB78",
        info: "#3197E0",
        warning: "#F6C23E"
      }
    }
  },

  plugins: [forms]
};
