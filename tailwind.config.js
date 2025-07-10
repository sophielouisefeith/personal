/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f7f8f7',
          100: '#e8ebe8',
          200: '#d1d8d1',
          300: '#b0bfb0',
          400: '#8a9f8a',
          500: '#6B8F7E',
          600: '#5a7a68',
          700: '#4a6556',
          800: '#3e5347',
          900: '#34463c',
        },
      },
      keyframes: {
        spiralSpin: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.05)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '75%': { transform: 'rotate(270deg) scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        spiralSpin: 'spiralSpin 8s ease-in-out infinite',
        fadeIn: 'fadeIn 500ms ease-out',
        fadeInUp: 'fadeInUp 1000ms ease-out',
      },
    },
  },
  plugins: [],
}