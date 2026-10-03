/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#efede8',
        ink: '#121212',
      },
      fontFamily: {
        sans: ['"Space Grotesk Variable"', '"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
}
