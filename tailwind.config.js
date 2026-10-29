/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B5BDB',
          dark: '#1C3AA9',
          light: '#4C6EF5',
        },
        navy: '#0D1B4B',
        accent: '#4C6EF5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}
