/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        ayarhep: {
          blue: '#0055aa',
          red: '#cc0000',
        },
      },
    },
  },
  plugins: [],
}