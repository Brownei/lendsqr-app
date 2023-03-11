/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mf: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      san: [
        '"Work Sans"',
      ],
      serif: [
        '"Maven Pro"',
      ],
    },
    extend: {
      colors: {
        lime: '#39CDCC',
        lightPurple: '#DF18FF',
        lightBlue: '#5718FF',
        lightOrange: '#F55F44',
        lightPink: '#FF3366',
        lightGray: 'rgba(84, 95, 125, 0.15)',
        lightYellow: '#E9B200',
        lightGreen: '#39CD62',
        darkGray: '#213F7D',
        red: '#E4033B',
      }
    },
  },
  plugins: [],
}