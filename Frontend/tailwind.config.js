/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust if needed
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
