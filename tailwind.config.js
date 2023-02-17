/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fff',
        'violet': '#5C43A9',
        'green': '#01E7B8',
        'midnight': '#003471',
        'blue': '#0052D5',
        'lime': '#F4EDE0',
        'black': '#000',
      },
    },
  },
  plugins: [],
}