/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        gray: 'inset 20 20px 40px 20px rgba(0,0,0,.15)',
      },
    },
    fontFamily: {
      lato: ['Lato,sans-serif', 'sans-serif'],
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};