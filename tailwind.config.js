/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#BDEB80",
        secondary:{
          100: "#1E1F25",
          900: "#293241"
        }
      }
    },
  },
  plugins: [],
}