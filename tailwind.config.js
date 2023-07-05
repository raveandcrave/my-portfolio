/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        header: 'auto 1fr',
      },
      colors: {
        cyclamen: '#f06c9b',
        'black-custom': '#020402',
      },
      boxShadow: {
        button: '3px 3px 0 0',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
