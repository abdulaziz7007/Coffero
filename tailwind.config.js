/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f5',
          100: '#f8eeea',
          200: '#eddcd4',
          300: '#ddc1b4',
          400: '#c89d8c',
          500: '#b47b68',
          600: '#9b604e',
          700: '#814c3e',
          800: '#6c4035',
          900: '#5a372f',
          950: '#301b17',
        }
      }
    },
  },
  plugins: [],
}