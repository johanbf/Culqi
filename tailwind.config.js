/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors: {
      moradQulqi: '#763383',
      white: '#ffffff',
      black: '#000000',
      gray: '#b0b0b0',
      green: '#00a19b',
      grayCulqi: '#f4f5f6',
      orange: '#EB6F25',
      transparent: 'transparent'
    },
    extend: {},
  },
  plugins: [],
}

