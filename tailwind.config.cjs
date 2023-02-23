/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        light: " #f0f3f4 ",
        blue: "#33d2ff",
        gray: "#f0f3f4 ",
        "dark-gray": "#f0f3f4 ",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
    screens: {
      'sm': {'max': '800px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};
