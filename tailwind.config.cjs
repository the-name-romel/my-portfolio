/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#ECF0F3",
        primary: "#3F37C9",
        textColor: "#1F2937",
      },
      fontFamily: {
        outfit: "Outfit, sans-serif",
      },
    },
  },
  plugins: [],
};
