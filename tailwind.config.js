/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#222831",
      secondary: "#393e46",
      orangedark: "#f96d00",
      orangelight: "#ff8b00",
      gray: "#f2f2f2",
      white: "#fff",
      black: "#000"
    }
  },
  plugins: [],
}