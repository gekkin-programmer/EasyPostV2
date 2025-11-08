/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    "./index.html",          // Fichier root HTML
    "./src/**/*.{js,ts,jsx,tsx}",  // Tous les fichiers React/TSX dans src/
  ],
  theme: {
    extend: {
        animation: {
        blob: "blob 7s infinite",
    },
          keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}

