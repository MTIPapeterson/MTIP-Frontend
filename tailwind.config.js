/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'md': '900px',
    },
    extend: {
        fontFamily: {
          satoshi: ['Satoshi', 'sans-serif'],
          satoshiItalic: ['SatoshiItalic', 'sans-serif']
        },
        colors: {
          'mt-night': "#101112",
          'mt-blue': {
            'dark': '#0978FF',
            'light': '#EEF7FF',
          },
          'mt-yellow': {
            'dark': '#FFB600',
            'light': '#FFFEF0',
          },
        },
        backgroundImage : {
          'topoMap' : "url('/src/assets/icons/topo-bg3.png')"
        }
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');

    },
    require('daisyui'),
],
};
