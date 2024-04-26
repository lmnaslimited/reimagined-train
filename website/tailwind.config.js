/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
    },
      fontFamily: {
        sans: ['Montserrat', ..._fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cals:[ 'Cal Sans,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'th-primary': 'var(--color-primary)',
        'th-secondary': 'var(--color-secondary)',
        'th-tertiary': 'var(--color-tertiary)',
        'th-quaternary':'var(--color-quaternary)',
        'th-quinary':'var(--color-quinary)',
        'th-bg-primary':'var(--color-background-primary)',
        'th-bg-secondary':'var(--color-background-secondary)',
        'th-border-primary':'var(--color-border-primary)',
        'th-border-secondary':'var(--color-border-secondary)',
        'th-colormode':'var(--color-mode)',
        'th-textprimary':'var(--color-text-primary)',
        'th-textsecondary':'var(--color-text-secondary)',
        'th-texttertiary':'var(--color-text-tertiary)',
        'th-textquaternary':'var(--color-text-quaternary)',
        'th-textquinary':'var(--color-text-quinary)',
        'th-textsenary':'var(--color-text-senary)',
        'th-pink':'var(--color-pink)',
        'th-yellow':'var(--color-yellow)',
        'th-green':'var(--color-green)',
      },
    },
  },
  plugins: [],
}