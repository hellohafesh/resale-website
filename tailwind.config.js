/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        poridhan: {
          primary: '#db195f',
          secondary: '#f2ae4c',
          accent: '#3d70ab',
          "base-100": '#ffffff',
        }
      }]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
