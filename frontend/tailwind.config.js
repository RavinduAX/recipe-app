/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'pink-dark': '#FE5B85',
      'dark': '#3D3D3D',
      'grey': '#9F9F9F',
      'pink-light': '#FEF8F9',
      'white': '#fff',
    },
    extend: {},
  },
  plugins: [require("rippleui")],
  rippleui: {
    removeThemes: ["dark"],
  },
}

