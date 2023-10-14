/** @type {import('tailwindcss').Config} */
  module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#101110",
        light: "rgba(247,249,254,1)",
        "light-text": "#ffffff",
        "light-green": "#878b80",
        "dark-green": "#3d403a",
        blue: "#3d403a",
        "dark-blue": "#012e40",
        "dark-gray": "#f0f3f4 ",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
    screens: {
      'sm': {'max': '800px'},
      'md': {'min': '800px'},
      'lg': {'min': '1280px'},
    }
  },
  plugins: [],
};