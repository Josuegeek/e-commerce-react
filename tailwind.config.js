/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primarycolor":"#FCD467"
      },
      screens: {
        'sm': '480px',  // Écran petit
        'md': '768px',  // Écran moyen
        'lg': '1024px', // Écran large
        'xl': '1280px', // Écran très large
        '2xl': '1536px', // Écran extra large
      }
    },
  },
  plugins: [],
}

