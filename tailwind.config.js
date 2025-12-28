/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1f3b",
        secondary: "#4a5568",
        accent: "#2563eb",
      },
      fontFamily: {
        outfit: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
