/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'primary-dark': '#28122a',
      primary: '#39193c',
      'primary-light': '#614763',

      'secoundary-dark': '#d76d8b',
      secoundary: '#a63d5a',
      'secoundary-light': '#f1799a',

      white: '#fff',
      black: '#000',

      'clr-main': '#dbdadb',
      'clr-light': '#ffffff',
      'clr-dark': '#b7b6b7',
    },
  },
  plugins: [],
};
