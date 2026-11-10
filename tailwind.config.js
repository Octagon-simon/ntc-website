/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // forest green taken from the chapel crest (#02483E)
        primary: {
          DEFAULT: '#02483E',
          50: '#F3F9F7',
          100: '#E3F0EC',
          200: '#C6E0D9',
          300: '#96C2B7',
          400: '#5C9B8F',
          500: '#1B7265',
          600: '#02483E',
          700: '#013B33',
          800: '#013028',
          900: '#02221C',
        },
        // old gold from the crest's page line (#CD9D2D)
        gold: {
          DEFAULT: '#CD9D2D',
          50: '#FCF7E7',
          100: '#F8EDCB',
          200: '#F1DCA3',
          300: '#E5C474',
          400: '#D9AE4A',
          500: '#CD9D2D',
          600: '#8F680E',
          700: '#6F520D',
          800: '#55400B',
        },
        surface: '#F7F9F7',
        ink: '#182420',
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
