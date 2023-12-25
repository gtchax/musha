/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: '#FFEFE8',
        earth: '#F8DFD4',
        peach: '#F8DFD4',
        brown: '#C69774',
        teal: '#637E76',
      }
    },

  },
  plugins: [],
}

