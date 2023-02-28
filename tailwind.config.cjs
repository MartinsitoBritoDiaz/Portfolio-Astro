/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        light: "rgba(247,249,254,1)",
        "light-text": "#ffffff",
        "light-green": "#878b80",
        "dark-green": "#3d403a",
        // blue: "#60a4bf",
        blue: "#3d403a",
        "dark-blue": "#012e40",
        "dark-gray": "#f0f3f4 ",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        // inter: ["Inter", "sans-serif"],
        // outfit: ["Outfit", "sans-serif"],
      },
    },
    screens: {
      'sm': {'max': '800px'},
      'md': {'min': '800px'},
      'lg': {'min': '1280px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};