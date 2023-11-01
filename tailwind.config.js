/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
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
