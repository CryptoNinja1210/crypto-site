/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      screens: {
        xs: "220px",
        sm: "640px",
        md: "768px",
        lg: "1170px",
        xl: "1280px",
        "custom-2xl": "1680px",
      },
    },
  },
  plugins: [],
};
