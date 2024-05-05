/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        gray: 'inset 0 -2px 40px 2px rgba(0,0,0,.15)',
      },
    },
    fontFamily: {
      lato: ['Lato,sans-serif', 'sans-serif'],
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};