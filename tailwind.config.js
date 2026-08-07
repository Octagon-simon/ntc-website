/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          50: '#F5F0FF',
          100: '#EDE4FF',
          200: '#DDD6FE',
          300: '#C4B1FC',
          400: '#A78BFA',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#3B1673',
        },
        gold: {
          DEFAULT: '#A16207',
          50: '#FEF9EC',
          100: '#FCEFC7',
          300: '#F0C468',
          500: '#A16207',
          600: '#854D0E',
          700: '#713F12',
        },
        surface: '#FAF5FF',
        ink: '#4C1D95',
      },
      fontFamily: {
        serif: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
