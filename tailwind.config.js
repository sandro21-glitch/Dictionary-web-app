/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'serif': ['ui-serif', 'Georgia'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'lob': ['Lobster', 'cursive'],
    },
    extend: {
      colors: {
        boldPurple: 'rgb(168,70,242)',
        lightPurple: 'rgb(233,208,250)',
        inputBg: 'rgb(244,244,244)',
        lightGray: 'rgb(149,149,149)',
        darkGray: 'rgb(117,117,117)',
      }
    },
  },
  plugins: [],
}
