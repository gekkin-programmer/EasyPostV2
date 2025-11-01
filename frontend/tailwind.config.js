/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    "./index.html",          // Fichier root HTML
    "./src/**/*.{js,ts,jsx,tsx}",  // Tous les fichiers React/TSX dans src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

