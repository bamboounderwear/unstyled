/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.html",
    "./partials/**/*.hbs"
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'brockmann': ['Brockmann', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}