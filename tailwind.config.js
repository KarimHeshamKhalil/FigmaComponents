/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': '700px',
        'checkpoint': '930px'
      },
      fontFamily: {
        'PlusJakartaSans': ["'Plus Jakarta Sans'", '']
      }
    },
  },
  plugins: [],
}

