/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        copper: "#C07830",
        navy: "#2D3E50",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        heading: ["'Playfair Display'", "serif"],
      },
      animation: {
        "float-a": "float-a 10s ease-in-out infinite",
        "float-b": "float-b 14s ease-in-out infinite",
        "float-c": "float-c 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}