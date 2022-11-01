/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
     extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif',],
        'lato':['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
